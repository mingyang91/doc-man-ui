import { trim } from 'lodash-es'

export const makeSimilarWords = (word: string) => {
  const words = trim(word).split(' ').map(trim)

  return `%(${words.join('|')})%`
}

export const makeSearchWord = (
  word = '',
  startsWith = false,
  endsWith = false
) => {
  return `${startsWith ? '' : '%'}${word}${endsWith ? '' : '%'}`
}
