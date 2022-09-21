import { Container, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useAuth } from '@/providers/auth'

import Logo from 'd/components/logo'
import Page from 'd/components/page'

import useResponsive from 'h/use-responsive'

import { Info } from './components/info'
import { Login } from './components/login'
import { HeaderStyle, RootStyle, SectionStyle } from './components/styled'

export const SignIn = () => {
  const smUp = useResponsive('up', 'sm')
  const mdUp = useResponsive('up', 'md')

  const { isLogin } = useAuth()

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
          {isLogin ? <Info /> : <Login shouldShowTail={!smUp} />}
        </Container>
      </RootStyle>
    </Page>
  )
}
