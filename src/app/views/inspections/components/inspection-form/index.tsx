import { LoadingButton } from '@mui/lab'
import {
  Divider,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import arrayMutators from 'final-form-arrays'
import { useMemo } from 'react'
import { Form } from 'react-final-form'

import { DomainFormProps } from '@/modules/form'
import { useAuth } from '@/providers/auth'

import { SerialNumber } from 'm/presets'

import { BaseFields } from './components/base-fields'
import { HeaderField } from './components/header-field'
import { MainField } from './components/main-field'
import {
  FnSubmitInspectionReport,
  initialInspectionFormData,
  InspectionReportFormData,
} from './utils'

import { DetailCard } from '@@/detail-card'
import { initialInspectiontypeData } from '@@/inspectiontype-selector/utils'

interface InspectionFormProps extends DomainFormProps {
  data?: InspectionReportFormData
  submitForm?: FnSubmitInspectionReport
  isLoading?: boolean
}

export const InspectionForm = ({
  isLoading,
  isEdit,
  data,
  submitForm = () => Promise.resolve(),
}: InspectionFormProps) => {
  const { userInfo } = useAuth()

  const initialValues = useMemo(() => {
    if (isEdit) {
      return initialInspectionFormData(data)
    }
    return initialInspectionFormData({
      creatorId: userInfo?.id,
      inspectionItem: initialInspectiontypeData(),
      items: [],
    })
  }, [data, isEdit, userInfo?.id])

  return (
    <Form<InspectionReportFormData>
      mutators={{
        ...arrayMutators,
      }}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      {({ handleSubmit, submitting, pristine, values, form }) => (
        <>
          <HeaderField
            isEdit={isEdit}
            initialSerialNumber={values?.serialNumber as SerialNumber}
          />
          <Divider sx={{ mt: 1, mb: 3 }} />
          <Grid
            container
            columnSpacing={{
              lg: 0,
              xl: 3,
              xs: 3,
            }}
            rowSpacing={3}
            width="100%"
          >
            {/* left side */}
            <Grid xs={12} lg={12} xl={4}>
              <DetailCard>
                <Stack direction="column" spacing={3} alignItems="stretch">
                  <Typography variant="h5">基本信息</Typography>
                  <BaseFields />
                </Stack>
              </DetailCard>
              <Stack
                alignItems="flex-end"
                sx={{
                  mt: 3,
                  display: {
                    xs: 'none',
                    lg: 'none',
                    xl: 'flex',
                  },
                }}
              >
                <LoadingButton
                  type="button"
                  variant="contained"
                  disabled={submitting || pristine}
                  loading={submitting || isLoading}
                  onClick={handleSubmit}
                >
                  {!isEdit ? '提交报告' : '保存更改'}
                </LoadingButton>
              </Stack>
            </Grid>
            {/* right side */}
            <Grid xs={12} lg={12} xl={8}>
              <DetailCard sx={{ px: 0, py: 3 }}>
                <Stack direction="column" spacing={2} alignItems="stretch">
                  <Typography variant="h5" sx={{ px: 3 }}>
                    详细信息
                  </Typography>
                  <MainField />
                </Stack>
              </DetailCard>
              <Stack
                alignItems="flex-end"
                sx={{
                  mt: 3,
                  display: {
                    xs: 'flex',
                    lg: 'flex',
                    xl: 'none',
                  },
                }}
              >
                <LoadingButton
                  type="button"
                  variant="contained"
                  disabled={submitting || pristine}
                  loading={submitting || isLoading}
                  onClick={handleSubmit}
                >
                  {!isEdit ? '提交报告' : '保存更改'}
                </LoadingButton>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </Form>
  )
}
