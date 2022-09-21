import { LazyMotion } from 'framer-motion'
import { ReactNode } from 'react'

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () =>
  import(/* webpackChunkName: "motion-lazy-container" */ './features').then(
    res => res.default
  )

type Props = {
  children: ReactNode
}

export default function MotionLazyContainer({ children }: Props) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  )
}
