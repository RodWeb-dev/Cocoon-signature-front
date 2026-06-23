// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    server: {
      allowedHosts: ['cocoon-signature.test']
    }
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  runtimeConfig: {
    apiUrl: '',
  },

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'en', language: 'en-GB', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
  },
})
