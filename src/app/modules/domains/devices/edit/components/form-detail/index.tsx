import { Field } from 'formik'
import { TextField } from 'formik-mui'
import { Paper, TableContainer, Table, TableBody } from '@mui/material'

import { ComponentInFormikProps } from '../../index'

import { FormDetailHeader } from './components/header'

export const FormDetail = (_: ComponentInFormikProps) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table className="border" stickyHeader aria-label="检测结果">
          <FormDetailHeader />
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
