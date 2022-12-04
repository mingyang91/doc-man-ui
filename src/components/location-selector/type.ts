import { TextFieldProps } from '@mui/material'

import { AddressField } from 'm/presets'

export type BaseLocationValue = {
  code: number | null
  label: string
  value: number | null
}

export type OnValueChange = (value: BaseLocationValue | null) => void

export type SelectorProps = {
  variant?: TextFieldProps['variant']
  isError?: boolean
  value: BaseLocationValue['code']
  onChange?: OnValueChange
  onFocus?: () => void
  onBlur?: () => void
}

export type LocationValue = AddressField

export type OnChange = (value: LocationValue) => void
