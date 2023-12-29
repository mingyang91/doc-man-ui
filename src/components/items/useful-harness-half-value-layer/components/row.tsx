import { Box, TableRow, TableCell, Button, SxProps, Theme } from '@mui/material'
import { useMemo } from 'react'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isNil } from 'lodash-es'
import { produce } from 'immer'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { UnitValue } from 'm/common'

import { UHHVLData } from '../type'
import { initialUHHVLData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

import i18n from 'strings/i18n'


export interface UHHVLRowProps {
  value: UHHVLData
  onChange: (value: UHHVLData) => void
}

export const UHHVLRow = ({ value, onChange }: UHHVLRowProps) => {
  const [open, setOpen] = useBoolean(false)

  const finalValue = useMemo(() => initialUHHVLData(value), [value])

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
        ? i18n.t('点击填写结果')
        : `${finalValue.result.value}${finalValue.result.unit}`,
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
    (value: UnitValue, type: 'voltage' | 'current' | 'timeProduct') => {
      onChange(
        produce(finalValue, draft => {
          draft.condition[type] = value
        })
      )
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
              label={i18n.t('电压')}
              value={finalValue.condition.voltage}
              onChange={value => onConditionChange(value, 'voltage')}
            />
            <TextFieldWithUnit
              variant="standard"
              sx={fieldSx}
              label={i18n.t('电流')}
              value={finalValue.condition.current}
              onChange={value => onConditionChange(value, 'current')}
            />
            <TextFieldWithUnit
              variant="standard"
              sx={fieldSx}
              label={i18n.t('时间')}
              value={finalValue.condition.timeProduct}
              onChange={value => onConditionChange(value, 'timeProduct')}
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
