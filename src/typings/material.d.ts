import '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      custom: {
        base: string
        main: string
        mainContrast: string
        primaryContrast: string
      }
    }
  }
}
declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    custom: {
      base: string
      main: string
      mainContrast: string
      primaryContrast: string
    }
  }
}
