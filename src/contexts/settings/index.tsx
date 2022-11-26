/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'

import {
  ThemeMode,
  ThemeLayout,
  ThemeContrast,
  ThemeDirection,
  ThemeColorPresets,
  SettingsContextProps,
  SettingsValueProps,
} from 'd/components/settings/type'
import { defaultSettings } from 'd/config'

import { createContainer } from 'u/create-container'

import getColorPresets, { colorPresets, defaultPreset } from './color-presets'

// @type

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},

  // Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},

  // Contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},

  // Color
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  // Stretch
  onToggleStretch: () => {},

  // Reset
  onResetSetting: () => {},
}

const SettingsContainer = createContainer(function useSettingsContainer() {
  const [settings, setSettings] = useLocalStorageState<SettingsValueProps>(
    'settings',
    {
      defaultValue: {
        themeMode: initialState.themeMode,
        themeLayout: initialState.themeLayout,
        themeStretch: initialState.themeStretch,
        themeContrast: initialState.themeContrast,
        themeDirection: initialState.themeDirection,
        themeColorPresets: initialState.themeColorPresets,
      },
    }
  )
  const isArabic = localStorage.getItem('i18nextLng') === 'ar'

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic])

  // Mode

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings?.themeMode === 'light' ? 'dark' : 'light',
    })
  }

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: (event.target as HTMLInputElement).value as ThemeMode,
    })
  }

  // Direction

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings?.themeDirection === 'rtl' ? 'ltr' : 'rtl',
    })
  }

  const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: (event.target as HTMLInputElement)
        .value as ThemeDirection,
    })
  }

  const onChangeDirectionByLang = (lang: string) => {
    setSettings({
      ...settings,
      themeDirection: lang === 'ar' ? 'rtl' : 'ltr',
    })
  }

  // Layout

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings?.themeLayout === 'vertical' ? 'horizontal' : 'vertical',
    })
  }

  const onChangeLayout = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeLayout: (event.target as HTMLInputElement).value as ThemeLayout,
    })
  }

  // Contrast

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings?.themeContrast === 'default' ? 'bold' : 'default',
    })
  }

  const onChangeContrast = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeContrast: (event.target as HTMLInputElement).value as ThemeContrast,
    })
  }

  // Color

  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: (event.target as HTMLInputElement)
        .value as ThemeColorPresets,
    })
  }

  // Stretch

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings?.themeStretch,
    })
  }

  // Reset

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    })
  }

  return {
    ...settings,

    // Mode
    onToggleMode,
    onChangeMode,

    // Direction
    onToggleDirection,
    onChangeDirection,
    onChangeDirectionByLang,

    // Layout
    onToggleLayout,
    onChangeLayout,

    // Contrast
    onChangeContrast,
    onToggleContrast,

    // Stretch
    onToggleStretch,

    // Color
    onChangeColor,
    setColor: getColorPresets(settings.themeColorPresets),
    colorOption: colorPresets.map(color => ({
      name: color.name,
      value: color.main,
    })),

    // Reset
    onResetSetting,
  }
})

export const SettingsProvider = SettingsContainer.Provider

export const useSettings = SettingsContainer.useContainer
