import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useMemo } from 'react'

import { Wrapper } from '../components/wrapper'
import { FormBox } from '../components/form-box'

export const SignIn = () => {
  const header = useMemo(
    () => (
      <>
        Don&sbquo;t have an account yet?{' '}
        <Link color={'blue.400'}>create one!</Link> ✌️
      </>
    ),
    []
  )

  return (
    <Wrapper>
      <FormBox header={header}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </FormBox>
    </Wrapper>
  )
}
