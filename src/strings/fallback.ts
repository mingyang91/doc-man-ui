
const proxy = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get(target: any, prop: string): string {
		if (prop in target) {
			return target[prop]
		}
		console.log(prop)
		return prop
	}
}

export function fallback<T>(target: Partial<T>): Readonly<T> {
	return new Proxy(target, proxy) as T
} 