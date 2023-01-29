// 检测条件
export interface RUDataCondition {
  item: string
}

export type RUDataResult = number

export interface Point {
  position: string
  pixelValue: number
}

export interface RUDataInput {
  points: Point[]
  equation?: [number, number]
}

export type RUData = {
  condition?: RUDataCondition
  input?: RUDataInput
  result?: RUDataResult
}
