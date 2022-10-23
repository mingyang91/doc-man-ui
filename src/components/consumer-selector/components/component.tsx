import {
  IconButton,
  InputProps,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { useBoolean, useControllableValue, useMemoizedFn } from 'ahooks'
import {
  FocusEventHandler,
  forwardRef,
  MouseEventHandler,
  useId,
  useMemo,
  useState,
} from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

import { ConsumerSelectorValue, SelectorProps } from '../type'
import { Dropdown } from './dropdown'

export interface ConsumerSelectorProps
  extends SelectorProps,
    Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'onFocus'> {
  InputProps?: InputProps
}

export const ConsumerSelector = forwardRef<
  HTMLDivElement,
  ConsumerSelectorProps
>(
  (
    {
      id: idProps,
      label = '客户',
      isRequired,
      isError,
      error,
      required,
      helperText,
      value: valueProp,
      onChange: onChangeProps,
      onFocus,
      onBlur,
      focused: focusedProps,
      InputProps = {},
      ...restProps
    },
    ref
  ) => {
    const id = useId()

    const idState = idProps ?? id

    const isRequiredState = isRequired ?? required

    const isErrorState = isError ?? error

    const [open, { setTrue: setOpen, setFalse: setClose }] = useBoolean(false)

    const focused = open || focusedProps

    const isShrink = focused

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const [value, setValue] =
      useControllableValue<ConsumerSelectorValue | null>(
        {
          value: valueProp,
          onChange: onChangeProps,
        },
        {}
      )

    const handleClick = useMemoizedFn<MouseEventHandler<HTMLInputElement>>(
      e => {
        setAnchorEl(e.currentTarget as HTMLElement)
        setOpen()
        e.stopPropagation()
      }
    )

    const handleFocus = useMemoizedFn<FocusEventHandler<HTMLInputElement>>(
      e => {
        setOpen()
        onFocus?.(e)
      }
    )

    const handleClickAway = useMemoizedFn((e: MouseEvent | TouchEvent) => {
      if (
        e.currentTarget !== anchorEl &&
        e.currentTarget &&
        anchorEl &&
        !anchorEl.contains(e.currentTarget as Node)
      ) {
        setClose()
      }
    })

    const dropdownAdornment = useMemo(
      () =>
        open ? (
          <IconButton aria-label="Open" title="Open" onClick={setOpen}>
            <MdOutlineArrowDropDown />
          </IconButton>
        ) : (
          <IconButton aria-label="Open" title="Open" onClick={setClose}>
            <MdOutlineArrowDropDown />
          </IconButton>
        ),
      [open, setClose, setOpen]
    )

    return (
      <>
        <TextField
          {...restProps}
          id={idState}
          label={label}
          required={isRequiredState}
          error={isErrorState}
          focused={focused}
          InputLabelProps={{ shrink: isShrink }}
          InputProps={{
            ...InputProps,
            endAdornment: dropdownAdornment,
            readOnly: true,
          }}
          value={value?.name || ''}
          helperText={helperText}
          onClick={handleClick}
          onFocus={handleFocus}
          inputRef={ref}
          placeholder="请选择客户"
        />
        <Dropdown
          anchorEl={anchorEl}
          open={open}
          value={value}
          onClose={setClose}
          onChange={setValue}
          onClickAway={handleClickAway}
        />
      </>
    )
  }
)
