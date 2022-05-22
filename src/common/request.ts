import axios from 'axios'

import { Cache, SessionStorageCacheStorage } from '@utils/cache'

import { LS_KEY_PREFIX, SESSION_KEY } from './const'

export const baseUrl =
  import.meta.env.VITE_API_BASE || `${location.protocol}//${location.host}`

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

export const getAuthToken = () => {
  return authTokenStore.getItem(SESSION_KEY) || null
}

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'Stage-Env': import.meta.env.VITE_API_ENV,
  },
})

request.interceptors.request.use(config => {
  const { headers = {} } = config
  const accessToken = authTokenStore.getItem(SESSION_KEY)
  accessToken && (headers.Authorization = accessToken)
  config.headers = headers
  return config
})
