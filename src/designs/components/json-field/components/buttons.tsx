import { IconButton, IconButtonProps } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { forwardRef, MouseEventHandler } from 'react'
import {
  MdAddCircle,
  MdRemoveCircle,
  MdUnfoldLess,
  MdUnfoldMore,
} from 'react-icons/md'

import Iconify from 'd/components/iconify'

import { StyledOptions } from './node/components/styled'

import i18n from 'strings/i18n'

interface FoldButtonProps extends IconButtonProps {
  isOpen: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const FoldButton = forwardRef<HTMLButtonElement, FoldButtonProps>(
  ({ isOpen, onOpenChange, onClick }, ref) => {
    const handleClick = useMemoizedFn<MouseEventHandler<HTMLButtonElement>>(
      e => {
        onOpenChange?.(!isOpen)
        onClick?.(e)
      }
    )

    return (
      <IconButton ref={ref} onClick={handleClick}>
        <Iconify icon={isOpen ? MdUnfoldMore : MdUnfoldLess} />
      </IconButton>
    )
  }
)

interface NodeEditorButtonsProps {
  onRemove?: () => void
  onAdd?: () => void
}

export const NodeEditorButtons = forwardRef<
  HTMLDivElement,
  NodeEditorButtonsProps
>(({ onRemove, onAdd }, ref) => {
  return (
    <StyledOptions direction="row" ref={ref}>
      <IconButton
        onClick={onRemove}
        size="small"
        color="error"
        aria-label={i18n.t("删除节点")}
      >
        <Iconify icon={MdRemoveCircle} />
      </IconButton>
      <IconButton
        onClick={onAdd}
        size="small"
        color="info"
        aria-label={i18n.t("增加兄弟节点")}
      >
        <Iconify icon={MdAddCircle} />
      </IconButton>
    </StyledOptions>
  )
})
