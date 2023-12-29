import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { FormApi, SubmissionErrors } from 'final-form'
import arrayMutators from 'final-form-arrays'
import { isEmpty } from 'lodash-es'
import { TextField, Select } from 'mui-rff'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { MdAddCircle, MdDelete } from 'react-icons/md'

import Iconify from 'd/components/iconify'
import { Loading } from 'd/components/loading-screen'
import { JsonEditor } from 'd/components/highlight-syntax'

import { UUIDV4 } from 'm/presets'

import {
  inspectionTypeEnumFormValidation,
  InspectionTypeEnumFormData,
} from './utils'

import i18n from 'strings/i18n'


export type InspectionEnumFormFn = (
  value: InspectionTypeEnumFormData,
  form: FormApi<InspectionTypeEnumFormData>,
  callback?: (errors?: SubmissionErrors) => void
) => Promise<void>

interface InspectionEnumFormProps {
  initialValue?: InspectionTypeEnumFormData
  equipmentTypeId: UUIDV4
  isEdit?: boolean
  isLoading?: boolean
  onSubmit: InspectionEnumFormFn
}

export const InspectionEnumForm = ({
  initialValue,
  equipmentTypeId,
  isEdit,
  isLoading,
  onSubmit,
}: InspectionEnumFormProps) => {
  return isEdit && isEmpty(initialValue) ? (
    <Loading />
  ) : (
    <Form<InspectionTypeEnumFormData>
      validate={inspectionTypeEnumFormValidation}
      initialValues={initialValue}
      mutators={{
        ...arrayMutators,
      }}
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submitting, touched, errors }) => (
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
              label={i18n.t('标识符')}
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="displayName"
              label={i18n.t('检测项名称')}
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="formula"
              label={i18n.t('计算公式')}
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Select name="type" label={i18n.t('检测类型')} required fullWidth>
              <MenuItem value="1">{i18n.t('通用检测项目')}</MenuItem>
              <MenuItem value="2">{i18n.t('专用检测项目')}</MenuItem>
            </Select>
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="condition">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label={i18n.t('检测条件')}
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="index"
              label={i18n.t('序号')}
              type="number"
              required
              fullWidth
              helperText="用于排序, 数字越小越靠前, 序号不是唯一的"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Typography variant="body1" fontWeight="600">
                {i18n.t('常量列表')}
              </Typography>
              <Stack
                direction="column"
                alignItems="stretch"
                width="100%"
                spacing={0}
              >
                <FieldArray name="consts">
                  {({ fields, meta }) => (
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
                            title={i18n.t('删除')}
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
                          variant="contained"
                          size="medium"
                          title={i18n.t('增加一条')}
                          onClick={() => fields.push(0)}
                        >
                          <Iconify icon={MdAddCircle} />
                        </Button>
                      </ButtonGroup>
                      {meta.error && meta.touched && (
                        <Typography color="error">{meta.error}</Typography>
                      )}
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
              label={i18n.t('状态检测合格条件描述')}
              type="text"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="requirement.state.rule">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label={i18n.t('状态检测合格条件代码')}
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="requirement.acceptance.display"
              fullWidth
              label={i18n.t('验收检测合格条件描述')}
              type="text"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="requirement.acceptance.rule">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label={i18n.t('验收检测合格条件代码')}
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <Field name="data">
              {({ input, meta }) => (
                <JsonEditor
                  sx={{ width: '100%' }}
                  label={i18n.t('数据')}
                  value={input.value}
                  onChange={input.onChange}
                  helperText={meta.error}
                  showHelperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="comment"
              label={i18n.t('备注')}
              type="text"
              fullWidth
              multiline
              minRows={2}
              maxRows={8}
            />
          </Grid>
          <Grid xs={12} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start">
              {touched && errors && (
                <Typography component="div" color="error">
                  {Object.entries(errors).map(([key, value]) => (
                    <div key={key}>{value}</div>
                  ))}
                </Typography>
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <LoadingButton
                type="button"
                variant="contained"
                disabled={pristine || submitting}
                loading={submitting || isLoading}
                onClick={handleSubmit}
              >
                {!isEdit ? i18n.t('新增检测类型') : i18n.t('保存检测类型')}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </Form>
  )
}
