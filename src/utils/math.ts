import Big from 'big.js'

export const calcAverage = (values: (string | number)[]) => {
  return values.reduce((acc, cur) => acc.plus(cur), Big(0)).div(values.length)
}
