import { useAtomValue } from 'jotai'
import { Box, Stack } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import { routesAtom } from '@app/routes'
import { createMenus } from '@app/routes/create-menus'

import { NavItem } from './nav-item'

export const SidebarContent = () => {
  const location = useLocation()
  const routes = useAtomValue(routesAtom)
  const menus = createMenus(routes, location)

  return (
    <Stack direction="column" mb="40px">
      <Box>
        {menus.map(menu => (
          <NavItem key={menu.title} menu={menu} />
        ))}
      </Box>
    </Stack>
  )
}
