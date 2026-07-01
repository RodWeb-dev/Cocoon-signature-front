# Cocoon-Signature - Front

## Le projet

Site e-commerce de **Cocoon-Signature**, atelier de 3 personnes dans la Loire (42), spécialisé dans le mobilier artisanal en bois de fabrication française en petites séries.

Domaine : `cocoon-signature.fr`

### Architecture

Architecture découplée front / back : deux dépôts Git indépendants communicant via une API REST.

```txt
[Navigateur]
     | HTTPS
     v
[Traefik - reverse proxy]
     |-- cocoon-signature.fr      --> [Nuxt / Node.js SSR]
     |                                       | HTTP interne Docker
     |                                       v
     |-- api.cocoon-signature.fr  --> [PHP API REST]
     |                                       |
     |                             [MariaDB] [Odoo Cloud] [Brevo / PayPlug]
     |
     +-- admin.cocoon-signature.fr --> [Interface admin - Tailscale]
```

**Regle critique** : le back PHP n'est jamais exposé publiquement. Le front appelle l'API via `http://cocoon-back:80` (réseau Docker interne, variable `NUXT_API_URL`). Cette variable doit rester côté serveur uniquement - ne jamais utiliser `.public.`.

### Stack globale

| Couche | Technologie |
| --- | --- |
| Frontend | Nuxt.js (Vue 3 + SSR) 4.4.6 |
| Backend | PHP 8.4 (API REST sans framework) |
| Base de données | MariaDB 11 |
| Emails | Brevo (prod) / Mailpit (dev) |
| Paiement | PayPlug |
| ERP | Odoo Cloud (XML-RPC / JSON-RPC) |
| Conteneurisation | Docker / Docker Compose |
| Reverse proxy | Traefik 3.6 |
| CI/CD | GitLab CI |

### Environnements

| Env | Hôte | Déclenchement |
| --- | --- | --- |
| Dev local | rddev / rdserv (Fedora 44) | branches feature/fix |
| Staging | rwd-test OVH (135.125.103.55) | merge sur `develop` (auto) |
| Production | rwd-prod-01 OVH (135.125.103.3) | merge sur `main` (manuel) |

### Pipeline CI/CD

```txt
[Dev local]  -->  push branche  -->  [GitLab CI] tests + build
                                           |
                                           +-- [Staging]  (auto sur develop)
                                           |
                                           +-- [Production]  (manuel sur main)
```

Stages : `test` (lint + SAST), `secret-detection`, `build` (image Docker), `deploy`.

---

## Frontend Nuxt

### Prérequis

- Docker et Docker Compose
- Réseau Docker `cocoon_network` créé (`docker network create cocoon_network`)
- Infrastructure Traefik lancée (`infra/docker-compose.yml`)
- Back PHP lancé (`back/docker-compose.yml`) - requis pour les appels API

### Variables d'environnement

Le fichier `.env` n'est pas versionné. Variables utilisées par `docker-compose.yml` :

```txt
NUXT_API_URL=http://cocoon-back:80
NODE_ENV=development
```

`NUXT_API_URL` est passée au conteneur Nuxt et consommée via `useRuntimeConfig().apiUrl` côté serveur uniquement. Elle ne doit jamais apparaitre dans `runtimeConfig.public`.

### Lancement en dev

```bash
# Depuis le dossier front/
docker compose up -d
```

Le front est accessible sur `http://cocoon-signature.test` (entrée `/etc/hosts` requise).

Pour installer les dépendances dans le conteneur (si nécessaire) :

```bash
docker exec cocoon-front npm install
```

### Structure du code

```txt
src/
+-- nuxt.config.ts         Configuration : modules, runtimeConfig, i18n, CSS, colorMode
+-- app.config.ts          Nuxt UI : icones carbon, couleurs lightwood/darkwood
+-- package.json
+-- i18n/locales/
|   +-- fr.json            Toutes les cles (api.*, home.*, aria.*, alt.*)
|   +-- en.json            Stub (a completer)
+-- server/api/
|   +-- [...].ts           Proxy catch-all : forward /api/* vers cocoon-back
+-- app/
    +-- app.vue            NuxtRouteAnnouncer + NuxtLayout + NuxtPage
    +-- assets/css/
    |   +-- fonts.css      @font-face : Autography, Bellerose, CaviarDreams, Lavinia
    |   +-- variables.css  CSS custom properties (couleurs, typographie)
    |   +-- main.css       Reset et styles globaux
    +-- layouts/
    |   +-- default.vue    JSON-LD Organization + AppHeader + AppNav + FlashMessage + AppFooter
    +-- pages/
    |   +-- index.vue      Stub page d'accueil
    +-- components/
    |   +-- layout/
    |   |   +-- AppHeader.vue    Header sticky (burger, logo, AppActions)
    |   |   +-- AppActions.vue   Icones panier, compte, recherche
    |   |   +-- AppNav.vue       Navigation principale (drawer mobile)
    |   |   +-- AppFooter.vue    Pied de page
    |   |   +-- AppNewsletter.vue Bloc newsletter (dans footer)
    |   |   +-- BrandContact.vue  Bloc coordonnees artisan (dans footer)
    |   +-- ui/
    |       +-- FlashMessage.vue  Messages flash (success/warning/error)
    +-- plugins/
    |   +-- auth.ts        Plugin SSR : refresh token au demarrage, setState auth_token
    +-- composables/
        +-- useApi.ts       Wrapper $fetch : injection JWT, baseURL SSR/client, reset 401
        +-- useBreakpoints.ts Etats reactifs mobile/tablet/desktop via matchMedia
        +-- useFlash.ts     Etat global flash message
        +-- useMenuState.ts Etat ouverture nav/cart/user
```

### Proxy API

Le fichier `server/api/[...].ts` intercepte toutes les requetes `/api/*` côté client et les relaie vers le back PHP. Il transmet les headers `Authorization`, `Content-Type`, `Cookie` et propage les `Set-Cookie` (nécessaire pour la rotation du cookie `refresh_token`).

Cela permet à `useApi.ts` d'utiliser `/api` comme baseURL côté client sans déclencher de CORS.

### Composables

**`useApi.ts`**

- `baseURL` : `config.apiUrl` côté SSR, `/api` côté client
- Injecte `Authorization: Bearer <token>` si `auth_token` est défini
- Sur réponse 401 : remet `auth_token` a `null`

**`useBreakpoints.ts`**

- `mobile` (< 768px), `tablet` (768-1199px), `desktop` (>= 1200px)
- SSR-safe via `useState` + `matchMedia` dans `onMounted`

**`useFlash.ts`**

- `flash: { type: 'success'|'warning'|'error', message: string } | null`
- `setFlash(type, message)` pour declencher

**`useMenuState.ts`**

- `nav`, `cart`, `user` (booléens) + `toggleNav/toggleCart/toggleUser`

### Plugin auth

`plugins/auth.ts` s'exécute côté serveur uniquement au démarrage de chaque requete SSR :

1. Lit le cookie de la requete entrante
2. Appelle `POST /auth/refresh` sur le back PHP
3. Stocke l'`access_token` dans `useState('auth_token')`
4. En cas d'échec : `auth_token = null` sans erreur

### i18n

Stratégie `prefix_except_default` : français sans préfixe, anglais sous `/en`.

Les messages de l'API sont des clés i18n (ex. `api.login`, `api.error_401`). Le front traduit les clés reçues dans `error` et `message` via `$t(key, params)`. Il n'y a jamais de texte en dur dans les réponses API.

### Typographie et design

Quatre polices chargées via `@font-face` depuis `/public/fonts/` :

- **Autography** : citations
- **Bellerose** : interface
- **CaviarDreams** : corps de texte
- **Lavinia** : titres

Couleurs personnalisées via CSS custom properties : `--primary` (lightwood), `--secondary` (darkwood).

Le mode sombre est désactivé : `colorMode` est forcé sur `light`.

### Dependances

| Package | Version | Usage |
| --- | --- | --- |
| `nuxt` | ^4.4.6 | Framework SSR |
| `@nuxt/ui` | ^4.9.0 | Composants UI + Tailwind v4 |
| `@nuxtjs/i18n` | ^10.4.0 | Internationalisation fr/en |
| `@nuxtjs/color-mode` | ^4.0.1 | Gestion du theme |
| `@iconify-json/carbon` | ^1.2.23 | Collection d'icones |
| `@tiptap/*` | ^3.27.1 | Editeur riche (interface admin) |
| `tailwindcss` | ^4.3.1 | CSS utility-first |
| `typescript` | ^6.0.3 | TypeScript |
| `zod` | ^4.4.3 | Validation de schemas |

### Conventions de code

- `PascalCase` : composants Vue, classes
- `camelCase` : methodes, props, variables
- `kebab-case` : classes HTML/CSS
- Commentaires en anglais
- Tous les appels API SSR via `useFetch`/`useAsyncData` avec `useRuntimeConfig().apiUrl` pour le contenu dans le HTML initial (SEO)
