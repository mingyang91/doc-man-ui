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
import { ElementType, SyntheticEvent, useId, useMemo, useState } from 'react'

import { useTownListQuery } from 'm/location/index.generated'

import { BaseLocationValue, SelectorProps } from '../type'
import { filterOptions } from '../utils'
import { SelectTextField } from './base'

import i18n from 'strings/i18n'

export interface SelectorTownProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends ElementType<any> = 'div'
> extends SelectorProps {
  countyValue: number
  componentProps?: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
}

export const SelectorTown = ({
  isError,
  countyValue,
  value: valueProp,
  onChange: onChangeProps,
  onFocus,
  onBlur,
  componentProps,
}: SelectorTownProps<
  BaseLocationValue,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  'div'
>) => {
  const id = useId()

  const { data, isLoading } = useTownListQuery(
    {
      countyCode: countyValue,
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
      renderInput={params => (
        <SelectTextField {...params} placeholder={i18n.t('乡镇街道')} error={isError} />
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
