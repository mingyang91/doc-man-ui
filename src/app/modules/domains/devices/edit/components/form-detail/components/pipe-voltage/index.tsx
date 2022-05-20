import { FieldArray, useField } from 'formik'
import { Typography, IconButton, SxProps, Theme, useTheme } from '@mui/material'
import { last } from 'lodash-es'
import { RiAddFill, RiDeleteBinFill } from 'react-icons/ri'
import { useCreation } from 'ahooks'
import { useMemo, useCallback } from 'react'
import Big from 'big.js'

import { FormDetailRow } from '@/app/components/form-table/row'
import { DeviceSetInput } from '@/generated/graphql'
import { judgePipeVoltageOffset } from '@/models/devices/calculate'

import { FieldPipeVoltageCondition } from './components/condition'
import { FieldPipeVoltageResult } from './components/result'

export const FieldPipeVoltage = () => {
  const [{ value }] = useField<DeviceSetInput['pipeVoltage']>('pipeVoltage')

  const theme = useTheme()

  const items = useCreation(() => value?.items ?? [], [value?.items])

  const judgement = useCreation(
    () => judgePipeVoltageOffset(value?.items.map(item => item.value)),
    [value?.items]
  )

  const rowSpan = useCreation(
    () => (value?.items.length || 0) + 1,
    [value?.items]
  )

  const lastItem = useCreation(() => {
    return last(value?.items ?? [])
  }, [value?.items])

  const buttonSx: SxProps<Theme> = useMemo(
    () => ({
      position: 'absolute',
      right: '0px',
      top: '50%',
      transform: 'translate(50%, -50%)',
      zIndex: 5,
      backgroundColor: theme.palette.grey[200],
      ':hover': {
        backgroundColor: theme.palette.grey[300],
      },
    }),
    [theme]
  )

  const addItem = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (push: (obj: any) => void) => {
      const lastPresetValue = lastItem?.condition?.presetValue ?? '60'

      push({
        condition: {
          loadingFactor: lastItem?.condition?.loadingFactor,
          presetValue: `${Big(lastPresetValue).plus(20).toString()}`,
        },
        value: '',
      })
    },
    [lastItem?.condition]
  )

  return (
    <FieldArray name="pipeVoltage.items" validateOnChange={false}>
      {({ push, remove }) => (
        <>
          {items.map(({ condition }, i) => (
            <FormDetailRow
              key={`${condition.loadingFactor}-${condition.presetValue}-${i}`}
              rowSpan={rowSpan}
              name={
                <>
                  <Typography align="center">{value?.name}</Typography>
                  <IconButton
                    aria-label="添加一项"
                    color="primary"
                    sx={buttonSx}
                    onClick={() => addItem(push)}
                  >
                    <RiAddFill />
                  </IconButton>
                </>
              }
              isItem={!!i}
              conditionRender={() => <FieldPipeVoltageCondition index={i} />}
              resultRender={() => (
                <>
                  <IconButton
                    aria-label="删除此项"
                    sx={buttonSx}
                    color="error"
                    onClick={() => remove(i)}
                  >
                    <RiDeleteBinFill />
                  </IconButton>
                  <FieldPipeVoltageResult index={i} />
                </>
              )}
              requirementAcceptance={value?.requirementAcceptance}
              requirementState={value?.requirementState}
              judgement={judgement}
            />
          ))}
          {!items.length && (
            <FormDetailRow
              rowSpan={rowSpan}
              isItem={!!items.length}
              name={
                <>
                  <Typography align="center">{value?.name}</Typography>
                  <IconButton
                    aria-label="添加一项"
                    color="primary"
                    sx={buttonSx}
                    onClick={() => addItem(push)}
                  >
                    <RiAddFill />
                  </IconButton>
                </>
              }
              conditionRender={() => (
                <FieldPipeVoltageCondition index={items.length} />
              )}
              resultRender={() => (
                <FieldPipeVoltageResult index={items.length} />
              )}
              requirementAcceptance={value?.requirementAcceptance}
              requirementState={value?.requirementState}
            />
          )}
        </>
      )}
    </FieldArray>
  )
}
