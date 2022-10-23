/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemoizedFn } from 'ahooks'
import { ComponentType, ReactNode, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { ModalContext, ModalContextProps, ModalsMap } from './common'
import { RootElement } from './components/root'

export interface ModalProviderProps {
  children?: ReactNode
  rootRef?: HTMLElement
  usePortal?: boolean
  TransitionComponent?: ComponentType<any>
}

export const ModalProvider = ({
  children,
  ...restProps
}: ModalProviderProps) => {
  const [modals, setModals] = useImmer<ModalsMap>({})

  const show = useMemoizedFn<ModalContextProps['show']>(
    (key, Component, props) => {
      setModals(draft => {
        draft[key] = {
          Component,
          open: true,
          props,
        }
      })
    }
  )

  const hide = useMemoizedFn<ModalContextProps['hide']>((key, onClose) => {
    setModals(draft => {
      draft[key] && (draft[key].open = false)
    })
    onClose?.()
  })

  const getModalState = useMemoizedFn<ModalContextProps['getModalState']>(
    key => {
      return !!modals['key']?.open
    }
  )

  const modalContextProps = useMemo<ModalContextProps>(
    () => ({ show, hide, getModalState }),
    [getModalState, hide, show]
  )

  return (
    <ModalContext.Provider value={modalContextProps}>
      <RootElement modals={modals} {...restProps} />
      {children}
    </ModalContext.Provider>
  )
}
