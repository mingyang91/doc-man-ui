import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { DatePicker } from 'formik-mui-x-date-pickers'

import { InspectiontypeSelectorFormik } from '@@/inspectiontype-selector/components/formik'
import { LocationSelectorFormik } from '@@/location-selector'

export const BaseFields = () => {
  return (
    <>
      <Field
        component={TextField}
        name="equipmentRequester"
        label="委托单位"
        fullWidth
        required
      />
      <Field
        component={LocationSelectorFormik}
        name="inspectionAddress"
        label="检测地址"
        fullWidth
        newLineForDetail={false}
      />
      <Field
        component={TextField}
        name="equipmentName"
        label="设备名称"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="equipmentSampleId"
        label="样品标识"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="equipmentModel"
        label="设备型号"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="equipmentCode"
        label="设备编号"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="equipmentManufacturer"
        label="制造厂商"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="equipmentSite"
        label="设备场所"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="inspectionBasis"
        label="检测依据"
        type="text"
        fullWidth
      />
      <Field
        component={TextField}
        name="inspectionInstrument"
        label="检测仪器"
        type="text"
        fullWidth
      />
      <Field
        component={InspectiontypeSelectorFormik}
        name="inspectionItem"
        label="检测项目"
        fullWidth
      />
      <Field
        component={DatePicker}
        name="inspectionDate"
        label="检测日期"
        mask="____-__-__"
        inputFormat="YYYY-MM-DD"
        fullWidth
      />
    </>
  )
}
