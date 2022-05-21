import {
  TableCell,
  TableRow,
  Typography,
  Chip,
  SxProps,
  Theme,
  styled,
} from '@mui/material'
import { memo, ReactNode, useMemo } from 'react'

import { Judgement } from '@/models/common'

const Td = memo(
  styled(TableCell)({
    position: 'relative',
  })
)

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
  conditionElement: JSX.Element
  resultElement: JSX.Element
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
  conditionElement,
  resultElement,
  requirementAcceptance,
  requirementState,
  requirementAcceptanceRender = defaultRequirementRender,
  requirementStateRender = defaultRequirementRender,
  judgement = Judgement.Unknown,
}: FormDetailRowProps) => {
  return isItem ? (
    <TableRow>
      <Td align="center">{conditionElement}</Td>
      <Td align="center">{resultElement}</Td>
    </TableRow>
  ) : (
    <TableRow>
      <Td align="center" rowSpan={rowSpan}>
        {name}
      </Td>
      <Td align="center">{conditionElement}</Td>
      <Td align="center">{resultElement}</Td>
      <Td align="center" rowSpan={rowSpan}>
        {requirementAcceptanceRender(requirementAcceptance)}
      </Td>
      <Td align="center" rowSpan={rowSpan}>
        {requirementStateRender(requirementState)}
      </Td>
      <Td align="center" rowSpan={rowSpan}>
        {JudgementViews[judgement]}
      </Td>
    </TableRow>
  )
}

interface FormDetailRowSubProps {
  children?: ReactNode
}

export const FormDetailRowSub = ({ children }: FormDetailRowSubProps) => (
  <TableRow>
    <Td align="center" colSpan={2}>
      {children}
    </Td>
  </TableRow>
)
