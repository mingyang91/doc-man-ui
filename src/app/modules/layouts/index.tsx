import { Fragment, PropsWithChildren } from 'react'

import { AdminLayout } from './admin'
import { PreviewLayout } from './preview'
import { SignLayout } from './sign'

export type LayoutType = 'admin' | 'sign' | 'preview'

const Layouts = {
  admin: AdminLayout,
  sign: SignLayout,
  preview: PreviewLayout,
} as const

export type LayoutProps = PropsWithChildren<{
  layout: LayoutType
}>

export const Layout = ({ layout, children }: LayoutProps) => {
  const Layout = Layouts[layout] || Fragment
  return <Layout>{children}</Layout>
}
