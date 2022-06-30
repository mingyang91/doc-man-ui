import { useCallback } from 'react'
import { FieldArray, useField } from 'formik'
import { Button } from '@mui/material'
import { RiAddFill, RiDeleteBinFill } from 'react-icons/ri'
import { useCreation } from 'ahooks'

import {
  FormDetailRow,
  FormDetailRowSub,
} from '@/app/components/form-table/components/row'
import { RowTitle } from '@/app/components/form-table/components/row/row-title'
import { CellSideButton } from '@/app/components/form-table/components/row/cell-side-button'

import {
  RadiationOutput,
  judgeRadiationOutput,
} from '@models/devices/radiation-output'

import { FieldRadiationOutputItemCondition } from './components/condition'
import { FieldPipeVoltageResult } from './components/result'

export const FieldRadiationOutput = () => {
  const [{ value }] = useField<RadiationOutput>('radiationOutput')

  const items = useCreation(() => value?.items ?? [], [value?.items])

  const conclusion = useCreation(
    () => judgeRadiationOutput(value?.items.map(({ value }) => value)),
    [value?.items]
  )

  const rowSpan = useCreation(
    () => (value?.items.length || 0) + 1,
    [value?.items]
  )

  const addItem = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (push: (obj: any) => void) => {
      push({
        condition: {
          timeProduce: '',
          voltage: '',
          current: '',
        },
        value: undefined,
      })
    },
    []
  )

  return (
    <FieldArray name="radiationOutput.items" validateOnChange={false}>
      {({ push, remove }) => (
        <>
          {items.map((_, i) => (
            <FormDetailRow
              key={`loading-factor-${i}`}
              rowSpan={rowSpan}
              name={<RowTitle>{value?.name}</RowTitle>}
              isItem={!!i}
              conditionElement={<FieldRadiationOutputItemCondition index={i} />}
              resultElement={
                <>
                  <CellSideButton
                    aria-label="删除此项"
                    color="error"
                    onClick={() => remove(i)}
                  >
                    <RiDeleteBinFill />
                  </CellSideButton>
                  <FieldPipeVoltageResult index={i} />
                </>
              }
              acceptanceRequire={value?.acceptanceRequire}
              stateRequire={value?.stateRequire}
              conclusion={conclusion}
            />
          ))}
          {!items.length && (
            <FormDetailRow
              rowSpan={rowSpan}
              isItem={!!items.length}
              name={<RowTitle>{value?.name}</RowTitle>}
              conditionElement={
                <FieldRadiationOutputItemCondition index={items.length} />
              }
              resultElement={<FieldPipeVoltageResult index={items.length} />}
              acceptanceRequire={value?.acceptanceRequire}
              stateRequire={value?.stateRequire}
            />
          )}
          <FormDetailRowSub>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<RiAddFill />}
              onClick={() => addItem(push)}
            >
              添加一项
            </Button>
          </FormDetailRowSub>
        </>
      )}
    </FieldArray>
  )
}
