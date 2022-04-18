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
    if (assertGroupTitle(route)) {
      return null
    }
    const { isRequireAuth, layout, path, Component, views, props } = route
    const fullPath = `${parentPath}${path}`
    if (isNil(views)) {
      const element = (
        <Layout layout={layout}>
          <Component props={props} />
        </Layout>
      )
      const routeRender = (
        <Route key={fullPath} path={fullPath} element={element} />
      )
      isRequireAuth ? requireAuth.push(routeRender) : free.push(routeRender)
    }
    views && routeWalk(views, fullPath, requireAuth, free)
  })
  return {
    requireAuth,
    free,
  }
}

export const routeRegister = (routes: RouteView[]) => {
  return routeWalk(routes)
}
