import { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
} from '@mui/material'
import { RiSearchLine } from 'react-icons/ri'

import Iconify from 'd/components/iconify'
import { IconButtonAnimate } from 'd/components/animate'

import cssStyles from 'u/css-styles'

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const SearchBarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

// ----------------------------------------------------------------------

export const SearchBar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButtonAnimate onClick={handleOpen}>
            <Iconify icon={RiSearchLine} width={20} height={20} />
          </IconButtonAnimate>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchBarStyle>
            <Input
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon={RiSearchLine}
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              搜索
            </Button>
          </SearchBarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  )
}
