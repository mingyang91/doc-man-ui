import { Alert, AlertProps, AlertTitle } from '@mui/material'
import { forwardRef } from 'react'

import { MessageProps } from '../type'

interface CommonMessageProps
  extends MessageProps,
    Omit<AlertProps, 'severity' | 'title'> {}

export const CommonMessage = forwardRef<HTMLDivElement, CommonMessageProps>(
  ({ type, title, description, onClose, ...restProps }, ref) => {
    return (
      <Alert {...restProps} ref={ref} severity={type} onClose={onClose}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {description}
      </Alert>
    )
  }
)
