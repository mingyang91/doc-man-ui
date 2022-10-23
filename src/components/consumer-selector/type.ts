import { FocusEventHandler } from 'react'

import { ScalarJson, UUIDV4 } from 'm/presets'

export type ConsumerSelectorOption = {
  id: UUIDV4
  name: string
  address?: ScalarJson
}

export type ConsumerSelectorValue = ConsumerSelectorOption

export type OnValueChange = (value: ConsumerSelectorValue | null) => void

export type SelectorProps = {
  id?: string
  isRequired?: boolean
  isError?: boolean
  value: ConsumerSelectorValue
  onChange?: OnValueChange
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: () => void
}
