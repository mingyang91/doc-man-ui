import { useMemoizedFn } from 'ahooks'
import { isArray } from 'lodash-es'
import { forwardRef, ReactNode, useMemo } from 'react'

import { useAddNewNode } from '../../hooks/use-add-node'
import { useNode } from '../../hooks/use-node'
import { NodeData } from '../../type'
import { NodeEditorButtons } from '../buttons'
import { TypeSelect } from '../inputs'
import { KeyValueEditor } from '../key-value-editor'
import { ChildrenComponent } from './children'
import { StyledBox, StyledBoxMain } from './components/styled'

interface NodeComponentProps {
  index: number // 当前节点的索引，如当前节点为根节点，则没有索引
  isArrayItem: boolean
  data: NodeData
  onChange?: (data: NodeData, index: number) => void
  onRemove?: (index: number) => void
  onInsertAfter?: (index?: number) => void
  children?: ReactNode
}

// 每一个键值对，用这个组件渲染，如果值是 Object / Array， 则递归
// eslint-disable-next-line @typescript-eslint/ban-types
export const NodeComponent = forwardRef<HTMLDivElement, NodeComponentProps>(
  (
    {
      index,
      isArrayItem,
      data: dataProps,
      onChange: onPropsChange,
      onInsertAfter,
      onRemove,
      children,
    },
    ref
  ) => {
    const {
      data,
      isArrayValue,
      stringifyFullPath,
      onOpenChange,
      onTypeChange,
      onKeyChange,
      onPrimitiveValueChange,
      onValueItemChange,
      onValueItemRemove,
      onValueItemInsert,
    } = useNode({
      index,
      isArrayItem,
      props: dataProps,
      onPropsChange,
    })

    const isOpen = useMemo(
      () => !!(data.isObjectNode && data.isOpen),
      [data.isObjectNode, data.isOpen]
    )

    const addNew = useAddNewNode()

    const onInsertItemAfter = useMemoizedFn(async (index?: number) => {
      const newData = await addNew?.(isArrayValue, index)
      if (newData) {
        onValueItemInsert?.(newData, index)
      }
    })

    return (
      <StyledBox ref={ref}>
        <StyledBoxMain spacing={1}>
          <TypeSelect value={data.type} onChange={onTypeChange} />
          <KeyValueEditor
            isOpen={isOpen}
            isArrayItem={isArrayItem}
            isObjectNode={data.isObjectNode}
            isArrayValue={isArrayValue}
            keyString={data.key || ''}
            index={index}
            value={isArray(data.value) ? '' : data.value}
            onKeyChange={onKeyChange}
            onValueChange={onPrimitiveValueChange}
            onOpenChange={data.isObjectNode && onOpenChange}
          />
          <NodeEditorButtons
            onRemove={() => onRemove?.(index)}
            onAdd={() => onInsertAfter?.(index)}
          />
        </StyledBoxMain>
        {data.isObjectNode && (
          <ChildrenComponent
            isOpen={isOpen}
            isArrayItem={isArrayValue}
            data={data.value}
            parentKey={stringifyFullPath}
            onInsertAfter={onInsertItemAfter}
            onItemChange={onValueItemChange}
            onItemRemove={onValueItemRemove}
          />
        )}
      </StyledBox>
    )
  }
)
