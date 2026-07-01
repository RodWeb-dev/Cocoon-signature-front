export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  vite: {
    server: {
      allowedHosts: ['cocoon-signature.test']
    }
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/color-mode'],

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

  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/variables.css',
    '~/assets/css/main.css'
  ],

  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'neutral'
      ]
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light'
  }
})
