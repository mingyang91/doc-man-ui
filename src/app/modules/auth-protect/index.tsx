import { useLocation, Navigate, useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'

import { useAuth } from '@contexts/auth'
import { useMount } from 'ahooks'

export const AuthProtectModule = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { status, initSession } = useAuth()

  useMount(() => {
    initSession(() => {
      navigate('/signin', { replace: true })
    })
  })

  if (status === 'unauthenticated') {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return <>{children}</>
}
