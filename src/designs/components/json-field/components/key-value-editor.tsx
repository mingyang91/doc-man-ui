import { Box, Stack, Typography } from '@mui/material'
import { isNumber } from 'lodash-es'
import { useMemo } from 'react'
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md'

import Iconify from 'd/components/iconify'

import { PrimitiveValue } from '../type'
import { KeyInput, PrimitiveValueInput } from './inputs'

interface KeyValueEditorProps {
  isOpen?: boolean
  isArrayItem: boolean
  isObjectNode?: boolean
  isArrayValue?: boolean
  keyString?: string
  index?: number
  value?: PrimitiveValue
  onKeyChange?: (value: string) => void
  onValueChange?: (value: PrimitiveValue) => void
  onOpenChange?: false | ((isOpen: boolean) => void)
}

export const KeyValueEditor = ({
  isOpen,
  isArrayItem,
  isObjectNode,
  isArrayValue,
  keyString,
  index,
  value,
  onKeyChange,
  onValueChange,
  onOpenChange,
}: KeyValueEditorProps) => {
  const keyContent = useMemo(
    () =>
      isArrayItem ? (
        isNumber(index) ? (
          <Typography variant="body1">{index} : </Typography>
        ) : null
      ) : (
        <>
          <KeyInput value={keyString || ''} onChange={onKeyChange} />
          <Typography variant="body1"> : </Typography>
        </>
      ),
    [index, isArrayItem, keyString, onKeyChange]
  )

  const openableContent = useMemo(
    () => (
      <Box display="flex" alignItems="center" flex="1">
        {onOpenChange ? (
          <Iconify
            icon={isOpen ? MdArrowDropDown : MdArrowRight}
            onClick={() => onOpenChange(!isOpen)}
          />
        ) : null}
        <Typography variant="body1">
          {isArrayValue ? '[...]' : '{...}'}
        </Typography>
      </Box>
    ),
    [isArrayValue, isOpen, onOpenChange]
  )

  return (
    <Stack direction="row" flex={'1'} spacing={0}>
      {keyContent}
      {isObjectNode ? (
        openableContent
      ) : (
        <PrimitiveValueInput value={value || ''} onChange={onValueChange} />
      )}
    </Stack>
  )
}
