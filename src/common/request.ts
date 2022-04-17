import axios from 'axios'

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

export const postRequest = <T>(url: string, body?: unknown) => {
  return request.post<T>(url, body)
}

request.interceptors.request.use(config => {
  const { headers = {} } = config
  const accessToken = authTokenStore.getItem(SESSION_KEY)
  accessToken && (headers.Authorization = accessToken)
  config.headers = headers
  return config
})
