/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

declare module 'deck.gl'
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_API_BASE: string
  readonly VITE_OSS_BASE: string
  readonly VITE_HIDE_REACT_QUERY_DEVTOOL: string
  readonly VITE_HASURA_ADMIN_SECRET: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
