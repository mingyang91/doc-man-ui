/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemoizedFn } from 'ahooks'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { SyncStorage } from 'jotai/utils/atomWithStorage'
import { useEffect } from 'react'

import { request, SessionData, sessionStore } from 'com/request'

import { createContainer } from 'u/create-container'

import { useCurrentUserQuery } from 'm/public.generated'

const sessionAtom = atomWithStorage(
  'session',
  {
    status: 'loading',
  },
  sessionStore as SyncStorage<SessionData | null>
)

const useCheckUser = (hasLogin: boolean) => {
  const { data, ...rest } = useCurrentUserQuery(
    {},
    {
      cacheTime: 86400000,
      retry: false,
      refetchOnWindowFocus: false,
      enabled: hasLogin,
    }
  )

  const user = data?.data?.[0]
  return {
    data: user,
    ...rest,
  }
}

const SessionContainer = createContainer(function useSessionContainer() {
  const [session, setSession] = useAtom(sessionAtom)

  const {
    data,
    isStale,
    isFetched,
    isSuccess,
    isLoading,
    isError,
    error,
    refetch,
  } = useCheckUser(session?.status !== 'unauthenticated')

  const signIn = useMemoizedFn(
    async (username: string, password: string, callback?: VoidFn) => {
      const { data } = await request.post<{ token: string }>('/api/login', {
        username,
        password,
      })
      setSession({
        status: 'authenticated',
        token: data.token,
      })
      callback?.()
    }
  )

  const logout = useMemoizedFn(async () => {
    await request.get('/api/logout')
    setSession({
      status: 'unauthenticated',
    })
  })

  useEffect(() => {
    if (session?.status === 'authenticated') {
      refetch()
    }
  }, [refetch, session])

  const isLogin =
    isSuccess && session?.status === 'authenticated' && data !== undefined

  return {
    userInfo: data,
    isLogin,
    isLoading: session?.status !== 'unauthenticated' && isLoading,
    signIn,
    logout,

    checkState: {
      isStale,
      isFetched,
      isSuccess,
      isLoading,
      isError,
      error,
    },
  }
})

export const useAuth = SessionContainer.useContainer

export const AuthProvider = SessionContainer.Provider
