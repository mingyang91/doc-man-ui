import { BoxProps } from '@mui/material'

import { MenuConfig } from '@/app/routes/create-menus'

// ----------------------------------------------------------------------

export type NavListProps = MenuConfig

export type NavItemProps = {
  item: NavListProps
  isCollapse?: boolean
  isActive?: boolean | undefined
  open?: boolean
  onOpen?: VoidFunction
  onMouseEnter?: VoidFunction
  onMouseLeave?: VoidFunction
}

export interface NavSectionProps extends BoxProps {
  isCollapse?: boolean
  navConfig: MenuConfig[]
}
