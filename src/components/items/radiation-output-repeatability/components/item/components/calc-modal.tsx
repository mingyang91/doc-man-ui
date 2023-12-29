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
  RORDataItemInput,
  RORDataItemResult,
  RORDataItemCondition,
} from '../../../type'
import { calculateRORItemResult } from '../../../utils'

import i18n from 'strings/i18n'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: RORDataItemCondition
  input: RORDataItemInput
  result: RORDataItemResult
  onConfirm: (input: RORDataItemInput, result: RORDataItemResult) => void
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
      `辐射输出量重复性 @  ${condition.current.value}${condition.current.value}, ${condition.voltage.value} ${condition.voltage.unit}, ${condition.timeProduct.value}${condition.timeProduct.unit}`,
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
      const result = calculateRORItemResult(values, condition)
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
              <TableCell component="th">{i18n.t('实测值')}({input.unit})</TableCell>
              <TableCell component="th">{i18n.t('结果')}</TableCell>
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
