/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosRequestHeaders } from 'axios'

import { baseRequest, getAuthToken } from 'com/request'

interface HasuraError {
  extensions: {
    code: string
    path: string
  }
  message: string
}

const hausraSecret = process.env.REACT_APP_HASURA_ADMIN_SECRET

const client = baseRequest.create({
  withCredentials: true,
})

client.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json',
    authorization: getAuthToken(),
    ...config.headers,
  }

  if (hausraSecret) {
    config.headers['x-hasura-admin-secret'] = hausraSecret
  }

  return config
})

client.interceptors.response.use(response => {
  if (response.data.errors) {
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

const fetcher = <TData, TVariables>(
  query: TData,
  variables: TVariables,
  options?: AxiosRequestHeaders
) => {
  return client.post(
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
    const response = await fetcher(query, variables, options)
    return response.data.data
  }
}
