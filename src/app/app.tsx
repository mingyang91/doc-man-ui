import { SnackbarProvider } from 'notistack'
import { Slide } from '@mui/material'

import { ScreenProgressBarContainer } from '@/components/screen-progress-bar'
import { MotionLazyContainer } from '@/components/animate'
import { DesktopOrMobileProvider } from '@/contexts/desktop-or-mobile'

import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'

import { ThemeSettings } from '@components/settings'
import { ScrollToTop } from '@components/scroll-to-top'

import { ThemeProvider } from '@common/theme'

import { AppRouter } from './routes'
import { RoutesProvider } from './routes/context'

export const App = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      TransitionComponent={Slide}
    >
      <RoutesProvider>
        <MotionLazyContainer>
          <ThemeProvider>
            <ThemeSettings>
              <DesktopOrMobileProvider>
                <ScreenProgressBarContainer>
                  <ScrollToTop />
                  <AuthProvider>
                    <UserProvider>
                      <AppRouter />
                    </UserProvider>
                  </AuthProvider>
                </ScreenProgressBarContainer>
              </DesktopOrMobileProvider>
            </ThemeSettings>
          </ThemeProvider>
        </MotionLazyContainer>
      </RoutesProvider>
    </SnackbarProvider>
  )
}
