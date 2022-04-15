import { PropsWithChildren, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollToTopProps = PropsWithChildren<Record<never, never>>

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}
