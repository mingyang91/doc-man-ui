import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { useAtomValue } from 'jotai'

import { GlobalStyle } from '@components/global-style'
import { themeConfig } from '@common/theme'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'
import { RequireAuthModule } from '@app/modules/auth'

import { SHOULD_SHOW_REACT_QUERY_DEVTOOL } from '../common/const'

import { routeRegister } from './routes/route-register'
import { routesAtom } from './routes'

export const App = () => {
  const routes = useAtomValue(routesAtom)
  const { requireAuth, free } = routeRegister(routes)

  return (
    <HelmetProvider>
      <ChakraProvider theme={themeConfig}>
        {SHOULD_SHOW_REACT_QUERY_DEVTOOL ? <ReactQueryDevtools /> : null}
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <UserProvider>
              <Routes>
                {free.map(element => element)}
                <Route element={<RequireAuthModule />}>
                  {requireAuth.map(element => element)}
                </Route>
              </Routes>
            </UserProvider>
          </AuthProvider>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  )
}
