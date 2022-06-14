import { Grid, Card } from '@mui/material'

import { FieldLine, FieldHeader, FieldContent } from '@/components/data-display'
import { fDate } from '@/utils/format-time'

import { useDeviceDetail } from '@@/views/device-reports/detail'

export const DetailHeader = () => {
  const value = useDeviceDetail()

  return (
    <Card variant="elevation" sx={{ pt: 5, px: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>委托单位</FieldHeader>
            <FieldContent>{value?.requester}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>检测地址</FieldHeader>
            <FieldContent>{value?.address}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>设备名称</FieldHeader>
            <FieldContent>{value?.name}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>样品标识</FieldHeader>
            <FieldContent>{value?.sampleNo}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>设备型号</FieldHeader>
            <FieldContent>{value?.modelNo}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>设备编号</FieldHeader>
            <FieldContent>{value?.deviceNo}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>制造厂商</FieldHeader>
            <FieldContent>{value?.vendor}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>设备场所</FieldHeader>
            <FieldContent>{value?.place}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12}>
          <FieldLine>
            <FieldHeader>检测依据</FieldHeader>
            <FieldContent>{value?.accordingTo}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12}>
          <FieldLine>
            <FieldHeader>检测仪器</FieldHeader>
            <FieldContent>{value?.equipment}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>检测项目</FieldHeader>
            <FieldContent>{value?.item}</FieldContent>
          </FieldLine>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldLine>
            <FieldHeader>检测日期</FieldHeader>
            <FieldContent>
              {value?.checkDate && fDate(value?.checkDate)}
            </FieldContent>
          </FieldLine>
        </Grid>
      </Grid>
    </Card>
  )
}
