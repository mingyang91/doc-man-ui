import { PropsWithChildren, ReactNode } from 'react'
import { Box, Stack, useColorModeValue } from '@chakra-ui/react'

type FormBoxProps = PropsWithChildren<{
  header?: ReactNode
}>

export const FormBox = ({ header, children }: FormBoxProps) => {
  return (
    <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'lg'} py={12} px={6}>
      {header && <Stack align={'center'}>{header}</Stack>}
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={10}
      >
        {children}
      </Box>
    </Stack>
  )
}
