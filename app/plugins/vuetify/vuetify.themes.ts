import type { createVuetify, ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#fff',
    // surface: '#fff',
    // 'primary-lighten-1': '#169FDB',
    primary: '#F47920',
    // 'primary-darken-1': '#154976',
    secondary: colors.blueGrey.base,
    accent: colors.deepPurple.base,

    error: colors.red.base,
    info: colors.blue.base,
    success: colors.green.base,
    warning: colors.amber.base,
  },
  variables: {
    // here you can overwrite vuetifys css variables
    // 'border-color': '#000000',
  },
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#F47920',
    secondary: colors.blueGrey.base,
    accent: colors.deepPurple.base,
    error: colors.red.base,
    info: colors.blue.base,
    success: colors.green.base,
    warning: colors.amber.base,
  },
}

export const theme: NonNullable<Parameters<typeof createVuetify>[0]>['theme'] = {
  defaultTheme: 'dark',
  // create automatic lighten/darken variations if needed/wanted
  variations: {
    colors: ['primary', 'secondary'],
    lighten: 1,
    darken: 2,
  },
  themes: {
    light,
    dark,
  },
}
