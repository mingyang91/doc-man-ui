import { useAtomValue } from 'jotai'
import { useLocation } from 'react-router-dom'
import { useCreation } from 'ahooks'
import { useState } from 'react'

import { routesAtom } from '@app/routes'
import { createMenus, getActiveMenuPath } from '@app/routes/create-menus'
import { createContainer } from '@utils/create-container'

const MenuAndRoutesContainer = createContainer(
  function useMenuAndRoutesContainer() {
    const location = useLocation()
    const routes = useAtomValue(routesAtom)
    const menus = createMenus(routes, location)

    const [viewTitle, setViewTitle] = useState('')

    const activeMenus = useCreation(() => getActiveMenuPath(menus), [menus])

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
