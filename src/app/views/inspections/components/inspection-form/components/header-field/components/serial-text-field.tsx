import {
  FormControl,
  IconButton,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { ChangeEventHandler, MouseEventHandler, useMemo, useState } from 'react'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'
import { useImmer } from 'use-immer'

import { SerialNumber } from 'm/presets'

export const SerialTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-input': {
    padding: theme.spacing(1),
  },
  '& .MuiInputBase-readOnly': {
    backgroundColor: 'transparent',
  },
  '& .MuiInputBase-input': {
    textAlign: 'right',
  },
}))

export interface SerialNumberFieldProps {
  initialValue?: SerialNumber
}

export const SerialNumberField = ({ initialValue }: SerialNumberFieldProps) => {
  const [isEditing, setIsEditing] = useBoolean(false)

  const [value, setValue] = useImmer<SerialNumber>({
    prefix: initialValue?.prefix ?? 'FYS',
    year: initialValue?.year ?? `${new Date().getFullYear()}`,
    number: '',
  })

  const [inputValue, setInputValue] = useState('')

  const onChange = useMemoizedFn<ChangeEventHandler<HTMLInputElement>>(e => {
    setInputValue(e.target.value)
  })

  const onEnsure = useMemoizedFn<MouseEventHandler<HTMLButtonElement>>(e => {
    setValue(draft => {
      draft.number = inputValue
    })
    setIsEditing.setFalse()
  })

  const onCancel = useMemoizedFn<MouseEventHandler<HTMLButtonElement>>(e => {
    setIsEditing.setFalse()
    setInputValue(value.number || '')
  })

  const staticField = useMemo(
    () => (
      <>
        <Typography variant="body1" component="span">
          {value.prefix}
        </Typography>
        {'-'}
        <Typography variant="body1" component="span">
          {value.year}
        </Typography>
        {'-'}
      </>
    ),
    [value.prefix, value.year]
  )

  const endAdornment = useMemo(
    () =>
      isEditing ? (
        <>
          <IconButton aria-label="确定" color="primary" onClick={onEnsure}>
            <MdCheck />
          </IconButton>
          <IconButton aria-label="取消" color="error" onClick={onCancel}>
            <MdClose />
          </IconButton>
        </>
      ) : (
        <IconButton aria-label="编辑" onClick={setIsEditing.setTrue}>
          <MdEdit />
        </IconButton>
      ),
    [isEditing, onCancel, onEnsure, setIsEditing.setTrue]
  )

  return (
    <FormControl>
      <SerialTextField
        placeholder="请输入编号后几位"
        variant="filled"
        value={inputValue}
        onChange={onChange}
        InputProps={{
          readOnly: !isEditing,
          startAdornment: staticField,
          endAdornment: endAdornment,
        }}
      />
    </FormControl>
  )
}
