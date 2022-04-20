import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'

import { ThemeProvider } from '@common/theme'
import { ProgressBarStyle } from '@components/progress-bar'
import { ThemeSettings } from '@components/settings'
import { ScrollToTop } from '@components/scroll-to-top'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'

import { SHOULD_SHOW_REACT_QUERY_DEVTOOL } from '../common/const'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ThemeSettings>
          {SHOULD_SHOW_REACT_QUERY_DEVTOOL ? <ReactQueryDevtools /> : null}
          <ProgressBarStyle />
          <ScrollToTop />
          <AuthProvider>
            <UserProvider>
              <AppRouter />
            </UserProvider>
          </AuthProvider>
        </ThemeSettings>
      </ThemeProvider>
    </HelmetProvider>
  )
}
