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
  AECResponseDataCondition,
  AECResponseDataInput,
  AECResponseDataResult,
} from '../type'
import { calculateAECResponseData } from '../utils'

import i18n from 'strings/i18n'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '60vw',
  maxWidth: '960px',
  minWidth: '600px',
}))

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition: AECResponseDataCondition
  input: AECResponseDataInput
  result: AECResponseDataResult
  onConfirm: (
    input: AECResponseDataInput,
    result: AECResponseDataResult
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
    () => `AEC响应 @ ${condition.value}${condition.unit}`,
    [condition]
  )

  const [value, setValue] = useImmer({
    0: {
      title: input[0].title,
      values: input[0].values.map(String),
    },
    1: {
      title: input[1].title,
      values: input[1].values.map(String),
    },
  })

  const onInputNumber = useMemoizedFn(
    (value: string, index: number, row: 0 | 1) => {
      setValue(draft => {
        draft[row].values[index] = value
      })
    }
  )

  const onInputTitle = useMemoizedFn((value: string, row: 0 | 1) => {
    setValue(draft => {
      draft[row].title = value
    })
  })

  const [resultState, setResultState] = useState(result)

  const handleConfirm = useMemoizedFn(() => {
    const input = {
      0: {
        title: value[0].title,
        values: value[0].values.map(Number),
      },
      1: {
        title: value[1].title,
        values: value[1].values.map(Number),
      },
    }

    onConfirm(input, resultState)
  })

  useUpdateEffect(() => {
    if (
      value[0].values.some(
        value => isNaN(Number(value)) || Number(value) === 0
      ) ||
      value[1].values.some(value => isNaN(Number(value)) || Number(value) === 0)
    ) {
      return
    }

    const input = {
      0: {
        title: value[0].title,
        values: value[0].values.map(Number),
      },
      1: {
        title: value[1].title,
        values: value[1].values.map(Number),
      },
    }

    console.log(input)

    const result = calculateAECResponseData(input)

    setResultState(result)
  }, [...value[0].values, ...value[1].values])

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
              <TableCell component="th">{i18n.t('相对偏差')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box>
                  <TextField
                    label=""
                    value={value[0].title}
                    onChange={e => onInputTitle(e.target.value, 0)}
                  />
                </Box>
              </TableCell>
              <TableCell>
                {value[0].values.map((value, index) => (
                  <Box key={index}>
                    <TextField
                      label={`${index + 1}`}
                      value={value}
                      onChange={e => onInputNumber(e.target.value, index, 0)}
                    />
                  </Box>
                ))}
              </TableCell>
              <TableCell>
                {resultState.prefix}
                {resultState.value}
                {resultState.unit}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box>
                  <TextField
                    label=""
                    value={value[1].title}
                    onChange={e => onInputTitle(e.target.value, 1)}
                  />
                </Box>
              </TableCell>
              <TableCell>
                {value[1].values.map((value, index) => (
                  <Box key={index}>
                    <TextField
                      label={`${index + 1}`}
                      value={value}
                      onChange={e => onInputNumber(e.target.value, index, 1)}
                    />
                  </Box>
                ))}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledBox>
    </Modal>
  )
}
