import { useCallback } from 'react'
import { useField } from 'formik'
import { Alert, Popover, TextField } from '@mui/material'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import { useCreation } from 'ahooks'
import { isNil } from 'lodash-es'

import {
  PipeVoltageItemCondition,
  unitPipeVoltage,
} from '@/models/devices/type'
import { CalculateOffsetReturns } from '@/models/devices/calculate'
import { OffsetValueForm } from '@/app/components/offset-value-form'

export type FieldPipeVoltageConditionProps = {
  index: number
}

export const FieldPipeVoltageResult = ({
  index,
}: FieldPipeVoltageConditionProps) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: `pipeVoltage-items-${index}-popover`,
  })

  const [{ value: condition }] = useField<PipeVoltageItemCondition>(
    `pipeVoltage.items.${index}.condition`
  )

  const isConditionValid = !isNaN(Number(condition?.presetValue))

  const [{ value }, , { setValue }] = useField<
    CalculateOffsetReturns | undefined
  >(`pipeVoltage.items.${index}.value`)

  const valueStringify = useCreation(
    () =>
      isNil(value?.offset)
        ? ''
        : `${value?.offset}${unitPipeVoltage}(${value?.offsetRateStringify})`,
    [value]
  )

  const handleConfirm = useCallback(
    (result: CalculateOffsetReturns) => {
      setValue(result)
      popupState.close()
    },
    [popupState, setValue]
  )

  return (
    <>
      <TextField value={valueStringify} {...bindTrigger(popupState)} />
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {isConditionValid ? (
          <OffsetValueForm
            unit={unitPipeVoltage}
            length={3}
            presetLabel="管电压"
            presetValue={condition?.presetValue}
            showCalibrationFactor
            onConfirm={handleConfirm}
          />
        ) : (
          <Alert severity="warning">请先输入预设值</Alert>
        )}
      </Popover>
    </>
  )
}
