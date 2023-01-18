import { ChangeEventHandler, useMemo } from 'react'
import {
  styled,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material'
import { useImmer } from 'use-immer'
import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import { isNil } from 'lodash-es'

import { Modal, ModalProps } from 'd/components/modal'

import { formatUnitValue } from 'm/common'

import { DdiDataCondition, DdiDataInput, DdiDataResult } from '../type'
import { calculateDdiData, formatCondition } from '../utils'

import { InputEditable } from '@@/input-editable'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: DdiDataCondition
  input: DdiDataInput
  result: DdiDataResult
  onConfirm: (input: DdiDataInput, result: DdiDataResult) => void
  onClose: () => void
}

export const CalcModal = ({
  condition,
  input,
  result,
  onConfirm,
  onClose,
}: CalcModalProps) => {
  const title = useMemo<string>(
    () => `探测器剂量指示（DDI） @ ${formatCondition(condition)}`,
    [condition]
  )

  const [value, setValue] = useImmer({
    baseValue: String(input.baseValue),
    values: input.values.map(String),
  })

  const onInputBaseValue = useMemoizedFn<ChangeEventHandler<HTMLInputElement>>(
    e => {
      setValue(draft => {
        draft.baseValue = e.currentTarget.value
      })
    }
  )

  const onInput = useMemoizedFn((value: string, index: number) => {
    setValue(draft => {
      draft.values[index] = value
    })
  })

  const [resultState, setResultState] = useImmer(result)

  const onChangeResultDescription = useMemoizedFn((desc: string) => {
    setResultState(draft => {
      draft.description = desc
    })
  })

  const handleConfirm = useMemoizedFn(() => {
    onConfirm(
      {
        ...input,
        baseValue: isNaN(Number(value.baseValue))
          ? input.baseValue
          : Number(value.baseValue),
        values: value.values.map(v => (isNaN(Number(v)) ? 0 : Number(v))),
      },
      resultState
    )
  })

  useUpdateEffect(() => {
    if (
      value.values.every(value => !isNil(value)) &&
      !isNaN(Number(value.baseValue))
    ) {
      const result = calculateDdiData(value.values, value.baseValue)
      setResultState(prev => ({
        ...prev,
        ...result,
      }))
    }
  }, [value.baseValue, ...value.values])

  return (
    <Modal
      isOpen
      maxWidth={false}
      title={title}
      onClose={() => onClose()}
      onConfirm={handleConfirm}
    >
      <StyledBox>
        <Table>
          <colgroup>
            <col width="70%" />
            <col width="30%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell component="th">测量值</TableCell>
              <TableCell component="th">结果</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  label="基线"
                  value={value.baseValue}
                  onChange={onInputBaseValue}
                />
                {value.values.map((value, index) => (
                  <Box key={index}>
                    <TextField
                      label={`${index + 1}`}
                      value={value}
                      onChange={e => onInput(e.target.value, index)}
                    />
                  </Box>
                ))}
              </TableCell>
              <TableCell>
                <Box>
                  {formatUnitValue(resultState.scalar)}(
                  {formatUnitValue(resultState.percentage)})
                </Box>
                <Box>
                  <InputEditable
                    value={resultState.description}
                    onChange={onChangeResultDescription}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledBox>
    </Modal>
  )
}
