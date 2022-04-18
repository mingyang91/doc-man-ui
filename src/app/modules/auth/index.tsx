import { useLocation, Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@contexts/auth'

export const RequireAuthModule = () => {
  const location = useLocation()
  const { status } = useAuth()

  if (status === 'unauthenticated') {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return <Outlet />
}
