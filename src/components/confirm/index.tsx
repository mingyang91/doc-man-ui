import { ReactNode } from 'react'

import { Dialog } from 'd/components/dialog'

import { ConfirmContextProvider, useContextConfirm } from './providers/state'

const ConfirmComponent = () => {
  const { confirmComponentProps } = useContextConfirm()
  return <Dialog {...confirmComponentProps} />
}

export interface ConfirmProviderProps {
  children?: ReactNode
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps) => {
  return (
    <ConfirmContextProvider>
      <ConfirmComponent />
      {children}
    </ConfirmContextProvider>
  )
}

export const useConfirm = () => {
  const { contextValue } = useContextConfirm()
  return contextValue
}
