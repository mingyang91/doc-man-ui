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
  color?: string
}>

const IconBox = ({
  isActive,
  activeColor,
  color = 'white',
  children,
}: IconBoxProps) => {
  const sx = isActive
    ? {
        bgColor: activeColor,
        color,
      }
    : { bgColor: color, color: activeColor }

  return (
    <Flex
      mx="12px"
      w="32px"
      h="32px"
      alignItems="center"
      justifyContent="center"
      borderRadius="12px"
      transition="background-color 0.2s, color 0.2s"
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
      <Flex
        mb={{
          xl: '12px',
        }}
        mx="auto"
        py="12px"
        alignItems="center"
      >
        {menu.icon && (
          <IconBox activeColor={inactiveColor} color={inactiveBg}>
            <Icon as={menu.icon} w="24px" h="24px" />
          </IconBox>
        )}
        <Text color={activeColor} fontWeight="bold">
          {menu.title}
        </Text>
      </Flex>
    )
    submodule = hasChildren && <>{children}</>
  } else {
    const color = menu.isActive ? activeColor : inactiveColor
    content = (
      <NavLink to={menu.path}>
        <Button
          justifyContent="flex-start"
          alignItems="center"
          mb={{
            xl: '12px',
          }}
          mx={{
            xl: 'auto',
          }}
          ps={{
            sm: '5px',
            xl: '8px',
          }}
          py="12px"
          borderRadius="15px"
          w="100%"
          h="auto"
          _active={{
            transform: 'none',
            borderColor: 'transparent',
          }}
          _hover={{
            bg: activeBg,
          }}
          _focus={{
            boxShadow: 'none',
          }}
          sx={
            menu.isActive
              ? {
                  bg: activeBg,
                  boxShadow: 'rgb(0 0 0 / 4%) 0px 7px 11px',
                }
              : {
                  bg: inactiveBg,
                }
          }
        >
          {menu.icon && (
            <IconBox
              isActive={menu.isActive}
              activeColor="teal.300"
              color="white"
            >
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
