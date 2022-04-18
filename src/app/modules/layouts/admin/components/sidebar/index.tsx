import {
  Box,
  BoxProps,
  Flex,
  Text,
  CloseButton,
  useColorModeValue,
  Link,
  Avatar,
  useTheme,
  useStyleConfig,
} from '@chakra-ui/react'

import { Separator } from '@components/separator'

import { SidebarContent } from './components/sidebar-content'

export interface SidebarProps extends BoxProps {
  onClose?: () => void
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const sidebarBg = useColorModeValue('white', 'gray.700')
  return (
    <Box
      bg={sidebarBg}
      borderRadius="16px"
      transition={'0.2s linear'}
      w="260px"
      maxW="260px"
      ms={{
        sm: '16px',
      }}
      my={{
        sm: '16px',
      }}
      h="calc(100vh - 32px)"
      ps="20px"
      pe="20px"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box pt={'25px'} mb="12px">
          <Link
            href={`${process.env.PUBLIC_URL}/dashboard`}
            target="_blank"
            display="flex"
            lineHeight="100%"
            mb="30px"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center"
            fontSize="11px"
          >
            <Avatar w="32px" h="32px" me="10px" src="/logo" />
            <Text fontSize="sm" mt="3px">
              Doc Man
            </Text>
          </Link>
          <Separator />
        </Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <SidebarContent />
    </Box>
  )
}
