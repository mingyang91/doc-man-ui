import { Link as RouterLink } from 'react-router-dom'
import { Box, BoxProps, Typography } from '@mui/material'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean
  isCollapse?: boolean
}

export default function Logo({
  disabledLink = false,
  isCollapse = false,
  sx,
}: Props) {
  const logo = (
    <Box sx={{ display: 'flex', width: 40, height: 40, ...sx }}>
      <img src="/logo.png" alt="Logo" />
      {!isCollapse && (
        <Typography
          component="h1"
          sx={{
            marginInlineStart: '10px',
            fontWeight: 'bold',
            color: 'primary.main',
            textDecoration: 'none',
            fontSize: '24px',
          }}
        >
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      )}
    </Box>
  )

  if (disabledLink) {
    return <>{logo}</>
  }

  return <RouterLink to="/">{logo}</RouterLink>
}
