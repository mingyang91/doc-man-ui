import { Helmet } from 'react-helmet-async'

import { MenuAndRoutesProvider, useMenuAndRoutes } from './contexts'

const MenuAndRoutesInner = ({ children }) => {
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

export const MenuAndRoutes = ({ children }) => {
  return (
    <MenuAndRoutesProvider>
      <MenuAndRoutesInner>{children}</MenuAndRoutesInner>
    </MenuAndRoutesProvider>
  )
}
