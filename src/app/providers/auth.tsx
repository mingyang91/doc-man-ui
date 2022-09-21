/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { useMemoizedFn } from 'ahooks'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from 'react'

import 'store2/src/store.on'

import { isDevelopment, LS_KEY_PREFIX } from 'com/const'
import { request } from 'com/request'

import { createContainer } from 'u/create-container'

type UserIdentity = {
  id: number
  username: string
  displayName: string
  role?: string
  email?: string
  avatar?: string
}

type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated'

const KEY_SESSION_STATUS = `${LS_KEY_PREFIX}.status`

;(() => {
  if (!sessionStorage.getItem(KEY_SESSION_STATUS)) {
    sessionStorage.setItem(KEY_SESSION_STATUS, 'unauthenticated')
  }
})()

const sessionAtom = atomWithStorage<SessionStatus>(
  KEY_SESSION_STATUS,
  'loading'
)

type CheckUser = {
  sessionChecked: boolean
  data?: UserIdentity
}

const useCheckUser = (hasLogin: boolean) => {
  return useQuery<CheckUser>(
    ['whoAmI'],
    async () => {
      try {
        return await request.get<UserIdentity>('/api/user/me').then(res => ({
          sessionChecked: true,
          data: res.data,
        }))
      } catch (e) {
        if (isDevelopment) {
          console.error(e)
        }

        sessionStorage.setItem(KEY_SESSION_STATUS, 'unauthenticated')

        return {
          sessionChecked: false,
        }
      }
    },
    {
      cacheTime: 86400000,
      retry: false,
      refetchOnWindowFocus: false,
      enabled: hasLogin,
    }
  )
}

const SessionContainer = createContainer(function useSessionContainer() {
  const [session, setSession] = useAtom(sessionAtom)
  const { data, isSuccess, isLoading, isError, error, refetch } = useCheckUser(
    session !== 'unauthenticated'
  )

  const userInfo = data?.data || ({} as UserIdentity)

  const signIn = useMemoizedFn(
    async (username: string, password: string, callback?: VoidFn) => {
      await request.post<void>('/api/login', {
        username,
        password,
      })
      setSession('authenticated')
      callback?.()
    }
  )

  const logout = useMemoizedFn(async () => {
    await request.get('/api/logout')
    setSession('unauthenticated')
  })

  useEffect(() => {
    if (session === 'authenticated') {
      refetch()
    }
  }, [refetch, session])

  const isLogin =
    isSuccess && session === 'authenticated' && !!data?.sessionChecked

  console.log('sessionState', session)
  console.log('userInfo', userInfo)

  return {
    userInfo,
    isLogin,
    signIn,
    logout,

    checkState: {
      isSuccess,
      isLoading,
      isError,
      error,
    },
  }
})

export const useAuth = SessionContainer.useContainer

export const AuthProvider = SessionContainer.Provider
