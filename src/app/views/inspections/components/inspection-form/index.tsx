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
import { InspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'

import { BaseFields } from './components/base-fields'
import { HeaderField } from './components/header-field'
import { MainField } from './components/main-field'
import {
  FnSubmitInspectionReport,
  initialInspectionFormData,
  InspectionReportFormData,
} from './utils'
import { InspectionTypeProvider } from './context/inspection-type-item'
import { IsEditProvider } from './context/is-edit'

import { DetailCard } from '@@/detail-card'
import { initialInspectionItemTypeData } from '@@/inspection-item-type-selector/utils'

interface InspectionFormProps extends DomainFormProps {
  initialInspectionTypes?: InspectionTypesByEquipmentQuery['list']
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
      inspectionItem: initialInspectionItemTypeData(),
      presetsItems: data?.presetsItems || [],
      items1: data?.items1 || [],
      items2: data?.items2 || [],
    })
  }, [data, isEdit, userInfo?.id])

  return (
    <IsEditProvider value={isEdit}>
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
                    type="submit"
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
                    <InspectionTypeProvider
                      initialState={{
                        equipmentTypeId: values.equipmentType.id,
                      }}
                    >
                      <MainField
                        presetsItems={values.presetsItems}
                        inspectionItemType={values.inspectionItem}
                      />
                    </InspectionTypeProvider>
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
                    type="submit"
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
    </IsEditProvider>
  )
}
