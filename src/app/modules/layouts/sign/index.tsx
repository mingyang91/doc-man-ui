import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'

import Logo from '@components/logo'

const HeaderStyle = styled('header')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  display: 'none',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    display: 'block',
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
