import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      headerHeight: number
      root: {
        'base-color': string
        'main-color': string
        'main-color-contrast': string
        'primary-color': string
        'primary-color-contrast': string
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom: {
      headerHeight: number
      root: {
        'base-color': string
        'main-color': string
        'main-color-contrast': string
        'primary-color': string
        'primary-color-contrast': string
      }
    }
  }
}
