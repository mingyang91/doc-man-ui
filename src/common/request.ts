import axios from 'axios'
import { GraphQLClient } from 'graphql-request'

import { Cache, SessionStorageCacheStorage } from '@utils/cache'

import { LS_KEY_PREFIX, SESSION_KEY } from './const'

const baseUrl = import.meta.env.VITE_API_BASE

const authTokenStore = new Cache<string>({
  keyPrefix: LS_KEY_PREFIX,
  storage: new SessionStorageCacheStorage(),
})

export const setAuthToken = (value: string) => {
  authTokenStore.setItem(SESSION_KEY, value)
}

export const clearAuthToken = () => {
  authTokenStore.removeItem(SESSION_KEY)
}

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'Stage-Env': import.meta.env.VITE_API_ENV,
  },
})

export const graphQLClient = new GraphQLClient(
  new URL('v1/graphql', baseUrl).toString(),
  {
    fetch: request,
  }
)

request.interceptors.request.use(config => {
  const { headers = {} } = config
  const accessToken = authTokenStore.getItem(SESSION_KEY)
  accessToken && (headers.Authorization = accessToken)
  headers['x-hasura-admin-secret'] = import.meta.env.VITE_HASURA_ADMIN_SECRET
  config.headers = headers
  return config
})
