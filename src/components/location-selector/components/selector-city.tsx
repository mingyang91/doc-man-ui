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
import { isArray, isObject } from 'lodash-es'
import {
  ElementType,
  SyntheticEvent,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react'

import { useCityListQuery } from 'm/location/index.generated'

import { BaseLocationValue, SelectorProps } from '../type'
import { filterOptions } from '../utils'
import { SelectTextField } from './base'

export interface SelectorCityProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends ElementType<any> = 'div'
> extends SelectorProps {
  provinceValue: number
  componentProps?: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
}

export const SelectorCity = ({
  isError,
  provinceValue,
  value: valueProp,
  onChange: onChangeProps,
  onFocus,
  onBlur,
  componentProps,
}: SelectorCityProps<
  BaseLocationValue,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  'div'
>) => {
  const id = useId()

  const { data, isLoading } = useCityListQuery(
    {
      provinceCode: provinceValue,
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

  useEffect(() => {
    if (options.length === 1) {
      const value = options[0]
      onChangeProps?.({
        label: value.label,
        value: value.value,
        code: value.code,
      })
    }
  }, [onChangeProps, options, options.length])

  return (
    <Autocomplete
      fullWidth
      {...componentProps}
      id={id}
      loading={isLoading}
      options={options}
      renderInput={params => (
        <SelectTextField {...params} placeholder="地级" error={isError} />
      )}
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
