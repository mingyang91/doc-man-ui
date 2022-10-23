import { Collapse } from '@mui/material'
import { memo } from 'react'

import { NodeData } from '../../type'
import { StyledBoxContent } from './components/styled'

import { NodeComponent } from '.'

interface ChildrenComponentProps {
  isOpen: boolean
  isArrayItem: boolean
  data: NodeData[]
  parentKey: string
  onItemChange?: (data: NodeData, index: number) => void
  onInsertAfter?: (index?: number) => void
  onItemRemove?: (index: number) => void
}

export const ChildrenComponent = memo(
  ({
    isOpen,
    isArrayItem,
    data,
    parentKey,
    onItemChange,
    onInsertAfter,
    onItemRemove,
  }: ChildrenComponentProps) => {
    return (
      <Collapse in={isOpen} unmountOnExit>
        <StyledBoxContent>
          {data.map((item, index) => (
            <NodeComponent
              key={`${parentKey}.${index}`}
              index={index}
              data={item}
              isArrayItem={isArrayItem}
              onChange={onItemChange}
              onRemove={onItemRemove}
              onInsertAfter={onInsertAfter}
            />
          ))}
        </StyledBoxContent>
      </Collapse>
    )
  }
)
