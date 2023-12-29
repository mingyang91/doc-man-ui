import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useAuth } from '@/providers/auth'
import { ROUTES } from '@/routes'

import { Avatar } from 'd/components/avatar'

import { ContentStyle } from './styled'

import i18n from 'strings/i18n'

export const Info = () => {
  const { logout, userInfo } = useAuth()

  return (
    <ContentStyle>
      <Typography variant="h4" gutterBottom>
        {i18n.t('欢迎您')}，{userInfo?.username}
      </Typography>

      <Card sx={{ maxWidth: 340 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={userInfo?.avatar || ''}
            label={userInfo?.displayName || userInfo?.username || 'unknown'}
          />
          <Typography variant="h3">
            {userInfo?.displayName || userInfo?.username}
          </Typography>
          <Typography variant="subtitle2">{userInfo?.role}</Typography>
          <Divider
            component="div"
            sx={{ marginTop: 3, width: '100%', height: '1px' }}
          />
        </CardContent>
        <CardActions
          sx={{
            margin: 1,
            justifyContent: 'space-around',
          }}
        >
          <Button component={RouterLink} to={ROUTES.dashboard}>
            {i18n.t('进入系统')}
          </Button>
          <Button size="medium" onClick={logout}>
            {i18n.t('退出登录')}
          </Button>
        </CardActions>
      </Card>
    </ContentStyle>
  )
}
