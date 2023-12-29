/* eslint-disable jsx-a11y/no-autofocus */
import {
  Button,
  Dialog as DialogPrimitive,
  DialogActions,
  DialogContent,
  DialogProps as DialogPrimitiveProps,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ReactNode, useMemo } from 'react'
import { MdClose } from 'react-icons/md'

import Iconify from './iconify'

import i18n from 'strings/i18n'

export interface ModalProps
  extends Omit<DialogPrimitiveProps, 'open' | 'onClose'> {
  isOpen: boolean
  title?: string
  dividers?: boolean
  onConfirm?: VoidFn
  onClose?: VoidFn
  clickOverlayClose?: boolean
  showActionBar?: boolean
  showCloseButton?: boolean
  customActionRender?: (onClose: VoidFn) => ReactNode
}

const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.grey[500],
}))

export const Modal = ({
  isOpen,
  title,
  onClose,
  onConfirm,
  dividers = true,
  showActionBar = true,
  showCloseButton = true,
  clickOverlayClose = true,
  children,
  'aria-labelledby': ariaLabelledby = 'modal-title',
  'aria-describedby': ariaDescribedby = 'modal-description',
  customActionRender,
  ...restProps
}: ModalProps) => {
  const actionBar = useMemo(
    () =>
      showActionBar ? (
        customActionRender ? (
          customActionRender(() => onClose?.())
        ) : (
          <DialogActions>
            {showCloseButton ? (
              <Button onClick={e => onClose?.()} color="primary">
                {i18n.t('关闭')}
              </Button>
            ) : null}
            <Button
              onClick={onConfirm}
              variant="contained"
              color="primary"
              autoFocus
            >
              {i18n.t('确认')}
            </Button>
          </DialogActions>
        )
      ) : null,
    [customActionRender, onClose, onConfirm, showActionBar, showCloseButton]
  )

  const CloseButton = useMemo(
    () =>
      showCloseButton ? (
        <StyledCloseButton onClick={onClose} aria-label="close">
          <Iconify icon={MdClose} />
        </StyledCloseButton>
      ) : null,
    [onClose, showCloseButton]
  )

  const handleCloseDialog = useMemoizedFn(
    (_: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (clickOverlayClose && reason === 'backdropClick') {
        onClose?.()
      }
    }
  )

  return (
    <DialogPrimitive
      open={isOpen}
      onClose={handleCloseDialog}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      {...restProps}
    >
      <DialogTitle id={ariaLabelledby}>
        {title}
        {CloseButton}
      </DialogTitle>
      <DialogContent dividers={dividers} sx={{ mt: 2 }}>
        {children}
      </DialogContent>
      {actionBar}
    </DialogPrimitive>
  )
}
