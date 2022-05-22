import { Paper, TableContainer, Table, TableBody } from '@mui/material'
import { FormikHelpers } from 'formik'
import { ReactNode } from 'react'

export type FnSubmit<D, I> = (
  values: D,
  helper: FormikHelpers<I>
) => Promise<void>

export type FormTableProps = {
  children?: ReactNode
}

import { FormTableHeader } from './components/header'

export const FormTable = ({ children }: FormTableProps) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table className="border" stickyHeader aria-label="检测结果">
          <FormTableHeader />
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
