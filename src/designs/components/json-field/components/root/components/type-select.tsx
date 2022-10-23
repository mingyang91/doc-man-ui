import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'

import Iconify from 'd/components/iconify'

import { NodeTypes } from '../../../type'
import { TypeAndIcons } from '../../../utils/icons'

interface TypeSelectProps {
  value: NodeTypes.array | NodeTypes.object
  onChange?: (value: NodeTypes.array | NodeTypes.object) => void
}

export const TypeSelect = ({ value, onChange }: TypeSelectProps) => {
  const handleChange = useMemoizedFn<
    (e: SelectChangeEvent<NodeTypes.array | NodeTypes.object>) => void
  >(e => {
    onChange?.(e.target.value as NodeTypes.array | NodeTypes.object)
  })

  return (
    <FormControl component="section" variant="outlined" fullWidth>
      <InputLabel>JSON 格式</InputLabel>
      <Select label="JSON 格式" value={value} onChange={handleChange}>
        <MenuItem value={NodeTypes.array}>
          <Iconify icon={TypeAndIcons[NodeTypes.array]} /> 数组
        </MenuItem>
        <MenuItem value={NodeTypes.object}>
          <Iconify icon={TypeAndIcons[NodeTypes.object]} /> 对象
        </MenuItem>
      </Select>
    </FormControl>
  )
}
