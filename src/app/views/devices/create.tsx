import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { DeviceForm } from './components/device-form'

const TITLE = `设备 - 创建`

const PageInspectionCreate = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <DeviceForm />
    </Page>
  )
}

export default PageInspectionCreate
