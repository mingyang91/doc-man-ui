import { ComponentType, ReactElement, Suspense } from 'react'
import { Params, useRoutes } from 'react-router-dom'
import { IconType } from 'react-icons'

import LoadingScreen from '@/components/loading-screen'

import { LayoutType } from '@@/modules/layouts/index'

import type { MenuConfig, MenuGroupTitle } from './create-menus'
import { useRoutesContext } from './context'
import { routeRegister } from './route-register'

export * from './context'

export type BreadcrumbConfig = {
  href?: string
  name: string
  icon?: ReactElement
}

export type GroupTitle = {
  title: string
  icon?: IconType
  isMenu: true
  isGroupTitle: true
  roles?: string[]
  info?: ReactElement
  path?: undefined
  caption?: string
  submodule?: RouteView[]
}

export type RouteMenuConfig = {
  id: string
  path: string
  params?: Params
  isRequireAuth?: boolean
  isMenu?: boolean
  activePaths?: string[]
  isDisabled?: boolean
  roles?: string[]
  info?: ReactElement
  caption?: string
  title?: string
  icon?: IconType
  redirect?: string
  Component: ComponentType<Record<string, unknown>>
  props?: Record<string, unknown>
  layout: LayoutType
  state?: unknown
  submodule?: RouteView[]
  breadcrumbs?: BreadcrumbConfig[]
}

export type RouteView = RouteMenuConfig | GroupTitle

export const assertGroupTitle = <T extends MenuGroupTitle | GroupTitle>(
  route: RouteView | MenuConfig
): route is T => {
  return 'isGroupTitle' in route && !!route.isGroupTitle
}

export const assertHasSubViews = (route: RouteView | MenuConfig) => {
  return 'submodule' in route && !!route.submodule?.length
}

export const AppRouter = () => {
  const routes = useRoutesContext()
  const routeConfig = routeRegister(routes)
  const routeView = useRoutes(routeConfig)

  return <Suspense fallback={<LoadingScreen />}>{routeView}</Suspense>
}
