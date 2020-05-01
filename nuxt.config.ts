import type { NuxtConfig } from '@nuxt/types'
import i18nLocales from './utils/loadI18nLocales'

const config: NuxtConfig = {

  target: 'static',

  env: {
    BASE_URL: process.env.NODE_ENV === 'production' ? '/cv/' : '/'
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'CV - CLEMENT Florent',
    title: 'cv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/envPlugin.ts'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    base: process.env.NODE_ENV === 'production' ? '/cv/' : '/'
  },

  i18n: {
    baseUrl: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    detectBrowserLanguage: {
      alwaysRedirect: true
    },
    strategy: 'no_prefix',
    defaultLocale: 'fr-FR',
    locales: i18nLocales,
    lazy: true,
    langDir: 'lang/'
  },

  /*
   ** Sitemap config
   */
  sitemap: {
    hostname: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    trailingSlash: true,
    i18n: true
  }
}

export default config
