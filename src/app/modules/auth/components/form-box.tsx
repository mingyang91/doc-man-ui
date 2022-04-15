import { PropsWithChildren, ReactNode } from 'react'
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'

type FormBoxProps = PropsWithChildren<{
  header?: ReactNode
}>

export const FormBox = ({ header, children }: FormBoxProps) => {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      {header && (
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{header}</Heading>
        </Stack>
      )}
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        {children}
      </Box>
    </Stack>
  )
}
