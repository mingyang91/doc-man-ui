import { Link as RouterLink } from 'react-router-dom'
import { Container, Link, Typography } from '@mui/material'

import { useUser } from '@contexts/user'
import Page from '@components/page'
import Logo from '@components/logo'
import useResponsive from '@hooks/use-responsive'

import {
  ContentStyle,
  HeaderStyle,
  RootStyle,
  SectionStyle,
} from './components/styled'
import LoginForm from './components/login-form'

export const SignIn = () => {
  const { signIn } = useUser()

  const smUp = useResponsive('up', 'sm')

  const mdUp = useResponsive('up', 'md')

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              没有账号？{' '}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                注册一个
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              欢迎回村，请登录
            </Typography>
            <img
              src="/assets/illustrations/illustration_login.png"
              alt="login"
            />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Enter your details below.
            </Typography>

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                没有账号？{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  注册一个
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  )
}
