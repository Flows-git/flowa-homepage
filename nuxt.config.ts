import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Flowa Homepage',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'Homepage von Florian Wagner' }],
      htmlAttrs: {
        lang: 'de'
      }
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify({ autoImport: true }),
    ],
  },
  build: {
    transpile: ['vuetify'],
  },
})