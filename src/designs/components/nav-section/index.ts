// ----------------------------------------------------------------------

export { default as NavSectionVertical } from './vertical'
export { default as NavSectionHorizontal } from './horizontal'

export function isExternalLink(path: string) {
  return path.startsWith('http')
}
