import { Button, TableCell, TableFooter, TableRow } from '@mui/material'
import { MdAddCircle } from 'react-icons/md'

import Iconify from 'd/components/iconify'

export interface RORBarProps {
  onAdd: () => void
}

export const RORBar = ({ onAdd }: RORBarProps) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell rowSpan={2}>
          <Button
            variant="text"
            startIcon={<Iconify icon={MdAddCircle} />}
            onClick={onAdd}
          >
            增加
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}
