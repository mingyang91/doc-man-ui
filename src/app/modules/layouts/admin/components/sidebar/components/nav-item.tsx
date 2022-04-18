import {
  Flex,
  BoxProps,
  Text,
  Icon,
  useColorModeValue,
  Button,
  Box,
  Collapse,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { MenuConfig } from '@app/routes/create-menus'
import { assertGroupTitle } from '@app/routes'

export interface NavItemProps extends BoxProps {
  menu: MenuConfig
}

export const NavItem = ({ menu, children, ...rest }: NavItemProps) => {
  const activeBg = useColorModeValue('white', 'teal.300')
  const inactiveBg = 'transparent'
  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue('gray.400', 'gray.400')

  if (assertGroupTitle(menu)) {
    return (
      <Text
        color={activeColor}
        fontWeight="bold"
        mb={{
          xl: '12px',
        }}
        mx="auto"
        ps={{
          sm: '10px',
          xl: '16px',
        }}
        py="12px"
      >
        {menu.title}
      </Text>
    )
  }
  const hasChildren = menu.submodule && menu.submodule.length > 0

  const [bg, color, iconColor] =
    menu.isActive && !hasChildren
      ? [activeBg, activeColor, 'teal.300']
      : [inactiveBg, inactiveColor, 'white']
  const content = (
    <NavLink to={menu.path}>
      <Button
        data-active={menu.isActive}
        justifyContent="flex-start"
        alignItems="center"
        bg={bg}
        mb={{
          xl: '12px',
        }}
        mx={{
          xl: 'auto',
        }}
        ps={{
          sm: '10px',
          xl: '16px',
        }}
        py="12px"
        borderRadius="15px"
        _hover={{}}
        w="100%"
        _active={{
          transform: 'none',
          borderColor: 'transparent',
        }}
        _focus={{
          boxShadow: 'none',
        }}
      >
        {menu.icon && (
          <Flex
            w="32px"
            h="32px"
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            color={iconColor}
          >
            <Icon as={menu.icon} />
          </Flex>
        )}
        <Text color={color} my="auto" fontSize="sm">
          {menu.title}
        </Text>
      </Button>
    </NavLink>
  )
  return (
    <Box {...rest}>
      {content}
      {hasChildren && <Collapse in={menu.isActive}>{children}</Collapse>}
    </Box>
  )
}
