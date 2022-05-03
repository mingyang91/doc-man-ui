import { useNavigate, useLocation } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'

import { createContainer } from '@utils/create-container'
import { request } from '@common/request'

import { useAuth } from './auth'

function assertLocationState(state: unknown): state is { from: Location } {
  if (typeof state === 'object' && state !== null) {
    return 'from' in state
  }
  return false
}

const UserContainer = createContainer(function useUserContainer() {
  const { authorize } = useAuth()
  const navigate = useNavigate()

  const location = useLocation()

  const signIn = useMemoizedFn(async (username: string, password: string) => {
    const from = assertLocationState(location.state)
      ? location.state.from || '/'
      : '/'
    await request.post<{ access_token: string }>('/api/login', {
      username,
      password,
    })

    await authorize()
    navigate(from, { replace: true })
  })

  const logout = useMemoizedFn(async () => {
    await request.post('/api/logout')
    // clearAuth()
    navigate('/signin')
  })

  return {
    signIn,
    logout,
  }
})

export const UserProvider = UserContainer.Provider

export const useUser = UserContainer.useContainer
