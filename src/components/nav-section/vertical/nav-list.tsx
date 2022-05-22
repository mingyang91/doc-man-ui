import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// @mui
import { List, Collapse } from '@mui/material'

import { assertHasSubViews } from '@/app/routes'
import { getActive } from '@@/routes/create-menus'

import { NavListProps } from '../type'

import { NavItemRoot, NavItemSub } from './nav-item'

// ----------------------------------------------------------------------

type NavListRootProps = {
  list: NavListProps
  isCollapse: boolean
}

export function NavListRoot({ list, isCollapse }: NavListRootProps) {
  const { pathname } = useLocation()

  const hasChildren = assertHasSubViews(list)

  const isActive = list.path ? getActive(list.path, pathname) : false

  const [open, setOpen] = useState(isActive)

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          item={list}
          isCollapse={isCollapse}
          isActive={isActive}
          open={open}
          onOpen={() => setOpen(!open)}
        />

        {!isCollapse && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {(list.submodule || []).map(item => (
                <NavListSub key={item.title + item.path} list={item} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    )
  }

  return <NavItemRoot item={list} isActive={isActive} isCollapse={isCollapse} />
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  list: NavListProps
}

function NavListSub({ list }: NavListSubProps) {
  const { pathname } = useLocation()

  const isActive = list.path ? getActive(list.path, pathname) : false

  const [open, setOpen] = useState(isActive)

  const hasChildren = assertHasSubViews(list)

  if (hasChildren) {
    return (
      <>
        <NavItemSub
          item={list}
          onOpen={() => setOpen(!open)}
          open={open}
          isActive={isActive}
        />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            {(list.submodule || []).map(item => (
              <NavItemSub
                key={item.title + item.path}
                item={item}
                isActive={item.path ? getActive(item.path, pathname) : false}
              />
            ))}
          </List>
        </Collapse>
      </>
    )
  }

  return <NavItemSub item={list} isActive={isActive} />
}
