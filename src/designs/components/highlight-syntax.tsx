import { FocusEventHandler, useMemo, useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import HighlightEditor from 'react-simple-code-editor'
import hljs from 'highlight.js/lib/core'
import excel from 'highlight.js/lib/languages/excel'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/vs.css'
import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material'

// 目前只用到了这一个
hljs.registerLanguage('excel', excel)
hljs.registerLanguage('json', json)

export interface HighlightSyntaxProps {
  language?: 'json' | 'excel'
  code: string
}

export const HighlightSyntax = ({
  code,
  language = 'json',
}: HighlightSyntaxProps) => {
  const theme = useTheme()

  const sx: SxProps = useMemo(
    () => ({
      padding: theme.spacing(2),
      fontFamily: 'Fira Code, Fira Mono, Courier New, monospace',
      fontSize: theme.typography.body2.fontSize,
    }),
    [theme]
  )

  const highlight = useMemo(
    () => hljs.highlight(code, { language }).value,
    [code, language]
  )

  return (
    <Typography component="section" sx={sx}>
      {highlight}
    </Typography>
  )
}

type JSONData = Record<string | number, unknown>

const transformToString = (value: JSONData) => {
  try {
    return JSON.stringify(value, null, 2)
  } catch (e) {
    console.error(e)
    return ''
  }
}

const transformToJSON = (value: string) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export interface JsonEditorProps extends Omit<FormControlProps, 'onChange'> {
  id?: string
  label?: string
  showHelperText?: boolean
  helperText?: string
  sx?: SxProps
  value: JSONData
  onChange: (value: JSONData) => void
  onBlur?: FocusEventHandler<HTMLDivElement> &
    FocusEventHandler<HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLDivElement> &
    FocusEventHandler<HTMLTextAreaElement>
}

export const JsonEditor = ({
  id,
  value,
  onChange,
  onBlur,
  onFocus,
  label,
  helperText,
  sx: sxProps,
  showHelperText,
  variant = 'outlined',
  ...restProps
}: JsonEditorProps) => {
  const theme = useTheme()

  const sx = useMemo(
    () => ({
      ...sxProps,
      ['& .pre']: {
        padding: theme.spacing(2),
        flex: 1,
        width: '100%',
        fontFamily: 'Fira Code, Fira Mono, Courier New, monospace',
        fontSize: theme.typography.body2.fontSize,
      },
    }),
    [sxProps, theme]
  )

  const [stringified, setStringified] = useState(transformToString(value))
  const highlight = useMemo(
    () => (code: string) => hljs.highlight(code, { language: 'json' }).value,
    []
  )

  useUpdateEffect(() => {
    const obj = transformToJSON(stringified)

    if (obj !== undefined) {
      onChange?.(obj)
    }
  }, [stringified, onChange])

  return (
    <FormControl {...restProps} variant={variant} sx={sx}>
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>
      <Box display="flex">
        <HighlightEditor
          id={id}
          value={stringified}
          highlight={highlight}
          onValueChange={setStringified}
          onBlur={onBlur}
          onFocus={onFocus}
          padding={theme.spacing(4)}
          className="pre"
        />
      </Box>
      {showHelperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
