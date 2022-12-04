import { Box, TableRow, TableCell, Button, SxProps, Theme } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isNil } from 'lodash-es'
import { useImmer } from 'use-immer'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { AECResponseData, AECResponseDataCondition } from '../type'
import { initialAECResponseData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

export interface AECResponseRowProps {
  value: AECResponseData
  onChange: (value: AECResponseData) => void
}

export const AECResponseRow = ({ value, onChange }: AECResponseRowProps) => {
  const [open, setOpen] = useBoolean(false)
  const [finalValue, setFinalValue] = useImmer(initialAECResponseData(value))

  const fieldSx = useMemo<SxProps<Theme>>(
    () => ({
      marginInlineStart: '6px',
      width: '30%',
    }),
    []
  )

  const ResultText = useMemo(
    () =>
      isNil(finalValue.result?.value)
        ? '点击填写结果'
        : `${finalValue.result.prefix}${finalValue.result.value}${
            finalValue.result.unit || ''
          }`,
    [finalValue.result]
  )

  const onConditionChange = useMemoizedFn(
    (condition: AECResponseDataCondition) => {
      setFinalValue(draft => {
        draft.condition = condition
      })
    }
  )

  const onConfirm = useMemoizedFn<CalcModalProps['onConfirm']>(
    (input, result) => {
      setFinalValue(draft => {
        draft.input = input
        draft.result = result
      })
      setOpen.setFalse()
    }
  )

  useEffect(() => {
    onChange(finalValue)
  }, [finalValue, onChange])

  return (
    <>
      <TableRow>
        <TableCell>
          <Box display="flex">
            <TextFieldWithUnit
              sx={fieldSx}
              variant="standard"
              label="检测条件"
              value={finalValue.condition}
              onChange={onConditionChange}
            />
          </Box>
        </TableCell>
        <TableCell>
          <Button variant="text" color="primary" onClick={setOpen.setTrue}>
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
