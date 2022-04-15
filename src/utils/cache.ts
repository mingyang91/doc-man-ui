type CacheItem<T> = {
  data: T
  expires: number
}

type CacheStorage = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

type CacheConfig = {
  keyPrefix?: string
  /** Time to live, in milliseconds */
  defaultTTL?: number
  /** Storage to use */
  storage?: CacheStorage
}

type CacheItemOptions = {
  expires?: number
}

export class InMemoryCacheStorage implements CacheStorage {
  private cache: { [key: string]: string } = {}

  getItem(key: string): string | null {
    return this.cache[key] ?? null
  }

  setItem(key: string, value: string): void {
    this.cache[key] = value
  }

  removeItem(key: string): void {
    delete this.cache[key]
  }
}

export class LocalStorageCacheStorage implements CacheStorage {
  getItem(key: string): string | null {
    return localStorage.getItem(key) ?? null
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}

export class SessionStorageCacheStorage implements CacheStorage {
  getItem(key: string): string | null {
    return sessionStorage.getItem(key) ?? null
  }

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value)
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key)
  }
}

const defaultCacheConfig: Required<CacheConfig> = {
  keyPrefix: 'cache',
  defaultTTL: 1000 * 60 * 60 * 24 * 7, // 1 week
  storage: new InMemoryCacheStorage(),
}

export class Cache<T> {
  private config: Required<CacheConfig>

  constructor(config: CacheConfig) {
    this.config = { ...defaultCacheConfig, ...config }
  }

  private isExpired(item: CacheItem<T>): boolean {
    return item.expires < Date.now()
  }

  private prefix(key: string): string {
    return `${this.config.keyPrefix}-${key}`
  }

  private _removeItem(key: string): void {
    this.config.storage.removeItem(this.prefix(key))
  }

  private _getItem(key: string): CacheItem<T> | null {
    const ret = this.config.storage.getItem(this.prefix(key))

    if (!ret) return null

    let item: CacheItem<T> | null = null

    try {
      item = JSON.parse(ret) as CacheItem<T>
    } catch {
      return null
    }

    return item
  }

  private _setItem(key: string, item: CacheItem<T>) {
    this.config.storage.setItem(this.prefix(key), JSON.stringify(item))
  }

  public getItem(key: string) {
    const item = this._getItem(key)

    if (!item) return null

    if (this.isExpired(item)) {
      this._removeItem(key)
      return null
    }

    return item.data
  }

  public setItem(key: string, data: T, options?: CacheItemOptions): void {
    const expires =
      options && options.expires
        ? options.expires
        : this.config.defaultTTL + Date.now()

    this._setItem(key, {
      data,
      expires,
    })
  }

  public removeItem(key: string): void {
    this._removeItem(key)
  }
}
