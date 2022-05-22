import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'

import 'simplebar/src/simplebar.css'

import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

import { SettingsProvider } from '@contexts/settings'
import { CollapseDrawerProvider } from '@contexts/collapse-drawer'

import { App } from './app/app'
import { RequestProvider } from './contexts/request'

function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById('root')!)
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RequestProvider>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CollapseDrawerProvider>
          </SettingsProvider>
        </RequestProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}

bootstrap()
