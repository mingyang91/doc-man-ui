import { FieldRenderProps } from 'react-final-form'
import { useCallback } from 'react'
import { produce } from 'immer'
import { isArray } from 'lodash-es'

import { DBLFAIFDataResult, DBLFAIFDataResultItem } from '../type'
import { DBLFAIFValueItem } from './value-item'

export type DBLFAIFDataResultInputProps = FieldRenderProps<DBLFAIFDataResult>

export const DBLFAIFDataResultInput = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: DBLFAIFDataResultInputProps) => {
  console.log(value, typeof value)

  const onItemChange = useCallback<
    (valueItem: DBLFAIFDataResultItem, index: number) => void
  >(
    (valueItem, index) => {
      onChange?.(
        produce(value, draft => {
          draft[index] = valueItem
        })
      )
    },
    [onChange, value]
  )

  if (!isArray(value)) {
    return <></>
  }

  return (
    <>
      {value?.map((item, index) => (
        <DBLFAIFValueItem
          key={index}
          index={index}
          value={item}
          onChange={onItemChange}
        />
      ))}
    </>
  )
}
