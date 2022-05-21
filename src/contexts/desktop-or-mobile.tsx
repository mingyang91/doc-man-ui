import { PropsWithChildren } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { LocalizationProvider } from '@mui/lab'
import AdapterDayjs from '@mui/lab/AdapterDayjs'

import { createContainer } from '@utils/create-container'

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </DesktopOrMobileContainer.Provider>
  )
}

export const useDesktopOrMobile = DesktopOrMobileContainer.useContainer
