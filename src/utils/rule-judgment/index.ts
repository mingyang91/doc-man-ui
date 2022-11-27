/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isEqual,
  isString,
  isArray,
  intersection,
  toPairs,
  isPlainObject,
  isEmpty,
  isUndefined,
  isNull,
  lt,
  lte,
  gt,
  result,
  gte,
} from 'lodash-es'
import type { Big as BigType } from 'big.js'
import Big from 'big.js'

import { toValue, parseAssign, isOperator } from './utils'

export type Value = string | number | BigType | Date | bigint

export type BSONTypeAlias =
  | 'number'
  | 'double'
  | 'string'
  | 'object'
  | 'array'
  | 'binData'
  | 'undefined'
  | 'objectId'
  | 'bool'
  | 'date'
  | 'null'
  | 'regex'
  | 'dbPointer'
  | 'javascript'
  | 'symbol'
  | 'javascriptWithScope'
  | 'int'
  | 'timestamp'
  | 'long'
  | 'decimal'
  | 'minKey'
  | 'maxKey'

export type QuerySelector<T> = {
  //
  $lt?: T extends number | bigint | Date ? number | bigint | Date : never
  $lte?: T extends number | bigint | Date ? number | bigint | Date : never
  $gt?: T extends number | bigint | Date ? number | bigint | Date : never
  $gte?: T extends number | bigint | Date ? number | bigint | Date : never
  $eq?: T
  $ne?: T
  $regex?: T extends string ? RegExp | string : never
  $mod?: T extends number | bigint ? T[] : never
  $in?: T[]
  $nin?: T[]
  $_in?: T | T[]
  $_nin?: T | T[]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  $size?: T extends ReadonlyArray<infer U>
    ? number | QuerySelector<number>
    : never
  $exists?: boolean
  $type?: BSONTypeAlias
  $not?: T extends string
    ? QuerySelector<T> | RegExp | string
    : QuerySelector<T>
  $where?: (item: T) => boolean
  $and?: Array<QuerySelector<T>>
  $or?: Array<QuerySelector<T>>
  $nor?: Array<QuerySelector<T>>
}

export type FilterQuery<T> = {
  [P in keyof T]?: T[P] | QuerySelector<T[P]>
} & {
  $where?: (item: T) => boolean
  $and?: Array<FilterQuery<T>>
  $or?: Array<FilterQuery<T>>
  $nor?: Array<FilterQuery<T>>
}

const operatorsJoin = {
  $and: (...__result: boolean[]) => __result.every(item => item),
  $or: (...__result: boolean[]) => __result.some(item => item),
  $nor: (...__result: boolean[]) => !__result.some(item => item),
}

/**
 * 操作符
 */
const operators = {
  /**
   * 小于
   * @param a
   * @param b
   * @returns
   */
  $lt: (a: Value, b: Value) => {
    const valueA = toValue(a),
      valueB = toValue(b)
    if (valueA instanceof Big && valueB instanceof Big) {
      return valueA.lt(valueB)
    }
    return lt(a, b)
  },
  /**
   * 小于等于
   * @param a
   * @param b
   * @returns
   */
  $lte: (a: Value, b: Value) => {
    const valueA = toValue(a),
      valueB = toValue(b)
    if (valueA instanceof Big && valueB instanceof Big) {
      return valueA.lte(valueB)
    }
    return lte(a, b)
  },
  /**
   * 大于
   * @param a
   * @param b
   * @returns
   */
  $gt: (a: Value, b: Value) => {
    const valueA = toValue(a),
      valueB = toValue(b)
    if (valueA instanceof Big && valueB instanceof Big) {
      return valueA.gt(valueB)
    }
    return gt(b, a)
  },
  /**
   * 大于等于
   * @param a
   * @param b
   * @returns
   */
  $gte: (a: Value, b: Value) => {
    const valueA = toValue(a),
      valueB = toValue(b)
    if (valueA instanceof Big && valueB instanceof Big) {
      return valueA.gte(valueB)
    }
    return gte(a, b)
  },
  /**
   * 非
   * @param a
   * @param query
   * @returns
   */
  $not: (a: any, query: Partial<any>) => !operate(a, query),
  /**
   * 相等，通过 lodash.isEqual 判断
   * @param a
   * @param b
   * @returns
   */
  $eq: (a: any, b: any) => {
    const valueA = toValue(a),
      valueB = toValue(b)
    if (valueA instanceof Big && valueB instanceof Big) {
      return valueA.eq(valueB)
    }
    return isEqual(valueA, valueB)
  },
  /**
   * 正则匹配
   * @param a
   * @param b
   * @returns
   */
  $regexp: (a: string, b: string | RegExp) => {
    const regexp = isString(b) ? new RegExp(b) : b
    return regexp.test(a)
  },
  /**
   * 包含
   * @param a
   * @param b
   * @returns
   */
  $in: (a: any, b: any[]) => {
    if (isArray(a)) {
      return intersection(a, b).length > 0
    }
    return b.includes(a)
  },
  /**
   * 不包含
   * @param a
   * @param b
   * @returns
   */
  $nin: (a: any, b: any[]) => !operators.$in(a, b),
  /**
   * 反包含
   * @param a
   * @param b
   * @returns
   */
  $_in: (a: any[], b: any) => {
    if (isArray(b)) {
      return intersection(a, b).length > 0
    }
    return a.includes(b)
  },
  /**
   * 反不包含
   * @param a
   * @param b
   * @returns
   */
  $_nin: (a: any[], b: any) => !operators.$_in(a, b),
  /**
   * 是否存在
   * @param a
   * @param exists
   * @returns
   */
  $exists: (a: any, exists: boolean) => (isNull(a) || isUndefined(a)) != exists,
}

type JoinOperateKey = '$and' | '$or' | '$nor'

/**
 * 运算操作连接
 * @param data
 * @param query
 * @param mode
 */
function operateJoin(
  data: any,
  query: Array<Partial<Record<string, unknown>>>,
  mode: JoinOperateKey = '$and'
) {
  const __result: boolean[] = []
  for (const item of query) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ in item) {
      __result.push(operate(data, item))
    }
  }
  return operatorsJoin[mode](...__result)
}

/**
 * 运算操作
 * @param data
 * @param query
 */
export function operate(data: any, query: Partial<any>): boolean {
  const __result: boolean[] = []

  for (const [operator, value] of toPairs(query)) {
    if (['$and', '$or', '$nor'].includes(operator)) {
      __result.push(operateJoin(data, value, operator as JoinOperateKey))
    } else if (/^\$((?!\.).)*$/.test(operator)) {
      __result.push(operators[operator as keyof typeof operators](data, value))
    } else if (isPlainObject(value)) {
      if (/^\$((?!\.).)*$/.test(operator)) {
        __result.push(operate(data, value))
      } else {
        __result.push(operate(result(data, operator), value))
      }
    } else {
      __result.push(operators.$eq(result(data, operator), value))
    }
  }

  return operatorsJoin.$and(...__result)
}

function judgment(
  data: any,
  query: Partial<any>,
  options?: Partial<any>
): boolean {
  if (isEmpty(query)) return true
  query = parseAssign(query, options)
  const __result: boolean[] = []
  for (const key in query) {
    if (['$and', '$or', '$nor'].includes(key)) {
      __result.push(
        operateJoin(data, query[key], key as '$and' | '$or' | '$nor')
      )
    } else {
      __result.push(
        operate(
          data,
          isPlainObject(query[key]) && !isOperator(query[key])
            ? query[key]
            : query
        )
      )
    }
  }
  return operatorsJoin.$and(...__result)
}

function ruleJudgment<T = any>(
  query: T extends object ? FilterQuery<T> : QuerySelector<T>,
  options?: Partial<any>
): (data: any) => boolean {
  return function (data: any): boolean {
    return judgment(data, query, options)
  }
}

export default ruleJudgment
