import { useMemo, useState } from 'react'
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

import {
  TVIDDataItemInput,
  TVIDDataResult,
  TVIDDataCondition,
} from '../../../type'
import { calculateTVIDItemResult } from '../../../utils'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: TVIDDataCondition
  input: TVIDDataItemInput
  result: TVIDDataResult
  onConfirm: (input: TVIDDataItemInput, result: TVIDDataResult) => void
  onClose: () => void
}

export const CalcModal = ({
  condition,
  input,
  result,
  onConfirm,
  onClose,
}: CalcModalProps) => {
  const title = useMemo(
    () =>
      `管电压指示偏离 -  ${condition.presets.value} / ${condition.presets.unit}`,
    [condition.presets.unit, condition.presets.value]
  )

  const [values, setValue] = useImmer(input.values.map(String))

  const onInput = useMemoizedFn((value: string, index: number) => {
    setValue(draft => {
      draft[index] = value
    })
  })

  const [resultState, setResultState] = useState(result)

  const handleConfirm = useMemoizedFn(() => {
    onConfirm(
      {
        ...input,
        values: values.map(Number),
      },
      resultState
    )
  })

  useUpdateEffect(() => {
    if (values.every(value => !isNil(value))) {
      const result = calculateTVIDItemResult(
        values,
        condition.presets.value,
        input.offset
      )
      setResultState(result)
    }
  }, [...values, setResultState])

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
            <col width="40%" />
            <col width="30%" />
            <col width="30%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell component="th">实测值({input.unit})</TableCell>
              <TableCell component="th">校准因子</TableCell>
              <TableCell component="th">结果</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {values.map((value, index) => (
                  <Box key={index}>
                    <TextField
                      label={`${index}`}
                      value={value}
                      onChange={e => onInput(e.target.value, index)}
                    />
                  </Box>
                ))}
              </TableCell>
              <TableCell>{input.offset}</TableCell>
              <TableCell>
                {resultState.scalar.value}
                {result.scalar.unit}({resultState.percentage.value}
                {result.percentage.unit})
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledBox>
    </Modal>
  )
}
