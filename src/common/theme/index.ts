import { extendTheme } from '@chakra-ui/react'

import { badgeStyles } from './components/badge'
import { buttonStyles } from './components/button'
import { drawerStyles } from './components/drawer'
import { CardContainerComponent } from './additions/card/card-container'
import { CardBodyComponent } from './additions/card/card-body'
import { CardHeaderComponent } from './additions/card/card-header'
import { MainPanelComponent } from './additions/layout/main-panel'
import { PanelContentComponent } from './additions/layout/panel-content'
import { PanelContainerComponent } from './additions/layout/panel-container'
import foundations from './foundations'
import { globalStyles } from './styles'
const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

export const theme = {
  direction,
  ...foundations,
  config,
}

export const themeConfig = extendTheme(
  theme,
  globalStyles,
  buttonStyles,
  badgeStyles,
  drawerStyles,
  CardContainerComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
)
