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

import { UHHVLDataCondition, UHHVLDataInput, UHHVLDataResult } from '../type'
import { calculateUHHVLData } from '../utils'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: UHHVLDataCondition
  input: UHHVLDataInput
  result: UHHVLDataResult
  onConfirm: (input: UHHVLDataInput, result: UHHVLDataResult) => void
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
    () =>
      `有用线束半值层（mmAl） @ ${condition.current.value}${condition.current.unit} ${condition.voltage.value}${condition.voltage.unit} ${condition.timeProduct.value}${condition.timeProduct.unit}`,
    [condition]
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
      const result = calculateUHHVLData(values)
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
                {values.map((value, index) => (
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
                {resultState.value}
                {resultState.unit}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledBox>
    </Modal>
  )
}
