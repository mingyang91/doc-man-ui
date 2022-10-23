/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, useContext } from 'react'

export type ModalComponentBaseProps = {
  isOpen: boolean
  onClose?: () => void
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type ModalComponent<E = {}> = FC<ModalComponentBaseProps & E>

export type ModalsMap = Record<
  string,
  {
    Component: ModalComponent
    props?: Record<string, any>
    open: boolean
  }
>

export interface ModalContextProps {
  show: (key: string, Modal: ModalComponent, props?: any) => void
  hide: (key: string, onClose?: () => void) => void
  getModalState: (key: string) => boolean
}

/**
 * Throw error when ModalContext is used outside of context provider
 */
const invariantViolation = () => {
  throw new Error(
    'Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.'
  )
}

export const ModalContext = createContext<ModalContextProps>({
  show: invariantViolation,
  hide: invariantViolation,
  getModalState: invariantViolation,
})

ModalContext.displayName = 'ModalContext'

export const useModalContext = () => useContext(ModalContext)
