import { TableCell, TableBody, TableRow, Typography, Chip } from '@mui/material'

import { Judgement } from '@/models/devices/type'

interface FormDetailRowProps {
  name: string
  conditionCell: JSX.Element
  resultCell: JSX.Element
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
}

const defaultRequirementRender = (text?: string) => (
  <Typography variant="body2" textAlign="center">
    {text}
  </Typography>
)

export const FormDetailRow = ({
  name,
  conditionCell,
  resultCell,
  requirementAcceptance,
  requirementState,
  requirementAcceptanceRender = defaultRequirementRender,
  requirementStateRender = defaultRequirementRender,
  judgement,
}: FormDetailRowProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{conditionCell}</TableCell>
        <TableCell align="center">{resultCell}</TableCell>
        <TableCell align="center">
          {requirementAcceptanceRender(requirementAcceptance)}
        </TableCell>
        <TableCell align="center">
          {requirementStateRender(requirementState)}
        </TableCell>
        <TableCell align="center">
          {judgement ? (
            JudgementViews[judgement]
          ) : (
            <Chip label="-" color="default" />
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
