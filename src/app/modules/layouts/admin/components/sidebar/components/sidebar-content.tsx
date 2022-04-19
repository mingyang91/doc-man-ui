import { Box, Stack } from '@chakra-ui/react'

import { useMenuAndRoutes } from '../../../contexts/menu-and-routes'

import { NavItem } from './nav-item'

export const SidebarContent = () => {
  const { menus } = useMenuAndRoutes()

  return (
    <Stack direction="column" mt="16px" mb="40px">
      <Box>
        {menus.map(menu => (
          <NavItem key={menu.title} menu={menu} />
        ))}
      </Box>
    </Stack>
  )
}
