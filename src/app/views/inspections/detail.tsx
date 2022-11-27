import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { omit } from 'lodash-es'
import { Snackbar, Unstable_Grid2 as Grid } from '@mui/material'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import { CommonMessage, SnackbarLoadingComponent } from 'd/components/message'
import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import { useInspectionReportByIdQuery } from 'm/inspection-report/index.generated'
import { UUIDV4 } from 'm/presets'

import { InspectionForm } from './components/inspection-form'

import { DetailCard } from '@@/detail-card'

const TITLE = `检验检测报告 - 详情`

const PageDetailInspectionReport = () => {
  const { activeRouteConfig } = useMenuAndRoutes()
  const navigate = useNavigate()

  const { id }: { id?: UUIDV4 } = useParams()

  const { data, isLoading, isError } = useInspectionReportByIdQuery({
    id,
  })

  const detail = useMemo(() => data?.detail, [data?.detail])

  const editPath = generatePath(ROUTES.inspectionDetail, {
    id,
  })

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      {data ? (
        <DetailCard>
          <Grid container spacing={3}></Grid>
        </DetailCard>
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
