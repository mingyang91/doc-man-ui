import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { DatePicker } from 'formik-mui-lab'
import { Grid } from '@mui/material'

import { ComponentInFormikProps } from '../index'

export const FormHeader = (_: ComponentInFormikProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="requester"
          label="委托单位"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="address"
          label="检测地址"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="name"
          label="设备名称"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="sampleNo"
          label="样品标识"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="modelNo"
          label="设备型号"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="deviceNo"
          label="设备编号"
          type="text"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="vendor"
          label="制造厂商"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="place"
          label="设备场所"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="accordingTo"
          label="检测依据"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="equipment"
          label="检测仪器"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="equipment"
          label="检测仪器"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name="item"
          label="检测项目"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={DatePicker}
          name="item"
          label="检测日期"
          type="text"
          mask="____-__-__"
          inputFormat="YYYY-MM-DD"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}
