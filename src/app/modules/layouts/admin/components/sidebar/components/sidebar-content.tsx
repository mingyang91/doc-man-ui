import { Box, Stack } from '@chakra-ui/react'

import { MenuConfig } from '@app/routes/create-menus'

import { useMenuAndRoutes } from '../../menu-and-routes'

import { NavItem } from './nav-item'

export const SidebarContent = () => {
  const { menus } = useMenuAndRoutes()

  const renderNavItems = (menus: MenuConfig[]) => {
    return menus.map(menu => {
      const children = menu.submodule && renderNavItems(menu.submodule)
      return (
        <NavItem key={menu.title} menu={menu}>
          {children}
        </NavItem>
      )
    })
  }

  return (
    <Stack direction="column" mt="16px" mb="40px">
      <Box>{renderNavItems(menus)}</Box>
    </Stack>
  )
}
