import { atom } from 'jotai'
import { RiArtboard2Fill, RiFile2Fill, RiHomeSmile2Fill } from 'react-icons/ri'

import { Dashboard } from '@app/views/dashboard'
import { SignIn } from '@app/views/sign-in/index'
import { Documents } from '@app/views/documents'

import type { RouteView } from './index'

export const routes: RouteView[] = [
  {
    path: 'signin',
    isRequireAuth: false,
    Component: SignIn,
    layout: 'sign',
  },
  {
    title: '工作台',
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        path: 'dashboard',
        isRequireAuth: true,
        title: '首页',
        icon: RiHomeSmile2Fill,
        isMenu: true,
        Component: Dashboard,
        layout: 'admin',
      },
    ],
  },
  {
    title: '文档管理',
    icon: RiArtboard2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
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
