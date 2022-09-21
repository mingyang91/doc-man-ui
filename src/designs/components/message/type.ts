import { AlertProps, CardProps } from '@mui/material'
import { CustomContentProps } from 'notistack'
import { ReactNode } from 'react'

export type MessageProps = {
  type: 'success' | 'error' | 'warning' | 'info'
  title?: ReactNode
  description?: ReactNode
}

export interface SnackbarMessageProps
  extends Omit<CustomContentProps, 'message'> {
  closeable?: boolean
  title?: ReactNode
  message?: ReactNode
  componentProps?: Omit<AlertProps, 'severity' | 'title'>
}

export interface SnackbarMessageDefaultProps
  extends Omit<CustomContentProps, 'message'> {
  closeable?: boolean
  title?: ReactNode
  message?: ReactNode
  componentProps?: Omit<CardProps, 'title'>
}

export interface SnackbarMessageLoadingProps
  extends Omit<SnackbarMessageProps, 'closeable'> {
  type?: 'success' | 'error' | 'warning' | 'info'
}
