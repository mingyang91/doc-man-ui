import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { FormApi, SubmissionErrors } from 'final-form'
import arrayMutators from 'final-form-arrays'
import { isEmpty } from 'lodash-es'
import { TextField } from 'mui-rff'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { MdAddCircle, MdDelete } from 'react-icons/md'

import Iconify from 'd/components/iconify'
import { Loading } from 'd/components/loading-screen'
import { JsonEditor } from 'd/components/highlight-syntax'

import { UUIDV4 } from 'm/presets'

import { inspectionEnumFormValidation, InspectionTypeFormData } from './utils'

export type InspectionFormFn = (
  value: InspectionTypeFormData,
  form: FormApi<InspectionTypeFormData>,
  callback?: (errors?: SubmissionErrors) => void
) => Promise<void>

interface InspectionFormProps {
  initialValue?: InspectionTypeFormData
  equipmentTypeId: UUIDV4
  isEdit?: boolean
  isLoading?: boolean
  onSubmit: InspectionFormFn
}

export const InspectionForm = ({
  initialValue,
  equipmentTypeId,
  isEdit,
  isLoading,
  onSubmit,
}: InspectionFormProps) => {
  return isEdit && isEmpty(initialValue) ? (
    <Loading />
  ) : (
    <Form<InspectionTypeFormData>
      validate={inspectionEnumFormValidation}
      initialValues={initialValue}
      mutators={{
        ...arrayMutators,
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submitting }) => (
        <Grid container spacing={3}>
          <Field
            name="equipmentTypeId"
            value={equipmentTypeId}
            component="input"
            type="hidden"
          />
          <Grid xs={12} md={6}>
            <TextField
              name="name"
              label="标识符"
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="displayName"
              label="检测项名称"
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="formula"
              label="计算公式"
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                常量列表
              </Typography>
              <Stack
                direction="column"
                alignItems="stretch"
                width="100%"
                spacing={0}
              >
                <FieldArray name="consts">
                  {({ fields }) => (
                    <>
                      {fields.map((name, index) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          key={name}
                        >
                          <TextField
                            name={name}
                            fullWidth
                            label={`常量 ${index + 1}`}
                            type="number"
                            sx={{ flex: 1 }}
                          />
                          <Button
                            title="删除"
                            sx={{ display: 'flex', height: '40px' }}
                            color="error"
                            onClick={() => fields.remove(index)}
                          >
                            <Iconify icon={MdDelete} />
                          </Button>
                        </Stack>
                      ))}
                      <ButtonGroup variant="text">
                        <Button
                          color="primary"
                          title="增加一条"
                          onClick={() => fields.push(0)}
                        >
                          <Iconify icon={MdAddCircle} />
                        </Button>
                      </ButtonGroup>
                    </>
                  )}
                </FieldArray>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="requirement.state.display"
              fullWidth
              label="状态检测合格条件描述"
              type="text"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="requirement.state.rule">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label="状态检测合格条件代码"
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={!!meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="requirement.acceptance.display"
              fullWidth
              label="验收检测合格条件描述"
              type="text"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="requirement.acceptance.rule">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label="验收检测合格条件代码"
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={!!meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="comment"
              label="备注"
              type="text"
              fullWidth
              multiline
              minRows={2}
              maxRows={8}
            />
          </Grid>
          <Grid xs={12} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start"></Box>
            <Box display="flex" justifyContent="flex-end">
              <LoadingButton
                type="button"
                variant="contained"
                disabled={pristine || submitting}
                loading={submitting || isLoading}
                onClick={handleSubmit}
              >
                {!isEdit ? '新增检测类型' : '保存检测类型'}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </Form>
  )
}
