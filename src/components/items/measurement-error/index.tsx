import { Field } from 'react-final-form'
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import { useFieldArray } from 'react-final-form-arrays'
import { useMemo } from 'react'
import { MdAddCircle, MdDelete } from 'react-icons/md'
import update from 'immutability-helper'

import Iconify from 'd/components/iconify'

import { InspectionReportItem } from 'm/presets'

import { ItemComponentProps } from '../common/type'
import { MEData, MEDataItem, MEDataItemInput, MEDataItemResult } from './type'
import { initialMEData, initialMEDataItem } from './utils'

import i18n from 'strings/i18n'

type MEProps = ItemComponentProps<MEData>

export default function MEField({
  name,
  inspectionItem,
  requirement,
  item,
}: MEProps) {
  const initial = useMemo(() => initialMEData(), [])
  const { fields } = useFieldArray<MEDataItem>(`${name}.data`, {
    initialValue: initial,
  })

  return (
    <Field<InspectionReportItem<MEData>> name={name}>
      {({ meta: { touched, error } }) => (
        <TableContainer
          component={Card}
          elevation={1}
          sx={{ paddingY: 3, marginY: 3 }}
        >
          <Table>
            <colgroup>
              <col width="10%" />
              <col width="30%" />
              <col width="30%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center"> - </TableCell>
                <TableCell>{i18n.t('预设')}</TableCell>
                <TableCell>{i18n.t('测量')}</TableCell>
                <TableCell>{i18n.t('偏差')}</TableCell>
                <TableCell>{i18n.t('偏差（%）')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((name, index) => (
                <Field name={name} key={name}>
                  {({ input }) => (
                    <MEItem
                      value={input.value}
                      onChange={input.onChange}
                      onRemove={() => fields.remove(index)}
                    />
                  )}
                </Field>
              ))}
            </TableBody>
            <TableFooter>
              <Footer onAdd={() => fields.push(initialMEDataItem())} />
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </Field>
  )
}

interface MEItemProps {
  value: MEDataItem
  onChange: (value: MEDataItem) => void
  onRemove: () => void
}

function calculateResult(
  input?: MEDataItemInput
): MEDataItemResult | undefined {
  if (input === undefined || input.preset === '' || input.measured === '') {
    return undefined
  }

  return {
    deviation: +input.measured - +input.preset,
    percentage: (+input.measured - +input.preset) / +input.preset,
  }
}

function updateResult(value: MEDataItem): MEDataItem {
  return {
    ...value,
    result: calculateResult(value.input),
  }
}

const MEItem = ({ value, onChange, onRemove }: MEItemProps) => {
  // onConfirm memorized function
  return (
    <TableRow>
      <TableCell align="center">
        <Button
          variant="text"
          startIcon={<Iconify icon={MdDelete} />}
          onClick={onRemove}
        >
          {i18n.t('删除')}
        </Button>
      </TableCell>
      <TableCell>
        <TextField
          value={value.input?.preset}
          label={i18n.t('预设')}
          type="number"
          onChange={evt =>
            onChange(
              updateResult(
                update(value, { input: { preset: { $set: evt.target.value } } })
              )
            )
          }
        />
      </TableCell>
      <TableCell>
        <TextField
          value={value.input?.measured}
          label={i18n.t('测量')}
          type="number"
          onChange={evt =>
            onChange(
              updateResult(
                update(value, {
                  input: { measured: { $set: evt.target.value } },
                })
              )
            )
          }
        />
      </TableCell>
      <TableCell>{value.result?.deviation.toFixed(2)}</TableCell>
      <TableCell>
        {value.result ? (value.result?.percentage * 100).toFixed(2) : '-'}%
      </TableCell>
    </TableRow>
  )
}

const Footer = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <TableRow>
      <TableCell rowSpan={2}>
        <Button
          variant="text"
          startIcon={<Iconify icon={MdAddCircle} />}
          onClick={onAdd}
        >
          {i18n.t('新增')}
        </Button>
      </TableCell>
    </TableRow>
  )
}
