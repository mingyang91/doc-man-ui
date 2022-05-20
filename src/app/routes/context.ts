import { atom } from 'jotai'
import { RiArtboard2Fill, RiFile2Fill, RiHomeSmile2Fill } from 'react-icons/ri'

import type { RouteView } from './index'

import { Dashboard } from '@app/views/dashboard'
import { SignIn } from '@app/views/sign-in/index'
import { PageDeviceReports } from '@/app/views/device-reports'

import { PageCreateDeviceReport } from '../views/device-reports/create'


export const routes: RouteView[] = [
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
        Component: Dashboard,
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
        Component: PageDeviceReports,
        layout: 'admin',
      },
      {
        id: 'device-create',
        path: 'device/create',
        isRequireAuth: true,
        title: '检验检测报告 - 新建',
        icon: RiFile2Fill,
        Component: PageCreateDeviceReport,
        layout: 'admin',
      },
    ],
  },
]

export const routesAtom = atom(routes)
