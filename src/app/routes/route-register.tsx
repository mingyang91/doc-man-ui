import { Fragment } from 'react'
import { generatePath, Navigate, RouteObject } from 'react-router-dom'

import { Layout } from '@/layouts'
import { AuthProtectModule } from '@/modules/auth-protect'

import { assertGroupTitle, RouteView } from '.'

const routeWalk = (routes: RouteView[]): RouteObject[] => {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const fullPath = route.path

    if (
      assertGroupTitle(route) &&
      route.submodule &&
      route.submodule.length > 0
    ) {
      return acc.concat(routeWalk(route.submodule))
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
          routeObject.children = routeWalk(route.submodule)
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
