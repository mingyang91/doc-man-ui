// @mui
import { styled } from '@mui/material/styles'
import { List, Box, ListSubheader, ListSubheaderProps } from '@mui/material'
import { JSXElementConstructor } from 'react'

import { assertGroupTitle } from '@@/routes'

import { NavSectionProps } from '../type'

//
import { NavListRoot } from './nav-list'

// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled<
  JSXElementConstructor<ListSubheaderProps>
>(props => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  })
)

// ----------------------------------------------------------------------

export default function NavSectionVertical({
  navConfig,
  isCollapse = false,
  ...other
}: NavSectionProps) {
  return (
    <Box {...other}>
      {navConfig.map(group => (
        <List key={group.title} disablePadding sx={{ px: 2 }}>
          {assertGroupTitle(group) ? (
            <ListSubheaderStyle
              sx={{
                ...(isCollapse && {
                  opacity: 0,
                }),
              }}
            >
              {group.title}
            </ListSubheaderStyle>
          ) : null}

          {group.submodule?.map(list => (
            <NavListRoot
              key={list.title + list.path}
              list={list}
              isCollapse={isCollapse}
            />
          ))}
        </List>
      ))}
    </Box>
  )
}
