import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  VStack,
  Heading,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { useMemo } from 'react'

import { useUser } from '@contexts/user'
import { isValidRequired } from '@utils/validators'

import { FormBox } from './components/form-box'

export const SignIn = () => {
  const { signIn } = useUser()

  const header = useMemo(
    () => (
      <>
        <Heading fontSize={'4xl'}>Welcome Back!</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          Don&apos;t have an account yet?
          <Link color={'blue.400'}>create one!</Link> ✌️
        </Text>
      </>
    ),
    []
  )

  return (
    <FormBox header={header}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await signIn(values.username, values.password)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <VStack align="start" spacing={5}>
              <Field name="username" validate={isValidRequired}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                      {...field}
                      type="text"
                      id="username"
                      placeholder="Your Account Id..."
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={isValidRequired}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="Your Password..."
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Stack spacing={5} w={'100%'}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </VStack>
          </Form>
        )}
      </Formik>
    </FormBox>
  )
}
