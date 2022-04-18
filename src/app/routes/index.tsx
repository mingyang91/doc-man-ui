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
  isGroupTitle: true
  children: RouteView[]
}

export type RouteView =
  | {
      path: string
      isRequireAuth?: boolean
      title?: string
      icon?: IconType
      redirect?: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Component: ComponentType<any>
      props?: unknown
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
    isRequireAuth: true,
    icon: RiHome2Line,
    Component: Dashboard,
    layout: 'admin',
  },
]

export const routesAtom = atom(routes)
