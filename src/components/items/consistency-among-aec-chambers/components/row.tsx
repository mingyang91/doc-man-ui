import { Box, TableRow, TableCell, Button, SxProps, Theme } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isNil } from 'lodash-es'
import { useImmer } from 'use-immer'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import {
  ConsistencyAmongAECChambersData,
  ConsistencyAmongAECChambersDataCondition,
} from '../type'
import { initialConsistencyAmongAECChambersData } from '../utils'
import { CalcModal, CalcModalProps } from './calc-modal'

import i18n from 'strings/i18n'


export interface ConsistencyAmongAECChambersRowProps {
  value: ConsistencyAmongAECChambersData
  onChange: (value: ConsistencyAmongAECChambersData) => void
}

export const ConsistencyAmongAECChambersRow = ({
  value,
  onChange,
}: ConsistencyAmongAECChambersRowProps) => {
  const [open, setOpen] = useBoolean(false)
  const [finalValue, setFinalValue] = useImmer(
    initialConsistencyAmongAECChambersData(value)
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
      isNil(finalValue.result?.value)
        ? i18n.t('点击填写结果')
        : `${finalValue.result.value}${finalValue.result.unit || ''}`,
    [finalValue.result]
  )

  const onConditionChange = useMemoizedFn(
    (condition: ConsistencyAmongAECChambersDataCondition) => {
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
              label={i18n.t('检测条件')}
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
