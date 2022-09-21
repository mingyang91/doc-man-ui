import {
  AutocompleteProps,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  Stack,
  SxProps,
  TextField,
  Theme,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { isEqual, isNil } from 'lodash-es'
import { ChangeEventHandler, useEffect } from 'react'
import { useImmer } from 'use-immer'

import {
  BaseLocationValue,
  LocationValue,
  OnChange,
  OnValueChange,
} from '../type'
import { initialLocationData } from '../utils'
import { SelectorCity } from './selector-city'
import { SelectorCounty } from './selector-county'
import { SelectorProvince } from './selector-province'
import { SelectorTown } from './selector-town'

type BaseSelector = AutocompleteProps<
  BaseLocationValue,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  'div'
>

export interface LocationSelectorProps
  extends Omit<FormControlProps, 'value' | 'onChange'> {
  id?: string
  isError?: boolean
  label?: string
  helperText?: string
  value?: LocationValue
  onChange?: OnChange
  withDetail?: boolean
  newLineForDetail?: boolean
  sx?: SxProps<Theme>
  componentProps?: {
    province?: BaseSelector
    city?: BaseSelector
    county?: BaseSelector
    town?: BaseSelector
  }
}

export const LocationSelector = ({
  id,
  label = '地址',
  value: valueProps,
  onChange,
  componentProps,
  isError,
  helperText,
  withDetail = true,
  newLineForDetail = true,
  ...restProps
}: LocationSelectorProps) => {
  const [focused, setFocused] = useImmer([false, false, false, false, false])

  const focusState = focused.some(Boolean)

  const [value, setValue] = useImmer<LocationValue>(() =>
    initialLocationData(valueProps, newLineForDetail)
  )

  const handleChangeProvince = useMemoizedFn<OnValueChange>(province => {
    setValue(draft => {
      draft.province = province?.value ?? null
      draft.provinceName = province?.label ?? ''
      draft.city = null
      draft.county = null
      draft.town = null
      draft.cityName = ''
      draft.countyName = ''
      draft.townName = ''
    })
  })

  const handleChangeCity = useMemoizedFn<OnValueChange>(city => {
    setValue(draft => {
      draft.city = city?.value ?? null
      draft.county = null
      draft.town = null

      draft.cityName = city?.label || ''
      draft.countyName = ''
      draft.townName = ''
    })
  })

  const handleChangeCounty = useMemoizedFn<OnValueChange>(county => {
    setValue(draft => {
      draft.county = county?.value ?? null
      draft.town = null

      draft.countyName = county?.label ?? ''
      draft.townName = ''
    })
  })

  const handleChangeTown = useMemoizedFn<OnValueChange>(town => {
    setValue(draft => {
      draft.town = town?.value ?? null
      draft.townName = town?.label ?? ''
    })
  })

  const handleChangeFocus = useMemoizedFn((index: number, value: boolean) => {
    setFocused(draft => {
      draft[index] = value
    })
  })

  const handleChangeDetail = useMemoizedFn<
    ChangeEventHandler<HTMLInputElement>
  >(event => {
    setValue(draft => {
      draft.detail = event.target.value
    })
  })

  useEffect(() => {
    if (!isEqual(valueProps, value)) {
      onChange?.(value)
    }
  }, [value, valueProps, onChange])

  const selectorProvince = (
    <SelectorProvince
      value={value.province}
      onChange={handleChangeProvince}
      onFocus={() => handleChangeFocus(0, true)}
      onBlur={() => handleChangeFocus(0, false)}
      componentProps={componentProps?.province}
    />
  )

  const selectorCity = value.province && (
    <SelectorCity
      value={value.city}
      provinceValue={value.province}
      onChange={handleChangeCity}
      onFocus={() => handleChangeFocus(1, true)}
      onBlur={() => handleChangeFocus(1, false)}
      componentProps={componentProps?.city}
    />
  )

  const selectorCounty = value.city && (
    <SelectorCounty
      value={value.county}
      cityValue={value.city}
      onChange={handleChangeCounty}
      onFocus={() => handleChangeFocus(2, true)}
      onBlur={() => handleChangeFocus(2, false)}
      componentProps={componentProps?.city}
    />
  )

  const selectorTown = value.county && (
    <SelectorTown
      value={value.town}
      countyValue={value.county}
      onChange={handleChangeTown}
      onFocus={() => handleChangeFocus(3, true)}
      onBlur={() => handleChangeFocus(3, false)}
      componentProps={componentProps?.town}
    />
  )

  if (withDetail) {
    const textfieldDetail = (
      <TextField
        placeholder="详细地址"
        fullWidth
        sx={{ '& .MuiInputBase-root': { marginTop: '8px' } }}
        value={value.detail || ''}
        onChange={handleChangeDetail}
        onFocus={() => handleChangeFocus(4, true)}
        onBlur={() => handleChangeFocus(4, false)}
      />
    )

    const inner = (
      <>
        {selectorProvince}
        {selectorCity}
        {selectorCounty}
        {selectorTown}
      </>
    )

    const outer = newLineForDetail ? (
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3}>
          {inner}
        </Stack>
        {textfieldDetail}
      </Stack>
    ) : (
      <Stack direction="row" spacing={3}>
        {inner}
        {textfieldDetail}
      </Stack>
    )

    return (
      <FormControl {...restProps} focused={focusState}>
        <InputLabel htmlFor={id} shrink={!isNil(value.province)}>
          {label}
        </InputLabel>
        {outer}
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    )
  }

  return (
    <FormControl {...restProps} focused={focusState}>
      <InputLabel htmlFor={id} shrink={!isNil(value.province)}>
        {label}
      </InputLabel>
      <Stack direction="row" spacing={3}>
        {selectorProvince}
        {selectorCity}
        {selectorCounty}
        {selectorTown}
      </Stack>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
