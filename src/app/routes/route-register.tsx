import { isNil } from 'lodash-es'
import { Route } from 'react-router-dom'

import { Layout } from '@app/modules/layouts'

import { RouteView, assertGroupTitle } from '.'

const routeWalk = (
  routes: RouteView[],
  parentPath = '/',
  requireAuth: JSX.Element[] = [],
  free: JSX.Element[] = []
) => {
  routes.forEach(route => {
    const fullPath = `${parentPath}${route.path}`
    if (!assertGroupTitle(route)) {
      const { isRequireAuth, layout, Component, props } = route

      if (isNil(route.views)) {
        const element = (
          <Layout layout={layout}>
            <Component {...props} />
          </Layout>
        )
        const routeRender = (
          <Route key={fullPath} path={fullPath} element={element} />
        )
        isRequireAuth ? requireAuth.push(routeRender) : free.push(routeRender)
      }
    }
    route.views && routeWalk(route.views, fullPath, requireAuth, free)
  })
  return {
    requireAuth,
    free,
  }
}

export const routeRegister = (routes: RouteView[]) => {
  return routeWalk(routes)
}
