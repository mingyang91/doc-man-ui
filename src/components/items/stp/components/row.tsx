import { TableRow, TableCell, Box, Button, SxProps, Theme } from '@mui/material'
import { useBoolean, useMemoizedFn } from 'ahooks'
import produce from 'immer'
import { isNil } from 'lodash-es'
import { useMemo } from 'react'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { UnitValue } from 'm/common'

import { StpData } from '../type'
import { formatResult, initialStpData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

export interface STPRowProps {
  name: string
  value: StpData
  onChange(value: StpData): void
}

export function STPRow({ name, value, onChange }: STPRowProps) {
  const [open, setOpen] = useBoolean(false)

  const fieldSx = useMemo<SxProps<Theme>>(
    () => ({
      marginInlineStart: '6px',
      width: '30%',
    }),
    []
  )

  const ResultText = useMemo(
    () =>
      isNil(value.result)
        ? '点击填写结果'
        : `R² = ` + formatResult(value.result),
    [value.result]
  )

  const onConfirm = useMemoizedFn<CalcModalProps['onConfirm']>(
    (input, result) => {
      onChange(
        produce(value, draft => {
          draft.input = input
          draft.result = result
        })
      )
      setOpen.setFalse()
    }
  )

  const onConditionChange = useMemoizedFn((uv: UnitValue, index: number) => {
    onChange(
      produce(value, draft => {
        if (draft.condition?.values[index]) {
          draft.condition!.values[index] = uv
        }
      })
    )
  })

  return (
    <>
      <TableRow>
        <TableCell align="center">
          {value.condition?.values.map((v, index) => (
            <Box display="flex" key={index}>
              <TextFieldWithUnit
                variant="standard"
                sx={fieldSx}
                label="辐射"
                value={v}
                onChange={value => onConditionChange(value, index)}
              />
            </Box>
          ))}
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
          condition={value.condition}
          input={value.input}
          result={value.result || 0}
          onConfirm={onConfirm}
          onClose={setOpen.setFalse}
        />
      )}
    </>
  )
}
