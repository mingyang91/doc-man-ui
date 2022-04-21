import { ReactElement, forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { IconType } from 'react-icons'

import Iconify from '@components/iconify'
import { ICON } from '@/config'
import { assertGroupTitle } from '@/app/routes'
import { MenuConfig, MenuGroupTitle } from '@/app/routes/create-menus'

import { NavItemProps } from '../type'
import { isExternalLink } from '..'

import { ListItemStyle as ListItem } from './style'

// ----------------------------------------------------------------------

export const NavItemRoot = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  NavItemProps
>(({ item, isActive, open, onMouseEnter, onMouseLeave }, ref) => {
  if (assertGroupTitle<MenuGroupTitle>(item)) {
    return (
      <ListItem
        ref={ref}
        open={open}
        activeRoot={isActive}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavItemContent
          icon={item.icon}
          title={item.title}
          submodule={item.submodule}
        />
      </ListItem>
    )
  }

  return isExternalLink(item.path) ? (
    <ListItem
      component={Link}
      href={item.path}
      target="_blank"
      rel="noopener"
      disabled={item.isDisabled}
      roles={item.roles}
    >
      <NavItemContent
        icon={item.icon}
        title={item.title}
        submodule={item.submodule}
      />
    </ListItem>
  ) : (
    <ListItem
      component={RouterLink}
      to={item.path}
      activeRoot={isActive}
      disabled={item.isDisabled}
      roles={item.roles}
    >
      <NavItemContent
        icon={item.icon}
        title={item.title}
        submodule={item.submodule}
      />
    </ListItem>
  )
})

// ----------------------------------------------------------------------

export const NavItemSub = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  NavItemProps
>(({ item, isActive, open, onMouseEnter, onMouseLeave }, ref) => {
  if (assertGroupTitle(item)) {
    return (
      <ListItem
        ref={ref}
        subItem
        disableRipple
        open={open}
        activeSub={isActive}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={false}
      >
        <NavItemContent
          icon={item.icon}
          title={item.title}
          submodule={item.submodule}
          subItem
        />
      </ListItem>
    )
  }

  return isExternalLink(item.path) ? (
    <ListItem
      subItem
      href={item.path}
      disableRipple
      rel="noopener"
      target="_blank"
      component={Link}
      disabled={item.isDisabled}
      roles={item.roles}
    >
      <NavItemContent icon={item.icon} title={item.title} subItem />
    </ListItem>
  ) : (
    <ListItem
      disableRipple
      component={RouterLink}
      to={item.path}
      activeSub={isActive}
      subItem
      disabled={item.isDisabled}
      roles={item.roles}
    >
      <NavItemContent
        icon={item.icon}
        title={item.title}
        submodule={item.submodule}
        subItem
      />
    </ListItem>
  )
})

// ----------------------------------------------------------------------

type NavItemContentProps = {
  title: string
  icon?: IconType
  submodule?: MenuConfig[]
  subItem?: boolean
}

function NavItemContent({
  icon: Icon,
  title,
  submodule,
  subItem,
}: NavItemContentProps) {
  return (
    <>
      {Icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
            '& svg': { width: '100%', height: '100%' },
          }}
        >
          {<Icon />}
        </Box>
      )}

      {title}

      {submodule && (
        <Iconify
          icon={subItem ? FiChevronRight : FiChevronDown}
          sx={{
            ml: 0.5,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        />
      )}
    </>
  )
}
