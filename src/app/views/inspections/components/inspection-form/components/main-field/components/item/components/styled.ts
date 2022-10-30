import { Box, styled, Table, Paper } from '@mui/material'

export const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px dashed',
  borderTopColor: 'divider',
  transition: 'background-color 0.7s',
  '&:hover': {
    backgroundColor: 'action.hover',
  },
  '&:last-of-type': {
    borderBottom: '1px dashed',
    borderBottomColor: 'divider',
  },
}))

export const StyledHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
})

export const StyledTablePaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: 0,
  backgroundColor: theme.palette.background.paper,
}))

export const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: 'collapse',
  border: '1px solid #eee',

  '& .MuiTableCell-root': {
    border: '1px solid #eee',
  },
}))
