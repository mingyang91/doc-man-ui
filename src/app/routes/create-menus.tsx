import { IconType } from 'react-icons'
import { Location } from 'react-router-dom'

import { RouteView, assertGroupTitle } from '.'

export type MenuGroupTitle = {
  icon?: IconType
  isGroupTitle: true
  title: string
  submodule?: MenuConfig[]
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
    .filter(route => !!route.isMenu)
    .map(route => {
      const submodule =
        route.submodule && createMenus(route.submodule, location)
      if (assertGroupTitle(route)) {
        return {
          isGroupTitle: true,
          title: route.title,
          icon: route.icon,
          submodule,
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
        submodule,
      }
    })
}

function walkMenu(
  menus: MenuConfig[],
  iteratee: (menu: MenuConfig, paths: MenuConfig[]) => boolean
) {
  function walkSelf(menus: MenuConfig[], paths: MenuConfig[] = [], depth = 0) {
    for (const menu of menus) {
      paths[depth] = menu
      if (menu.submodule && menu.submodule.length > 0) {
        walkSelf(menu.submodule, paths, ++depth)
      }
      const shouldContinue = iteratee(menu, paths)
      if (!shouldContinue) break
    }
    return paths
  }

  const paths: MenuConfig[] = []

  return walkSelf(menus, paths)
}

export const getActiveMenuPath = (menus: MenuConfig[]) => {
  return walkMenu(menus, menu => {
    return assertGroupTitle(menu) ? true : !menu.isActive && !menu.submodule
  })
}
