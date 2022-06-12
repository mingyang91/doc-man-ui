import { RouteObject, Navigate, generatePath } from 'react-router-dom'
import { Fragment } from 'react'

import { AuthProtectModule } from '@/app/modules/auth-protect'

import { Layout } from '@@/modules/layouts'

import { RouteView, assertGroupTitle } from '.'

const routeWalk = (routes: RouteView[], parentPath = '/'): RouteObject[] => {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const fullPath = `${parentPath}${route.path || ''}`

    if (
      assertGroupTitle(route) &&
      route.submodule &&
      route.submodule.length > 0
    ) {
      return acc.concat(routeWalk(route.submodule, fullPath))
    }

    if (!assertGroupTitle(route)) {
      if (route.redirect) {
        acc.push({
          path: fullPath,
          element: (
            <Navigate to={generatePath(route.redirect, route.params)} replace />
          ),
        })
      } else {
        const { isRequireAuth, layout, Component, props } = route
        const Wrapper = isRequireAuth ? AuthProtectModule : Fragment
        const element = (
          <Wrapper>
            <Layout layout={layout}>
              <Component {...props} />
            </Layout>
          </Wrapper>
        )
        const routeObject: RouteObject = {
          path: fullPath,
          element,
        }

        if (route.submodule && route.submodule.length > 0) {
          routeObject.children = routeWalk(route.submodule, fullPath)
        }

        acc.push(routeObject)
      }
    }

    return acc
  }, [])
}

export const routeRegister = (routes: RouteView[]) => {
  return routeWalk(routes)
}
