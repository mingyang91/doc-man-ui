import { Button, Typography } from '@mui/material'
import { memo, ReactNode } from 'react'
import { MdDelete } from 'react-icons/md'

import Iconify from 'd/components/iconify'

import { StyledHeader } from './styled'

interface HeaderProps {
  children?: ReactNode
  removable?: boolean
  onRemove?: () => void
}

export const Header = memo(({ children, removable, onRemove }: HeaderProps) => {
  return (
    <StyledHeader>
      <Typography variant="h6" color="primary" flex="1">
        检测项目: {children}
      </Typography>
      {removable && (
        <Button
          startIcon={<Iconify icon={MdDelete} />}
          variant="text"
          color="error"
          onClick={() => onRemove?.()}
        >
          删除此项
        </Button>
      )}
    </StyledHeader>
  )
})
