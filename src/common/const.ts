export const SHOULD_SHOW_REACT_QUERY_DEVTOOL =
  process.env.REACT_APP_HIDE_REACT_QUERY_DEVTOOL !== 'true'

export const LS_KEY_PREFIX =
process.env.NODE_ENV === 'development'
    ? `dev-docman`
    : 'docman'

export const SESSION_KEY = 'session'

export const isDevelopment = process.env.NODE_ENV === 'development'

export const isDom =
  typeof window !== 'undefined' && typeof document !== 'undefined'
