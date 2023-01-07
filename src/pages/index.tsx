// Hooks
import { useDeviceInfo } from 'src/hooks/deviceInfo'
import AppProvider from 'src/hooks'

const Home = () => {
  const { isMobile } = useDeviceInfo()
  return (
    <>
      <main></main>
    </>
  )
}

const PageWithProvider = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export default PageWithProvider
