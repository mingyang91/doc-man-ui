import { PropsWithChildren } from 'react'

import { MenuAndRoutes } from './components/menu-and-routes'

type LayoutProps = PropsWithChildren<Record<never, never>>

export const AdminLayout = ({ children }: LayoutProps) => {
  return <MenuAndRoutes>{children}</MenuAndRoutes>
}
