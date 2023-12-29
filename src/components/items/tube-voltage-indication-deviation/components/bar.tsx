import { Button, TableCell, TableFooter, TableRow } from '@mui/material'
import { MdAddCircle } from 'react-icons/md'

import Iconify from 'd/components/iconify'

import i18n from 'strings/i18n'

export interface TVIDBarProps {
  onAdd: () => void
}

export const TVIDBar = ({ onAdd }: TVIDBarProps) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell rowSpan={2}>
          <Button
            variant="text"
            startIcon={<Iconify icon={MdAddCircle} />}
            onClick={onAdd}
          >
            {i18n.t('新增')}
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}
