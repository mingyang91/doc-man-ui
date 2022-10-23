import {
  isArray,
  isBoolean,
  isNil,
  isNull,
  isNumber,
  isObject,
} from 'lodash-es'

import {
  JsonData,
  JsonFieldType,
  NodeData,
  NodeDataObject,
  NodeDataPrimitive,
  NodeTypes,
} from '../type'

export const getTypeFromValue = (value: unknown): NodeTypes => {
  if (isNull(value)) {
    return NodeTypes.null
  } else if (isBoolean(value)) {
    return NodeTypes.boolean
  } else if (isNumber(value)) {
    return NodeTypes.number
  } else if (isArray(value)) {
    return NodeTypes.array
  } else if (isObject(value)) {
    return NodeTypes.object
  }

  return NodeTypes.string
}

const isObjectNode = (
  type: NodeTypes
): type is NodeTypes.object | NodeTypes.array =>
  type === NodeTypes.object || type === NodeTypes.array

export const addNewNode = (
  type: NodeTypes,
  index: number,
  parent?: NodeDataObject,
  key?: string
): NodeData => {
  const objectNodeResult = isObjectNode(type)

  const path = parent ? [...parent.path] : []

  if (!isNil(key) || !isNil(index)) {
    path.push((key || index) as string | number)
  }

  index = index ?? parent?.value.length ?? 0

  if (objectNodeResult) {
    return {
      key,
      type,
      isOpen: true,
      path,
      isObjectNode: true,
      parent,
      index,
      value: [],
    }
  }

  return {
    key,
    type,
    path,
    isObjectNode: false,
    isOpen: false,
    parent,
    index,
    value:
      type === NodeTypes.null
        ? null
        : type === NodeTypes.number
        ? 0
        : type === NodeTypes.boolean
        ? true
        : '',
  }
}

const parseJsonDataRecursive = (
  data: JsonFieldType,
  index?: number,
  key?: string,
  parent?: NodeDataObject | NodeDataPrimitive
): NodeDataObject | NodeDataPrimitive => {
  const type = getTypeFromValue(data)

  const path = parent ? [...parent.path] : []

  if (!isNil(key) || !isNil(index)) {
    path.push((key || index) as string | number)
  }

  const base = {
    key,
    index,
    type,
    isOpen: true,
    path,
    isObjectNode: isObjectNode(type),
  }

  if (base.isObjectNode) {
    const result = {
      ...base,
      value: [],
    } as NodeDataObject
    result.value = Object.entries(
      data as JsonData[] | Record<string, JsonData>
    ).map(([key, value], index) => {
      return parseJsonDataRecursive(value, index, key, result)
    })

    return result
  } else {
    return {
      ...base,
      value: data as string | boolean | number | null,
    } as NodeDataPrimitive
  }
}

export const parseJsonData = (data: JsonData) => {
  return parseJsonDataRecursive(data) as NodeDataObject
}

const transformNodeToDataRecursive = (
  node: NodeDataObject | NodeDataPrimitive
): JsonFieldType => {
  if (node.type === NodeTypes.array) {
    const value = []
    for (const child of node.value) {
      value.push(transformNodeToDataRecursive(child))
    }
    return value
  } else if (node.type === NodeTypes.object) {
    const value: Record<string, unknown> = {}
    for (const child of node.value) {
      value[child.key as string] = transformNodeToDataRecursive(child)
    }
    return value
  } else if (node.type === NodeTypes.null) {
    return null
  } else if (node.type === NodeTypes.number) {
    return node.value as number
  } else if (node.type === NodeTypes.boolean) {
    return node.value as boolean
  } else {
    return node.value as string
  }
}

export const transformNodeToData = (rootNode: NodeDataObject) => {
  return transformNodeToDataRecursive(rootNode) as JsonData
}
