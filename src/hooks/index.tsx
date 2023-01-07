import { PropsWithChildren } from 'react'
// Providers
import DeviceInfoProvider from './deviceInfo'

const AppProvider = ({ children }: PropsWithChildren) => {
  return <DeviceInfoProvider>{children}</DeviceInfoProvider>
}

export default AppProvider
