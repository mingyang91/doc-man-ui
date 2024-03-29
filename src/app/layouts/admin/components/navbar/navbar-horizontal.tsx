import { memo } from 'react'
import { styled } from '@mui/material/styles'
import { Container, AppBar } from '@mui/material'

// config
import { NavSectionHorizontal } from 'd/components/nav-section'
// components
import { HEADER } from 'd/config'

import { useMenuAndRoutes } from '../menu-and-routes/contexts'

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  const { menus } = useMenuAndRoutes()
  return (
    <RootStyle>
      <Container maxWidth={false}>
        <NavSectionHorizontal navConfig={menus} />
      </Container>
    </RootStyle>
  )
}

export default memo(NavbarHorizontal)
