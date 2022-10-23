import { FormApi, SubmissionErrors } from 'final-form'
import { useMemo, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
// material
import { LoadingButton } from '@mui/lab'
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { makeValidate, TextField } from 'mui-rff'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

import { useAuth } from '@/providers/auth'

import Iconify from 'd/components/iconify'

function assertLocationState(state: unknown): state is { from: Location } {
  if (typeof state === 'object' && state !== null) {
    return 'from' in state
  }
  return false
}

interface LoginFormData {
  username: string
  password: string
  remember: boolean | undefined
}

const loginValidate = makeValidate<LoginFormData>(
  Yup.object().shape({
    username: Yup.string().required('请填写登录名').trim('登录名不能有空格'),
    password: Yup.string().required('请输入密码'),
    remember: Yup.boolean().optional(),
  }) as any // 类型总是报错
)
export default function LoginForm() {
  // 登录成功后跳转
  const navigate = useNavigate()
  const location = useLocation()

  const [showPassword, setShowPassword] = useState(false)

  const { signIn } = useAuth()

  const onSubmit = useMemoizedFn<
    (
      values: LoginFormData,
      form: FormApi<LoginFormData>,
      callback?: (errors?: SubmissionErrors) => void
    ) => SubmissionErrors | Promise<SubmissionErrors> | void
  >(async ({ username, password }) => {
    await signIn(username, password, () => {
      const from = assertLocationState(location.state)
        ? location.state.from
        : '/'

      navigate(from, { replace: true })
    })
  })

  const initialValues = useMemo(
    () => ({
      username: '',
      password: '',
      remember: true,
    }),
    []
  )

  const handleShowPassword = () => {
    setShowPassword(show => !show)
  }

  return (
    <Form<LoginFormData>
      autoComplete="off"
      validate={loginValidate}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ submitting, handleSubmit }) => (
        <>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="登录账号"
              name="username"
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="登录密码"
              name="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? RiEyeFill : RiEyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <Field name="remember" type="checkbox">
              {({ input }) => (
                <FormControlLabel
                  control={<Checkbox checked={input.checked} {...input} />}
                  label="Remember me"
                />
              )}
            </Field>

            <Link
              component={RouterLink}
              variant="subtitle2"
              to="#"
              underline="hover"
            >
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            type="button"
            size="large"
            variant="contained"
            loading={submitting}
            onClick={handleSubmit}
          >
            登录
          </LoadingButton>
        </>
      )}
    </Form>
  )
}
