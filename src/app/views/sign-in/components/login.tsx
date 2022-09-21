import { Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import LoginForm from './login-form'
import { ContentStyle } from './styled'

interface LoginProps {
  shouldShowTail?: boolean
}

export const Login = ({ shouldShowTail }: LoginProps) => {
  return (
    <ContentStyle>
      <Typography variant="h4" gutterBottom>
        登录到 Docman
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 5 }}>
        请输入您的登录名和密码
      </Typography>

      <LoginForm />

      {shouldShowTail && (
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          忘记登录密码？{' '}
          <Link variant="subtitle2" component={RouterLink} to="/forget">
            找回密码
          </Link>
        </Typography>
      )}
    </ContentStyle>
  )
}
