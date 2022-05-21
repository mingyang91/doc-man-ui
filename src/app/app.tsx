import { SnackbarProvider } from 'notistack'

import { ThemeProvider } from '@common/theme'
import { ProgressBarStyle } from '@components/progress-bar'
import { ThemeSettings } from '@components/settings'
import { ScrollToTop } from '@components/scroll-to-top'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'
import { MotionLazyContainer } from '@/components/animate'
import { DesktopOrMobileProvider } from '@/contexts/desktop-or-mobile'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <MotionLazyContainer>
        <ThemeProvider>
          <ThemeSettings>
            <DesktopOrMobileProvider>
              <ProgressBarStyle />
              <ScrollToTop />
              <AuthProvider>
                <UserProvider>
                  <AppRouter />
                </UserProvider>
              </AuthProvider>
            </DesktopOrMobileProvider>
          </ThemeSettings>
        </ThemeProvider>
      </MotionLazyContainer>
    </SnackbarProvider>
  )
}
