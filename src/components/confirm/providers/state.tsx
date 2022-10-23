import { useMemoizedFn } from 'ahooks'
import { ComponentType, ReactNode, useMemo, useRef } from 'react'
import { useImmer } from 'use-immer'

import { DialogProps } from 'd/components/dialog'

import { createContainer } from 'u/create-container'

type DialogConfigProps = Omit<DialogProps, 'isOpen'>

export interface ConfirmFunctionArgs extends DialogConfigProps {
  title?: string
  content?: ReactNode
  confirmText?: string
  cancelText?: string
}

export type ConfirmFunction = (args?: ConfirmFunctionArgs) => Promise<boolean>

export interface ConfirmComponentProps extends ConfirmFunction {
  isOpen: boolean
  onConfirm?: VoidFn
  onCancel?: VoidFn
}

export type ConfirmComponent = ComponentType<ConfirmComponentProps>

const ConfirmContainer = createContainer(function useConfirmContainer({
  dialogDefaultProps = {},
}: {
  dialogDefaultProps?: DialogConfigProps
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promiseRef = useRef<[(value: boolean) => void, (_?: any) => void]>()

  const [dialogProps, setDialogProps] = useImmer<DialogProps>({
    ...dialogDefaultProps,
    isOpen: false,
  })

  const confirm = useMemoizedFn<ConfirmFunction>((args = {}) => {
    args.confirmText = args.confirmText ?? '确定'
    args.cancelText = args.cancelText ?? '取消'

    setDialogProps(() => ({
      ...dialogProps,
      ...args,
      isOpen: true,
    }))

    return new Promise<boolean>((...args) => {
      promiseRef.current = args
    })
  })

  const close = useMemoizedFn(() => {
    setDialogProps(draft => {
      draft.isOpen = false
    })
    if (!promiseRef.current) {
      return
    }
    promiseRef.current[1]?.()
  })

  const onConfirm = useMemoizedFn(() => {
    setDialogProps({ isOpen: false })
    if (!promiseRef.current) {
      return
    }
    promiseRef.current[0](true)
  })

  const onCancel = useMemoizedFn(() => {
    setDialogProps({ isOpen: false })
    if (!promiseRef.current) {
      return
    }
    promiseRef.current[0](false)
  })

  const contextValue = useMemo(() => ({ confirm, close }), [close, confirm])

  const confirmComponentProps = useMemo(
    () => ({
      ...dialogProps,
      onConfirm,
      onCancel,
    }),
    [dialogProps, onCancel, onConfirm]
  )

  return {
    contextValue,
    confirmComponentProps,
  }
})

export const ConfirmContextProvider = ConfirmContainer.Provider

export const useContextConfirm = ConfirmContainer.useContainer
