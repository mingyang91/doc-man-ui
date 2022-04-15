import { createContext, PropsWithChildren, useMemo, useContext } from 'react'
import axios, { AxiosInstance } from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useAtomValue } from 'jotai'

import { accessTokenAtom } from './auth'

const baseUrl = import.meta.env.VITE_API_BASE

const defaultRequest = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'Stage-Env': import.meta.env.VITE_API_ENV,
  },
})

const RequestContext = createContext<AxiosInstance>(defaultRequest)

export const useRequest = () => useContext(RequestContext)

export const RequestProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const accessToken = useAtomValue(accessTokenAtom)

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: !import.meta.env.DEV,
          },
        },
      }),
    []
  )

  const request = useMemo(() => {
    const request = axios.create({
      baseURL: baseUrl,
      timeout: 6000,
      withCredentials: true,
      headers: {
        'Stage-Env': import.meta.env.VITE_API_ENV,
      },
    })

    request.interceptors.request.use(config => {
      const { headers = {} } = config
      accessToken && (headers.Authorization = accessToken)
      config.headers = headers
      return config
    })
    return request
  }, [accessToken])

  return (
    <RequestContext.Provider value={request}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RequestContext.Provider>
  )
}
