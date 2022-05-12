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
import { merge } from 'lodash-es'

import { DeviceInsertInput } from '@/generated/graphql'

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
  isEdit?: boolean
  initialValues?: DeviceInsertInput
  onSubmit?: FnSubmitDevice
}

export const DeviceEdit = ({
  isEdit = false,
  initialValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => new Promise(() => {}),
}: DeviceEditProps) => {
  const _initialValues = merge(
    {
      requester: '',
      address: '',
      reportNo: '',
      modelNo: '',
      deviceNo: '',
      vendor: '',
      place: '',
      accordingTo: '',
      equipment: '',
      name: '',
      sampleNo: '',
      item: '',
    } as DeviceInsertInput,
    initialValues
  )

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {isEdit ? '编辑' : '新增'} 设备检验检测报告
      </Typography>
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
