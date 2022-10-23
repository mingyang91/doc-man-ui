import { Grid2Props as GridProps, Unstable_Grid2 as Grid } from '@mui/material'
import { Field } from 'react-final-form'

import { SerialNumber } from 'm/presets'

import { EquipmentTypeSelectorField } from './components/equipment-type-selector-field'
import { FromEquipment } from './components/from-equipment'
import {
  SerialNumberField,
  SerialTextField,
} from './components/serial-text-field'

import { LocationSelectorElement } from '@@/location-selector'

export interface HeaderFieldProps extends GridProps {
  isEdit?: boolean
  initialSerialNumber?: SerialNumber
}

export const HeaderField = ({
  isEdit,
  initialSerialNumber,
  ...restProps
}: HeaderFieldProps) => {
  return (
    <Grid
      {...restProps}
      container
      rowSpacing={2}
      columnSpacing={3}
      paddingBottom={0}
    >
      <Grid xs={12} md={12} lg={4}>
        <FromEquipment />
      </Grid>
      <Grid xs={12} md={12} lg={8} display="flex" justifyContent="flex-end">
        {isEdit ? (
          <SerialNumberField initialValue={initialSerialNumber} />
        ) : (
          <SerialTextField
            variant="filled"
            InputProps={{ readOnly: true }}
            label=" "
            value="保存后可编号"
          />
        )}
      </Grid>
      <Grid xs={12} md={12} lg={4}>
        <EquipmentTypeSelectorField
          label="设备类型"
          name="equipmentType"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid xs={12} md={12} lg={8} display="flex" justifyContent="flex-end">
        <Field
          component={LocationSelectorElement}
          name="inspectionAddress"
          label="检测地址"
          fullWidth
          newLineForDetail={false}
        />
      </Grid>
    </Grid>
  )
}
