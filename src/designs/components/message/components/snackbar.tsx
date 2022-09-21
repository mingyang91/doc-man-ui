import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Snackbar,
  Typography,
} from '@mui/material'
import { SnackbarContent, useSnackbar } from 'notistack'
import { forwardRef, useCallback } from 'react'

import {
  SnackbarMessageDefaultProps,
  SnackbarMessageLoadingProps,
  SnackbarMessageProps,
} from '../type'
import { CommonMessage } from './common'

export const SnackbarMessageDefault = forwardRef<
  HTMLDivElement,
  SnackbarMessageDefaultProps
>(({ id, title, message, closeable, componentProps, ...restProps }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
    <SnackbarContent ref={ref} {...restProps}>
      <Card {...componentProps}>
        <CardContent>
          {title &&
            (typeof title === 'string' ? (
              <Typography variant="h3">{title}</Typography>
            ) : (
              title
            ))}
          {typeof message === 'string' ? (
            <Typography variant="body1">{message}</Typography>
          ) : (
            title
          )}
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={handleDismiss}></Button>
        </CardActions>
      </Card>
    </SnackbarContent>
  )
})

export const SnackbarMessageSuccess = forwardRef<
  HTMLDivElement,
  SnackbarMessageProps
>(({ id, title, message, closeable, componentProps, ...restProps }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
    <SnackbarContent ref={ref} {...restProps}>
      <CommonMessage
        {...componentProps}
        type="success"
        variant="filled"
        title={title}
        description={message}
        onClose={closeable ? handleDismiss : undefined}
      />
    </SnackbarContent>
  )
})

export const SnackbarMessageError = forwardRef<
  HTMLDivElement,
  SnackbarMessageProps
>(({ id, title, message, closeable, componentProps, ...restProps }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
    <SnackbarContent ref={ref} {...restProps}>
      <CommonMessage
        {...componentProps}
        type="error"
        variant="filled"
        title={title}
        description={message}
        onClose={closeable ? handleDismiss : undefined}
      />
    </SnackbarContent>
  )
})

export const SnackbarMessageWarning = forwardRef<
  HTMLDivElement,
  SnackbarMessageProps
>(({ id, title, message, closeable, componentProps, ...restProps }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
    <SnackbarContent ref={ref} {...restProps}>
      <CommonMessage
        {...componentProps}
        type="warning"
        variant="filled"
        title={title}
        description={message}
        onClose={closeable ? handleDismiss : undefined}
      />
    </SnackbarContent>
  )
})

export const SnackbarMessageInfo = forwardRef<
  HTMLDivElement,
  SnackbarMessageProps
>(({ id, title, message, closeable, componentProps, ...restProps }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
    <SnackbarContent ref={ref} {...restProps}>
      <CommonMessage
        {...componentProps}
        type="info"
        variant="filled"
        title={title}
        description={message}
        onClose={closeable ? handleDismiss : undefined}
      />
    </SnackbarContent>
  )
})

export const SnackbarMessageLoading = forwardRef<
  HTMLDivElement,
  SnackbarMessageLoadingProps
>(
  (
    { id, title, message, type = 'info', componentProps, ...restProps },
    ref
  ) => {
    return (
      <SnackbarContent ref={ref} {...restProps}>
        <CommonMessage
          {...componentProps}
          icon={<CircularProgress />}
          type={type}
          variant="filled"
          title={title}
          description={message}
        />
      </SnackbarContent>
    )
  }
)

type SnackbarLoadingComponentProps = Pick<
  SnackbarMessageProps,
  'title' | 'message'
>
export const SnackbarLoadingComponent = forwardRef<
  HTMLDivElement,
  SnackbarLoadingComponentProps
>((props, ref) => (
  <Snackbar open ref={ref}>
    <CommonMessage
      message="正在加载..."
      {...props}
      type="info"
      icon={<CircularProgress />}
    />
  </Snackbar>
))
