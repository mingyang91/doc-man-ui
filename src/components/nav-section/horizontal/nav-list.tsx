import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { assertHasSubViews } from '@@/routes'
import { getActive } from '@@/routes/create-menus'

import { NavListProps } from '../type'
import { NavItemRoot, NavItemSub } from './nav-item'
import { PaperStyle } from './style'

// ----------------------------------------------------------------------

type NavListRootProps = {
  list: NavListProps
}

export function NavListRoot({ list }: NavListRootProps) {
  const menuRef = useRef(null)

  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)

  const hasChildren = assertHasSubViews(list)

  const isActive = list.path ? getActive(list.path, pathname) : false

  useEffect(() => {
    if (open) {
      handleClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          open={open}
          item={list}
          isActive={isActive}
          ref={menuRef}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        />

        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {(list.submodule || []).map(item => (
            <NavListSub key={item.title + item.path} list={item} />
          ))}
        </PaperStyle>
      </>
    )
  }

  return <NavItemRoot item={list} isActive={isActive} />
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  list: NavListProps
}

function NavListSub({ list }: NavListSubProps) {
  const menuRef = useRef(null)

  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)

  const isActive = list.path ? getActive(list.path, pathname) : false

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const hasChildren = assertHasSubViews(list)

  if (hasChildren) {
    return (
      <>
        <NavItemSub
          ref={menuRef}
          open={open}
          item={list}
          isActive={isActive}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        />

        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {(list.submodule || []).map(item => (
            <NavListSub key={item.title + item.path} list={item} />
          ))}
        </PaperStyle>
      </>
    )
  }

  return <NavItemSub item={list} isActive={isActive} />
}
