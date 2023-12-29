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

import { Modal, ModalProps } from 'd/components/modal'

import {
  ConsistencyAmongAECChambersDataCondition,
  ConsistencyAmongAECChambersDataInput,
  ConsistencyAmongAECChambersDataResult,
} from '../type'
import { calculateConsistencyAmongAECChambersData } from '../utils'

import i18n from 'strings/i18n'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: ConsistencyAmongAECChambersDataCondition
  input: ConsistencyAmongAECChambersDataInput
  result: ConsistencyAmongAECChambersDataResult
  onConfirm: (
    input: ConsistencyAmongAECChambersDataInput,
    result: ConsistencyAmongAECChambersDataResult
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
    () => `AEC电离室之间一致性 @ ${condition.value}${condition.unit}`,
    [condition]
  )

  const [value, setValue] = useImmer({
    title: input.title,
    values: input.values.map(String),
  })

  const onInputNumber = useMemoizedFn(
    (value: string, index: number, row: 0 | 1) => {
      setValue(draft => {
        draft.values[index] = value
      })
    }
  )

  const onInputTitle = useMemoizedFn((value: string, row: 0 | 1) => {
    setValue(draft => {
      draft.title = value
    })
  })

  const [resultState, setResultState] = useState(result)

  const handleConfirm = useMemoizedFn(() => {
    const input = {
      title: value.title,
      values: value.values.map(Number),
    }

    onConfirm(input, resultState)
  })

  useUpdateEffect(() => {
    if (
      value.values.some(value => isNaN(Number(value)) || Number(value) === 0)
    ) {
      return
    }

    const input = {
      title: value.title,
      values: value.values.map(Number),
    }

    console.log(input)

    const result = calculateConsistencyAmongAECChambersData(input)

    setResultState(result)
  }, [...value.values])

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
            <col width="30%" />
            <col width="40%" />
            <col width="30%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell component="th"></TableCell>
              <TableCell component="th">{i18n.t('测量值')}</TableCell>
              <TableCell component="th">{i18n.t('最大相对偏差')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box>
                  <TextField
                    label=""
                    value={value.title}
                    onChange={e => onInputTitle(e.target.value, 0)}
                  />
                </Box>
              </TableCell>
              <TableCell>
                {value.values.map((value, index) => (
                  <Box key={index}>
                    <TextField
                      label={`电离室${index + 1}`}
                      value={value}
                      onChange={e => onInputNumber(e.target.value, index, 0)}
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
