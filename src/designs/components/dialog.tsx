/* eslint-disable jsx-a11y/no-autofocus */
import {
  Button,
  Dialog as DialogPrimitive,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps as DialogPrimitiveProps,
  DialogTitle,
} from '@mui/material'
import { ReactNode } from 'react'

import i18n from 'strings/i18n'


export interface DialogProps
  extends Omit<DialogPrimitiveProps, 'open' | 'onClose'> {
  isOpen: boolean
  onConfirm?: VoidFn
  onCancel?: VoidFn
  title?: string
  customRender?: (ariaDescribedby?: string, content?: ReactNode) => ReactNode
  content?: ReactNode
  confirmText?: string
  cancelText?: string
  dividers?: boolean
}

export const Dialog = ({
  isOpen,
  title,
  content,
  confirmText = i18n.t('确认'),
  cancelText = i18n.t('取消'),
  onConfirm,
  onCancel,
  dividers,
  customRender,
  'aria-labelledby': ariaLabelledby = 'alert-dialog-title',
  'aria-describedby': ariaDescribedby = 'alert-dialog-description',
  ...restProps
}: DialogProps) => {
  return (
    <DialogPrimitive
      open={isOpen}
      onClose={onCancel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      {...restProps}
    >
      <DialogTitle id={ariaLabelledby}>{title}</DialogTitle>
      <DialogContent dividers={dividers} sx={{ mt: 2 }}>
        {customRender ? (
          customRender(ariaDescribedby, content)
        ) : (
          <DialogContentText id={ariaDescribedby}>{content}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="primary"
          autoFocus
        >
          {confirmText}
        </Button>
      </DialogActions>
    </DialogPrimitive>
  )
}
