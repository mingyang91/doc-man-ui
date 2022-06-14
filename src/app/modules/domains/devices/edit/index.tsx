import { Formik, FormikHelpers } from 'formik'
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { RiMore2Fill } from 'react-icons/ri'
import { LoadingButton } from '@mui/lab'

import { DeviceInsertInput } from '@/generated/graphql'

import { FormHeader } from './components/form-header'
import { FormDetail } from './components/form-detail'
import { InitialDeviceProvider, useInitialDevice } from './providers/initial'

export type FnSubmitDevice = (
  values: DeviceInsertInput,
  helper: FormikHelpers<DeviceInsertInput>
) => Promise<void>

export type ComponentInFormikProps = {
  isSubmitting?: boolean
  submitForm?: FnSubmitDevice
}

export type DeviceEditInnerProps = {
  isLoading?: boolean
  onSubmit?: FnSubmitDevice
}

const DeviceEditInner = ({
  isLoading,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => new Promise(() => {}),
}: DeviceEditInnerProps) => {
  const { data, loading } = useInitialDevice()

  return loading ? null : (
    <Formik initialValues={data} onSubmit={onSubmit}>
      {({ submitForm, isSubmitting }) => (
        <>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<RiMore2Fill />}
              aria-controls="basic-details"
            >
              <Typography variant="h6">基本信息</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormHeader isSubmitting={isSubmitting} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<RiMore2Fill />}
              aria-controls="detect-details"
            >
              <Typography variant="h6">检测结果</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormDetail isSubmitting={isSubmitting} />
            </AccordionDetails>
          </Accordion>
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: '1rem',
            }}
          >
            <Grid item xs={4}>
              <LoadingButton
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                loading={isSubmitting || isLoading}
                onClick={submitForm}
              >
                保存
              </LoadingButton>
            </Grid>
          </Grid>
        </>
      )}
    </Formik>
  )
}

export type DeviceEditProps = {
  isLoading?: boolean
  id?: DeviceInsertInput['id']
  onSubmit?: FnSubmitDevice
}

export const DeviceEdit = ({ id, isLoading, onSubmit }: DeviceEditProps) => {
  return (
    <InitialDeviceProvider id={id}>
      <DeviceEditInner isLoading={isLoading} onSubmit={onSubmit} />
    </InitialDeviceProvider>
  )
}
