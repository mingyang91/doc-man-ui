import {
  TableCell,
  TableRow,
  Typography,
  Chip,
  SxProps,
  Theme,
} from '@mui/material'
import { ReactNode, useMemo } from 'react'

import { Judgement } from '@/models/common'

export interface Column {
  id:
    | 'name'
    | 'checkCondition'
    | 'checkResult'
    | 'requirementAcceptance'
    | 'requirementState'
    | 'judgement'
  label: string
  minWidth?: number
  align?: 'right' | 'left' | 'center'
}

interface FormDetailRowProps {
  name: ReactNode
  isItem?: boolean
  rowSpan?: number
  conditionRender: () => JSX.Element
  resultRender: () => JSX.Element
  requirementAcceptance?: string
  requirementState?: string
  requirementAcceptanceRender?: (text?: string) => JSX.Element
  requirementStateRender?: (text?: string) => JSX.Element
  judgement?: Judgement
}

const JudgementViews: {
  [key in Judgement]: JSX.Element
} = {
  [Judgement.Good]: <Chip label="合格" color="success" />,
  [Judgement.Bad]: <Chip label="不合格" color="error" />,
  [Judgement.Unknown]: <Chip label="未知" color="default" />,
}

const defaultRequirementRender = (text?: string) => (
  <Typography variant="body2" textAlign="center">
    {text}
  </Typography>
)

export const FormDetailRow = ({
  name,
  rowSpan = 1,
  isItem = false,
  conditionRender,
  resultRender,
  requirementAcceptance,
  requirementState,
  requirementAcceptanceRender = defaultRequirementRender,
  requirementStateRender = defaultRequirementRender,
  judgement = Judgement.Unknown,
}: FormDetailRowProps) => {
  const conditionElement = useMemo(() => conditionRender(), [conditionRender])
  const resultElement = useMemo(() => resultRender(), [resultRender])

  const firstCellSx: SxProps<Theme> = useMemo(
    () => ({
      position: 'relative',
    }),
    []
  )

  return isItem ? (
    <TableRow>
      <TableCell align="center" sx={firstCellSx}>
        {conditionElement}
      </TableCell>
      <TableCell align="center" sx={firstCellSx}>
        {resultElement}
      </TableCell>
    </TableRow>
  ) : (
    <TableRow>
      <TableCell align="center" rowSpan={rowSpan} sx={firstCellSx}>
        {name}
      </TableCell>
      <TableCell align="center" sx={firstCellSx}>
        {conditionElement}
      </TableCell>
      <TableCell align="center" sx={firstCellSx}>
        {resultElement}
      </TableCell>
      <TableCell align="center" rowSpan={rowSpan} sx={firstCellSx}>
        {requirementAcceptanceRender(requirementAcceptance)}
      </TableCell>
      <TableCell align="center" rowSpan={rowSpan} sx={firstCellSx}>
        {requirementStateRender(requirementState)}
      </TableCell>
      <TableCell align="center" rowSpan={rowSpan} sx={firstCellSx}>
        {JudgementViews[judgement]}
      </TableCell>
    </TableRow>
  )
}
