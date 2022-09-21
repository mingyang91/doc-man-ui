import { Form, FormikProvider, useFormik } from 'formik'
import { useState } from 'react'
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
  TextField,
} from '@mui/material'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

import { useAuth } from '@/providers/auth'

import Iconify from 'd/components/iconify'

function assertLocationState(state: unknown): state is { from: Location } {
  if (typeof state === 'object' && state !== null) {
    return 'from' in state
  }
  return false
}

// ----------------------------------------------------------------------

export default function LoginForm() {
  // 登录成功后跳转
  const navigate = useNavigate()
  const location = useLocation()

  const [showPassword, setShowPassword] = useState(false)

  const { signIn } = useAuth()

  // 登录表单校验
  const LoginSchema = Yup.object().shape({
    username: Yup.string().trim('登录名不能有空格').required('请填写登录名'),
    password: Yup.string().required('请输入密码'),
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ username, password }, { setSubmitting }) => {
      await signIn(username, password, () => {
        const from = assertLocationState(location.state)
          ? location.state.from
          : '/'

        navigate(from, { replace: true })
      })
      setSubmitting(false)
    },
  })

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik

  const handleShowPassword = () => {
    setShowPassword(show => !show)
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="登录账号"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="登录密码"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? RiEyeFill : RiEyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps('remember')}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

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
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          登录
        </LoadingButton>
      </Form>
    </FormikProvider>
  )
}
