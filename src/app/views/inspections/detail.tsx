import { useParams } from 'react-router-dom'
import { Snackbar } from '@mui/material'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import { CommonMessage, SnackbarLoadingComponent } from 'd/components/message'
import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useInspectionReportByIdQuery } from 'm/inspection-report/index.generated'
import { UUIDV4 } from 'm/presets'

import { InspectionDetail } from './components/inspection-detail'
import {
  InspectionReportData,
  InspectionReportDataProvider,
} from './components/inspection-detail/context'

const TITLE = `检验检测报告 - 详情`

const PageDetailInspectionReport = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { data, isLoading, isError } = useInspectionReportByIdQuery({
    id,
  })

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      {data?.detail ? (
        <InspectionReportDataProvider
          value={data.detail as InspectionReportData}
        >
          <InspectionDetail />
        </InspectionReportDataProvider>
      ) : isLoading ? (
        <SnackbarLoadingComponent />
      ) : (
        isError && (
          <Snackbar open>
            <CommonMessage type="error" description="获取数据错误" />
          </Snackbar>
        )
      )}
    </Page>
  )
}

export default PageDetailInspectionReport
