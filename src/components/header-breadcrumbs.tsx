import { ReactNode } from 'react'
// @mui
import { Box, Typography, Link } from '@mui/material'

//
import Breadcrumbs, { Props as BreadcrumbsProps } from './breadcrumbs'

// ----------------------------------------------------------------------

interface Props extends Omit<BreadcrumbsProps, 'links'> {
  action?: ReactNode
  heading?: string
  moreLink?: string | string[]
  links?: BreadcrumbsProps['links']
}

export default function HeaderBreadcrumbs({
  links,
  action,
  heading,
  moreLink = '' || [],
  sx,
  ...other
}: Props) {
  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}
          {links && links.length && <Breadcrumbs links={links} {...other} />}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {typeof moreLink === 'string' ? (
          <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map(href => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  )
}
