import { MouseEventHandler, ReactNode, memo } from 'react'
import { Typography } from '@mui/material'
import { RiAddFill } from 'react-icons/ri'

import { CellSideButton } from './cell-side-button'

import i18n from 'strings/i18n'

export interface RowTitleProps {
  children?: ReactNode
  onAdd?: MouseEventHandler<HTMLButtonElement>
}

export const RowTitle = memo(({ children, onAdd }: RowTitleProps) => {
  return (
    <>
      <Typography align="center">{children}</Typography>
      {onAdd && (
        <CellSideButton aria-label={i18n.t('新增')} color="primary" onClick={onAdd}>
          <RiAddFill />
        </CellSideButton>
      )}
    </>
  )
})
