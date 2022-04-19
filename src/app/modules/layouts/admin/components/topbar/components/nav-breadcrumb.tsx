import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react'

import { useMenuAndRoutes } from '../../menu-and-routes'

export const NavBreadcrumb = () => {
  const { activeMenus } = useMenuAndRoutes()
  const mainText = useColorModeValue('gray.700', 'gray.200')
  const secondaryText = useColorModeValue('gray.400', 'gray.200')

  return (
    <Breadcrumb>
      <BreadcrumbItem color={mainText}>
        <BreadcrumbLink color={secondaryText}>Pages</BreadcrumbLink>
      </BreadcrumbItem>

      {activeMenus.map(menu => (
        <BreadcrumbItem color={mainText} key={menu.title}>
          <BreadcrumbLink color={mainText}>{menu.title}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
