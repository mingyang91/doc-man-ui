import { DatePicker, TextField } from 'mui-rff'
import { Field } from 'react-final-form'

import { InspectionItemTypeSelectorElement } from '@@/inspection-item-type-selector/components/form-element'
import i18n from 'strings/i18n'

export const BaseFields = () => {
  return (
    <>
      <TextField
        name="equipmentRequester"
        label={i18n.t('委托单位')}
        fullWidth
        required
      />
      <TextField name="equipmentName" label={i18n.t('设备名称')} type="text" fullWidth />
      <TextField
        name="equipmentSampleId"
        label={i18n.t('样品标识')}
        type="text"
        fullWidth
      />
      <TextField name="equipmentModel" label={i18n.t('设备型号')} type="text" fullWidth />
      <TextField name="equipmentCode" label={i18n.t('设备编号')} type="text" fullWidth />
      <TextField
        name="equipmentManufacturer"
        label={i18n.t('制造厂商')}
        type="text"
        fullWidth
      />
      <TextField name="equipmentSite" label={i18n.t('设备场所')} type="text" fullWidth />
      <TextField
        name="inspectionBasis"
        label={i18n.t('检测依据')}
        type="text"
        fullWidth
      />
      <TextField
        name="inspectionInstrument"
        label={i18n.t('检测仪器')}
        type="text"
        fullWidth
      />
      <Field
        component={InspectionItemTypeSelectorElement}
        name="inspectionItem"
        label={i18n.t('检测项目')}
        fullWidth
        readOnly
      />
      <DatePicker
        name="inspectionDate"
        label={i18n.t('检测日期')}
        mask="____-__-__"
        inputFormat="YYYY-MM-DD"
      />
    </>
  )
}
