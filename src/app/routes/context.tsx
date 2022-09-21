import {
  createContext,
  lazy,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react'
import { RiArtboard2Fill, RiFile2Fill, RiHomeSmile2Fill } from 'react-icons/ri'
import { Navigate } from 'react-router-dom'

import { Demo } from '@/views/demo/index'
import { SignIn } from '@/views/sign-in/index'

import type { RouteView } from './index'

export const ROUTES = {
  default: '/',
  demo: '/demo',
  signIn: '/sign-in',
  dashboard: '/dashboard',
  consumerList: '/consumer',
  consumerDetail: '/consumer/detail/:id',
  consumerEdit: '/consumer/edit/:id',
  consumerCreate: '/consumer/create',
  deviceList: '/device',
  deviceDetail: '/device/detail/:id',
  deviceEdit: '/device/edit/:id',
  deviceCreate: '/device/create',
  inspectionList: '/inspection',
  inspectionDetail: '/inspection/detail/:id',
  inspectionEdit: '/inspection/edit/:id',
  inspectionCreate: '/inspection/create',
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
    Component: () => {
      return <Navigate to={ROUTES.dashboard} replace />
    },
  },
  {
    id: 'dashboard',
    path: ROUTES.dashboard,
    isRequireAuth: true,
    title: '首页',
    icon: RiHomeSmile2Fill,
    activePaths: [ROUTES.default],
    isMenu: true,
    Component: lazy(
      () =>
        import(/* webpackChunkName: "views/dashboard" */ '@/views/dashboard')
    ),
    layout: 'admin',
    breadcrumbs: [{ name: '首页' }],
  },
  {
    id: 'meta-root',
    title: '元数据',
    icon: RiHomeSmile2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      /*  设备管理 */
      {
        id: 'meta-device-list',
        path: ROUTES.deviceList,
        title: '设备管理',
        icon: RiFile2Fill,
        isMenu: true,
        isRequireAuth: true,
        activePaths: [
          ROUTES.deviceDetail,
          ROUTES.deviceEdit,
          ROUTES.deviceCreate,
        ],
        breadcrumbs: [
          { name: '元数据' },
          { name: '设备管理', href: ROUTES.deviceList },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/index" */ '@/views/devices/index'
            )
        ),
      },
      {
        id: 'meta-detail',
        path: ROUTES.deviceDetail,
        isRequireAuth: true,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/demo/index" */ '@/views/demo/index'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '设备管理', href: ROUTES.deviceList },
          { name: '设备详情' },
        ],
      },
      {
        id: 'meta-create',
        path: ROUTES.deviceCreate,
        isRequireAuth: true,
        title: '设备管理 - 新增',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/create" */ '@/views/devices/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '设备管理', href: ROUTES.deviceList },
          { name: '新增' },
        ],
      },
      {
        id: 'meta-edit',
        path: ROUTES.deviceEdit,
        isRequireAuth: true,
        title: '设备管理 - 编辑',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/demo/index" */ '@/views/demo/index'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '设备管理', href: ROUTES.deviceList },
          { name: '编辑' },
        ],
      },
      /*  委托单位 */
      {
        id: 'meta-consumer-list',
        path: ROUTES.consumerList,
        title: '委托单位',
        icon: RiFile2Fill,
        isMenu: true,
        isRequireAuth: true,
        activePaths: [
          ROUTES.consumerDetail,
          ROUTES.consumerEdit,
          ROUTES.consumerCreate,
        ],
        breadcrumbs: [
          { name: '元数据' },
          { name: '委托单位', href: ROUTES.consumerList },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/index" */ '@/views/consumers/index'
            )
        ),
      },
      {
        id: 'meta-consumer-detail',
        path: ROUTES.consumerDetail,
        isRequireAuth: true,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/consumers/detail" */ '@/views/consumers/detail'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '委托单位', href: ROUTES.consumerList },
          { name: '详情' },
        ],
      },
      {
        id: 'meta-consumer-create',
        path: ROUTES.consumerCreate,
        isRequireAuth: true,
        title: '委托单位 - 新增',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/consumers/create" */ '@/views/consumers/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '委托单位', href: ROUTES.consumerList },
          { name: '新增' },
        ],
      },
      {
        id: 'meta-consumer-edit',
        path: ROUTES.consumerEdit,
        isRequireAuth: true,
        title: '设备管理 - 编辑',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/consumers/create" */ '@/views/consumers/edit'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '元数据' },
          { name: '设备管理', href: ROUTES.consumerList },
          { name: '编辑' },
        ],
      },
    ],
  },
  {
    id: 'report-root',
    title: '报告管理',
    icon: RiArtboard2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'inspections-list',
        path: ROUTES.inspectionList,
        isRequireAuth: true,
        title: '检验检测报告',
        icon: RiFile2Fill,
        isMenu: true,
        activePaths: [
          ROUTES.inspectionDetail,
          ROUTES.inspectionEdit,
          ROUTES.inspectionCreate,
        ],
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices" */ '@/views/inspections/index'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '报告管理' },
          { name: '检验检测报告', href: ROUTES.inspectionList },
        ],
      },
      {
        id: 'device-detail',
        path: ROUTES.inspectionDetail,
        isRequireAuth: true,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/detail" */ '@/views/inspections/index'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '报告管理' },
          { name: '检验检测报告', href: ROUTES.inspectionList },
          { name: '详情' },
        ],
      },
      {
        id: 'inspections-create',
        path: ROUTES.inspectionCreate,
        isRequireAuth: true,
        title: '检验检测报告 - 新增',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/create" */ '@/views/inspections/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '报告管理' },
          { name: '检验检测报告', href: ROUTES.inspectionList },
          { name: '新增' },
        ],
      },
      {
        id: 'inspections-edit',
        path: ROUTES.inspectionEdit,
        isRequireAuth: true,
        title: '检验检测报告 - 编辑',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/edit" */ '@/views/inspections/index'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: '报告管理' },
          { name: '检验检测报告', href: ROUTES.inspectionList },
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
