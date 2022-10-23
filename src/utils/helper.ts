import { isEmpty } from 'lodash-es'

export const hasEmpty = (array: any[]) => {
  return array.some(item => isEmpty(item))
}
