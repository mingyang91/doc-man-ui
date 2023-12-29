import { Grid2Props as GridProps, Unstable_Grid2 as Grid } from '@mui/material'
import { Field } from 'react-final-form'
import { useMemo } from 'react'

import { SerialNumber } from 'm/presets'

import { FromEquipment } from './components/from-equipment'
import {
  SerialNumberField,
  SerialTextField,
} from './components/serial-text-field'
import { useIsEdit } from '../../context/is-edit'

import { LocationSelectorElement } from '@@/location-selector'
import i18n from 'strings/i18n'

export interface HeaderFieldProps extends GridProps {
  initialSerialNumber?: SerialNumber
}

export const HeaderField = ({
  initialSerialNumber,
  ...restProps
}: HeaderFieldProps) => {
  const isEdit = useIsEdit()

  const SerialField = useMemo(() => {
    return isEdit ? (
      <SerialNumberField initialValue={initialSerialNumber} />
    ) : (
      <SerialTextField
        variant="filled"
        InputProps={{ readOnly: true }}
        label=" "
        value={i18n.t('保存后可编号')}
      />
    )
  }, [isEdit, initialSerialNumber])

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
        {SerialField}
      </Grid>
      <Grid xs={12} md={12} lg={8} display="flex" justifyContent="flex-end">
        <Field
          component={LocationSelectorElement}
          name="inspectionAddress"
          label={i18n.t('地址')}
          fullWidth
          newLineForDetail={false}
        />
      </Grid>
    </Grid>
  )
}
