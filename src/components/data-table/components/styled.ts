import { styled } from '@mui/material'
import {
  Table as TablePrimitive,
  Cell as CellPrimitive,
  HeaderCell as HeaderCellPrimitive,
} from 'rsuite-table'

// import 'rsuite-table/dist/css/rsuite-table.min.css'
import './rsuite-table.css'

export const Cell = styled(CellPrimitive)(({ isHeaderCell, align, theme }) =>
  isHeaderCell
    ? {
        backgroundColor: theme.palette.secondary.lighter,
        color: theme.palette.grey['900'],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }
)

export const HeaderCell = styled(HeaderCellPrimitive)({})

export type StyledTableProps = {
  isCompact?: boolean
}

export const Table = styled(TablePrimitive, {
  name: 'Table',
  slot: 'Root',
  shouldForwardProp: prop => !['isCompact'].includes(prop as string),
})<StyledTableProps>(() => [
  ({ theme }) => ({
    borderCollapse: 'collapse',
    borderSpacing: 0,
    borderColor: theme.palette.divider,
    margin: theme.spacing(2, 'auto'),
  }),
])
