import { every, isEmpty } from 'lodash-es'
import { useCallback, useState, ChangeEvent, memo } from 'react'
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
import { useDeepCompareEffect } from 'ahooks'

import {
  calculateOffset,
  CalculateOffsetReturns,
} from '@/models/devices/pipe-voltage'

interface OffsetValueFormProps {
  unit: string // 值的单位
  presetLabel?: string
  presetValue?: string // 预设值
  showCalibrationFactor?: boolean // 校准因子，不传则不显示此项
  length: number // 需要实录几个值
  onConfirm?: (values: CalculateOffsetReturns) => void
}

const OffsetValueFormPrimitive = ({
  presetLabel,
  unit,
  presetValue,
  showCalibrationFactor,
  length,
  onConfirm,
}: OffsetValueFormProps) => {
  const theme = useTheme()

  const [values, setValues] = useImmer(Array(length).fill(''))

  const [calibrationFactor, setCalibrationFactor] = useState('0')

  const [result, setResult] = useState<CalculateOffsetReturns | null>(null)

  const onEachInputChange = useCallback(
    (index: number, value: string) => {
      setValues(draft => {
        draft[index] = value
      })
    },
    [setValues]
  )

  const onCalibrationFactorChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCalibrationFactor(e.target.value)
    },
    []
  )

  const onConfirmClick = useCallback(() => {
    result && onConfirm?.(result)
  }, [onConfirm, result])

  useDeepCompareEffect(() => {
    if (
      every(values, value => !isEmpty(value)) &&
      presetValue &&
      !isEmpty(calibrationFactor)
    ) {
      setResult(calculateOffset(values, presetValue, calibrationFactor))
    } else {
      setResult(null)
    }
  }, [values, calibrationFactor])

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        maxWidth: {
          xs: '100%',
          sm: '640px',
        },
      }}
    >
      <Typography variant="body1" margin={theme.spacing(1, 0)}>
        {presetLabel}({unit}): {presetValue}
      </Typography>
      {showCalibrationFactor && (
        <NumberFormat
          customInput={TextField}
          label="校准因子"
          size="small"
          value={calibrationFactor}
          onInput={onCalibrationFactorChange}
          fullWidth
        />
      )}
      <Typography variant="body1" margin={theme.spacing(1, 0)}>
        实测值({unit})
      </Typography>
      <Grid container spacing={1}>
        {values.map((_, index) => (
          <Grid item xs={3} key={`${presetLabel}-${index}`}>
            <NumberFormat
              customInput={TextField}
              label={index}
              value={values[index]}
              onValueChange={({ value }) => onEachInputChange(index, value)}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" margin={theme.spacing(1, 0)}>
        计算结果({unit})
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <NumberFormat
            customInput={TextField}
            label="平均值"
            placeholder="请补充必要参数"
            size="small"
            value={result?.averageValue}
            readOnly
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <NumberFormat
            customInput={TextField}
            label="校准后值"
            placeholder="请补充必要参数"
            size="small"
            value={result?.calibratedValue}
            readOnly
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <NumberFormat
            customInput={TextField}
            label={`偏离值${unit}`}
            placeholder="请补充必要参数"
            size="small"
            value={result?.offset}
            readOnly
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="偏离率(%)"
            size="small"
            placeholder="请补充必要参数"
            value={result?.offsetRateStringify || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
      </Grid>
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

export const OffsetValueForm = memo(OffsetValueFormPrimitive)
