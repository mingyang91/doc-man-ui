import { extendTheme } from '@chakra-ui/react'

import { badgeStyles } from './components/badge'
import { buttonStyles } from './components/button'
import { drawerStyles } from './components/drawer'
import { CardComponent } from './additions/card/Card'
import { CardBodyComponent } from './additions/card/CardBody'
import { CardHeaderComponent } from './additions/card/CardHeader'
import { MainPanelComponent } from './additions/layout/MainPanel'
import { PanelContentComponent } from './additions/layout/PanelContent'
import { PanelContainerComponent } from './additions/layout/PanelContainer'
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
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
)
