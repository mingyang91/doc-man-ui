import { Paper, Table, TableBody, TableContainer } from '@mui/material'
import { ReactNode } from 'react'

import { FormTableHeader } from './components/header'

import i18n from 'strings/i18n'

export type FnSubmit<D> = (values: D) => Promise<void>

export type FormTableProps = {
  children?: ReactNode
}

export const FormTable = ({ children }: FormTableProps) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table className="border" stickyHeader aria-label={i18n.t('检测结果')}>
          <FormTableHeader />
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
