import { Flex, Icon, IconButton, useColorModeValue } from '@chakra-ui/react'
import { RiSendToBack } from 'react-icons/ri'

export const Settings = () => {
  const navbarIcon = useColorModeValue('gray.500', 'gray.200')

  return (
    <Flex
      pe={{ sm: '0px', md: '16px' }}
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
    >
      <IconButton
        bg="transparent"
        color={navbarIcon}
        icon={<Icon as={RiSendToBack} />}
        aria-label="log out"
      />
    </Flex>
  )
}
