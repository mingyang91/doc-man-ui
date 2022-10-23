import axios from 'axios'
import { unstable_NO_STORAGE_VALUE } from 'jotai/utils'

import { Cache, SessionStorageCacheStorage } from 'u/cache'

import { LS_KEY_PREFIX, SESSION_KEY } from './const'

export const baseUrl =
  process.env.REACT_APP_API_BASE ||
  `${window.location.protocol}//${window.location.host}`

export type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated'

export type SessionData = {
  status: SessionStatus
  token?: string
}

export const sessionStore = new Cache<
  SessionData | typeof unstable_NO_STORAGE_VALUE
>({
  keyPrefix: LS_KEY_PREFIX,
  defaultTTL: 1000 * 60 * 60 * 24,
  storage: new SessionStorageCacheStorage(),
})

export const setAuthToken = (value: string) => {
  sessionStore.setItem(SESSION_KEY, {
    status: 'authenticated',
    token: value,
  })
}

export const clearAuthToken = () => {
  sessionStore.setItem(SESSION_KEY, {
    status: 'unauthenticated',
  })
}

export const getAuthToken = () => {
  const ret = sessionStore.getItem(SESSION_KEY)
  if (ret !== null && typeof ret !== 'symbol') {
    return ret.token
  }
  return undefined
}

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 6000
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  const { headers = {} } = config
  const accessToken = getAuthToken()

  accessToken && (headers.Authorization = `Bearer ${accessToken}`)
  process.env.REACT_APP_API_ENV &&
    (headers['Stage-Env'] = process.env.REACT_APP_API_ENV)
  config.headers = headers
  return config
})

export const request = axios
