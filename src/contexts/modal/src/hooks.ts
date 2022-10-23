/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemoizedFn } from 'ahooks'
import { DependencyList, useId, useMemo } from 'react'

import { ModalComponent, useModalContext } from './common'

export type UseModalOption<
  ExtraProps extends Record<string, any> = Record<string, any>
> = {
  id?: string
  props?: ExtraProps
  onClose?: () => void
}

export type UseModalReturn<ExtraProps> = [
  (overrideProps?: ExtraProps) => void,
  () => void,
  boolean
]

export const useModal = <ExtraProps extends Record<string, any>>(
  Component: ModalComponent<ExtraProps>,
  deps: DependencyList = [],
  options?: UseModalOption<ExtraProps>
): UseModalReturn<ExtraProps> => {
  const uniqueId = useId()
  const { show, hide, getModalState } = useModalContext()

  const key = useMemo(() => options?.id || uniqueId, [options?.id, uniqueId])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MemoComponent = useMemo(() => Component, deps)

  const setOpen = useMemoizedFn((overrideProps?: ExtraProps) => {
    show(key, MemoComponent as ModalComponent, {
      ...options?.props,
      ...overrideProps,
    })
  })

  const state = useMemo(() => getModalState(key), [getModalState, key])

  const setHide = useMemoizedFn(() => hide(key, options?.onClose))

  return [setOpen, setHide, state]
}
