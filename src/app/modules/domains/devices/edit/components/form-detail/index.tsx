import { FormTable } from '@/app/components/form-table'

import { ComponentInFormikProps } from '../../index'

import { FieldPipeVoltage } from './components/pipe-voltage'
import { FieldRadiationOutput } from './components/radiation-output'

/**
 * 设备检验检测报告检测结果项目
 * @param _ Formik props
 */
export const FormDetail = (_: ComponentInFormikProps) => {
  return (
    <FormTable>
      <FieldPipeVoltage />
      <FieldRadiationOutput />
    </FormTable>
  )
}
