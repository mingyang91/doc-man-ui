import {
  Alert,
  AlertTitle,
  Snackbar,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material'
import { useMemo } from 'react'
import { generatePath, useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import { FieldContent, FieldHeader, FieldLine } from 'd/components/data-display'
import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import { HighlightSyntax } from 'd/components/highlight-syntax'
import { CommonMessage, SnackbarLoadingComponent } from 'd/components/message'
import Page from 'd/components/page'

import { useInspectionTypesDetailQuery } from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'

import { DetailCard } from '@@/detail-card'

const TITLE = '设备类型 - 检测类型 - 详情'

const PageInspectionTypeDetail = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id, itemId = '' }: { id?: UUIDV4; itemId?: UUIDV4 } = useParams()

  const { data, isLoading, isError, refetch } =
    useInspectionTypesDetailQuery(
      {
        id: itemId,
      },
      {
        enabled: !!itemId,
      }
    )

  const memoData = useMemo(() => data?.data, [data?.data])

  const breadcrumbs = useMemo(() => {
    if (activeRouteConfig.breadcrumbs?.length) {
      const breadcrumbs = [...activeRouteConfig.breadcrumbs]
      breadcrumbs[2].href = generatePath(ROUTES.equipmentTypeDetail, { id })
      return breadcrumbs
    }
    return []
  }, [activeRouteConfig.breadcrumbs, id])

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs heading={TITLE} links={breadcrumbs} />
      <Alert severity="warning" sx={{ mb: 3 }}>
        <AlertTitle>非开发人员不要修改</AlertTitle>
        此功能不完善，数据修改需研发人员配合，否则可能导致系统崩溃。
      </Alert>
      {id && memoData ? (
        <DetailCard>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>标识符</FieldHeader>
                <FieldContent>{memoData.name}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>名称</FieldHeader>
                <FieldContent>{memoData.displayName || '未填写'}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>检测条件</FieldHeader>
                <FieldContent>
                  <HighlightSyntax
                    code={JSON.stringify(memoData.condition, null, 2)}
                  />
                </FieldContent>
              </FieldLine>
            </Grid>

            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>指标要求</FieldHeader>
                <FieldContent>
                  <Typography variant="body2" component="header">
                    状态检测
                  </Typography>
                  <HighlightSyntax
                    code={JSON.stringify(memoData.requirement?.state, null, 2)}
                  />
                  <Typography variant="body2" component="header">
                    验收检测：
                  </Typography>
                  <HighlightSyntax
                    code={JSON.stringify(
                      memoData.requirement?.acceptance,
                      null,
                      2
                    )}
                  />
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>公式</FieldHeader>
                <FieldContent>
                  <HighlightSyntax
                    code={memoData.formula || '未填写'}
                    language="excel"
                  />
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>常量列表</FieldHeader>
                <FieldContent>
                  <HighlightSyntax
                    code={JSON.stringify(memoData.consts, null, 2)}
                  />
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12}>
              <FieldLine>
                <FieldHeader>备注</FieldHeader>
                <FieldContent>{memoData.comment || ' - '}</FieldContent>
              </FieldLine>
            </Grid>
          </Grid>
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

export default PageInspectionTypeDetail