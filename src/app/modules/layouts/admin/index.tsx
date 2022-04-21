import { PropsWithChildren, ReactNode, useState } from 'react'
import { Box } from '@mui/material'

import useCollapseDrawer from '@/hooks/use-collapse-drawer'
import { useSettings } from '@/contexts/settings'
import useResponsive from '@/hooks/use-responsive'
import { HEADER, NAVBAR } from '@/config'

import NavbarVertical from './components/navbar/navbar-vertical'
import NavbarHorizontal from './components/navbar/navbar-horizontal'
import { MainStyle } from './components/styled'
import { DashboardHeader } from './components/header'
import { MenuAndRoutes } from './components/menu-and-routes'

type LayoutProps = PropsWithChildren<Record<never, never>>

export const AdminLayout = ({ children }: LayoutProps) => {
  const { collapseClick, isCollapse } = useCollapseDrawer()

  const { themeLayout } = useSettings()

  const isDesktop = useResponsive('up', 'lg')

  const [open, setOpen] = useState(false)

  const isVerticalLayout = themeLayout === 'vertical'

  const render = isVerticalLayout ? (
    <>
      <DashboardHeader
        onOpenSidebar={() => setOpen(true)}
        isVerticalLayout={isVerticalLayout}
      />

      {isDesktop ? (
        <NavbarHorizontal />
      ) : (
        <NavbarVertical
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
        />
      )}

      <Box
        component="main"
        sx={{
          px: { lg: 2 },
          pt: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
          },
          pb: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
          },
        }}
      >
        {children}
      </Box>
    </>
  ) : (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader
        isCollapse={isCollapse}
        onOpenSidebar={() => setOpen(true)}
      />

      <NavbarVertical
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle collapseClick={collapseClick}>{children}</MainStyle>
    </Box>
  )

  return <MenuAndRoutes>{render}</MenuAndRoutes>
}
