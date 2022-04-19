import {
  Box,
  BoxProps,
  Flex,
  Text,
  CloseButton,
  Link,
  Avatar,
} from '@chakra-ui/react'

import { Separator } from '@components/separator'

import { SidebarContent } from './components/sidebar-content'

export interface SidebarProps extends BoxProps {
  onClose?: () => void
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
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
      <Flex h="20" alignItems="center" justifyContent="space-between">
        <Box pt={'25px'} mb="12px">
          <Link
            href={`${process.env.PUBLIC_URL}/dashboard`}
            target="_blank"
            display="flex"
            lineHeight="100%"
            mb="16px"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar w="48px" h="48px" me="10px" src="/logo.png" />
            <Text fontSize="xl" mt="3px">
              Doc Man Build
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
