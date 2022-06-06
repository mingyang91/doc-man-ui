import { useMemo, ReactNode } from 'react'
import { omit } from 'lodash-es'
import { zhCN } from '@mui/material/locale'
import {
  CssBaseline,
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
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
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  )

  const extendedThemeOptions = useMemo(
    () => ({
      colorSchemes: {
        light: {
          palette: omit(palette.light, 'gradients'),
        },
        dark: {
          palette: omit(palette.dark, 'gradients'),
        },
      },
      typography,
      breakpoints,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
      direction: themeDirection,
    }),
    [isLight, themeDirection]
  )

  const theme = createTheme(themeOptions, zhCN)

  const extendedTheme = extendTheme(extendedThemeOptions)

  theme.components = componentsOverride(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssVarsProvider theme={extendedTheme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </MUIThemeProvider>
  )
}
