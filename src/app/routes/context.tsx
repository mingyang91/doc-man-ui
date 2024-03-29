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

import i18n from 'strings/i18n'


export const ROUTES = {
  default: '/', // 默认路由
  demo: '/demo', // demo 页，没啥用
  signIn: '/sign-in', // 登录
  dashboard: '/dashboard', // 仪表盘
  equipmentTypeList: '/equipment-types', // 设备类型列表
  equipmentTypeDetail: '/equipment-types/detail/:id', // 设备类型详情
  equipmentTypeCreate: '/equipment-types/create', // 设备类型创建
  equipmentInspectionTypeDetail:
    '/equipment-types/detail/:id/inspection-enums/:itemId/detail', // 设备类型检测项目详情
  equipmentInspectionTypeEdit:
    '/equipment-types/detail/:id/inspection-enums/:itemId/edit', // 设备类型检测项目编辑
  equipmentInspectionTypeCreate:
    '/equipment-types/detail/:id/inspection-enums/create', // 设备类型检测项目创建
  consumerList: '/consumer', // 委托单位列表
  consumerDetail: '/consumer/detail/:id', // 委托单位详情
  consumerEdit: '/consumer/edit/:id', // 委托单位编辑
  consumerCreate: '/consumer/create', // 委托单位创建
  equipmentList: '/equipments/', // 设备列表
  equipmentDetail: '/equipments/detail/:id', // 设备详情
  equipmentEdit: '/equipments/edit/:id', // 设备编辑
  equipmentCreate: '/equipments/create', // 设备创建
  inspectionList: '/inspection', // 检测报告列表
  inspectionDetail: '/inspection/detail/:id', // 检测报告详情
  inspectionEdit: '/inspection/edit/:id', // 检测报告编辑
  inspectionCreate: '/inspection/create', // 检测报告创建
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
    title: i18n.t('首页'),
    icon: RiHomeSmile2Fill,
    activePaths: [ROUTES.default],
    isMenu: true,
    Component: lazy(
      () =>
        import(/* webpackChunkName: "views/dashboard" */ '@/views/dashboard')
    ),
    layout: 'admin',
    breadcrumbs: [{ name: i18n.t('首页') }],
  },
  {
    id: 'meta-root',
    title: i18n.t('客户关系'),
    icon: RiHomeSmile2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'meta-consumer-list',
        path: ROUTES.consumerList,
        title: i18n.t('委托单位'),
        icon: RiFile2Fill,
        isMenu: true,
        isRequireAuth: true,
        activePaths: [
          ROUTES.consumerDetail,
          ROUTES.consumerEdit,
          ROUTES.consumerCreate,
        ],
        breadcrumbs: [
          { name: i18n.t('元数据') },
          { name: i18n.t('委托单位'), href: ROUTES.consumerList },
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
          { name: i18n.t('元数据') },
          { name: i18n.t('委托单位'), href: ROUTES.consumerList },
          { name: i18n.t('详情') },
        ],
      },
      {
        id: 'meta-consumer-create',
        path: ROUTES.consumerCreate,
        isRequireAuth: true,
        title: `${i18n.t('委托单位')} - ${i18n.t('新增')}`,
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/consumers/create" */ '@/views/consumers/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('元数据') },
          { name: i18n.t('委托单位'), href: ROUTES.consumerList },
          { name: i18n.t('新增') },
        ],
      },
      {
        id: 'meta-consumer-edit',
        path: ROUTES.consumerEdit,
        isRequireAuth: true,
        title: `${i18n.t('设备管理')} - ${i18n.t('编辑')}`,
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/consumers/create" */ '@/views/consumers/edit'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('元数据') },
          { name: i18n.t('设备管理'), href: ROUTES.consumerList },
          { name: i18n.t('编辑') },
        ],
      },
    ],
  },
  {
    id: 'equipment-root',
    title: i18n.t('设备数据'),
    icon: RiHomeSmile2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      /* 设备类型 */
      {
        id: 'equipment-type-list',
        path: ROUTES.equipmentTypeList,
        title: i18n.t('设备类型'),
        icon: RiFile2Fill,
        isMenu: true,
        isRequireAuth: true,
        activePaths: [
          ROUTES.equipmentTypeList,
          ROUTES.equipmentTypeDetail,
          ROUTES.equipmentInspectionTypeDetail,
          ROUTES.equipmentInspectionTypeEdit,
          ROUTES.equipmentInspectionTypeCreate,
        ],
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types" */ '@/views/equipment-type/index'
            )
        ),
      },
      {
        id: 'equipment-type-detail',
        path: ROUTES.equipmentTypeDetail,
        title: '设备类型 - 详情',
        isRequireAuth: true,
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
          { name: i18n.t('详情') },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types/detail" */ '@/views/equipment-type/detail'
            )
        ),
      },
      {
        id: 'equipment-type-create',
        path: ROUTES.equipmentTypeCreate,
        title: '设备类型 - 新增',
        isRequireAuth: true,
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
          { name: i18n.t('新增') },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types/create" */ '@/views/equipment-type/create'
            )
        ),
      },
      {
        id: 'equipment-type-inspection',
        path: ROUTES.equipmentInspectionTypeDetail,
        title: '设备类型 - 检测项目 - 查看',
        isRequireAuth: true,
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
          { name: i18n.t('详情') },
          { name: '检测项目 - 查看' },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types/inspection-item-enum" */ '@/views/equipment-type/inspection-type-detail'
            )
        ),
      },
      {
        id: 'equipment-type-inspection-edit',
        path: ROUTES.equipmentInspectionTypeEdit,
        title: '设备类型 - 检测项目 - 编辑',
        isRequireAuth: true,
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
          { name: i18n.t('详情') },
          { name: '检测项目 - 编辑' },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types/inspection-item-enum-edit" */ '@/views/equipment-type/inspection-type-edit'
            )
        ),
      },
      {
        id: 'equipment-type-inspection-create',
        path: ROUTES.equipmentInspectionTypeCreate,
        title: '设备类型 - 检测项目 - 新增',
        isRequireAuth: true,
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备类型'), href: ROUTES.equipmentTypeList },
          { name: i18n.t('详情') },
          { name: '检测项目 - 编辑' },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/equipment-types/inspection-item-enum-create" */ '@/views/equipment-type/inspection-type-create'
            )
        ),
      },
      /* {i18n.t('设备管理')} */
      {
        id: 'equipment-list',
        path: ROUTES.equipmentList,
        title: i18n.t('设备管理'),
        icon: RiFile2Fill,
        isMenu: true,
        isRequireAuth: true,
        activePaths: [
          ROUTES.equipmentDetail,
          ROUTES.equipmentEdit,
          ROUTES.equipmentCreate,
        ],
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备管理'), href: ROUTES.equipmentList },
        ],
        layout: 'admin',
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/index" */ '@/views/equipment/index'
            )
        ),
      },
      {
        id: 'meta-device-detail',
        path: ROUTES.equipmentDetail,
        isRequireAuth: true,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/detail" */ '@/views/equipment/detail'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备管理'), href: ROUTES.equipmentList },
          { name: i18n.t('设备详情') },
        ],
      },
      {
        id: 'meta-device-create',
        path: ROUTES.equipmentCreate,
        isRequireAuth: true,
        title: `{i18n.t('设备管理')} - 新增`,
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/create" */ '@/views/equipment/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备管理'), href: ROUTES.equipmentList },
          { name: i18n.t('新增') },
        ],
      },
      {
        id: 'meta-device-edit',
        path: ROUTES.equipmentEdit,
        isRequireAuth: true,
        title: `${i18n.t('设备管理')} - 编辑`,
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/devices/edit" */ '@/views/equipment/edit'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('设备数据') },
          { name: i18n.t('设备管理'), href: ROUTES.equipmentList },
          { name: i18n.t('编辑') },
        ],
      },
    ],
  },
  {
    id: 'report-root',
    title: i18n.t('报告管理'),
    icon: RiArtboard2Fill,
    isMenu: true,
    isGroupTitle: true,
    submodule: [
      {
        id: 'inspections-list',
        path: ROUTES.inspectionList,
        isRequireAuth: true,
        title: i18n.t('设备检验检测'),
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
          { name: i18n.t('报告管理') },
          { name: i18n.t('设备检验检测'), href: ROUTES.inspectionList },
        ],
      },
      {
        id: 'inspections-detail',
        path: ROUTES.inspectionDetail,
        isRequireAuth: true,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/detail" */ '@/views/inspections/detail'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('报告管理') },
          { name: i18n.t('设备检验检测'), href: ROUTES.inspectionList },
          { name: i18n.t('详情') },
        ],
      },
      {
        id: 'inspections-create',
        path: ROUTES.inspectionCreate,
        isRequireAuth: true,
        title: '设备检验检测 - 新增',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/create" */ '@/views/inspections/create'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('报告管理') },
          { name: i18n.t('设备检验检测'), href: ROUTES.inspectionList },
          { name: i18n.t('新增') },
        ],
      },
      {
        id: 'inspections-edit',
        path: ROUTES.inspectionEdit,
        isRequireAuth: true,
        title: '设备检验检测 - 编辑',
        icon: RiFile2Fill,
        Component: lazy(
          () =>
            import(
              /* webpackChunkName: "views/inspections/edit" */ '@/views/inspections/edit'
            )
        ),
        layout: 'admin',
        breadcrumbs: [
          { name: i18n.t('报告管理') },
          { name: i18n.t('设备检验检测'), href: ROUTES.inspectionList },
          { name: i18n.t('编辑') },
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
