import { isNil, some } from 'lodash-es'

import { ConsumerSelectorOption, ConsumerSelectorValue } from './type'

export const isInclude = (
  value: ConsumerSelectorValue,
  options: ConsumerSelectorOption[]
) => some(options, option => value.id == option.id)

export const isOptionEqualToValue: (
  option: ConsumerSelectorOption,
  value: ConsumerSelectorOption
) => boolean = (option, value) =>
  isNil(option) || isNil(value) ? false : option.id === value.id
