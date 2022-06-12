import {
  isValidElement,
  Children,
  ReactElement,
  ReactNode,
  useRef,
} from 'react'
import { useMount as useAhooksMount } from 'ahooks'

export function getValidChildren(children: ReactNode) {
  return Children.toArray(children).filter(child =>
    isValidElement(child)
  ) as ReactElement[]
}

export const preventDefault = (e: { preventDefault: () => unknown }) => {
  e.preventDefault()
}

export const stopPropagation = (e: { stopPropagation: () => unknown }) => {
  e.stopPropagation()
}

export function callAllHandlers<T extends (event: unknown) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: React.SyntheticEvent) {
    fns.some(fn => {
      fn?.(event)
      return event?.defaultPrevented
    })
  }
}

type MountFn = () => void

export const useMount = (fn: MountFn) => {
  const isMounted = useRef(false)

  useAhooksMount(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return fn()
    }
  })
}
