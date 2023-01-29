import {
  TableRow,
  TableCell,
  Box,
  Button,
  SxProps,
  Theme,
  TextField,
} from '@mui/material'
import { useBoolean, useMemoizedFn } from 'ahooks'
import produce from 'immer'
import { isNil } from 'lodash-es'
import { useMemo } from 'react'

import { RUData, RUDataInput } from '../type'
import { formatResult } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

export interface RURowProps {
  name: string
  value: RUData
  equation?: [number, number] // from STP
  onChange(value: RUData): void
}

export function RURow({ value, equation, onChange }: RURowProps) {
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
        : `CV = ` + formatResult(value.result),
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

  const onConditionChange = useMemoizedFn((data: string) => {
    onChange(
      produce(value, draft => {
        if (draft.condition?.item) {
          draft.condition.item = data
        }
      })
    )
  })

  const input: RUDataInput | undefined = value.input
    ? { ...value.input, equation }
    : undefined
  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Box display="flex">
            <TextField
              variant="standard"
              sx={fieldSx}
              label="辐射"
              value={value.condition?.item}
              onChange={evt => onConditionChange(evt.target.value)}
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
          condition={value.condition}
          input={input}
          result={value.result || 0}
          onConfirm={onConfirm}
          onClose={setOpen.setFalse}
        />
      )}
    </>
  )
}
