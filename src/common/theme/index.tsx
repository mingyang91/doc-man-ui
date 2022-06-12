import { useMemo, ReactNode } from 'react'

import { zhCN } from '@mui/material/locale'
import {
  CssBaseline,
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'

// hooks
import { useSettings } from '@contexts/settings'

//
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const { themeMode, themeDirection } = useSettings()

  const isLight = themeMode === 'light'

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: {
        borderRadius: 8,
      },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  )

  const theme = createTheme(themeOptions, zhCN)

  theme.components = componentsOverride(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
