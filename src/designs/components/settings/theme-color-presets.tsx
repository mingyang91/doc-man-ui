import { ReactNode, useMemo } from 'react'
// @mui
import {
  alpha,
  ThemeProvider,
  createTheme,
  useTheme,
} from '@mui/material/styles'

// hooks
import componentsOverride from 'd/theme/overrides'

import { useSettings } from 'ctx/settings'

//

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode
}

export default function ThemeColorPresets({ children }: Props) {
  const defaultTheme = useTheme()

  const { setColor } = useSettings()

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 0 1px 0 ${alpha(setColor.main, 0.5)}`,
      },
    }),
    [setColor, defaultTheme]
  )

  const theme = createTheme(themeOptions)

  theme.components = componentsOverride(theme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
