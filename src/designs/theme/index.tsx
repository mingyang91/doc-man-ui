import { useMemo, ReactNode } from 'react'
import { zhCN } from '@mui/material/locale'
import {
  CssBaseline,
  createTheme,
  ThemeOptions,
  GlobalStyles,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material'

// hooks

//
import { useSettings } from 'ctx/settings'

import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { createCSSVars } from './util'


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

  const cssVarsStyle = useMemo(() => createCSSVars(theme), [theme])

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={cssVarsStyle} />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
