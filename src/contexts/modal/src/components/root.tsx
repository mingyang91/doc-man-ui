import { ComponentType, Fragment, memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { ModalsMap, useModalContext } from '../common'

export interface RootElementProps {
  modals: ModalsMap
  rootRef?: HTMLElement
  usePortal?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TransitionComponent?: ComponentType<any>
}

export const RootElement = memo(
  ({
    modals,
    rootRef = document.body,
    usePortal,
    TransitionComponent = Fragment,
  }: RootElementProps) => {
    const [mountNode, setMountNode] = useState<HTMLElement | undefined>(
      undefined
    )

    const { hide } = useModalContext()

    const modalComponents = Object.keys(modals).map(key => {
      const { Component, props, open } = modals[key]

      const onClose = () => hide(key)

      return (
        <TransitionComponent key={key}>
          <Component key={key} {...props} onClose={onClose} isOpen={open} />
        </TransitionComponent>
      )
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setMountNode(rootRef))

    if (mountNode) {
      const fragments = <>{modalComponents}</>
      return usePortal ? createPortal(fragments, mountNode) : fragments
    }

    // do nothing when mountNode is undefined
    return <></>
  }
)
