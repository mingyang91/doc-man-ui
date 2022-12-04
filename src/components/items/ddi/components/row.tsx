import { Theme, SxProps, TableRow, TableCell, Box, Button } from '@mui/material'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { isNil } from 'lodash-es'
import { useMemo } from 'react'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { UnitValue } from 'm/common'

import { DdiData } from '../type'
import { formatResult, initialDdiData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

export interface DdiRowProps {
  name: string
  value: DdiData
  onChange: (value: DdiData) => void
}

export const DdiRow = ({ name, value, onChange }: DdiRowProps) => {
  const [open, setOpen] = useBoolean(false)

  const finalValue = useMemo(() => initialDdiData(value), [value])

  const fieldSx = useMemo<SxProps<Theme>>(
    () => ({
      marginInlineStart: '6px',
      width: '30%',
    }),
    []
  )

  const ResultText = useMemo(
    () =>
      isNil(finalValue.result)
        ? '点击填写结果'
        : formatResult(finalValue.result),
    [finalValue.result]
  )

  const onConfirm = useMemoizedFn<CalcModalProps['onConfirm']>(
    (input, result) => {
      onChange(
        produce(finalValue, draft => {
          draft.input = input
          draft.result = result
        })
      )
      setOpen.setFalse()
    }
  )

  const onConditionChange = useMemoizedFn(
    (value: UnitValue, type: 'voltage' | 'current' | 'value') => {
      onChange(
        produce(finalValue, draft => {
          draft.condition.value = value
        })
      )
    }
  )

  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Box display="flex">
            <TextFieldWithUnit
              variant="standard"
              sx={fieldSx}
              label="值"
              value={finalValue.condition.value}
              onChange={value => onConditionChange(value, 'value')}
            />
          </Box>
          <Box display="flex">
            <TextFieldWithUnit
              sx={fieldSx}
              variant="standard"
              label="电压"
              value={finalValue.condition.voltage}
              onChange={value => onConditionChange(value, 'voltage')}
            />
            <TextFieldWithUnit
              variant="standard"
              sx={fieldSx}
              label="电流"
              value={finalValue.condition.current}
              onChange={value => onConditionChange(value, 'current')}
            />
          </Box>
        </TableCell>
        <TableCell>
          <Button
            variant="text"
            color="primary"
            onClick={() => setOpen.setTrue()}
          >
            {ResultText}
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <CalcModal
          condition={finalValue.condition}
          input={finalValue.input}
          result={finalValue.result}
          onConfirm={onConfirm}
          onClose={setOpen.setFalse}
        />
      )}
    </>
  )
}
