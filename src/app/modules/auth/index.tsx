import { PropsWithChildren } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

import { useAuth } from '@contexts/auth'

type RequireAuthModuleProps = PropsWithChildren<Record<never, never>>

export const RequireAuthModule = ({ children }: RequireAuthModuleProps) => {
  const location = useLocation()
  const { status } = useAuth()

  if (status === 'unauthenticated') {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return children
}
