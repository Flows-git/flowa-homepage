import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-20',
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Florain Wagner - Softwareentwickler',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Portfolio von Florian Wagner – Spezialisiert auf moderne Webentwicklung mit Vue, Node.js und TypeScript. Jetzt Projekte entdecken!' },
        { name: 'keywords', content: 'Webentwickler, Full-Stack, Vue, Nuxt, Node.js, TypeScript, Portfolio, Softwareentwickler, Florian Wagner' },
        { name: 'author', content: 'Florian Wagner' },
        { name: 'og:title', content: 'Florian Wagner - Entwickler Portfolio' },
        { name: 'og:description', content: 'Softwareentwickler mit Fokus auf moderne Technologien – jetzt mehr erfahren!' },
        { name: 'og:image', content: 'https://flowa.me/flowa-logo.png' },
        { name: 'og:url', content: 'https://flowa.me' },
        { name: 'og:type', content: 'website' },
      ],
      htmlAttrs: {
        lang: 'de',
      },
      link: [
        { rel: 'canonical', href: 'https://flowa.me' },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },

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
})
