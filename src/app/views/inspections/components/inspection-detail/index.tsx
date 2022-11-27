import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { omit } from 'lodash-es'
import { Snackbar, Unstable_Grid2 as Grid } from '@mui/material'

import { InspectionReportByIdQuery } from 'm/inspection-report/index.generated'

import { DetailCard } from '@@/detail-card'

export interface InspectionDetailProps {
  data: InspectionReportByIdQuery['detail']
}

export const InspectionDetail = ({ data }: InspectionDetailProps) => {
  return (
    <DetailCard>
      <Grid container spacing={3}></Grid>
    </DetailCard>
  )
}