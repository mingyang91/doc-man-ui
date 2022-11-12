import { Box, TableRow, TableCell, Button, SxProps, Theme } from '@mui/material'
import { useMemo } from 'react'
import { MdDelete } from 'react-icons/md'
import { produce } from 'immer'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isNil } from 'lodash-es'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'
import Iconify from 'd/components/iconify'

import { TVIDDataItem } from '../../type'
import { initialTVIDDataItem } from '../../utils'
import { CalcModal, CalcModalProps } from './components/calc-modal'

export interface TVIDItemProps {
  index: number
  value: TVIDDataItem
  onChange: (value: TVIDDataItem) => void
  onRemove: () => void
}

export const TVIDItem = ({
  index,
  value,
  onChange,
  onRemove,
}: TVIDItemProps) => {
  const [open, setOpen] = useBoolean(false)

  const finalValue = useMemo(
    () => initialTVIDDataItem(value, [], index),
    [index, value]
  )
  const fieldSx = useMemo<SxProps<Theme>>(
    () => ({
      marginInlineStart: '6px',
      width: '30%',
    }),
    []
  )

  const ResultText = useMemo(
    () =>
      isNil(finalValue.result?.scalar?.value)
        ? '点击填写结果'
        : `${finalValue.result.percentage.value}${finalValue.result.percentage.unit}(${finalValue.result.scalar.value}${finalValue.result.scalar.unit})`,
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
    <TableRow>
      <TableCell>
        <Button
          sx={{ width: '120px' }}
          startIcon={<Iconify icon={MdDelete} />}
          onClick={onRemove}
        >
          删除此项
        </Button>
      </TableCell>
      <TableCell>
        <Box display="flex">
          <TextFieldWithUnit
            sx={fieldSx}
            variant="standard"
            label="管电流"
            value={finalValue.condition.factor.current}
          />
          <TextFieldWithUnit
            variant="standard"
            sx={fieldSx}
            label="时间积"
            value={finalValue.condition.factor.timeProduct}
          />
          <TextFieldWithUnit
            variant="standard"
            sx={fieldSx}
            label="预设值"
            value={finalValue.condition.presets}
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
        {open && (
          <CalcModal
            condition={finalValue.condition}
            input={finalValue.input}
            result={finalValue.result}
            onConfirm={onConfirm}
            onClose={setOpen.setFalse}
          />
        )}
      </TableCell>
    </TableRow>
  )
}
