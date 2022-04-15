import { Global, css } from '@emotion/react'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow: auto;
        overflow: overlay;
      `}
    />
  )
}
