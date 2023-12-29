import {
  styled,
  Unstable_Grid2 as Grid,
  Grid2Props as GridProps,
  Button,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { generatePath, Link as RouterLink } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import { MdEdit, MdPrint } from 'react-icons/md'

import { ROUTES } from '@/routes'

import Iconify from 'd/components/iconify'

import { useMessage } from 'h/use-snackbar-message'

import { InspectionReportByIdQuery } from 'm/inspection-report/index.generated'
import { useRenderDevice } from 'm/render'
import { convertToRenderParam } from 'm/render/convert'
import { InspectionReportDetail } from 'm/presets'

import { useInspectionReportData } from '../context'

import i18n from 'strings/i18n'

const StyledField = styled('section')(({ theme }) => ({
  position: 'relative',
  marginInlineEnd: theme.spacing(2),
  overflow: 'hidden',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: theme.palette.text.secondary,
  ...theme.typography.body1,
}))

export interface InspectionDetailHeaderProps extends GridProps {
  data: InspectionReportByIdQuery['detail']
}

export const InspectionDetailHeader = () => {
  const data = useInspectionReportData()

  const editPath = generatePath(ROUTES.inspectionEdit, {
    id: data?.id,
  })

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const { mutate, isLoading } = useRenderDevice({
    onSuccess(data, variable) {
      window.open(data, '_blank', 'opener=null')
      pushSuccessMessage('设备检验检测已生成,请下载')
    },
    onError(error) {
      pushErrorMessage(`失败: ${(error as Error).message}`)
    },
  })

  const onClickReport = useMemoizedFn(async () => {
    console.log('onClickReport', data)
    if (data) {
      mutate(convertToRenderParam(data as InspectionReportDetail))
    }
  })

  return (
    <Grid container spacing={3} marginBottom={1}>
      <Grid xs={12} md={6}>
        <Button
          component={RouterLink}
          to={editPath}
          startIcon={<Iconify icon={MdEdit} />}
        >
          {i18n.t('编辑')}
        </Button>
      </Grid>
      <Grid
        xs={12}
        md={6}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <StyledField>
          {i18n.t('设备类型')}: {data?.equipmentType?.displayName || ' - '}
        </StyledField>
        <LoadingButton
          onClick={onClickReport}
          loading={isLoading}
          startIcon={<Iconify icon={MdPrint} />}
        >
          {i18n.t('生成报告')}
        </LoadingButton>
      </Grid>
    </Grid>
  )
}
