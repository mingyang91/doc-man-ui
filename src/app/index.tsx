import { AuthProvider } from '@/providers/auth'

import { MotionLazyContainer } from 'd/components/animate'
import { ScreenProgressBarContainer } from 'd/components/screen-progress-bar'
import { ScrollToTop } from 'd/components/scroll-to-top'
import { ThemeSettings } from 'd/components/settings'
import { ThemeProvider } from 'd/theme'

import { DesktopOrMobileProvider } from 'ctx/desktop-or-mobile'
import { ModalProvider } from 'ctx/modal'

import { MessageProvider } from 'h/use-snackbar-message'

import { EnumDataProvider } from './providers/enum-data'
import { AppRouter } from './routes'
import { RoutesProvider } from './routes/context'

import { ConfirmProvider } from '@@/confirm'

export const App = () => {
  return (
    <MessageProvider>
      <RoutesProvider>
        <MotionLazyContainer>
          <ThemeProvider>
            <ThemeSettings>
              <DesktopOrMobileProvider>
                <ScreenProgressBarContainer>
                  <ConfirmProvider>
                    <ModalProvider>
                      <ScrollToTop />
                      <AuthProvider>
                        <EnumDataProvider>
                          <AppRouter />
                        </EnumDataProvider>
                      </AuthProvider>
                    </ModalProvider>
                  </ConfirmProvider>
                </ScreenProgressBarContainer>
              </DesktopOrMobileProvider>
            </ThemeSettings>
          </ThemeProvider>
        </MotionLazyContainer>
      </RoutesProvider>
    </MessageProvider>
  )
}
