import { useControllableValue, useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { isArray, isFunction } from 'lodash-es'
import { useMemo } from 'react'
import { DraftFunction } from 'use-immer'

import {
  NodeData,
  NodeDataObject,
  NodeDataValue,
  NodeTypes,
  PrimitiveValue,
} from '../type'

interface useNodeProps {
  index: number // 当前节点的索引，如当前节点为根节点，则没有索引
  isArrayItem: boolean
  props: NodeData
  onPropsChange?: (data: NodeData, index: number) => void
}

export const useNode = ({
  index,
  isArrayItem,
  props,
  onPropsChange,
}: useNodeProps) => {
  const [data, setData] = useControllableValue({
    value: props,
    onChange: value => onPropsChange?.(value, index),
  })

  const isArrayValue = useMemo(() => data.type === NodeTypes.array, [data.type])

  const stringifyFullPath = useMemo(() => data.path.join('.'), [data.path])

  // 展开状态变化
  const onOpenChange = useMemoizedFn((isOpen: boolean) => {
    console.log('onOpenChange', isOpen)
    if (isArray(data.value)) {
      setData(
        produce(draft => {
          ;(draft as NodeDataObject).isOpen = isOpen
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

  const onKeyChange = useMemoizedFn((key: string) => {
    if (!isArrayItem && data.key !== key) {
      setData(
        produce(draft => {
          draft.key = key
        })
      )
    }
  })

  // 值变化
  // 仅用于字面量类型的值
  // 如果值类型是数组或对象，则不应该调用这个方法
  const onPrimitiveValueChange = useMemoizedFn((value: PrimitiveValue) => {
    setData(prevState => updateValue(prevState, value))
  })

  // 子节点变化
  const onValueItemChange = useMemoizedFn((item: NodeData, index: number) => {
    setData(prevState =>
      updateValue(prevState, data => {
        ;(data as NodeData[])[index] = item
      })
    )
  })

  // 删除一个子节点
  const onValueItemRemove = useMemoizedFn((index: number) => {
    setData(prevState =>
      updateValue(prevState, data => {
        ;(data as NodeData[]).splice(index, 1)
      })
    )
  })

  const onValueItemInsert = useMemoizedFn(
    (data: NodeData, insertIndex?: number) => {
      setData(prevState =>
        updateValue(prevState, draft => {
          if (insertIndex) {
            ;(draft as NodeData[]).splice(insertIndex, 0, data)
          } else {
            ;(draft as NodeData[]).push(data)
          }
        })
      )
    }
  )

  return {
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
  }
}
