import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useControllableValue, useMemoizedFn } from 'ahooks'

import { Conclusions } from 'm/common'

export interface SelectProps {
  value?: Conclusions
  onChange?: (value: Conclusions) => void
}

export const ConclusionSelect = (props: SelectProps) => {
  const [value, setValue] = useControllableValue(props, {
    defaultValue: Conclusions.Unknown,
  })

  const onChange = useMemoizedFn((e: SelectChangeEvent<Conclusions>) => {
    setValue(e.target.value as Conclusions)
  })

  return (
    <Select
      value={value}
      onChange={onChange}
      defaultValue={Conclusions.Unknown}
    >
      <MenuItem value={Conclusions.Unknown} defaultChecked>
        未知
      </MenuItem>
      <MenuItem value={Conclusions.Good}>合格</MenuItem>
      <MenuItem value={Conclusions.Bad}>不合格</MenuItem>
    </Select>
  )
}
