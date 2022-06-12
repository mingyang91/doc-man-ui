import { useMenuAndRoutes } from '@/app/modules/layouts/admin/components/menu-and-routes'
import Page from '@/components/page'

import HeaderBreadcrumbs from '@components/header-breadcrumbs'

const TITLE = '仪表盘'

const Dashboard = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig?.breadcrumbs || []}
      />
    </Page>
  )
}

export default Dashboard
