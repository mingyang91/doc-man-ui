import { Button, Menu, MenuItem, Select, Tooltip } from '@mui/material'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isBoolean } from 'lodash-es'
import {
  FormEventHandler,
  forwardRef,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'

import Iconify from 'd/components/iconify'
import { TypeAndIcons } from 'd/components/json-field/utils/icons'

import { NodeTypes, PrimitiveValue } from '../type'
import { StyledKeyInput, StyledValueInput } from './node/components/styled'

interface KeyInputProps {
  value?: string
  onChange?: (value: string) => void
}

export const KeyInput = forwardRef<HTMLInputElement, KeyInputProps>(
  ({ value, onChange }, ref) => {
    const [editing, setEditing] = useBoolean(false)
    const [valueState, setValueState] = useState(value || '')

    const onKeyInput = useMemoizedFn<FormEventHandler<HTMLInputElement>>(e => {
      setValueState(e.currentTarget.value)
    })

    useEffect(() => {
      if (!editing && value !== valueState) {
        onChange?.(valueState)
      }
    }, [editing, onChange, value, valueState])

    return (
      <StyledKeyInput
        ref={ref}
        fullWidth
        readOnly={!editing}
        value={valueState}
        onClick={() => setEditing.setTrue()}
        onBlur={() => setEditing.setFalse()}
        onInput={onKeyInput}
      />
    )
  }
)

interface PrimitiveValueInputProps {
  value?: PrimitiveValue
  onChange?: (value: PrimitiveValue) => void
}

export const PrimitiveValueInput = forwardRef<
  HTMLInputElement,
  PrimitiveValueInputProps
>(({ value, onChange }, ref) => {
  if (isBoolean(value)) {
    const stringifyValue = value === true ? 'true' : 'false'

    return (
      <Select
        fullWidth
        ref={ref}
        value={stringifyValue}
        onChange={e => onChange?.(e.target.value === 'true')}
      >
        <MenuItem value="true">True</MenuItem>
        <MenuItem value="false">False</MenuItem>
      </Select>
    )
  }

  return (
    <StyledValueInput
      fullWidth
      ref={ref}
      value={value}
      onChange={e => onChange?.(e.target.value)}
    />
  )
})

interface TypeSelectProps {
  value: NodeTypes
  onChange?: (value: NodeTypes) => void
}

export const TypeSelect = ({ value, onChange }: TypeSelectProps) => {
  const anchorEl = useRef<null | HTMLButtonElement>(null)

  const [open, setOpen] = useState(false)

  const handleOpen = useMemoizedFn<MouseEventHandler<HTMLButtonElement>>(e => {
    !anchorEl.current && (anchorEl.current = e.currentTarget)
    setOpen(true)
  })

  const handleClose = useMemoizedFn(() => {
    setOpen(false)
  })

  const handleChange = useMemoizedFn<(value: NodeTypes) => void>(() => {
    onChange?.(value)
    setOpen(false)
  })

  return (
    <>
      <Tooltip title={`数据类型: ${value}`}>
        <Button
          variant="text"
          color="secondary"
          ref={anchorEl}
          onClick={handleOpen}
        >
          <Iconify icon={TypeAndIcons[value]} />
        </Button>
      </Tooltip>
      <Menu
        open={open && !!anchorEl}
        anchorEl={anchorEl.current}
        onClose={handleClose}
      >
        {Object.entries(TypeAndIcons).map(([type, icon]) => (
          <MenuItem
            key={type}
            value={type}
            onClick={() => handleChange(type as NodeTypes)}
          >
            <Iconify icon={icon} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
