import { Fragment, PropsWithChildren } from 'react'

import { AdminLayout } from './admin'
import { PreviewLayout } from './preview'
import { SignLayout } from './sign'

export type LayoutType = 'admin' | 'sign' | 'preview' | 'none'

const None = ({ children }: PropsWithChildren<Record<never, never>>) => {
  return <>{children}</>
}

const Layouts = {
  admin: AdminLayout,
  sign: SignLayout,
  preview: PreviewLayout,
  none: None,
} as const

export type LayoutProps = PropsWithChildren<{
  layout: LayoutType
}>

export const Layout = ({ layout, children }: LayoutProps) => {
  const Layout = Layouts[layout] || Fragment
  return <Layout>{children}</Layout>
}
