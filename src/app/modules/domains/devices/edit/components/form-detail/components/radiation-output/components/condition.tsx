import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { Box, InputAdornment } from '@mui/material'

import { NumberFieldRef } from '@/components/number-field-ref'
import { unitTimeProduce } from '@/models/devices/radiation-output'
import { unitCurrent } from '@/models/devices/type'
import { unitPipeVoltage } from '@/models/devices/pipe-voltage'

export type FieldRadiationOutputItemConditionProps = {
  index: number
}

export const FieldRadiationOutputItemCondition = ({
  index,
}: FieldRadiationOutputItemConditionProps) => {
  return (
    <>
      <Box>
        <Field
          name={`radiationOutput.items.${index}.condition.timeProduce`}
          fullWidth
          label="管电流时间积"
          component={TextField}
          InputProps={{
            inputComponent: NumberFieldRef,
            endAdornment: (
              <InputAdornment position="end">{unitTimeProduce}</InputAdornment>
            ),
            inputProps: {
              displayType: 'input',
            },
          }}
        />
      </Box>
      <Box>
        <Field
          name={`pipeVoltage.items.${index}.condition.current`}
          fullWidth
          label="预设电流"
          component={TextField}
          InputProps={{
            inputComponent: NumberFieldRef,
            endAdornment: (
              <InputAdornment position="end">{unitCurrent}</InputAdornment>
            ),
            inputProps: {
              displayType: 'input',
            },
          }}
        />
      </Box>
      <Box>
        <Field
          name={`pipeVoltage.items.${index}.condition.voltage`}
          fullWidth
          label="预设电压"
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
