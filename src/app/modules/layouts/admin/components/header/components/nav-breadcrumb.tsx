import { Breadcrumbs, Typography, Link } from '@mui/material'

import { assertGroupTitle } from '@@/routes/index'

import { useMenuAndRoutes } from '../../menu-and-routes/contexts/index'

export const NavBreadcrumb = () => {
  const { activeMenus } = useMenuAndRoutes()
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="text.primary">Page</Typography>
      {activeMenus.map((menu, index) => {
        const key = menu.title + menu.path + index
        return assertGroupTitle(menu) ? (
          <Typography color="text.primary" key={key}>
            {menu.title}
          </Typography>
        ) : (
          <Link key={key} href={menu.path}>
            {menu.title}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
