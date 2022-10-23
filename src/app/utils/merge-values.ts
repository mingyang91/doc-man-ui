/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isArray,
  isNil,
  isNull,
  isObject,
  isString,
  mergeWith,
} from 'lodash-es'

export const mergeValue = <T>(
  defaultValue: T,
  value: T | null | undefined,

  handler?: (
    value: any,
    srcValue: any,
    key: string,
    object: any,
    source: any
  ) => any
): T => {
  handler =
    handler ??
    ((objValue, srcValue, key) => {
      const nonullObjValue = isNull(objValue) ? undefined : objValue
      const nonullSrcValue = isNull(srcValue) ? undefined : srcValue
      if (isArray(nonullObjValue) && isArray(nonullSrcValue)) {
        return nonullSrcValue.concat(nonullObjValue)
      }
      if (isObject(nonullObjValue) && isObject(nonullSrcValue)) {
        return mergeValue(nonullObjValue, nonullSrcValue)
      }
      if (isString(nonullSrcValue)) {
        return nonullSrcValue || nonullObjValue
      }
      return nonullSrcValue ?? nonullObjValue
    })

  if (isNil(value)) {
    return defaultValue
  }

  return mergeWith({} as T, value, defaultValue, handler)
}
