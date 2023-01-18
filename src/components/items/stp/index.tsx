import { FieldRenderProps, Field } from 'react-final-form'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { StpData } from './type'
