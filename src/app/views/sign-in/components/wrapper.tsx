import { Flex, useColorModeValue } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Wrapper = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {children}
    </Flex>
  )
}
