import { useState } from 'react'
import { alpha } from '@mui/material/styles'
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
} from '@mui/material'

import MenuPopover from '@components/menu-popover'
import { IconButtonAnimate } from '@components/animate'
import { useAuth } from '@/contexts/auth'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: '账号信息',
    linkTo: '/account/profile',
  },
  {
    label: '账号设置',
    linkTo: '/account/settings',
  },
]

// ----------------------------------------------------------------------

export const AccountPopover = () => {
  const { userInfo } = useAuth()

  const [open, setOpen] = useState<HTMLElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
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
        <Avatar alt={userInfo?.display_name}>{userInfo?.display_name}</Avatar>
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
            {userInfo?.display_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userInfo?.email}
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

        <MenuItem sx={{ m: 1 }}>退出登录</MenuItem>
      </MenuPopover>
    </>
  )
}
