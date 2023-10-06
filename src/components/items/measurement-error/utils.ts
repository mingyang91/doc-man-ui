import { MEDataItem } from "./type";

export function initialMEDataItem(): MEDataItem {
  return {
    input: {
      preset: "",
      measured: "",
    },
  }
}

export function initialMEData(): MEDataItem[] {
  return []
}