import { Box, TableRow, TableCell, Button, SxProps, Theme } from '@mui/material'
import { useMemo } from 'react'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isNil } from 'lodash-es'
import { produce } from 'immer'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { AECResponseData } from '../type'
import { initialAECResponseData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

export interface AECResponseRowProps {
  value: AECResponseData
  onChange: (value: AECResponseData) => void
}

export const AECResponseRow = ({ value, onChange }: AECResponseRowProps) => {
  const [open, setOpen] = useBoolean(false)
  const finalValue = useMemo(() => initialAECResponseData(value), [value])

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
        : `${finalValue.result.prefix}${finalValue.result.value}`,
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
