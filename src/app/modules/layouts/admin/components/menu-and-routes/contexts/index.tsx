import { useCreation } from 'ahooks'
import { useLocation } from 'react-router-dom'

import { RouteMenuConfig, useRoutesContext } from '@/app/routes'

import { createMenus, getActiveRouteConfig } from '@@/routes/create-menus'

import { createContainer } from '@utils/create-container'

const MenuAndRoutesContainer = createContainer(
  function useMenuAndRoutesContainer() {
    const { pathname } = useLocation()

    const routes = useRoutesContext()

    const menus = createMenus(routes)

    const activeRouteConfig = useCreation(
      () => getActiveRouteConfig(routes, pathname) || ({} as RouteMenuConfig),
      [routes, pathname]
    )

    return {
      menus,
      activeRouteConfig,
    }
  }
)

export const MenuAndRoutesProvider = MenuAndRoutesContainer.Provider

export const useMenuAndRoutes = MenuAndRoutesContainer.useContainer
