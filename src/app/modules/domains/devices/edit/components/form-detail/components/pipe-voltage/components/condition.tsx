import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { Box, InputAdornment } from '@mui/material'

import { NumberFieldRef } from '@/components/number-field-ref'
import { unitPipeVoltage } from '@models/devices/pipe-voltage'

export type FieldPipeVoltageConditionProps = {
  index: number
}

export const FieldPipeVoltageCondition = ({
  index,
}: FieldPipeVoltageConditionProps) => {
  return (
    <>
      <Box>
        <Field
          name={`pipeVoltage.items.${index}.condition.loadingFactor`}
          label="加载因素"
          fullWidth
          component={TextField}
        ></Field>
      </Box>
      <Box>
        <Field
          name={`pipeVoltage.items.${index}.condition.presetValue`}
          fullWidth
          label="预设值"
          component={TextField}
          InputProps={{
            inputComponent: NumberFieldRef,
            endAdornment: (
              <InputAdornment position="end">{unitPipeVoltage}</InputAdornment>
            ),
            inputProps: {
              displayType: 'input',
            },
          }}
        />
      </Box>
    </>
  )
}
