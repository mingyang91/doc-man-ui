import { FormTable } from '@/app/components/form-table'

import { ComponentInFormikProps } from '../../index'

import { FieldPipeVoltage } from './components/pipe-voltage'

export const FormDetail = (_: ComponentInFormikProps) => {
  return (
    <FormTable>
      <FieldPipeVoltage />
    </FormTable>
  )
}
