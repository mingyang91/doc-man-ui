import { useAtomValue } from 'jotai'
import { useLocation } from 'react-router-dom'
import { useCreation } from 'ahooks'
import { useState } from 'react'

import { routesAtom } from '@@/routes/context'
import { createMenus, getActiveMenuPath } from '@@/routes/create-menus'
import { createContainer } from '@utils/create-container'

const MenuAndRoutesContainer = createContainer(
  function useMenuAndRoutesContainer() {
    const location = useLocation()
    const routes = useAtomValue(routesAtom)
    const menus = createMenus(routes, location)

    const activeMenus = useCreation(
      () => getActiveMenuPath(menus, location),
      [menus]
    )

    const [viewTitle, setViewTitle] = useState(
      activeMenus.length > 0 ? activeMenus[activeMenus.length - 1].title : ''
    )

    return {
      menus,
      activeMenus,
      viewTitle,
      setViewTitle,
    }
  }
)

export const MenuAndRoutesProvider = MenuAndRoutesContainer.Provider

export const useMenuAndRoutes = MenuAndRoutesContainer.useContainer
