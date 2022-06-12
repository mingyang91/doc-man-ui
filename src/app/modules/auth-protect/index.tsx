import { useLocation, Navigate, useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'

import { ROUTES } from '@/app/routes/context'

import { useAuth } from '@contexts/auth'

import { useMount } from '@utils/react-utils'

export const AuthProtectModule = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { status, initSession } = useAuth()

  useMount(() => {
    initSession(() => {
      navigate(ROUTES.signIn, { replace: true })
    })
  })

  if (status === 'unauthenticated') {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return <>{children}</>
}
