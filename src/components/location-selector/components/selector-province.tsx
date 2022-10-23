/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteProps,
  AutocompleteValue,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ElementType, SyntheticEvent, useId, useMemo, useState } from 'react'

import { useProvinceListQuery } from 'm/location/index.generated'

import { BaseLocationValue, SelectorProps } from '../type'
import { filterOptions } from '../utils'
import { SelectTextField } from './base'

export interface SelectorProvinceProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends ElementType<any> = 'div'
> extends SelectorProps {
  componentProps?: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
}

export const SelectorProvince = ({
  isError,
  value: valueProp,
  onChange: onChangeProps,
  onFocus,
  onBlur,
  componentProps,
}: SelectorProvinceProps<
  BaseLocationValue,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  'div'
>) => {
  const id = useId()

  const { data, isLoading } = useProvinceListQuery(
    {},
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  )

  const options = useMemo(() => data?.list || [], [data])

  const value = useMemo(
    () =>
      options.find(option => option.value === valueProp) ||
      (null as BaseLocationValue | null),
    [options, valueProp]
  )

  const [inputValue, setInputValue] = useState(() => value?.label || '')

  const onInput = useMemoizedFn<
    (
      event: SyntheticEvent,
      value: string,
      reason: AutocompleteInputChangeReason
    ) => void
  >((_, newValue, reason) => {
    setInputValue(newValue)
  })

  const onChange = useMemoizedFn<
    (
      event: SyntheticEvent,
      value: AutocompleteValue<
        BaseLocationValue,
        boolean | undefined,
        boolean | undefined,
        boolean | undefined
      >,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<BaseLocationValue>
    ) => void
  >((_, value) => {
    setInputValue((value as BaseLocationValue)?.label || '')
    onChangeProps?.(value as BaseLocationValue)
  })

  return (
    <Autocomplete
      fullWidth
      {...componentProps}
      id={componentProps?.id || id}
      loading={isLoading}
      options={options}
      renderInput={params => <SelectTextField {...params} error={isError} />}
      value={value}
      inputValue={inputValue}
      onInputChange={onInput}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      filterOptions={filterOptions}
    />
  )
}
