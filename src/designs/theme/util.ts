import { entries, merge, isObject, isArray } from 'lodash-es'
import { paramCase } from 'param-case'
import { Theme } from '@mui/material'

const isStringOrNumber = (value: unknown): value is string | number => {
  return typeof value === 'string' || typeof value === 'number'
}

const makeCssVar = (prefix: string, unit = '', value: unknown) => {
  const cssVar = `--${paramCase(prefix)}`

  if (isStringOrNumber(value)) {
    return {
      [cssVar]: `${value}${unit}`,
    }
  }

  const css: Record<string | number, string | number | unknown> = {}

  if (isObject(value) || isArray(value)) {
    entries(value).forEach(([k, v]) => {
      const cssVarItem = `${cssVar}-${paramCase(k)}`
      if (isStringOrNumber(v)) {
        css[cssVarItem] = `${v}${unit}`
      }
      merge(css, makeCssVar(cssVarItem, unit, v))
    })
  }

  return css
}

export const createCSSVars = (theme: Theme, prefix = 'md') => {
  const css = {
    ...makeCssVar(
      `${prefix}-breakpoint`,
      theme.breakpoints.unit,
      theme.breakpoints.values
    ),
    ...makeCssVar(`${prefix}-shadow`, '', theme.shadows),
    ...makeCssVar(`${prefix}-custom-shadow`, '', theme.customShadows),
    ...makeCssVar(`${prefix}-palette`, '', theme.palette),
    ...makeCssVar(`${prefix}-shape`, '', theme.shape),
    ...makeCssVar(`${prefix}-transition`, '', theme.transitions),
    ...makeCssVar(`${prefix}-typography`, '', theme.typography),
    ...makeCssVar(`${prefix}-zIndex`, '', theme.zIndex),
  }

  const cssVarString = entries(css)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')

  return `
    :root {
      ${cssVarString}
    }
  `
}
