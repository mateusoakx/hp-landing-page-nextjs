import { createTheme } from '@mui/material/styles'
import { breakpoints } from './breakpoints'

export const theme = (mode: 'dark' | 'light') =>
  createTheme({
    breakpoints,
    palette: {
      common: {
        black: '#101010',
        ...(mode === 'light'
          ? {
              base: '#ffffff',
              baseContrast: '#101010',
            }
          : {
              base: '#101010',
              baseContrast: '#ffffff',
            }),
      },
      primary: {
        light: '#4FACD7',
        main: '#0E91CE',
        dark: '#1D3F4F',
      },
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'xl',
        },
      },
      MuiButton: {
        styleOverrides: {
          sizeLarge: {
            paddingBlock: '20px',
          },
          sizeMedium: {
            paddingBlock: '16px',
          },
          sizeSmall: {
            paddingBlock: '14px',
          },
        },
      },
    },
    custom: {
      headerHeight: 80,
      ...(mode === 'light'
        ? {
            root: {
              'base-color': '#ffffff',
              'main-color': '#101010',
              'main-color-contrast': '#ffffff',
              'primary-color': '#0e91ce',
              'primary-color-contrast': '#101010',
            },
          }
        : {
            root: {
              'base-color': '#101010',
              'main-color': '#ffffff',
              'main-color-contrast': '#101010',
              'primary-color': '#0e91ce',
              'primary-color-contrast': '#101010',
            },
          }),
    },
  })
