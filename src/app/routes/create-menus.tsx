import { IconType } from 'react-icons'
import { Location } from 'react-router-dom'

import { RouteView, assertGroupTitle } from '.'

export type MenuGroupTitle = {
  icon?: IconType
  isGroupTitle: true
  title: string
}

export type MenuRouteConfig = {
  icon?: IconType
  isActive?: boolean
  path: string
  state?: unknown
  redirect?: string
  title: string
  submodule?: MenuConfig[]
}

export type MenuConfig = MenuRouteConfig | MenuGroupTitle

export const createMenus = (
  routes: RouteView[],
  location: Location,
  parentPath = '/'
): MenuConfig[] => {
  return routes
    .filter(route => !!route.title)
    .map(route => {
      if (assertGroupTitle(route)) {
        return {
          isGroupTitle: true,
          title: route.title,
          icon: route.icon,
        }
      }
      const fullPath = `${parentPath}${route.path}`
      const isActive = location.pathname.startsWith(fullPath)
      return {
        isActive,
        title: route.title as string, // title has to be string
        icon: route.icon,
        path: fullPath,
        state: route.state,
        redirect: route.redirect,
        submodule:
          route.views && createMenus(route.views || [], location, fullPath),
      }
    })
}
