import { createVuetify } from 'vuetify'
import { de } from 'vuetify/locale'
import { defaultProps } from './vuetify.defaults'
import { theme } from './vuetify.themes'
import { aliases } from 'vuetify/iconsets/mdi-svg'

import '~/assets/main.scss'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'de',
      messages: { de },
    },
    theme,
    defaults: defaultProps,
    icons: {
      aliases
    }
  })
  app.vueApp.use(vuetify)
})
