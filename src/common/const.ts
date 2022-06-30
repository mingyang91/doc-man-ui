export const SHOULD_SHOW_REACT_QUERY_DEVTOOL =
  import.meta.env.VITE_HIDE_REACT_QUERY_DEVTOOL !== 'true'

export const LS_KEY_PREFIX =
  import.meta.env.MODE === 'development'
    ? `dev-${import.meta.env.VITE_APP_NAME}`
    : import.meta.env.VITE_APP_NAME

export const SESSION_KEY = 'session'

export const isDevelopment = import.meta.env.MODE === 'development'

export const isDom =
  typeof window !== 'undefined' && typeof document !== 'undefined'
