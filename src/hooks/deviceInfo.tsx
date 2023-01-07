import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
//Hooks and Contexts
import useMediaQuery from '@mui/material/useMediaQuery'
// Styles
import { breakpoints } from 'src/styles/breakpoints'
import { ThemeProvider } from '@mui/material'
import { theme } from 'src/styles/theme'

type ColorSchema = 'dark' | 'light'
interface DeviceContextProps {
  isMobile: boolean
  isTablet: boolean
  isPhone: boolean
  isDesktop: boolean
  colorSchema: ColorSchema
}

const DeviceContext = createContext({} as DeviceContextProps)

const useDeviceInfo = () => useContext(DeviceContext)

const DeviceInfoProvider = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isPhone, setIsPhone] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [colorSchema, setColorSchema] = useState<ColorSchema>(
    prefersDarkMode ? 'dark' : 'light'
  )

  const handleDeviceDetect = () => {
    const { innerWidth } = window
    const {
      values: { xs, sm, md, lg, xl },
    } = breakpoints

    if ((innerWidth >= xs || innerWidth >= sm) && innerWidth < md) {
      setIsPhone(true)
      setIsTablet(false)
      setIsMobile(true)
      setIsDesktop(false)
    } else if (innerWidth >= md && innerWidth < lg) {
      setIsPhone(false)
      setIsTablet(true)
      setIsMobile(true)
      setIsDesktop(false)
    } else if (innerWidth >= lg || innerWidth >= xl) {
      setIsPhone(false)
      setIsTablet(false)
      setIsMobile(false)
      setIsDesktop(true)
    }
  }

  useEffect(() => {
    handleDeviceDetect()
    window.onresize = () => handleDeviceDetect()
  }, [])

  useEffect(() => {
    setColorSchema(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  if (!isPhone && !isTablet && !isMobile && !isDesktop) {
    return null
  }

  return (
    <DeviceContext.Provider
      value={{ isPhone, isTablet, isMobile, isDesktop, colorSchema }}
    >
      <ThemeProvider theme={theme(colorSchema)}>{children}</ThemeProvider>
    </DeviceContext.Provider>
  )
}

export { useDeviceInfo }
export default DeviceInfoProvider
