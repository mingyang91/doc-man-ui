import { Link as RouterLink } from 'react-router-dom'
import { Box, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src="/logo.png" alt="Logo" />
    </Box>
  )

  if (disabledLink) {
    return <>{logo}</>
  }

  return <RouterLink to="/">{logo}</RouterLink>
}
