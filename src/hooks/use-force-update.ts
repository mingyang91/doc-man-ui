import { useCallback, useState } from 'react'

/**
 * This hook returns a function that will force the component to re-render.
 */
export const useForceUpdate = () => {
  const [, setState] = useState({})

  return useCallback(() => setState({}), [])
}
