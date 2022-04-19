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
import { ReactNode, PropsWithChildren } from 'react'

import { MenuConfig } from '@app/routes/create-menus'
import { assertGroupTitle } from '@app/routes'

type IconBoxProps = PropsWithChildren<{
  isActive?: boolean
  activeColor?: string
}>

const IconBox = ({ isActive, activeColor, children }: IconBoxProps) => {
  const sx = isActive
    ? {
        bgColor: activeColor,
        color: 'white',
      }
    : { bgColor: 'white', color: activeColor }

  return (
    <Flex
      mx="12px"
      w="32px"
      h="32px"
      alignItems="center"
      justifyContent="center"
      borderRadius="12px"
      sx={sx}
    >
      {children}
    </Flex>
  )
}

export interface NavItemProps extends BoxProps {
  menu: MenuConfig
}

export const NavItem = ({ menu, children, ...rest }: NavItemProps) => {
  const activeBg = useColorModeValue('white', 'teal.300')
  const inactiveBg = 'transparent'
  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue('gray.400', 'gray.400')

  const hasChildren = menu.submodule && menu.submodule.length > 0

  let content: ReactNode

  let submodule: ReactNode

  if (assertGroupTitle(menu)) {
    content = (
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
    submodule = hasChildren && <>{children}</>
  } else {
    const [bg, color, iconColor] =
      menu.isActive && !hasChildren
        ? [activeBg, activeColor, 'teal.300']
        : [inactiveBg, inactiveColor, 'white']
    content = (
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
          h="auto"
          _active={{
            transform: 'none',
            borderColor: 'transparent',
          }}
          _focus={{
            boxShadow: 'none',
          }}
        >
          {menu.icon && (
            <IconBox isActive={menu.isActive} activeColor={iconColor}>
              <Icon as={menu.icon} />
            </IconBox>
          )}
          <Text color={color} my="auto" fontSize="sm">
            {menu.title}
          </Text>
        </Button>
      </NavLink>
    )
    submodule = hasChildren && (
      <Collapse in={menu.isActive}>{children}</Collapse>
    )
  }

  return (
    <Box {...rest}>
      {content}
      {submodule}
    </Box>
  )
}
