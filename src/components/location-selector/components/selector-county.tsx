/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteProps,
  AutocompleteValue,
  TextField,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { isArray, isObject } from 'lodash-es'
import { ElementType, SyntheticEvent, useId, useMemo, useState } from 'react'

import { useCountyListQuery } from 'm/location/index.generated'

import { BaseLocationValue, SelectorProps } from '../type'
import { filterOptions } from '../utils'

export interface SelectorCountyProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends ElementType<any> = 'div'
> extends SelectorProps {
  cityValue: number
  componentProps?: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
}

export const SelectorCounty = ({
  cityValue,
  value: valueProp,
  onChange: onChangeProps,
  onFocus,
  onBlur,
  componentProps,
}: SelectorCountyProps<
  BaseLocationValue,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  'div'
>) => {
  const id = useId()

  const { data, isLoading } = useCountyListQuery(
    {
      cityCode: cityValue,
    },
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
    if (isObject(value) && !isArray(value)) {
      onChangeProps?.(value)
    }
  })

  return (
    <Autocomplete
      fullWidth
      {...componentProps}
      id={id}
      loading={isLoading}
      options={options}
      renderInput={params => <TextField {...params} placeholder="县级" />}
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
