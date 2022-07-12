import {
  createContext,
  lazy,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react'
import { Navigate } from 'react-router-dom'
import { RiArtboard2Fill, RiFile2Fill, RiHomeSmile2Fill } from 'react-icons/ri'

import { SignIn } from '@@/views/sign-in/index'
import { Demo } from '@@/views/demo/index'

import type { RouteView } from './index'

export const ROUTES = {
  default: '/',
  demo: '/demo',
  signIn: '/sign-in',
  dashboard: '/dashboard',
  deviceList: '/device',
  deviceDetail: '/device/detail/:id',
  deviceEdit: '/device/edit/:id',
  deviceCreate: '/device/create',
}

export const routes: RouteView[] = [
  {
    id: 'demo',
    path: ROUTES.demo,
    isRequireAuth: false,
    Component: Demo,
    layout: 'sign',
  },
  {
    id: 'sign-in',
    path: ROUTES.signIn,
    isRequireAuth: false,
    Component: SignIn,
    layout: 'sign',
  },
  {
    id: 'default',
    path: ROUTES.default,
    isRequireAuth: true,
    layout: 'none',
    Component: () => <Navigate to={ROUTES.dashboard} replace />,
  },
  {
    id: 'dashboard-root',
    title: '工作台',
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'dashboard-homepage',
        path: ROUTES.dashboard,
        isRequireAuth: true,
        title: '首页',
        icon: RiHomeSmile2Fill,
        activePaths: [ROUTES.default],
        isMenu: true,
        Component: lazy(() => import('@@/views/dashboard')),
        layout: 'admin',
        breadcrumbs: [{ name: '工作台' }, { name: '首页' }],
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
        path: ROUTES.deviceList,
        isRequireAuth: true,
        title: '检验检测报告',
        icon: RiFile2Fill,
        isMenu: true,
        activePaths: [
          ROUTES.deviceDetail,
          ROUTES.deviceEdit,
          ROUTES.deviceCreate,
        ],
        Component: lazy(() => import('@@/views/device-reports')),
        layout: 'admin',
        breadcrumbs: [
          { name: '文档管理' },
          { name: '检验检测报告', href: ROUTES.deviceList },
        ],
      },
      {
        id: 'device-detail',
        path: ROUTES.deviceDetail,
        isRequireAuth: true,
        Component: lazy(() => import('@@/views/device-reports/detail')),
        layout: 'admin',
        breadcrumbs: [
          { name: '文档管理' },
          { name: '检验检测报告', href: ROUTES.deviceList },
          { name: '详情' },
        ],
      },
      {
        id: 'device-create',
        path: ROUTES.deviceCreate,
        isRequireAuth: true,
        title: '检验检测报告 - 新增',
        icon: RiFile2Fill,
        Component: lazy(() => import('@@/views/device-reports/create')),
        layout: 'admin',
        breadcrumbs: [
          { name: '文档管理' },
          { name: '检验检测报告', href: ROUTES.deviceList },
          { name: '新增' },
        ],
      },
      {
        id: 'device-edit',
        path: ROUTES.deviceEdit,
        isRequireAuth: true,
        title: '检验检测报告 - 编辑',
        icon: RiFile2Fill,
        Component: lazy(() => import('@@/views/device-reports/edit')),
        layout: 'admin',
        breadcrumbs: [
          { name: '文档管理' },
          { name: '检验检测报告', href: ROUTES.deviceList },
          { name: '编辑' },
        ],
      },
    ],
  },
]

export const RoutesContext = createContext([] as RouteView[])

RoutesContext.displayName = 'RoutesContext'

export const useRoutesContext = () => useContext(RoutesContext)

export const RoutesProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const routesRef = useRef(routes)

  return (
    <RoutesContext.Provider value={routesRef.current}>
      {children}
    </RoutesContext.Provider>
  )
}