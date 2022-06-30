import { useCallback } from 'react'
import { useField } from 'formik'
import { Popover, TextField } from '@mui/material'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import { useCreation } from 'ahooks'

import { RepeatabilityForm } from '@/app/components/repeatability-form'

import {
  RadiationOutputItemCondition,
  RadiationOutputReturns,
} from '@models/devices/radiation-output'

export type FieldPipeVoltageConditionProps = {
  index: number
}

export const FieldPipeVoltageResult = ({
  index,
}: FieldPipeVoltageConditionProps) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: `radiation-output-items-popover`,
  })

  const [{ value: condition }] = useField<RadiationOutputItemCondition>(
    `radiationOutput.items.${index}.condition`
  )

  const [{ value }, , { setValue }] = useField<
    RadiationOutputReturns | undefined
  >(`radiationOutput.items.${index}.value`)

  const valueStringify = useCreation(
    () => value?.percentage || '',
    [value?.percentage]
  )

  const handleConfirm = useCallback(
    (result: RadiationOutputReturns) => {
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
        <RepeatabilityForm
          length={5}
          condition={condition}
          onConfirm={handleConfirm}
        />
      </Popover>
    </>
  )
}
