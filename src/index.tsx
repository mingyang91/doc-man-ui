import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { enableMapSet } from 'immer'

import 'simplebar/src/simplebar.css'

import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import { App } from '@/index'

import { CollapseDrawerProvider } from 'ctx/collapse-drawer'
import { SettingsProvider } from 'ctx/settings'

import reportWebVitals from './reportWebVitals'

// import { FetchProvider } from 'ctx/fetcher'

function bootstrap() {
  enableMapSet()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById('root')!)

  const queryClient = new QueryClient()

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CollapseDrawerProvider>
          </SettingsProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}

bootstrap()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
