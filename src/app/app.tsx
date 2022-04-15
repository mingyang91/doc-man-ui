import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/types/devtools'
import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyle } from '@components/global-style'
import { themeConfig } from '@common/theme'

import { SHOULD_SHOW_REACT_QUERY_DEVTOOL } from '../common/const'

import { SignIn } from './modules/auth/pages/sign-in'

export const App = () => {
  return (
    <ChakraProvider theme={themeConfig}>
      {SHOULD_SHOW_REACT_QUERY_DEVTOOL ? <ReactQueryDevtools /> : null}
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
