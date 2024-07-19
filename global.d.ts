declare module "node:sqlite" {
  type PVal = null | number | bigint | string | Uint8Array | ArrayBuffer
  type RunRes = {
    lastInsertRowid: number
    changes: number
  }

  export class StatementSync<T extends {}> {
    all<V = T>(namedParameters: Partial<T>): V[]
    all<V = T>(...anonymousParameters: PVal[]): V[]
    all<V = T>(namedParameters: Partial<T>, ...anonymousParameters: PVal[]): V[]
    all<V = T>(): V[]
    get<V = T>(namedParameters: Partial<T>): V
    get<V = T>(...anonymousParameters: PVal[]): V
    get<V = T>(namedParameters: Partial<T>, ...anonymousParameters: PVal[]): V
    get<V = T>(): V
    run<V = T>(namedParameters: Partial<T>): RunRes
    run<V = T>(...anonymousParameters: PVal[]): RunRes
    run<V = T>(namedParameters: Partial<T>, ...anonymousParameters: PVal[]): RunRes
    run<V = T>(): RunRes
    sourceSQL(): string
    expandedSQL(): string
    setAllowBareNamedParameters(enable: boolean): void
    setReadBigInts(enable: boolean): void
  }

  export class DatabaseSync {
    constructor(memory: ':memory:', options?: {
      open?: boolean
    })
    constructor(location: string, options?: {
      open?: boolean
    })
    close(): void
    exec(sql: string): void
    open(): void
    prepare<T extends {} = Record<string, any>>(sql: string): StatementSync<T>
  }
}


