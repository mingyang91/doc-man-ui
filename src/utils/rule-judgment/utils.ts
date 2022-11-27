/* eslint-disable @typescript-eslint/no-explicit-any */
import { isString, isDate, toPairs, isPlainObject, isNumber } from 'lodash-es'
import type { Big as BigType } from 'big.js'
import Big from 'big.js'

import { Value } from '.'

/**
 * 判断 DateString
 * @param value
 */
export function isDateString(value: string): boolean {
  const date = new Date(value)
  return String(date) === 'Invalid Date' ? false : true
}

/**
 * 转换数值
 * @param value
 */
export function toValue(value: Value): BigType | number {
  if ((isString(value) && !isNaN(Number(value))) || isNumber(value)) {
    return new Big(value as string | number)
  } else if (isString(value) && isDateString(value)) {
    return new Big(new Date(value).getTime())
  } else if (isDate(value)) {
    return new Big(value.getTime())
  }
  return NaN
}

function assign(key: string, value: any): [RegExp, any] {
  let search: RegExp
  const str = /^\$/.test(key) ? `\\${key}` : key
  if (isString(value)) {
    search = new RegExp(`${str}`, 'gi')
  } else {
    search = new RegExp(`\\"(${str})\\"`, 'gi')
  }
  return [search, value]
}

export function parseAssign(data: any, options?: Partial<any>): any {
  if (!isPlainObject(options)) return data
  let str = JSON.stringify(data)
  for (const item of toPairs(options)) {
    const [search, value] = assign(...item)
    if (/^\$/.test(item[0])) {
      str = str.replace(search, value)
    }
  }
  return JSON.parse(str)
}

export function isOperator(query: Partial<any>): boolean {
  for (const key of Object.keys(query)) {
    if (/^\$/.test(key)) {
      return true
    }
  }
  return false
}
