import axios from 'axios'

import { Cache, SessionStorageCacheStorage } from 'u/cache'

import { LS_KEY_PREFIX, SESSION_KEY } from './const'

export const baseUrl =
  process.env.REACT_APP_API_BASE ||
  `${window.location.protocol}//${window.location.host}`

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
  return authTokenStore.getItem(SESSION_KEY) || ''
}

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 6000
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  const { headers = {} } = config
  const accessToken = authTokenStore.getItem(SESSION_KEY)
  accessToken && (headers.Authorization = accessToken)
  process.env.REACT_APP_API_ENV &&
    (headers['Stage-Env'] = process.env.REACT_APP_API_ENV)
  config.headers = headers
  return config
})

export const baseRequest = axios

export const request = axios.create()
