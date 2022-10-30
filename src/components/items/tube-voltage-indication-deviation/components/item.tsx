import {
  Unstable_Grid2 as Grid,
  Stack,
  TextField,
  Box,
  TableRow,
  TableCell,
  Button,
} from '@mui/material'
import { useMemo } from 'react'
import { MdDelete } from 'react-icons/md'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'
import Iconify from 'd/components/iconify'

import { TVIDDataItem } from '../type'
import { initialTVIDDataItem } from '../utils'

export interface TVIDItemProps {
  index: number
  value: TVIDDataItem
  onChange: (value: TVIDDataItem) => void
  onRemove: () => void
}

export const TVIDItem = ({
  index,
  value,
  onChange,
  onRemove,
}: TVIDItemProps) => {
  const finalValue = useMemo(() => initialTVIDDataItem(value), [value])

  return (
    <TableRow>
      <TableCell>
        <Box display="flex">
          <Button
            sx={{ width: '120px' }}
            startIcon={<Iconify icon={MdDelete} />}
            onClick={onRemove}
          >
            删除此项
          </Button>
          <TextFieldWithUnit
            sx={{ flex: 1, marginInlineStart: '6px' }}
            label="管电流"
            value={finalValue.condition.factor.current}
          />
          <TextFieldWithUnit
            sx={{ flex: 1, marginInlineStart: '6px' }}
            label="时间积"
            value={finalValue.condition.factor.timeProduct}
          />
        </Box>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  )
}
