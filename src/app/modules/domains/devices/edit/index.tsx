import { useMemo } from 'react'
import { Formik, FormikHelpers } from 'formik'
import {
  Typography,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { RiMore2Fill } from 'react-icons/ri'

import { DeviceInsertInput } from '@/generated/graphql'
import { initDeviceInput } from '@/models/devices'

import { FormHeader } from './components/form-header'
import { FormDetail } from './components/form-detail'

export type FnSubmitDevice = (
  values: DeviceInsertInput,
  helper: FormikHelpers<DeviceInsertInput>
) => Promise<void>

export type ComponentInFormikProps = {
  isSubmitting?: boolean
  submitForm?: FnSubmitDevice
}

export type DeviceEditProps = {
  isLoading?: boolean
  initialValues?: DeviceInsertInput
  onSubmit?: FnSubmitDevice
}

export const DeviceEdit = ({
  initialValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => new Promise(() => {}),
}: DeviceEditProps) => {
  const _initialValues = useMemo(
    () => initDeviceInput(initialValues),
    [initialValues]
  )

  return (
    <>
      <Formik initialValues={_initialValues} onSubmit={onSubmit}>
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
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  保存
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Formik>
    </>
  )
}
