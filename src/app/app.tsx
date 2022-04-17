import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyle } from '@components/global-style'
import { themeConfig } from '@common/theme'
import { AuthProvider } from '@contexts/auth'
import { UserProvider } from '@contexts/user'

import { SHOULD_SHOW_REACT_QUERY_DEVTOOL } from '../common/const'

import { SignIn } from './views/sign-in'

export const App = () => {
  return (
    <ChakraProvider theme={themeConfig}>
      {SHOULD_SHOW_REACT_QUERY_DEVTOOL ? <ReactQueryDevtools /> : null}
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}
