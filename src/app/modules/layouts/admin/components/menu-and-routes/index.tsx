import { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'

import { MenuAndRoutesProvider, useMenuAndRoutes } from './contexts'

const MenuAndRoutesInner = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const { viewTitle } = useMenuAndRoutes()
  return (
    <>
      <Helmet>
        <title>Doc Man | {viewTitle || 'Yours'}</title>
      </Helmet>
      {children}
    </>
  )
}

export { useMenuAndRoutes }

export const MenuAndRoutes = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <MenuAndRoutesProvider>
      <MenuAndRoutesInner>{children}</MenuAndRoutesInner>
    </MenuAndRoutesProvider>
  )
}
