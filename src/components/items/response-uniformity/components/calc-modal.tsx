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
import { isNil, sum, sumBy } from 'lodash-es'

import { Modal, ModalProps } from 'd/components/modal'
import { StyledBox } from 'd/components/json-field/components/node/components/styled'

import { Point, RUDataCondition, RUDataInput, RUDataResult } from '../type'
import { formatCondition } from '../utils'

export interface CalcModalProps
  extends Omit<ModalProps, 'isOpen' | 'onConfirm'> {
  condition?: RUDataCondition
  input?: RUDataInput
  result: RUDataResult
  onConfirm(input: RUDataInput, result: RUDataResult): void
  onClose(): void
}

export type LackProps = CalcModalProps

export type FulfilledCalcModalProps = CalcModalProps & {
  input: RUDataInput & {
    equation: [number, number]
  }
}

function isFulfilled(props: CalcModalProps): props is FulfilledCalcModalProps {
  return props.input?.equation !== undefined && !isNil(props.input.equation)
}

export function CalcModal(props: CalcModalProps) {
  if (isFulfilled(props)) {
    return <Fulfilled {...props} />
  } else {
    return <Lack {...props} />
  }
}

function Lack({ onClose }: LackProps) {
  return (
    <Modal
      isOpen
      maxWidth={false}
      title={`STP 未计算`}
      onClose={onClose}
      onConfirm={onClose}
    >
      <StyledBox>需先计算 STP 后才可以使用此公式</StyledBox>
    </Modal>
  )
}

function Fulfilled({
  condition,
  input,
  onClose,
  onConfirm,
}: FulfilledCalcModalProps) {
  const title = `响应均匀性 @ ${formatCondition(condition)}`

  const [points, setPoints] = useImmer<Point[]>(input?.points || [])

  const sumByPixels = useMemo(() => sumBy(points, p => p.pixelValue), [points])

  const avgByPixels = sumByPixels / points.length

  const predictX = useMemo(
    () =>
      points.map(_ => (_.pixelValue - input.equation[1]) / input.equation[0]),
    [input.equation, points]
  )
  const sumByX = useMemo(() => sum(predictX), [predictX])
  const avgByX = sumByX / predictX.length

  const squareOfDeviation = useMemo(
    () => predictX.map(x => (x - avgByX) ** 2),
    [avgByX, predictX]
  )

  const sumBySquare = useMemo(() => sum(squareOfDeviation), [squareOfDeviation])
  const halfOfSqrtOfSum = Math.sqrt(sumBySquare) / 2

  const CV = halfOfSqrtOfSum / avgByX

  const handleConfirm = useMemoizedFn(() => {
    onConfirm({ points }, CV)
  })

  function updatePoints(index: number, value: number) {
    setPoints(draft => {
      draft[index].pixelValue = value
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
      <Table>
        <colgroup>
          {input?.points.map((p, idx) => (
            <col
              width={`${100 / (3 + (input?.points.length || 0))}%`}
              key={idx}
            />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell component="th">函数关系</TableCell>
            {input?.points.map((p, idx) => (
              <TableCell component="th" key={idx}>
                {p.position}
              </TableCell>
            ))}
            <TableCell component="th">总和</TableCell>
            <TableCell component="th">平均</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>像素值</TableCell>
            {points.map((p, idx) => (
              <TableCell key={idx}>
                <Box>
                  <TextField
                    label={p.position}
                    type="number"
                    value={points[idx].pixelValue}
                    onChange={e =>
                      updatePoints(idx, parseFloat(e.target.value))
                    }
                  />
                </Box>
              </TableCell>
            ))}
            <TableCell>{sumByPixels.toFixed(2)}</TableCell>
            <TableCell>{avgByPixels.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}>线性响应</TableCell>
            {predictX.map((predict, idx) => (
              <TableCell key={idx}>{predict.toFixed(2)}</TableCell>
            ))}
            <TableCell>{sumByX.toFixed(2)}</TableCell>
            <TableCell>{avgByX.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            {squareOfDeviation.map((sod, idx) => (
              <TableCell key={idx}>{sod.toFixed(8)}</TableCell>
            ))}
            <TableCell>{sumBySquare.toFixed(8)}</TableCell>
            <TableCell>{halfOfSqrtOfSum.toFixed(8)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>变异系数CV (%)</TableCell>
            <TableCell
              style={{ textAlign: 'right' }}
              colSpan={2 + points.length}
            >
              <Box style={{ fontWeight: 'bolder', fontSize: 30 }}>
                {(CV * 100).toFixed(2)}%
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Modal>
  )
}
