import { lazy } from 'react'
import { atom } from 'jotai'

import { RiArtboard2Fill, RiFile2Fill, RiHomeSmile2Fill } from 'react-icons/ri'

import type { RouteView } from './index'

import { SignIn } from '@@/views/sign-in/index'
import { Demo } from '@@/views/demo/index'

export const routes: RouteView[] = [
  {
    id: 'demo',
    path: '/demo',
    isRequireAuth: false,
    Component: Demo,
    layout: 'sign',
  },
  {
    id: 'signin',
    path: 'signin',
    isRequireAuth: false,
    Component: SignIn,
    layout: 'sign',
  },
  {
    id: 'dashboard-root',
    title: '工作台',
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'dashboard-homepage',
        path: 'dashboard',
        isRequireAuth: true,
        title: '首页',
        icon: RiHomeSmile2Fill,
        isMenu: true,
        Component: lazy(() => import('@@/views/dashboard')),
        layout: 'admin',
      },
    ],
  },
  {
    id: 'document-root',
    title: '文档管理',
    icon: RiArtboard2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'device-list',
        path: 'device',
        isRequireAuth: true,
        title: '检验检测报告',
        icon: RiFile2Fill,
        isMenu: true,
        Component: lazy(() => import('@@/views/device-reports')),
        layout: 'admin',
      },
      {
        id: 'device-create',
        path: 'device/create',
        isRequireAuth: true,
        title: '检验检测报告 - 新建',
        icon: RiFile2Fill,
        Component: lazy(() => import('@@/views/device-reports/create')),
        layout: 'admin',
      },
    ],
  },
]

export const routesAtom = atom(routes)
