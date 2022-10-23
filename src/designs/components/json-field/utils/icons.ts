import { IconType } from 'react-icons'
import {
  VscDebugStop,
  VscJson,
  VscSymbolArray,
  VscSymbolBoolean,
  VscSymbolNumeric,
  VscSymbolString,
} from 'react-icons/vsc'

import { NodeTypes } from '../type'

export const TypeAndIcons: Record<NodeTypes, IconType> = {
  [NodeTypes.string]: VscSymbolString,
  [NodeTypes.number]: VscSymbolNumeric,
  [NodeTypes.boolean]: VscSymbolBoolean,
  [NodeTypes.array]: VscSymbolArray,
  [NodeTypes.object]: VscJson,
  [NodeTypes.null]: VscDebugStop,
}
