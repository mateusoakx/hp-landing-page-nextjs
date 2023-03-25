import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
// Styles
import { breakpoints } from 'src/styles/breakpoints'
interface DeviceContextProps {
  isMobile: boolean
  isTablet: boolean
  isPhone: boolean
  isDesktop: boolean
}

const DeviceContext = createContext({} as DeviceContextProps)

const useDeviceInfo = () => useContext(DeviceContext)

const DeviceInfoProvider = ({ children }: PropsWithChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isPhone, setIsPhone] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

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

  if (!isPhone && !isTablet && !isMobile && !isDesktop) {
    return null
  }

  return (
    <DeviceContext.Provider value={{ isPhone, isTablet, isMobile, isDesktop }}>
      {children}
    </DeviceContext.Provider>
  )
}

export { useDeviceInfo }
export default DeviceInfoProvider
