import Big, { BigSource } from 'big.js'

/**
 * 计算一组样本的平均值
 * @param values
 * @returns
 */
export const calcAverage = (values: (string | number)[]) => {
  return values.reduce((acc, cur) => acc.plus(cur), Big(0)).div(values.length)
}

/**
 * 计算一组样本估计标准偏差
 * 使用公式：sqrt( 1/(length - 1) * Σ(Math.pow(x^i - avg_x, 2), i = 1, len = n) )
 */
export const calcStandardDeviation = (
  values: (string | number)[],
  avg?: BigSource
) => {
  avg = avg || calcAverage(values) // 如果已经有平均值则避免重复计算
  const sum = values.reduce(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (acc, cur) => acc.plus(Big(cur).minus(avg!).pow(2)),
    Big(0)
  )
  return sum.div(values.length - 1).sqrt()
}
