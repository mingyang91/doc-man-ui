import { ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import {
  Box,
  Link,
  Typography,
  BreadcrumbsProps,
  Breadcrumbs as MUIBreadcrumbs,
} from '@mui/material'

export type BreadcrumbConfig = {
  href?: string
  name: string
  icon?: ReactElement
}

// ----------------------------------------------------------------------

export interface Props extends BreadcrumbsProps {
  links: BreadcrumbConfig[]
  activeLast?: boolean
}

export default function Breadcrumbs({
  links,
  activeLast = false,
  ...other
}: Props) {
  const listDefault = links.map(link => (
    <LinkItem key={link.name} link={link} />
  ))

  const listActiveLast = links.map(link => (
    <div key={link.name}>
      {link.href ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {link.name}
        </Typography>
      )}
    </div>
  ))

  return (
    <MUIBreadcrumbs
      separator={
        <Box
          component="span"
          sx={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            bgcolor: 'text.disabled',
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  )
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  link: BreadcrumbConfig
}

function LinkItem({ link }: LinkItemProps) {
  const { href, name, icon } = link
  return (
    <Link
      key={name}
      variant="body2"
      component={RouterLink}
      to={href || '#'}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        '& > div': { display: 'inherit' },
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>
      )}
      {name}
    </Link>
  )
}
