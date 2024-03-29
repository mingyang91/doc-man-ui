import { memo } from 'react'
// @mui
import { Stack } from '@mui/material'

// type
import { NavSectionProps } from '../type'
import { NavListRoot } from './nav-list'

// ----------------------------------------------------------------------

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
} as const

function NavSectionHorizontal({ navConfig }: NavSectionProps) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ bgcolor: 'background.neutral', borderRadius: 1, px: 0.5 }}
    >
      <Stack direction="row" sx={{ ...hideScrollbar, py: 1 }}>
        {navConfig.map(group => (
          <Stack key={group.title} direction="row" flexShrink={0}>
            {group.submodule?.map(list => (
              <NavListRoot key={list.title + list.path} list={list} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default memo(NavSectionHorizontal)
