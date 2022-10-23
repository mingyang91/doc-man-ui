export type JsonData = Record<string, unknown> | unknown[]

export type JsonFieldType = JsonData | null | number | boolean | string

export enum NodeTypes {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  array = 'array',
  object = 'object',
  null = 'null',
}

interface NodeDataBase {
  key?: string
  path: (string | number)[]
  parent?: NodeDataObject
  index: number
  isOpen: boolean
}

export interface NodeDataPrimitive extends NodeDataBase {
  type: NodeTypes.string | NodeTypes.number | NodeTypes.boolean | NodeTypes.null
  value: string | number | boolean | null
  isObjectNode?: false | never
}

export interface NodeDataObject extends NodeDataBase {
  type: NodeTypes.object | NodeTypes.array
  isObjectNode: true
  value: NodeData[]
}

export type PrimitiveValue = string | number | boolean | null

export type NodeDataValue = PrimitiveValue | NodeData[]

export type NodeData = NodeDataPrimitive | NodeDataObject

export type EditableNodeProps =
  | 'type'
  | 'key'
  | 'opened'
  | 'index'
  | 'value'
  | 'isObjectNode'
