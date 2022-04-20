import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'

import Logo from '@components/logo'

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}))

export const SignLayout = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
      {children}
    </>
  )
}
