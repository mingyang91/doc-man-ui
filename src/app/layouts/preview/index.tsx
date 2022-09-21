import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export const PreviewLayout = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      {children}
    </Box>
  )
}
