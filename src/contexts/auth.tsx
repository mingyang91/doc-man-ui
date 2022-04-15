import { atomWithStorage, useUpdateAtom } from 'jotai/utils'
import { useAtom, useAtomValue } from 'jotai'
import { useCallback } from 'react'

import { Cache, SessionStorageCacheStorage } from '@utils/cache'

import { useRequest } from './request'

type AuthState = {
  username?: string
}

const keyPrefix =
  import.meta.env.MODE === 'development'
    ? `dev-${import.meta.env.VITE_APP_NAME}`
    : import.meta.env.VITE_APP_NAME

const authCache = new Cache<AuthState | null>({
  keyPrefix,
  storage: new SessionStorageCacheStorage(),
})

export const accessTokenAtom = atomWithStorage<string | null>(
  `${keyPrefix}-accessToken`,
  null
)

const authAtom = atomWithStorage('auth', null, authCache)

export const useAuthState = () => {
  const authState = useAtomValue(authAtom)
  const accessToken = useAtom(accessTokenAtom)

  return {
    ...authState,
    isAuthenticated: !!accessToken && !!authState?.username,
  }
}

export const useSignIn = () => {
  const setAuthState = useUpdateAtom(authAtom)
  const setAccessToken = useUpdateAtom(accessTokenAtom)
  const request = useRequest()

  const signIn = useCallback(
    (username: string, password: string) => {
      return request
        .post('/auth/signin', { username, password })
        .then(({ data }) => {
          setAuthState({ username })
          setAccessToken(data.accessToken)
        })
    },
    [request, setAccessToken, setAuthState]
  )

  return {
    signIn,
  }
}

export const useSignOut = () => {
  const setAuthState = useUpdateAtom(authAtom)
  const setAccessToken = useUpdateAtom(accessTokenAtom)
  const request = useRequest()

  const signOut = useCallback(
    (username: string, password: string) => {
      return request.post('/auth/logout', { username, password }).then(() => {
        setAuthState(null)
        setAccessToken(null)
      })
    },
    [request, setAccessToken, setAuthState]
  )

  return {
    signOut,
  }
}
