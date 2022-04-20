import { ComponentType } from 'react'
import { Params, useRoutes } from 'react-router-dom'
import { IconType } from 'react-icons'
import { useAtomValue } from 'jotai'

import { LayoutType } from '@app/modules/layouts/index'

import { routesAtom } from './context'
import { routeRegister } from './route-register'

import type { MenuConfig, MenuGroupTitle } from './create-menus'

export type GroupTitle = {
  title: string
  icon?: IconType
  isMenu: true
  isGroupTitle: true
  path?: undefined
  submodule?: RouteView[]
}

export type RouteView =
  | {
      path: string
      params?: Params
      isRequireAuth?: boolean
      isMenu?: boolean
      title?: string
      icon?: IconType
      redirect?: string
      Component: ComponentType<Record<string, unknown>>
      props?: Record<string, unknown>
      layout: LayoutType
      state?: unknown
      submodule?: RouteView[]
    }
  | GroupTitle

export const assertGroupTitle = <T extends MenuGroupTitle | GroupTitle>(
  route: RouteView | MenuConfig
): route is T => {
  return 'isGroupTitle' in route && !!route.isGroupTitle
}

export const assertHasSubViews = <T extends MenuGroupTitle | GroupTitle>(
  route: RouteView | MenuConfig
): route is T => {
  return 'submodule' in route && !!route.submodule?.length
}

export const AppRouter = () => {
  const routesConfig = useAtomValue(routesAtom)
  const routes = routeRegister(routesConfig)
  return useRoutes(routes)
}
