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
  AECRepeatabilityDataCondition,
  AECRepeatabilityDataInput,
  AECRepeatabilityDataResult,
} from '../type'
import { calculateAECRepeatabilityData } from '../utils'

import i18n from 'strings/i18n'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: AECRepeatabilityDataCondition
  input: AECRepeatabilityDataInput
  result: AECRepeatabilityDataResult
  onConfirm: (
    input: AECRepeatabilityDataInput,
    result: AECRepeatabilityDataResult
  ) => void
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
    () => `有用线束半值层（mmAl） @ ${condition.value}${condition.unit}`,
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
        values: values.map(Number),
      },
      resultState
    )
  })

  useUpdateEffect(() => {
    if (values.every(value => !isNil(value))) {
      const result = calculateAECRepeatabilityData(values)
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
              <TableCell component="th">{i18n.t('测量值')}</TableCell>
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
