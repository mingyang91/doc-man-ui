import { useMemoizedFn } from 'ahooks'
import {
  closeSnackbar,
  OptionsObject,
  SnackbarKey,
  SnackbarProvider,
  useSnackbar,
} from 'notistack'
import { ReactNode, useRef } from 'react'

import {
  SnackbarMessageDefault,
  SnackbarMessageError,
  SnackbarMessageInfo,
  SnackbarMessageLoading,
  SnackbarMessageSuccess,
  SnackbarMessageWarning,
} from 'd/components/message'

declare module 'notistack' {
  interface VariantOverrides {
    loading: true
  }
}

export const MessageProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <SnackbarProvider
      domRoot={document.body}
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      Components={{
        default: SnackbarMessageDefault,
        success: SnackbarMessageSuccess,
        info: SnackbarMessageInfo,
        warning: SnackbarMessageWarning,
        error: SnackbarMessageError,
        loading: SnackbarMessageLoading,
      }}
    >
      {children}
    </SnackbarProvider>
  )
}

export const useMessage = () => {
  const { enqueueSnackbar } = useSnackbar()

  const pushSuccessMessage = useMemoizedFn(
    (
      message: string,
      options: Omit<OptionsObject, 'content' | 'variant'> = {}
    ) => {
      return enqueueSnackbar(message, {
        variant: 'success',
        ...options,
      })
    }
  )

  const pushWarningMessage = useMemoizedFn(
    (
      message: string,
      options: Omit<OptionsObject, 'content' | 'variant'> = {}
    ) => {
      return enqueueSnackbar(message, {
        variant: 'warning',
        ...options,
      })
    }
  )

  const pushErrorMessage = useMemoizedFn(
    (
      message: string,
      options: Omit<OptionsObject, 'content' | 'variant'> = {}
    ) => {
      return enqueueSnackbar(message, {
        variant: 'error',
        ...options,
      })
    }
  )

  const pushInfoMessage = useMemoizedFn(
    (
      message: string,
      options: Omit<OptionsObject, 'content' | 'variant'> = {}
    ) => {
      return enqueueSnackbar(message, {
        variant: 'info',
        ...options,
      })
    }
  )

  const loadingRef = useRef<SnackbarKey>()

  const pushLoadingMessage = useMemoizedFn((message = '加载中...') => {
    const id = enqueueSnackbar(message, {
      variant: 'loading',
      persist: true,
      preventDuplicate: true,
    })
    loadingRef.current = id
    return id
  })

  const closeLastLoadingMessage = useMemoizedFn(() => {
    closeSnackbar(loadingRef.current)
  })

  return {
    pushSuccessMessage,
    pushWarningMessage,
    pushErrorMessage,
    pushInfoMessage,
    pushLoadingMessage,
    closeLastLoadingMessage,
  }
}
