/* eslint-disable @typescript-eslint/no-explicit-any */
type ArrayItem<R> = R extends (infer T)[] ? T : never

// for uuid
type Alphabetic =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
type Numeric = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
type StringNumber<T extends number> = `${T}`
type Alphanumeric = Alphabetic | StringNumber<Numeric>
type Separator = '-'

type Template = [8, 4, 4, 4, 12]

type IsValid<T, Cache extends string[] = []> = T extends string
  ? T extends ''
    ? Cache
    : T extends `${infer Char}${infer Rest}`
    ? Char extends Alphanumeric
      ? IsValid<Rest, [...Cache, Char]>
      : never
    : never
  : never

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ''
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S]

type Every<T extends any[], Cache extends any[] = []> = T extends []
  ? Cache
  : T extends [infer Head, ...infer Rest]
  ? Every<Rest, [...Cache, IsValid<Head>['length']]>
  : never

type IsValidUUID<T extends string> = Every<Split<T, Separator>> extends Template
  ? true
  : false

// type UUIDV4 = string

// eslint-disable-next-line @typescript-eslint/ban-types
type FunctionArguments<T extends Function> = T extends (...args: infer R) => any
  ? R
  : never

declare type AnyFn<T = any> = (...args: T[]) => any

declare type VoidFn = () => void
