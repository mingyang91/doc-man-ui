import { useControllableValue, useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { isArray, isFunction } from 'lodash-es'
import { createContext, memo, ReactNode, useContext, useMemo } from 'react'
import { DraftFunction } from 'use-immer'

import { NodeData, NodeDataValue, NodeTypes, PrimitiveValue } from '../type'

export interface NodeContextValue {
  data: NodeData
  index: number
  isArrayItem: boolean
  onTypeChange?: (type: NodeTypes) => void
  onKeyChange?: (key: string) => void
  onInsertAfter?: (index?: number) => void
  onValueChange?: (data: PrimitiveValue) => void
  onChildChange?: (item: NodeData, index?: number) => void
  onChildRemove?: (index: number) => void
  onChildAdd?: (data: NodeData, insertIndex?: number) => void
  onOpenChange?: (isOpen: boolean) => void
}

const NodeContext = createContext({} as NodeContextValue)

interface JsonContextProviderProps {
  index: number // 当前节点的索引，如当前节点为根节点，则没有索引
  isArrayItem: boolean
  data: NodeData
  onChange?: (data: NodeData, index: number) => void
  onInsertAfter?: (index?: number) => void
  children?: ReactNode
}

export const NodeProvider = memo(
  ({
    index,
    isArrayItem,
    data: dataProps,
    onChange: onPropsChange,
    onInsertAfter,
    children,
  }: JsonContextProviderProps) => {
    const [data, setData] = useControllableValue({
      value: dataProps,
      onChange: value => onPropsChange?.(value, index),
    })

    // 值类别变化，这个变化会把之前的值初始化
    const onTypeChange = useMemoizedFn((type: NodeTypes) => {
      if (data.type !== type) {
        setData(
          produce(draft => {
            draft.type = type
            if (type === NodeTypes.object || type === NodeTypes.array) {
              draft.value = []
              draft.isObjectNode = true
            } else {
              draft.isObjectNode = false
              if (type === NodeTypes.null) {
                draft.value = null
              } else if (type === NodeTypes.number) {
                draft.value = 0
              } else if (type === NodeTypes.boolean) {
                draft.value = true
              } else {
                draft.value = ''
              }
            }
          })
        )
      }
    })

    // 展开状态变化
    const onOpenChange = useMemoizedFn((isOpen: boolean) => {
      if (isArray(data.value)) {
        setData(
          produce(draft => {
            draft.isOpen = isOpen
          })
        )
      }
    })

    // curryFn
    const updateValue = useMemoizedFn(
      produce(
        (
          draft: NodeData,
          value: NodeDataValue | DraftFunction<NodeDataValue>
        ) => {
          if (isFunction(value)) {
            const nextValue = value(draft.value)
            if (nextValue !== undefined) {
              draft.value = nextValue
            }
          } else {
            draft.value = value
          }
        }
      )
    )

    // 值变化
    // 仅用于字面量类型的值
    // 如果值类型是数组或对象，则不应该调用这个方法
    const onValueChange = useMemoizedFn((value: PrimitiveValue) => {
      setData(prevState => updateValue(prevState, value))
    })

    const onKeyChange = useMemoizedFn((key: string) => {
      if (data.type !== NodeTypes.array && data.key !== key) {
        setData(
          produce(draft => {
            draft.key = key
          })
        )
      }
    })

    // 子节点变化
    const onChildChange = useMemoizedFn((item: NodeData, index?: number) => {
      setData(prevState =>
        updateValue(prevState, data => {
          if (index) {
            ;(data as NodeData[])[index] = item
          } else {
            ;(data as NodeData[]).push(item)
          }
        })
      )
    })

    // 删除一个子节点
    const onChildRemove = useMemoizedFn((index: number) => {
      setData(prevState =>
        updateValue(prevState, data => {
          ;(data as NodeData[]).splice(index, 1)
        })
      )
    })

    const onChildAdd = useMemoizedFn((data: NodeData, insertIndex?: number) => {
      setData(prevState =>
        updateValue(prevState, draft => {
          if (insertIndex) {
            ;(draft as NodeData[]).splice(insertIndex, 0, data)
          } else {
            ;(draft as NodeData[]).push(data)
          }
        })
      )
    })

    const contextValue = useMemo(
      () => ({
        data,
        index,
        isArrayItem,
        onInsertAfter,
        onTypeChange,
        onKeyChange,
        onValueChange,
        onChildChange,
        onChildRemove,
        onChildAdd,
        onOpenChange,
      }),
      [
        data,
        index,
        isArrayItem,
        onInsertAfter,
        onTypeChange,
        onKeyChange,
        onValueChange,
        onChildChange,
        onChildRemove,
        onChildAdd,
        onOpenChange,
      ]
    )

    return (
      <NodeContext.Provider value={contextValue}>
        {children}
      </NodeContext.Provider>
    )
  }
)

export const useNodeData = () => useContext(NodeContext)
