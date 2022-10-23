import { Card, CardProps, Divider, Unstable_Grid2 as Grid } from '@mui/material'
import { ReactNode } from 'react'

export const DetailCard = (props: CardProps) => {
  return (
    <Card variant="elevation" sx={{ px: 3, py: 3 }} elevation={1} {...props} />
  )
}

export interface DetailCardFooterProps {
  divider?: boolean
  left?: ReactNode
  right?: ReactNode
  grid?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export const DetailCardFooter = ({
  divider,
  left,
  right,
  grid = 9,
}: DetailCardFooterProps) => {
  const container = (
    <Grid container>
      <Grid xs={12} md={grid} sx={{ py: 3 }}>
        {left}
      </Grid>
      {grid < 12 && (
        <Grid xs={12} md={12 - grid} sx={{ py: 3, textAlign: 'right' }}>
          {right}
        </Grid>
      )}
    </Grid>
  )
  return divider ? (
    <>
      <Divider sx={{ mt: 5 }} />
      {container}
    </>
  ) : (
    container
  )
}
