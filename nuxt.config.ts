import { NuxtConfig } from '@nuxt/types'

const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env.${environment}.js`)
const browserBaseURL = envSet.tsukuruApiBaseUrl

const nuxtConfig : NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tsukuru-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    browserBaseURL,
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  srcDir: 'src/',

  styleResources: {
    scss: [
      '~/assets/styles/_variable.scss'
    ]
  },

  googleFonts: {
    families: {
      'M PLUS Rounded 1c': [400, 700]
    }
  },
  proxy: {
    '/api': 'http://localhost:3000'
  }
}

export default nuxtConfig
