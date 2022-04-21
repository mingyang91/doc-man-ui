import { omit } from 'lodash-es'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { Location, generatePath, matchPath } from 'react-router-dom'

import { RouteView, assertGroupTitle } from '.'

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
  icon?: IconType
  isGroupTitle?: boolean
  isDisabled?: boolean
  roles?: string[]
  info?: ReactElement
  caption?: string
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
    .filter(route => !!route.isMenu)
    .map(route => {
      const submodule =
        route.submodule && createMenus(route.submodule, location)
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
      const fullPath = `${parentPath}${route.path}`
      const routePath = fullPath ? generatePath(fullPath, route.params) : ''

      return {
        title: route.title as string, // title has to be string
        icon: route.icon,
        path: routePath,
        state: route.state,
        redirect: route.redirect,
        roles: route.roles,
        isDisabled: route.isDisabled,
        info: route.info,
        caption: route.caption,
        submodule,
      }
    })
}

function getMenuPath(menus: MenuConfig[], routePath = '*') {
  function traverse(
    node: MenuConfig,
    targetPath: MenuConfig[] = []
  ): MenuConfig[] | false {
    if (node.path && matchPath({ path: routePath, end: true }, node.path)) {
      return targetPath.concat([omit(node, 'submodule') as MenuConfig])
    }
    if (node.submodule) {
      let path: MenuConfig[] | false = false
      for (let i = 0; i < node.submodule.length; i++) {
        const sub = node.submodule[i]
        path = traverse(sub, targetPath)
        if (path) {
          break
        }
      }
      if (path) {
        return [omit(node, 'submodule') as MenuConfig].concat(path)
      }
      return false
    }
    return false
  }

  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]
    const path = traverse(menu)
    if (path) {
      return path
    }
  }

  return []
}

export const getActiveMenuPath = (menus: MenuConfig[], location: Location) => {
  return getMenuPath(menus, location.pathname)
}

export const getActive = (path: string, pathname: string) => {
  return path ? !!matchPath({ path: path, end: false }, pathname) : false
}
