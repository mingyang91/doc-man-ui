import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'

import { GlobalStyle } from '@components/global-style'
import { themeConfig } from '@common/theme'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'

import { SHOULD_SHOW_REACT_QUERY_DEVTOOL } from '../common/const'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={themeConfig}>
        {SHOULD_SHOW_REACT_QUERY_DEVTOOL ? <ReactQueryDevtools /> : null}
        <GlobalStyle />
        <AuthProvider>
          <UserProvider>
            <AppRouter />
          </UserProvider>
        </AuthProvider>
      </ChakraProvider>
    </HelmetProvider>
  )
}
