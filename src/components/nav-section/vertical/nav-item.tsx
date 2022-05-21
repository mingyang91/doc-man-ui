import { NavLink as RouterLink } from 'react-router-dom'
// @mui
import { Box, Link, ListItemText, Typography, Tooltip } from '@mui/material'
import { RiArrowDownFill, RiArrowGoForwardFill } from 'react-icons/ri'

import Iconify from '@components/iconify'
import { assertHasSubViews, assertGroupTitle } from '@@/routes/index'

import { NavItemProps } from '../type'
//
import { isExternalLink } from '..'

import {
  ListItemStyle as ListItem,
  ListItemTextStyle,
  ListItemIconStyle,
} from './style'

// ----------------------------------------------------------------------

export function NavItemRoot({
  item,
  isCollapse,
  open = false,
  isActive,
  onOpen,
}: NavItemProps) {
  const hasChildren = assertHasSubViews(item)

  const { icon: Icon, title, caption, info } = item

  const isDisabled = 'isDisabled' in item ? item.isDisabled : false

  const renderContent = (
    <>
      {Icon && (
        <ListItemIconStyle>
          <Icon />
        </ListItemIconStyle>
      )}
      <ListItemTextStyle
        disableTypography
        primary={title}
        secondary={
          <Tooltip title={caption || ''} arrow>
            <Typography
              noWrap
              variant="caption"
              component="div"
              sx={{ textTransform: 'initial', color: 'text.secondary' }}
            >
              {caption}
            </Typography>
          </Tooltip>
        }
        isCollapse={isCollapse}
      />
      {!isCollapse && (
        <>
          {info && info}
          {hasChildren && <ArrowIcon open={open} />}
        </>
      )}
    </>
  )

  if (hasChildren) {
    return (
      <ListItem
        onClick={onOpen}
        activeRoot={isActive}
        disabled={isDisabled}
        roles={item.roles}
      >
        {renderContent}
      </ListItem>
    )
  }

  return item.path ? (
    isExternalLink(item.path) ? (
      <ListItem
        component={Link}
        href={item.path}
        target="_blank"
        rel="noopener"
        disabled={isDisabled}
        roles={item.roles}
      >
        {renderContent}
      </ListItem>
    ) : (
      <ListItem
        component={RouterLink}
        to={item.path}
        activeRoot={isActive}
        disabled={isDisabled}
        roles={item.roles}
      >
        {renderContent}
      </ListItem>
    )
  ) : (
    <ListItem roles={item.roles}>{renderContent}</ListItem>
  )
}

// ----------------------------------------------------------------------

type NavItemSubProps = Omit<NavItemProps, 'isCollapse'>

export function NavItemSub({
  item,
  open = false,
  isActive = false,
  onOpen,
}: NavItemSubProps) {
  const { title, path, info, caption, roles } = item

  const isDisabled = assertGroupTitle(item) ? false : item.isDisabled

  const hasChildren = assertHasSubViews(item)

  const renderContent = (
    <>
      <DotIcon active={isActive} />
      <ListItemText
        disableTypography
        primary={title}
        secondary={
          <Tooltip title={caption || ''} arrow>
            <Typography
              noWrap
              variant="caption"
              component="div"
              sx={{ textTransform: 'initial', color: 'text.secondary' }}
            >
              {caption}
            </Typography>
          </Tooltip>
        }
      />
      {info && info}
      {hasChildren && <ArrowIcon open={open} />}
    </>
  )

  if (hasChildren) {
    return (
      <ListItem
        onClick={onOpen}
        activeSub={isActive}
        subItem
        disabled={isDisabled}
        roles={roles}
      >
        {renderContent}
      </ListItem>
    )
  }

  return path ? (
    isExternalLink(path) ? (
      <ListItem
        component={Link}
        href={path}
        target="_blank"
        rel="noopener"
        subItem
        disabled={isDisabled}
        roles={roles}
      >
        {renderContent}
      </ListItem>
    ) : (
      <ListItem
        component={RouterLink}
        to={path}
        activeSub={isActive}
        subItem
        disabled={isDisabled}
        roles={roles}
      >
        {renderContent}
      </ListItem>
    )
  ) : (
    <ListItem activeSub={isActive} subItem disabled={isDisabled} roles={roles}>
      {renderContent}
    </ListItem>
  )
}

// ----------------------------------------------------------------------

type DotIconProps = {
  active: boolean
}

export function DotIcon({ active }: DotIconProps) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: theme =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  )
}

// ----------------------------------------------------------------------

type ArrowIconProps = {
  open: boolean
}

export function ArrowIcon({ open }: ArrowIconProps) {
  return (
    <Iconify
      icon={open ? RiArrowDownFill : RiArrowGoForwardFill}
      sx={{ width: 16, height: 16, ml: 1 }}
    />
  )
}
