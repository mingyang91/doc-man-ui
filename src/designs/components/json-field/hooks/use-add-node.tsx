import { Stack } from '@mui/material'
import { useControllableValue, useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { cloneDeep, isArray } from 'lodash-es'
import { useState } from 'react'

import { TypeSelect } from '../components/inputs'
import { KeyValueEditor } from '../components/key-value-editor'
import { NodeData, NodeTypes, PrimitiveValue } from '../type'
import { addNewNode } from '../utils/tree-utils'

import { useConfirm } from '@@/confirm'

interface AddNewNodeFormProps {
  data?: NodeData
  isArrayItem: boolean
  index?: number
  onChange?: (data: NodeData) => void
}

const AddNewNodeForm = ({
  data: dataProp = addNewNode(NodeTypes.boolean, 0),
  isArrayItem,
  index,
  onChange,
}: AddNewNodeFormProps) => {
  const [data, setData] = useControllableValue<NodeData>({
    value: dataProp,
    onChange,
  })

  const onKeyChange = useMemoizedFn((key: string) => {
    setData(
      produce(draft => {
        draft.key = key
      })
    )
  })

  const onValueChange = useMemoizedFn((value: PrimitiveValue) => {
    setData(
      produce(draft => {
        draft.value = value
      })
    )
  })

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

  return (
    <Stack spacing={1} direction="row">
      <TypeSelect value={data.type} onChange={onTypeChange} />
      <KeyValueEditor
        isArrayItem={isArrayItem}
        isObjectNode={data.isObjectNode}
        isArrayValue={data.type === NodeTypes.array}
        keyString={data.key}
        index={index}
        value={isArray(data.value) ? '' : data.value}
        onKeyChange={onKeyChange}
        onValueChange={onValueChange}
      />
    </Stack>
  )
}

export const useAddNewNode = () => {
  const [data, setData] = useState<undefined | NodeData>(undefined)

  const { confirm } = useConfirm()

  const handleAddNewNode = async (isArrayItem: boolean, index?: number) => {
    const isConfirmed = await confirm({
      title: '新增键值对',
      customRender: () => (
        <AddNewNodeForm
          data={data}
          isArrayItem={isArrayItem}
          index={index}
          onChange={setData}
        />
      ),
      confirmText: '确定',
      cancelText: '取消',
    })

    const result = cloneDeep(data)

    setData(undefined)

    if (isConfirmed) {
      return result
    }

    return undefined
  }

  return handleAddNewNode
}
