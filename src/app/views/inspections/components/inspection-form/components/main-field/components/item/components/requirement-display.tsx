import {
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { produce } from 'immer'

import { InspectionRequirement, InspectionTypeEnum } from 'm/presets'

import { StyledTable, StyledTablePaper } from './styled'

import { InputEditable } from '@@/input-editable'

const TitleRoot = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.typography.pxToRem(16),
  textAlign: 'center',
  verticalAlign: 'middle',
  color: theme.palette.primary.main,
}))

const TitleLevel2 = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: theme.typography.pxToRem(14),
}))

const Cell = styled(TableCell)(({ theme }) => ({
  textAlign: 'left',
  fontSize: theme.typography.pxToRem(12),
}))

const Row = styled(TableRow, {
  shouldForwardProp: prop => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) =>
  active
    ? {
        [`& > ${Cell}, & > ${TitleLevel2}`]: {
          backgroundColor: theme.palette.success.lighter,
        },
      }
    : {}
)

interface RequirementDisplayProps {
  value?: InspectionRequirement
  onChange?: (value: InspectionRequirement) => void
  onBlur?: () => void
  type: InspectionTypeEnum
}

export const RequirementDisplay = ({
  value: valueProps,
  type,
  onChange,
  onBlur,
}: RequirementDisplayProps) => {
  const value: InspectionRequirement = valueProps || {
    acceptance: {
      display: '',
      rule: {},
    },
    state: {
      display: '',
      rule: {},
    },
  }

  const onStateAcceptanceChange = useMemoizedFn((stateDisplay: string) => {
    onChange?.(
      produce(value, draft => {
        draft.acceptance.display = stateDisplay
      })
    )
  })

  const onStateDisplayChange = useMemoizedFn((stateDisplay: string) => {
    onChange?.(
      produce(value, draft => {
        draft.state.display = stateDisplay
      })
    )
  })

  return (
    <TableContainer component={StyledTablePaper}>
      <StyledTable>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <TableBody>
          <Row active={type === InspectionTypeEnum.Acceptance}>
            <TitleRoot rowSpan={2} align="center" valign="middle">
              指标要求
            </TitleRoot>
            <TitleLevel2 align="center" valign="middle">
              验收检测
            </TitleLevel2>
            <TableCell align="left" valign="middle">
              <InputEditable
                multiline
                value={value.acceptance.display}
                onChange={onStateAcceptanceChange}
                onBlur={onBlur}
              />
            </TableCell>
          </Row>
          <Row active={type === InspectionTypeEnum.State}>
            <TitleLevel2 align="center" valign="middle">
              状态检测
            </TitleLevel2>
            <TableCell align="left" valign="middle">
              <InputEditable
                multiline
                value={value.state.display}
                onChange={onStateDisplayChange}
                onBlur={onBlur}
              />
            </TableCell>
          </Row>
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
