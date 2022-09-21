import { Box, BoxProps, styled, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

// ----------------------------------------------------------------------

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
`

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
    <Box
      sx={{
        display: 'flex',

        width: 40,
        height: 40,
        ...sx,
      }}
    >
      <img src="/logo.png" alt="Logo" />
      {!isCollapse && (
        <Typography
          component="h1"
          sx={{
            display: 'flex',
            marginInlineStart: '10px',
            fontWeight: 'bold',
            color: 'primary.main',
            textDecoration: 'none',
            fontSize: '24px',
            alignItems: 'center',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {process.env.REACT_APP_TITLE}
        </Typography>
      )}
    </Box>
  )

  if (disabledLink) {
    return <>{logo}</>
  }

  return <StyledRouterLink to="/">{logo}</StyledRouterLink>
}
