import { Field } from "react-final-form"
import { Button, Card, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField } from "@mui/material"
import { useMemo } from "react"
import { useFieldArray } from "react-final-form-arrays"
import { MdAddCircle } from "react-icons/md"
import update from 'immutability-helper'

import Iconify from "d/components/iconify"

import { InspectionReportItem } from "m/presets"

import { HCRData, HCRDataItem } from "./type"
import { ItemComponentProps } from "../common/type"
import { initialHCRData, initialHCRDataItem } from "./utils"

import i18n from 'strings/i18n'



type HCRFieldProps = ItemComponentProps<HCRData>
export default function HCRField({ name, inspectionItem, requirement, item}: HCRFieldProps) {
  const initial = useMemo(() => initialHCRData(), [])
  const { fields } = useFieldArray<HCRDataItem>(`${name}.data`, {
    initialValue: initial,
  })

  return (
    <Field<InspectionReportItem<HCRData>> name={name}>
      {({ meta: { touched, error } }) => (
        <TableContainer
          component={Card}
          elevation={1}
          sx={{ paddingY: 3, marginY: 3 }}>
            <Table>
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="30%" />
                <col width="30%" />
              </colgroup>
            </Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> - </TableCell>
                <TableCell>{i18n.t('测量')}</TableCell>
                <TableCell>{i18n.t('基线')}</TableCell>
                <TableCell>{i18n.t('检测结果')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((name, index) => (
                <Field name={name} key={name}>
                  {({ input }) => (
                    <HCRItem
                      value={input.value}
                      onChange={input.onChange}
                      onRemove={() => fields.remove(index)}
                    />
                  )}
                </Field>
              ))}
            </TableBody>
            <TableFooter>
              <Footer onAdd={() => fields.push(initialHCRDataItem())}></Footer>
            </TableFooter>
        </TableContainer>
      )}
    </Field>
  )
}

function HCRItem({ value, onChange, onRemove }: { value: HCRDataItem, onChange: (value: HCRDataItem) => void, onRemove: () => void }) {
  return (
    <TableRow>
      <TableCell align="center">
        <Button
          variant="text"
          startIcon={<Iconify icon={MdAddCircle} />}
          onClick={onRemove}
        >
          {i18n.t('删除')}
        </Button>
      </TableCell>
      <TableCell>
        <TextField
          label={i18n.t('测量')}
          type="number"
          value={value.input?.measured}
          onChange={event => onChange(updateResult(update(value, { input: { measured: { $set: event.target.value } } })))}
        />
      </TableCell>
      <TableCell>
        <TextField
          label={i18n.t('基线')}
          type="number"
          value={value.input?.baseline}
          onChange={event => onChange(updateResult(update(value, { input: { baseline: { $set: event.target.value } } })))}
        />
      </TableCell>
      <TableCell>
        {value.result ? (value.result * 100).toFixed(2) : "-"}%
      </TableCell>
    </TableRow>
  )
}

function updateResult(value: HCRDataItem): HCRDataItem {
  if (value.input === undefined || value.input.measured === "" || value.input.baseline === "") return value
  return {
    ...value,
    result: +value.input.measured / +value.input.baseline,
  }
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
