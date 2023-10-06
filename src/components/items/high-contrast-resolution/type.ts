export type HCRDataItemInput = {
  measured: string
  baseline: string
}

export type HCRDataItem = {
  input?: HCRDataItemInput
  result?: number
}

export type HCRData = { items: HCRDataItem[] }