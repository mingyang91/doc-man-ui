import { ThemeProvider } from '@common/theme'
import { ProgressBarStyle } from '@components/progress-bar'
import { ThemeSettings } from '@components/settings'
import { ScrollToTop } from '@components/scroll-to-top'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'
import { MotionLazyContainer } from '@/components/animate'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <ProgressBarStyle />
          <ScrollToTop />
          <AuthProvider>
            <UserProvider>
              <AppRouter />
            </UserProvider>
          </AuthProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  )
}
