import { atom } from 'jotai'
import { RiArtboard2Fill, RiFile2Fill, RiHome2Line } from 'react-icons/ri'

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
