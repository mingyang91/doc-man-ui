import { useMemo } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { useImmer } from 'use-immer'
import { linear } from 'regression'

import { Modal, ModalProps } from 'd/components/modal'
import { StyledBox } from 'd/components/json-field/components/node/components/styled'

import { Point, StpDataCondition, StpDataInput, StpDataResult } from '../type'
import { formatCondition } from '../utils'

import i18n from 'strings/i18n'

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition?: StpDataCondition
  input?: StpDataInput
  result?: StpDataResult
  onConfirm(input: StpDataInput, result: StpDataResult): void
  onClose(): void
}

export function CalcModal({
  condition,
  input,
  result,
  onClose,
  onConfirm,
}: CalcModalProps) {
  const title = `信号传递特性（STP） @ ${formatCondition(condition)}`

  const [points, setPoints] = useImmer<Point[]>(
    input?.points || condition?.values.map(() => ({ x: 0, y: 0 })) || []
  )
  console.debug('STP', points, input?.points, condition?.values)

  const calcResult = useMemo(
    () => linear(points.map(({ x, y }) => [x, y])),
    [points]
  )

  const handleConfirm = useMemoizedFn(() => {
    onConfirm(
      {
        points,
      },
      calcResult
    )
  })

  function updatePoints(index: number, value: number, position: 'x' | 'y') {
    setPoints(draft => {
      draft[index][position] = value
    })
  }

  return (
    <Modal
      isOpen
      maxWidth={false}
      title={title}
      onClose={onClose}
      onConfirm={handleConfirm}
    >
      <StyledBox>
        <Table>
          <colgroup>
            <col width="20%" />
            <col width="30%" />
            <col width="30%" />
            <col width="20%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell component="th">#</TableCell>
              <TableCell component="th">{i18n.t('曝光条件')} X</TableCell>
              <TableCell component="th">{i18n.t('平均像素')} Y</TableCell>
              <TableCell component="th">R²</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {condition?.values.map((cond, index) => (
              <TableRow key={index}>
                <TableCell>{`${cond.value} ${cond.unit}`}</TableCell>
                <TableCell>
                  <Box>
                    <TextField
                      label={`x[${index}]`}
                      type="number"
                      value={points[index].x}
                      onChange={e =>
                        updatePoints(index, parseFloat(e.target.value), 'x')
                      }
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <TextField
                      label={`y[${index}]`}
                      type="number"
                      value={points[index].y}
                      onChange={e =>
                        updatePoints(index, parseFloat(e.target.value), 'y')
                      }
                    />
                  </Box>
                </TableCell>
                {index === 0 ? (
                  <TableCell rowSpan={condition?.values.length || 1}>
                    {`R² = ${calcResult.r2}`}
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledBox>
    </Modal>
  )
}
