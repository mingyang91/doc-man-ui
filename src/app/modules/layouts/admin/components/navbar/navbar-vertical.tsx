import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// @mui
import { styled, useTheme } from '@mui/material/styles'
import { Box, Stack, Drawer } from '@mui/material'

// hooks
import ScrollBar from '@components/scrollbar'
import useResponsive from '@hooks/use-responsive'
import useCollapseDrawer from '@hooks/use-collapse-drawer'
// utils
import cssStyles from '@utils/css-styles'
import { NAVBAR } from '@/config'
// components
import Logo from '@components/logo'
import { NavSectionVertical } from '@components/nav-section'

import { useMenuAndRoutes } from '../menu-and-routes'

import NavbarAccount from './navbar-account'
import CollapseButton from './collapse-button'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}))

// ----------------------------------------------------------------------

type Props = {
  isOpenSidebar: boolean
  onCloseSidebar: VoidFunction
}

export default function NavbarVertical({
  isOpenSidebar,
  onCloseSidebar,
}: Props) {
  const theme = useTheme()

  const { pathname } = useLocation()

  const isDesktop = useResponsive('up', 'lg')

  const { menus } = useMenuAndRoutes()

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer()

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderContent = (
    <ScrollBar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center' }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo isCollapse={isCollapse} />

          {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )}
        </Stack>

        <NavbarAccount isCollapse={isCollapse} />
      </Stack>

      <NavSectionVertical navConfig={menus} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 1 }} />
    </ScrollBar>
  )

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'dashed',
              bgcolor: 'background.default',
              transition: theme =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur(),
                boxShadow: theme => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  )
}
