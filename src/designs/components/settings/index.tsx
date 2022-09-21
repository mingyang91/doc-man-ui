import SettingsDrawer from './drawer'
//
import ThemeContrast from './theme-contrast'
import ThemeRtlLayout from './theme-rtl-layout'
import ThemeColorPresets from './theme-color-presets'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeRtlLayout>
          {children}
          <SettingsDrawer />
        </ThemeRtlLayout>
      </ThemeContrast>
    </ThemeColorPresets>
  )
}
