// @mui
import { styled } from '@mui/material/styles'
import { Box, Stack, AppBar, Toolbar } from '@mui/material'
import { RiMenuFill } from 'react-icons/ri'

import useOffSetTop from '@hooks/use-offset-top'
import useResponsive from '@hooks/use-responsive'
import cssStyles from '@utils/css-styles'
import { HEADER, NAVBAR } from '@/config'
// components
import Logo from '@components/logo'
import Iconify from '@components/iconify'
import { IconButtonAnimate } from '@components/animate'

import { SearchBar } from './components/search-bar'
import { AccountPopover } from './components/account-popover'
import { NavBreadcrumb } from './components/nav-breadcrumb'

// ----------------------------------------------------------------------

type RootStyleProps = {
  isCollapse: boolean
  isOffset: boolean
  isVerticalLayout: boolean
}

const RootStyle = styled(AppBar, {
  shouldForwardProp: prop =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'isVerticalLayout',
})<RootStyleProps>(({ isCollapse, isOffset, isVerticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(isVerticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}))

// ----------------------------------------------------------------------

type DashboardHeaderProps = {
  onOpenSidebar: VoidFunction
  isCollapse?: boolean
  isVerticalLayout?: boolean
}

export const DashboardHeader = ({
  onOpenSidebar,
  isCollapse = false,
  isVerticalLayout = false,
}: DashboardHeaderProps) => {
  const isOffset =
    useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !isVerticalLayout

  const isDesktop = useResponsive('up', 'lg')

  return (
    <RootStyle
      isCollapse={isCollapse}
      isOffset={isOffset}
      isVerticalLayout={isVerticalLayout}
    >
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        {isDesktop && isVerticalLayout && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <IconButtonAnimate
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: 'text.primary' }}
          >
            <Iconify icon={RiMenuFill} />
          </IconButtonAnimate>
        )}

        <SearchBar />
        <Box sx={{ flexGrow: 1, marginInlineStart: '20px' }}>
          <NavBreadcrumb />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  )
}