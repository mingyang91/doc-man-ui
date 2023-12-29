import { Box, Divider, MenuItem, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/providers/auth'
import { ROUTES } from '@/routes'

import { IconButtonAnimate } from 'd/components/animate'
import { Avatar } from 'd/components/avatar'
import MenuPopover from 'd/components/menu-popover'

import i18n from 'strings/i18n'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: i18n.t('账号信息'),
    linkTo: '/account/profile',
  },
  {
    label: i18n.t('账号设置'),
    linkTo: '/account/settings',
  },
]

// ----------------------------------------------------------------------

export const AccountPopover = () => {
  const navigate = useNavigate()
  const { userInfo, logout } = useAuth()

  const [open, setOpen] = useState<HTMLElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleLogout = () => {
    logout()
    navigate(ROUTES.signIn)
  }

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          alt={userInfo?.displayName || 'unknown'}
          label={userInfo?.displayName}
          src={userInfo?.avatar || undefined}
        />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {userInfo?.displayName || userInfo?.username}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userInfo?.role}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map(option => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ m: 1 }} onClick={handleLogout}>
          {i18n.t('退出登录')}
        </MenuItem>
      </MenuPopover>
    </>
  )
}
