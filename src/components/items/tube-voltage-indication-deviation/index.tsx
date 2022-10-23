import { FieldRenderProps } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

import { InspectionReportItem } from 'm/presets'

import { TVIDData } from './type'

/**
 * Tube Voltage Indication Deviation
 * 管电压指示偏离
 */

type TVIDItemProps = FieldRenderProps<InspectionReportItem<TVIDData>>

const TVIDItem = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: TVIDItemProps) => {
  return (
    <>
      <FieldArray name={`${name}.data`}></FieldArray>
    </>
  )
}

export default TVIDItem
