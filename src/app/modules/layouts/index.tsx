import {
  Box,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'
type LayoutProps = PropsWithChildren<Record<never, never>>

export const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar display={{ base: 'none', md: 'block' }} onClose={onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
        <Topbar onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Drawer>
    </Box>
  )
}
