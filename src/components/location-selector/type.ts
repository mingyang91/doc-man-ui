import { AddressField } from 'm/presets'

export type BaseLocationValue = {
  code: number | null
  label: string
  value: number | null
}

export type OnValueChange = (value: BaseLocationValue | null) => void

export type SelectorProps = {
  value: BaseLocationValue['code']
  onChange?: OnValueChange
  onFocus?: () => void
  onBlur?: () => void
}

export type LocationValue = Omit<AddressField, 'postcode'>

export type OnChange = (value: LocationValue) => void
