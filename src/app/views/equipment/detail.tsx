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

import { useEquipmentByIdQuery } from 'm/equipment/index.generated'
import { UUIDV4 } from 'm/presets'

import { DetailCard, DetailCardFooter } from '@@/detail-card'
import { LocationValue } from '@@/location-selector'
import { formatLocation } from '@@/location-selector/utils'
import i18n from 'strings/i18n'


const TITLE = '设备 - 详情'

const PageDetailDevice = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { data, isLoading, isError } = useEquipmentByIdQuery({
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
            {/* line 1 */}
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('委托单位')}</FieldHeader>
                <FieldContent>{detail?.client?.name || i18n.t('未填写')}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('设备名称')}</FieldHeader>
                <FieldContent>{detail?.equipmentName || i18n.t('未填写')}</FieldContent>
              </FieldLine>
            </Grid>
            {/* line 2 */}
            <Grid xs={12}>
              <FieldLine>
                <FieldHeader>{i18n.t('地址')}</FieldHeader>
                <FieldContent>
                  {formatLocation(detail?.address as LocationValue, true) ||
                    i18n.t('未填写')}
                </FieldContent>
              </FieldLine>
            </Grid>
            {/* line 3 */}
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('样品标识')}</FieldHeader>
                <FieldContent>{detail?.equipmentSampleId}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('设备型号')}</FieldHeader>
                <FieldContent>{detail?.equipmentModel}</FieldContent>
              </FieldLine>
            </Grid>
            {/* line 4 */}
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('设备编号')}</FieldHeader>
                <FieldContent>{detail?.equipmentCode}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('制造厂商')}</FieldHeader>
                <FieldContent>{detail?.equipmentManufacturer}</FieldContent>
              </FieldLine>
            </Grid>
            {/* line 5 */}
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('设备场所')}</FieldHeader>
                <FieldContent>{detail?.equipmentSite}</FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('检测仪器')}</FieldHeader>
                <FieldContent>{detail?.inspectionInstrument}</FieldContent>
              </FieldLine>
            </Grid>
            {/* line 6 */}
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('创建时间')}</FieldHeader>
                <FieldContent>
                  {detail?.createdAt && fDate(detail.createdAt)}
                </FieldContent>
              </FieldLine>
            </Grid>
            <Grid xs={12} sm={6}>
              <FieldLine>
                <FieldHeader>{i18n.t('更新时间')}</FieldHeader>
                <FieldContent>
                  {detail?.updatedAt && fDate(detail.updatedAt)}
                </FieldContent>
              </FieldLine>
            </Grid>
            {/* line 7 */}
            <Grid xs={12}>
              <FieldLine>
                <FieldHeader>{i18n.t('备注')}</FieldHeader>
                <FieldContent>{detail?.comment || i18n.t('无')}</FieldContent>
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
                {i18n.t('编辑')}
              </Button>
            }
          />
        </DetailCard>
      ) : isLoading ? (
        <SnackbarLoadingComponent />
      ) : (
        isError && (
          <Snackbar open>
            <CommonMessage type="error" description={i18n.t('获取数据错误')} />
          </Snackbar>
        )
      )}
    </Page>
  )
}

export default PageDetailDevice
