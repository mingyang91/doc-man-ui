import { useMediaQuery, useTheme } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import zhCN from 'dayjs/locale/zh-cn'
import { PropsWithChildren } from 'react'

import { createContainer } from 'u/create-container'

const DesktopOrMobileContainer = createContainer(function useDesktopOrMobile() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return {
    isDesktop: matches,
  }
})

export const DesktopOrMobileProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <DesktopOrMobileContainer.Provider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={zhCN}>
        {children}
      </LocalizationProvider>
    </DesktopOrMobileContainer.Provider>
  )
}

export const useDesktopOrMobile = DesktopOrMobileContainer.useContainer
