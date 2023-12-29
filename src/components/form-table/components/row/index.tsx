import { Chip, styled, TableCell, TableRow, Typography } from '@mui/material'
import { memo, ReactNode } from 'react'

import { Conclusions } from 'm/common'

import i18n from 'strings/i18n'

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
    | 'acceptanceRequire'
    | 'stateRequire'
    | 'conclusion'
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
  acceptanceRequire?: string
  stateRequire?: string
  acceptanceRequireRender?: (text?: string) => JSX.Element
  stateRequireRender?: (text?: string) => JSX.Element
  conclusion?: Conclusions
}

const ConclusionsViews: {
  [key in Conclusions]: JSX.Element
} = {
  [Conclusions.Good]: <Chip label={i18n.t('合格')} color="success" />,
  [Conclusions.Bad]: <Chip label={i18n.t('不合格')} color="error" />,
  [Conclusions.Unknown]: <Chip label={i18n.t('未知')} color="default" />,
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
  acceptanceRequire,
  stateRequire,
  acceptanceRequireRender = defaultRequirementRender,
  stateRequireRender = defaultRequirementRender,
  conclusion = Conclusions.Unknown,
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
        {acceptanceRequireRender(acceptanceRequire)}
      </Td>
      <Td align="center" rowSpan={rowSpan}>
        {stateRequireRender(stateRequire)}
      </Td>
      <Td align="center" rowSpan={rowSpan}>
        {ConclusionsViews[conclusion]}
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
