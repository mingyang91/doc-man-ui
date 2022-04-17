import { useState, useMemo } from 'react'
import { useMemoizedFn, useMount } from 'ahooks'

import { createContainer } from '@utils/create-container'
import { request, setAuthToken, clearAuthToken } from '@common/request'

type AuthState = {
  id: string
  username: string
  display_name: string
  role?: string
  email?: string
}

type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated'

const SessionContainer = createContainer(function useSessionContainer() {
  const [loading, setLoading] = useState(true)
  const [authState, setAuthState] = useState<AuthState>()

  const whoAmI = useMemoizedFn(() => {
    return request.get<AuthState>('/api/user/me').then(res => res.data)
  })

  const refreshToken = useMemoizedFn(() => {
    return request
      .post<{ access_token: string }>('/api/user/refreshToken')
      .then(res => {
        return res.data.access_token
      })
      .then(accessToken => {
        setAuthToken(accessToken)
        return accessToken
      })
  })

  const authorize = useMemoizedFn(async (accessToken: string) => {
    setLoading(true)
    setAuthToken(accessToken)
    const authState = await whoAmI()
    setAuthState(authState)
    setLoading(false)
    return authState
  })

  const clearAuth = useMemoizedFn(() => {
    clearAuthToken()
    setAuthState(undefined)
  })

  const status: SessionStatus = useMemo(
    () =>
      loading ? 'loading' : authState ? 'authenticated' : 'unauthenticated',
    [loading, authState]
  )

  const isAuthenticated = useMemo(
    () => status === 'authenticated' && !!authState,
    [authState, status]
  )

  useMount(() => {
    const initSession = async () => {
      try {
        const newToken = await refreshToken()
        await setAuthToken(newToken)
      } catch {
        // history.push(`/signin`)
      } finally {
        setLoading(false)
      }
    }
    initSession()
  })

  return {
    isAuthenticated,
    status,
    userInfo: authState,
    authorize,
    clearAuth,
  }
})

export const useAuth = SessionContainer.useContainer

export const AuthProvider = SessionContainer.Provider
