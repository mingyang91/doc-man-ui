import { PropsWithChildren } from 'react'

import { MenuAndRoutesProvider, useMenuAndRoutes } from './contexts'

export { useMenuAndRoutes }

export const MenuAndRoutes = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return <MenuAndRoutesProvider>{children}</MenuAndRoutesProvider>
}
