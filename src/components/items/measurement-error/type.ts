export type MEDataItemInput = {
  preset: string
	measured: string
}

export type MEDataItemResult = {
  deviation: number
  percentage: number
}

export type MEDataItem = {
  input?: MEDataItemInput
  result?: MEDataItemResult
};

export type MEData = { items: MEDataItem[] }
