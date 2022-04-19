import { ComponentType } from 'react'
import { RiArtboard2Fill, RiFile2Fill, RiHome2Line } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { atom } from 'jotai'

import { Dashboard } from '@app/views/dashboard'
import { SignIn } from '@app/views/sign-in/index'
import { LayoutType } from '@app/modules/layouts/index'
import { Documents } from '@app/views/documents'

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
    title: 'Manager',
    icon: RiArtboard2Fill,
    isMenu: true,
    isGroupTitle: true,
    views: [
      {
        path: 'documents',
        isRequireAuth: true,
        title: 'Documents',
        icon: RiFile2Fill,
        isMenu: true,
        Component: Documents,
        layout: 'admin',
      },
    ],
  },
]

export const routesAtom = atom(routes)
