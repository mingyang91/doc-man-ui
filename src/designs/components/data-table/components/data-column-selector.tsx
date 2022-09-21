import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  PopoverOrigin,
  SxProps,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { isEqual, isUndefined } from 'lodash-es'
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import { ChangeEvent, useEffect, useMemo } from 'react'
import { RiFilter2Fill } from 'react-icons/ri'
import { useImmerReducer } from 'use-immer'

import Iconify from 'd/components/iconify'

type OnChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void

type DataColumnItem = {
  label?: string
  value: string
  disabled?: boolean
}

export type DataColumnSelectorProps = {
  columns: DataColumnItem[]
  defaultChecked?: string[]
  checked?: string[]
  onChange?: (checked: string[]) => void
  anchorOrigin?: PopoverOrigin
  sx?: SxProps
}

type SelectorItemProps = DataColumnItem & {
  isChecked?: boolean
  onChange?: OnChange
}

const SelectorItem = ({
  label,
  value,
  disabled,
  isChecked = false,
  onChange,
}: SelectorItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': value }}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
        </ListItemIcon>
        <ListItemText id={value} primary={label || value} />
      </ListItemButton>
    </ListItem>
  )
}

export const DataColumnSelector = ({
  columns,
  checked: checkProps,
  defaultChecked,
  onChange,
  sx,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
}: DataColumnSelectorProps) => {
  const [checked, updateChecked] = useImmerReducer<
    Set<string>,
    {
      payload?: string | string[]
      type: 'add' | 'remove' | 'clear' | 'addAll' | 'replace'
    }
  >((state, action) => {
    switch (action.type) {
      case 'addAll':
        return new Set(columns.map(({ value }) => value))
      case 'add':
        action.payload && state.add(action.payload as string)
        break
      case 'remove':
        action.payload && state.delete(action.payload as string)
        break
      case 'clear':
        state.clear()
        break
      case 'replace':
        return new Set((action.payload as string[]) || [])
    }
    return state
  }, new Set(checkProps || defaultChecked || []))

  const allCheckedState = useMemo(
    () => ({
      checked: !!columns.length && checked.size === columns.length,
      indeterminate: checked.size > 0 && checked.size < columns.length,
    }),
    [checked.size, columns.length]
  )

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'data-column-selector',
  })

  const onItemChange = useMemoizedFn<OnChange>(({ target }, isChecked) => {
    // updateChecked({ type: isChecked ? 'add' : 'remove', payload: target.value })
    const newValue = new Set(checked)
    isChecked ? newValue.add(target.value) : newValue.delete(target.value)
    onChange?.(Array.from(newValue))
  })

  const onAllCheckChange = useMemoizedFn<OnChange>((_, isChecked) => {
    // updateChecked({ type: isChecked ? 'addAll' : 'clear' })
    const newValue = isChecked
      ? new Set(columns.map(({ value }) => value))
      : new Set<string>([])
    onChange?.(Array.from(newValue))
  })

  const children = useMemo(
    () =>
      columns.map(column => (
        <SelectorItem
          key={column.value}
          isChecked={checked.has(column.value)}
          label={column.label}
          value={column.value}
          disabled={column.disabled}
          onChange={onItemChange}
        />
      )),
    [checked, columns, onItemChange]
  )

  useEffect(() => {
    if (!isUndefined(checkProps) && !isEqual(checkProps, Array.from(checked))) {
      updateChecked({ type: 'replace', payload: checkProps })
    }
  }, [checkProps, checked, updateChecked])

  return (
    <>
      <IconButton
        aria-label="过滤"
        color="default"
        {...bindTrigger(popupState)}
        sx={sx}
      >
        <Iconify icon={RiFilter2Fill} />
      </IconButton>
      <Popover {...bindPopover(popupState)} anchorOrigin={anchorOrigin}>
        <List>
          <ListItem disablePadding>
            <ListItemButton dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={allCheckedState.checked}
                  indeterminate={allCheckedState.indeterminate}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': '' }}
                  onChange={onAllCheckChange}
                />
              </ListItemIcon>
              <ListItemText primary="全选" />
            </ListItemButton>
          </ListItem>
          {children}
        </List>
      </Popover>
    </>
  )
}
