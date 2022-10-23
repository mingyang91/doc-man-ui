import { Box, styled, Table } from '@mui/material'

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

export const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: 'collapse',
  border: '1px solid #ccc',

  '& .MuiTableCell-root': {
    border: '1px solid #ccc',
  },
}))
