import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@/providers/auth'
import { ROUTES } from '@/routes/context'

import LoadingScreen from 'd/components/loading-screen'

export const AuthProtectModule = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const location = useLocation()
  const { isLogin, checkState } = useAuth()

  if (isLogin) {
    return <>{children}</>
  }

  if (checkState.isLoading) {
    return <LoadingScreen />
  }

  return <Navigate to={ROUTES.signIn} state={{ from: location }} replace />
}
