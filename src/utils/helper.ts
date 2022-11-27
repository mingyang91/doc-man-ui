import { isEmpty } from 'lodash-es'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasEmpty = (array: any[]) => {
  return array.some(item => isEmpty(item))
}
