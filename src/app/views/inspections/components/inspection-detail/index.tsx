import { Unstable_Grid2 as Grid } from '@mui/material'

import { FieldLine, FieldHeader, FieldContent } from 'd/components/data-display'

import { fDate } from 'u/format-time'

import { InspectionType } from 'm/presets'

import { InspectionDetailHeader } from './components/header'
import { useInspectionReportData } from './context'
import { InspectionDetailBody } from './components/body'

import { DetailCard } from '@@/detail-card'
import { formatInspectionType } from '@@/inspection-item-type-selector'
import { formatLocation } from '@@/location-selector/utils'
import { LocationValue } from '@@/location-selector'
import i18n from 'strings/i18n'

export const InspectionDetail = () => {
  const data = useInspectionReportData()

  return (
    <>
      <InspectionDetailHeader />
      <DetailCard>
        <Grid container spacing={3}>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('委托单位')}</FieldHeader>
              <FieldContent>{data?.equipmentName}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('地址')}</FieldHeader>
              <FieldContent>
                {formatLocation(data?.inspectionAddress as LocationValue, true)}
              </FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('设备名称')}</FieldHeader>
              <FieldContent>{data?.equipmentName}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('样品标识')}</FieldHeader>
              <FieldContent>{data?.equipmentSampleId}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('设备型号')}</FieldHeader>
              <FieldContent>{data?.equipmentModel}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('设备编号')}</FieldHeader>
              <FieldContent>{data?.equipmentCode}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('制造厂商')}</FieldHeader>
              <FieldContent>{data?.equipmentManufacturer}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('设备场所')}</FieldHeader>
              <FieldContent>{data?.equipmentSite}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12}>
            <FieldLine>
              <FieldHeader>{i18n.t('检测依据')}</FieldHeader>
              <FieldContent>{data?.inspectionBasis}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12}>
            <FieldLine>
              <FieldHeader>{i18n.t('检测仪器')}</FieldHeader>
              <FieldContent>{data?.inspectionInstrument}</FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('检测项目')}</FieldHeader>
              <FieldContent>
                {formatInspectionType(data?.inspectionItem as InspectionType)}
              </FieldContent>
            </FieldLine>
          </Grid>
          <Grid xs={12} sm={6}>
            <FieldLine>
              <FieldHeader>{i18n.t('检测日期')}</FieldHeader>
              <FieldContent>
                {data?.inspectionDate ? fDate(data.inspectionDate) : ' - '}
              </FieldContent>
            </FieldLine>
          </Grid>
        </Grid>
      </DetailCard>
      <InspectionDetailBody />
    </>
  )
}
