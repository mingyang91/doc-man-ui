import { ComponentType } from 'react'
import { RiHome2Line } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { atom } from 'jotai'

import { Dashboard } from '@app/views/dashboard'
import { SignIn } from '@app/views/sign-in/index'
import { LayoutType } from '@app/modules/layouts/index'

import type { MenuConfig, MenuGroupTitle } from './create-menus'

export type GroupTitle = {
  title: string
  icon?: IconType
  isMenu: true
  isGroupTitle: true
  path?: undefined
  views?: RouteView[]
}

export type RouteView =
  | {
      path: string
      isRequireAuth?: boolean
      isMenu?: boolean
      title?: string
      icon?: IconType
      redirect?: string
      Component: ComponentType<Record<string, unknown>>
      props?: Record<string, unknown>
      layout: LayoutType
      state?: unknown
      views?: RouteView[]
    }
  | GroupTitle

export const assertGroupTitle = <T extends MenuGroupTitle | GroupTitle>(
  route: RouteView | MenuConfig
): route is T => {
  return 'isGroupTitle' in route && !!route.isGroupTitle
}

export const routes: RouteView[] = [
  {
    path: 'signin',
    isRequireAuth: false,
    Component: SignIn,
    layout: 'sign',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    isMenu: true,
    isRequireAuth: true,
    icon: RiHome2Line,
    Component: Dashboard,
    layout: 'admin',
  },
  {
    title: 'Documents',
    isMenu: true,
    isGroupTitle: true,
  },
]

export const routesAtom = atom(routes)
