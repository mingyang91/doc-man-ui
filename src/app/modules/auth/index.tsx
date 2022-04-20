import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { PropsWithChildren } from 'react'

import { useAuth } from '@contexts/auth'

export const RequireAuthModule = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const location = useLocation()
  const { status } = useAuth()

  if (status === 'unauthenticated') {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return <>{children}</>
}
