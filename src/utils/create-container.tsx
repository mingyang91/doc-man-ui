/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * enhanced unstated-next
 */
import type { ReactNode } from 'react'
import { createContext, memo, useContext, useEffect, useRef } from 'react'

export type ProviderProps<Props extends {}> = {
  initialState?: Props
  children?: ReactNode
}

export type UseHook<Value, Props extends {}> =
  | ((props: Props) => Value)
  | (() => Value)

export interface ContainerConsumerProps<Value> {
  children: (value: Value) => ReactNode
}

const EMPTY: unique symbol = Symbol()

type EmptyType = typeof EMPTY

export function createContainer<Value, Props extends {}>(
  createFn: UseHook<Value, Props>,
  defaultValue: Value | EmptyType = EMPTY
) {
  const Context = createContext<Value | EmptyType>(defaultValue)
  const hookName = createFn.name || 'useHook'
  Context.displayName = `${hookName}Context`

  function Provider({ initialState, children }: ProviderProps<Props>) {
    const value = createFn(initialState || ({} as Props))
    return (
      <Context.Provider value={value || defaultValue}>
        {children}
      </Context.Provider>
    )
  }

  function useContainer() {
    const isMounted = useRef(0)
    const value = useContext(Context)

    useEffect(() => {
      if (value === EMPTY) {
        if (isMounted.current > 1) {
          throw new Error(
            `${hookName} You should pass a default value when create the provider.`
          )
        }
        isMounted.current = isMounted.current + 1
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return value as Value
  }

  function Consumer({ children }: ContainerConsumerProps<Value>) {
    return (
      <Context.Consumer>
        {value => {
          if (value === EMPTY) {
            throw new Error(
              'You should pass a default value when create the provider.'
            )
          }
          return children?.(value)
        }}
      </Context.Consumer>
    )
  }

  return {
    Provider: memo(Provider),
    Consumer,
    useContainer,
  }
}
