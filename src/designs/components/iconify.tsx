import { IconType } from 'react-icons'
import { Box, BoxProps, SxProps } from '@mui/material'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps
  icon: IconType
}

export default function Iconify({ icon: Icon, sx, ...other }: Props) {
  return <Box component={Icon} sx={{ ...sx }} {...other} />
}
