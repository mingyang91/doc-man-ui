import { MouseEventHandler, ReactNode, memo } from 'react'
import { Typography } from '@mui/material'
import { RiAddFill } from 'react-icons/ri'

import { CellSideButton } from './cell-side-button'

export interface RowTitleProps {
  children?: ReactNode
  onAdd?: MouseEventHandler<HTMLButtonElement>
}

export const RowTitle = memo(({ children, onAdd }: RowTitleProps) => {
  return (
    <>
      <Typography align="center">{children}</Typography>
      {onAdd && (
        <CellSideButton aria-label="添加一项" color="primary" onClick={onAdd}>
          <RiAddFill />
        </CellSideButton>
      )}
    </>
  )
})
