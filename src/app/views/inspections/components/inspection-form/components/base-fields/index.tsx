import { DatePicker, TextField } from 'mui-rff'
import { Field } from 'react-final-form'

import { InspectionItemTypeSelectorElement } from '@@/inspection-item-type-selector/components/form-element'

export const BaseFields = () => {
  return (
    <>
      <TextField
        name="equipmentRequester"
        label="委托单位"
        fullWidth
        required
      />
      <TextField name="equipmentName" label="设备名称" type="text" fullWidth />
      <TextField
        name="equipmentSampleId"
        label="样品标识"
        type="text"
        fullWidth
      />
      <TextField name="equipmentModel" label="设备型号" type="text" fullWidth />
      <TextField name="equipmentCode" label="设备编号" type="text" fullWidth />
      <TextField
        name="equipmentManufacturer"
        label="制造厂商"
        type="text"
        fullWidth
      />
      <TextField name="equipmentSite" label="设备场所" type="text" fullWidth />
      <TextField
        name="inspectionBasis"
        label="检测依据"
        type="text"
        fullWidth
      />
      <TextField
        name="inspectionInstrument"
        label="检测仪器"
        type="text"
        fullWidth
      />
      <Field
        component={InspectionItemTypeSelectorElement}
        name="inspectionItem"
        label="检测项目"
        fullWidth
        readOnly
      />
      <DatePicker
        name="inspectionDate"
        label="检测日期"
        mask="____-__-__"
        inputFormat="YYYY-MM-DD"
      />
    </>
  )
}
