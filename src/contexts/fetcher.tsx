/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosRequestHeaders } from 'axios'

import { request } from 'com/request'

interface HasuraError {
  extensions: {
    code: string
    path: string
  }
  message: string
}

const GRAPHQL_PATH = '/v1/graphql'

const hausraSecret = process.env.REACT_APP_HASURA_ADMIN_SECRET

request.interceptors.request.use(config => {
  if (config.url?.includes(GRAPHQL_PATH)) {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    }

    if (hausraSecret) {
      config.headers['x-hasura-admin-secret'] = hausraSecret
    }
  }

  return config
})

request.interceptors.response.use(response => {
  if (response.config.url?.includes(GRAPHQL_PATH) && response.data.errors) {
    for (let i = 0; i < response.data.errors.length; i++) {
      const e = response.data.errors[i] as HasuraError
      if (e.extensions.code === 'access-denied') {
        response.status = 401
        break
      }
    }

    throw new AxiosError('GraphQL Error')
  }

  return response
})

export const fetcher = <TData, TVariables>(
  query: string,
  variables: TVariables,
  options?: AxiosRequestHeaders
) => {
  return request.post<TData>(
    '/v1/graphql',
    {
      query,
      variables,
    },
    {
      headers: options,
    }
  )
}

export const useFetch = <TData, TVariables>(
  query: string,
  options?: AxiosRequestHeaders
): ((variables?: TVariables) => Promise<TData>) => {
  return async (variables?: TVariables) => {
    const response = await fetcher<{ data: TData }, TVariables | undefined>(
      query,
      variables,
      options
    )
    return response.data.data
  }
}
