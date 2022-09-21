import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { InspectionForm } from './components/inspection-form'

const TITLE = `检验检测报告 - 创建`

const PageInspectionCreate = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <InspectionForm />
    </Page>
  )
}

export default PageInspectionCreate
