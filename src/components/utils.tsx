import { CircularProgress, MenuItem, Typography } from '@mui/material'

export interface DropdownLoadingProps {
  label?: string
}

export const DropdownLoading = ({
  label = '加载中...',
}: DropdownLoadingProps) => {
  return (
    <MenuItem disabled>
      <CircularProgress size={8} />
      <Typography variant="body1">{label}</Typography>
    </MenuItem>
  )
}
