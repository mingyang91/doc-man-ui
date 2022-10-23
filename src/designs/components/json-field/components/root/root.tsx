import { Stack, Typography } from '@mui/material'
import { useDeepCompareEffect, useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { isEqual } from 'lodash-es'
import { forwardRef, useId, useMemo, useState } from 'react'

import { useAddNewNode } from '../../hooks/use-add-node'
import { JsonData, NodeData, NodeTypes } from '../../type'
import { parseJsonData, transformNodeToData } from '../../utils/tree-utils'
import { NodeComponent } from '../node'
import { StyledRootBox } from './components/styled'
import { TypeSelect } from './components/type-select'

import { useConfirm } from '@@/confirm'

interface JsonFieldProps {
  label?: string
  value: JsonData
  onChange?: (data: JsonData) => void
}

export const JsonField = forwardRef<HTMLDivElement, JsonFieldProps>(
  ({ label, value, onChange }, ref) => {
    const id = useId()
    const { confirm } = useConfirm()

    const [nodeData, setNodeData] = useState(() => parseJsonData(value))

    const addNew = useAddNewNode()

    const isArrayValue = useMemo(
      () => nodeData.type === NodeTypes.array,
      [nodeData.type]
    )

    const onRootTypeChange = useMemoizedFn(
      async (type: NodeTypes.object | NodeTypes.array) => {
        if (nodeData.type !== type) {
          const changeType = () =>
            setNodeData(
              produce(draft => {
                draft.type = type
                draft.value = []
              })
            )

          if (nodeData.value.length > 0) {
            const result = await confirm({
              title: '确定要更改根数据类型吗？',
              content: '此举会导致数据全部丢失，请确认是否继续。',
              confirmText: '确认',
              cancelText: '取消',
            })

            if (result) {
              changeType()
            }
          } else {
            changeType()
          }
        }
      }
    )

    const onItemChange = useMemoizedFn((data: NodeData, index: number) => {
      setNodeData(
        produce(draft => {
          draft.value[index] = data
        })
      )
    })

    const onInsertChild = useMemoizedFn(async (index?: number) => {
      const newData = await addNew?.(isArrayValue, index)
      if (newData) {
        setNodeData(
          produce(draft => {
            if (index !== undefined) {
              draft.value.splice(index, 0, newData)
            } else {
              draft.value.push(newData)
            }
          })
        )
      }
    })

    useDeepCompareEffect(() => {
      const data = transformNodeToData(nodeData)
      if (isEqual(data, value)) {
        return
      }
      onChange?.(data)
    }, [nodeData, value, onChange])

    return (
      <StyledRootBox ref={ref}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{label}</Typography>
          <TypeSelect value={nodeData.type} onChange={onRootTypeChange} />
        </Stack>
        {nodeData.value.map((node, index) => (
          <NodeComponent
            key={`${id}.${index}`}
            index={index}
            isArrayItem={isArrayValue}
            data={node}
            onChange={onItemChange}
            onInsertAfter={onInsertChild}
          />
        ))}
      </StyledRootBox>
    )
  }
)
