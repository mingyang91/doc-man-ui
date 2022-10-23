import { Button, Snackbar, Unstable_Grid2 as Grid } from '@mui/material'
import { MdEdit } from 'react-icons/md'
import { generatePath, Link as RouteLink, useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import { FieldContent, FieldHeader, FieldLine } from 'd/components/data-display'
import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import { CommonMessage, SnackbarLoadingComponent } from 'd/components/message'
import Page from 'd/components/page'

import { fDate } from 'u/format-time'

import { useClientsByIdQuery } from 'm/clients/index.generated'
import { UUIDV4 } from 'm/presets'

import { DetailCard, DetailCardFooter } from '@@/detail-card'
import { LocationValue } from '@@/location-selector'
import { formatLocation } from '@@/location-selector/utils'

const TITLE = `委托单位 - 详情`

const PageDetailConsumer = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { data, isLoading, isError } = useClientsByIdQuery({
    id,
  })

  const detail = data?.detail

  const editPath = generatePath(ROUTES.consumerEdit, {
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
          <Grid container spacing={3}>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>委托单位</FieldHeader>
                <FieldContent>{detail?.name}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12}>
              <FieldLine>
                <FieldHeader>检测地址</FieldHeader>
                <FieldContent>
                  {formatLocation(detail?.address as LocationValue, true)}
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>创建日期</FieldHeader>
                <FieldContent>
                  {detail?.createdAt && fDate(detail.createdAt)}
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>更新日期</FieldHeader>
                <FieldContent>
                  {detail?.updatedAt && fDate(detail.updatedAt)}
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12}>
              <FieldLine>
                <FieldHeader>备注</FieldHeader>
                <FieldContent>{detail?.comment}</FieldContent>
              </FieldLine>
            </Grid>
          </Grid>
          <DetailCardFooter
            divider
            right={
              <Button
                component={RouteLink}
                to={editPath}
                startIcon={<MdEdit />}
              >
                编辑
              </Button>
            }
          />
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

export default PageDetailConsumer
