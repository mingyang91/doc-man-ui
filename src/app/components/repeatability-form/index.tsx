import { every, isEmpty } from 'lodash-es'
import { useCallback, useState, ChangeEvent, memo, useMemo } from 'react'
import NumberFormat from 'react-number-format'
import { useImmer } from 'use-immer'
import {
  Box,
  TextField,
  Typography,
  Button,
  useTheme,
  Grid,
} from '@mui/material'
import { useDeepCompareEffect, useCreation } from 'ahooks'

import {
  calculateRadiationOutput,
  RadiationOutputItemCondition,
  RadiationOutputReturns,
} from '@/models/devices/radiation-output'

interface RepeatabilityFormProps {
  length: number // 需要实录几个值
  condition?: RadiationOutputItemCondition
  onConfirm?: (values: RadiationOutputReturns) => void
}

const RepeatabilityFormPrimitive = ({
  length,
  condition = {},
  onConfirm,
}: RepeatabilityFormProps) => {
  const theme = useTheme()

  const column = useMemo(() => Math.floor(12 / length), [length])

  const key = useCreation(
    () =>
      `${condition?.current}-${condition?.voltage}-${condition?.timeProduce}`,
    [condition]
  )

  const [samples, setSamples] = useImmer(() => Array(length).fill(''))

  const [result, setResult] = useState<RadiationOutputReturns | null>(null)

  const onEachInputChange = useCallback(
    (index: number, value: string) => {
      setSamples(draft => {
        draft[index] = value
      })
    },
    [setSamples]
  )

  const onConfirmClick = useCallback(() => {
    result && onConfirm?.(result)
  }, [onConfirm, result])

  useDeepCompareEffect(() => {
    if (every(samples, value => !isEmpty(value))) {
      setResult(calculateRadiationOutput(samples))
    } else {
      setResult(null)
    }
  }, [samples, setResult])

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        maxWidth: {
          xs: '100%',
          sm: '720px',
        },
      }}
    >
      <Typography variant="body1" margin={theme.spacing(1, 0)}>
        输出量
      </Typography>
      <Grid container spacing={1}>
        {samples.map((_, index) => (
          <Grid item xs={column} key={`${key}-${index}`}>
            <NumberFormat
              customInput={TextField}
              label={index}
              value={samples[index]}
              onValueChange={({ value }) => onEachInputChange(index, value)}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" margin={theme.spacing(1, 0)}>
        计算结果(%)
      </Typography>
      <Box>
        <TextField
          label="重复性"
          placeholder="请补充必要参数"
          size="small"
          inputProps={{
            readOnly: true,
          }}
          value={result?.percentage}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'flex-end',
          marginTop: theme.spacing(1),
        }}
      >
        <Button variant="contained" disabled={!result} onClick={onConfirmClick}>
          提交
        </Button>
      </Box>
    </Box>
  )
}

export const RepeatabilityForm = memo(RepeatabilityFormPrimitive)
