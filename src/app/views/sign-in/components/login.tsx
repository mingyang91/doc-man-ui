import { Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import LoginForm from './login-form'
import { ContentStyle } from './styled'

import i18n from 'strings/i18n'

interface LoginProps {
  shouldShowTail?: boolean
}

export const Login = ({ shouldShowTail }: LoginProps) => {
  return (
    <ContentStyle>
      <Typography variant="h4" gutterBottom>
        {i18n.t('登录')} Docman
      </Typography>

      <LoginForm />

      {shouldShowTail && (
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          {i18n.t('忘记登录密码？')}{' '}
          <Link variant="subtitle2" component={RouterLink} to="/forget">
            {i18n.t('找回密码')}
          </Link>
        </Typography>
      )}
    </ContentStyle>
  )
}
