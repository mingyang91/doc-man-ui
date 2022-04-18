import {
  Box,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Flex,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Topbar } from './components/topbar'
import { Sidebar } from './components/sidebar'
import {
  MainPanel,
  PanelContainer,
  PanelContent,
} from './components/main-panel'
type LayoutProps = PropsWithChildren<Record<never, never>>

export const AdminLayout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
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
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        <Topbar onOpen={onOpen} />
        <PanelContent>
          <PanelContainer>{children}</PanelContainer>
        </PanelContent>
      </MainPanel>
    </Flex>
  )
}
