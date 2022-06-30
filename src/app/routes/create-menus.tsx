import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { generatePath, matchPath } from 'react-router-dom'

import {
  RouteView,
  assertGroupTitle,
  BreadcrumbConfig,
  RouteMenuConfig,
} from '.'

export type MenuGroupTitle = {
  icon?: IconType
  isGroupTitle: true
  title: string
  path?: undefined
  info?: ReactElement
  caption?: string
  roles?: string[]
  submodule?: MenuConfig[]
}

export type MenuRouteConfig = {
  id: string
  icon?: IconType
  isGroupTitle?: boolean
  isDisabled?: boolean
  roles?: string[]
  activePaths?: string[]
  info?: ReactElement
  caption?: string
  path: string
  state?: unknown
  redirect?: string
  title: string
  submodule?: MenuConfig[]
  breadcrumbs?: BreadcrumbConfig[]
}

export type MenuConfig = MenuRouteConfig | MenuGroupTitle

export const createMenus = (routes: RouteView[]): MenuConfig[] => {
  return routes
    .filter(route => !!route.isMenu)
    .map(route => {
      const submodule = route.submodule && createMenus(route.submodule)
      if (assertGroupTitle(route)) {
        return {
          isGroupTitle: true,
          title: route.title,
          icon: route.icon,
          info: route.info,
          caption: route.caption,
          roles: route.roles,
          submodule,
        }
      }
      const fullPath = route.path
      const routePath = fullPath ? generatePath(fullPath, route.params) : ''

      return {
        id: route.id,
        title: route.title as string, // title has to be string
        icon: route.icon,
        path: routePath,
        state: route.state,
        redirect: route.redirect,
        roles: route.roles,
        isDisabled: route.isDisabled,
        info: route.info,
        caption: route.caption,
        activePaths: route.activePaths,
        submodule,
        breadcrumbs: route.breadcrumbs,
      }
    })
}

export const getActive = (path: string, pathname: string) => {
  return !!matchPath({ path: path, end: true }, pathname)
}

export const getActiveRouteConfig = (
  routes: RouteView[],
  pathname: string
): RouteMenuConfig | undefined => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    if (assertGroupTitle(route)) {
      const subResult =
        route.submodule && getActiveRouteConfig(route.submodule, pathname)
      if (subResult) {
        return subResult
      } else {
        continue
      }
    }

    const isActive = getActive(route.path, pathname)

    if (isActive) {
      return route
    } else if (route.submodule && route.submodule.length) {
      const subResult = getActiveRouteConfig(route.submodule, pathname)
      if (subResult) {
        return subResult
      }
    }
  }

  return undefined
}
