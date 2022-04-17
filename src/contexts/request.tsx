import { createContext, PropsWithChildren, useMemo, useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AxiosInstance } from 'axios'

import { request } from '@common/request'

const RequestContext = createContext<AxiosInstance>(request)

export const useRequest = () => useContext(RequestContext)

export const RequestProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
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

  return (
    <RequestContext.Provider value={request}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RequestContext.Provider>
  )
}
