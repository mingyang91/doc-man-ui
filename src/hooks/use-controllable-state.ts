import { isEqual, isUndefined } from 'lodash-es'
import { SetStateAction, useMemo, useRef } from 'react'

import { runIfFn } from 'u/react-utils'

import { useForceUpdate } from './use-force-update'

export interface useControllableStateProps<T> {
  value?: T
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: (arg: T) => void
  /**
   * The function that determines if the state should be updated
   */
  shouldUpdate?: (prev: T, next: T) => boolean
}

/**
 * produce the state for both controllable and uncontrolled mode
 */
export function useControllableState<T>({
  value: valueProp,
  defaultValue,
  onChange,
  shouldUpdate = (prev, next) => !isEqual(prev, next),
}: useControllableStateProps<T>) {
  // if value is undefined, treated as uncontrolled mode
  const isControlled = !isUndefined(valueProp)

  const initialValue = useMemo(() => {
    if (isControlled) {
      return valueProp
    }
    return defaultValue as T
    // initialValue is should never be updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stateRef = useRef(initialValue)

  if (isControlled) {
    stateRef.current = valueProp
  }

  const update = useForceUpdate()

  const setState = (next: SetStateAction<T>) => {
    const nextValue = runIfFn(next, stateRef.current)

    if (!shouldUpdate(stateRef.current, nextValue)) {
      return
    }

    if (!isControlled) {
      stateRef.current = nextValue
      update()
    }

    onChange?.(nextValue)
  }

  return [stateRef.current, setState] as const
}

/**
 * a simplified version of useControllableState,
 * returns controllable state of the given prop, and the final value
 */
export function useControllableProp<T>(state: T, prop: T | undefined) {
  const isControlled = !isUndefined(prop)
  const value = isControlled ? prop : state
  return [isControlled, value] as const
}
