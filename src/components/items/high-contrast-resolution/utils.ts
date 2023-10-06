import { HCRDataItem } from "./type";

export function initialHCRDataItem(): HCRDataItem {
    return {
	input: {
	    measured: "",
	    baseline: "",
	},
    }
}

export function initialHCRData(): HCRDataItem[] {
    return []
}
