
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model SBCTeam
 * 
 */
export type SBCTeam = {
  id: number
  university: string
  team_name: string
  bridge_name: string
  voucher_proof: string
  lecturer_id: number
  payment_proof_id: number
  truth_statement: boolean
  stc_statement: boolean
  finalized_at: Date
}

/**
 * Model SBCMember
 * 
 */
export type SBCMember = {
  id: number
  name: string
  student_id: string
  study_major: string
  semester: number
  email: string
  whatsapp: string
  line_id: string
  twibbon_proof: string
  student_card: string
  student_proof: string
  photo: string
  is_leader: boolean
  team_id: number
}

/**
 * Model SBCLecturer
 * 
 */
export type SBCLecturer = {
  id: number
  name: string
  profession_id: string
  email: string
  whatsapp: string
  photo: string
}

/**
 * Model Payment
 * 
 */
export type Payment = {
  id: number
  proof: string
}

/**
 * Model FCECMember
 * 
 */
export type FCECMember = {
  id: number
  name: string
  email: string
  whatsapp: string
  line_id: string
  student_card: string
  student_proof: string
  twibbon_proof: string
  photo: string
  is_leader: boolean
  team_id: number
}

/**
 * Model FCECTeam
 * 
 */
export type FCECTeam = {
  id: number
  school: string
  abstract_title: string
  team_name: string
  originality_letter: string
  abstract: string
  finalized_at: Date
}

/**
 * Model CICMember
 * 
 */
export type CICMember = {
  id: number
  name: string
  email: string
  whatsapp: string
  line_id: string
  student_card: string
  student_proof: string
  study_major: string
  generation: string
  twibbon_proof: string
  is_leader: boolean
  team_id: number
}

/**
 * Model CICTeam
 * 
 */
export type CICTeam = {
  id: number
  team_name: string
  university: string
  payment_proof_id: number
  truth_statement: boolean
  stc_statement: boolean
  finalized_at: Date
}

/**
 * Model Announcement
 * 
 */
export type Announcement = {
  id: number
  event: string
  message: string
  published_at: Date
}

/**
 * Model Service
 * 
 */
export type Service = {
  id: number
  service: string
  active: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SBCTeams
 * const sBCTeams = await prisma.sBCTeam.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SBCTeams
   * const sBCTeams = await prisma.sBCTeam.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.sBCTeam`: Exposes CRUD operations for the **SBCTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SBCTeams
    * const sBCTeams = await prisma.sBCTeam.findMany()
    * ```
    */
  get sBCTeam(): Prisma.SBCTeamDelegate<GlobalReject>;

  /**
   * `prisma.sBCMember`: Exposes CRUD operations for the **SBCMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SBCMembers
    * const sBCMembers = await prisma.sBCMember.findMany()
    * ```
    */
  get sBCMember(): Prisma.SBCMemberDelegate<GlobalReject>;

  /**
   * `prisma.sBCLecturer`: Exposes CRUD operations for the **SBCLecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SBCLecturers
    * const sBCLecturers = await prisma.sBCLecturer.findMany()
    * ```
    */
  get sBCLecturer(): Prisma.SBCLecturerDelegate<GlobalReject>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<GlobalReject>;

  /**
   * `prisma.fCECMember`: Exposes CRUD operations for the **FCECMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FCECMembers
    * const fCECMembers = await prisma.fCECMember.findMany()
    * ```
    */
  get fCECMember(): Prisma.FCECMemberDelegate<GlobalReject>;

  /**
   * `prisma.fCECTeam`: Exposes CRUD operations for the **FCECTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FCECTeams
    * const fCECTeams = await prisma.fCECTeam.findMany()
    * ```
    */
  get fCECTeam(): Prisma.FCECTeamDelegate<GlobalReject>;

  /**
   * `prisma.cICMember`: Exposes CRUD operations for the **CICMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CICMembers
    * const cICMembers = await prisma.cICMember.findMany()
    * ```
    */
  get cICMember(): Prisma.CICMemberDelegate<GlobalReject>;

  /**
   * `prisma.cICTeam`: Exposes CRUD operations for the **CICTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CICTeams
    * const cICTeams = await prisma.cICTeam.findMany()
    * ```
    */
  get cICTeam(): Prisma.CICTeamDelegate<GlobalReject>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<GlobalReject>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SBCTeam: 'SBCTeam',
    SBCMember: 'SBCMember',
    SBCLecturer: 'SBCLecturer',
    Payment: 'Payment',
    FCECMember: 'FCECMember',
    FCECTeam: 'FCECTeam',
    CICMember: 'CICMember',
    CICTeam: 'CICTeam',
    Announcement: 'Announcement',
    Service: 'Service'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SBCTeamCountOutputType
   */


  export type SBCTeamCountOutputType = {
    members: number
  }

  export type SBCTeamCountOutputTypeSelect = {
    members?: boolean
  }

  export type SBCTeamCountOutputTypeGetPayload<S extends boolean | null | undefined | SBCTeamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SBCTeamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SBCTeamCountOutputTypeArgs)
    ? SBCTeamCountOutputType 
    : S extends { select: any } & (SBCTeamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SBCTeamCountOutputType ? SBCTeamCountOutputType[P] : never
  } 
      : SBCTeamCountOutputType




  // Custom InputTypes

  /**
   * SBCTeamCountOutputType without action
   */
  export type SBCTeamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SBCTeamCountOutputType
     */
    select?: SBCTeamCountOutputTypeSelect | null
  }



  /**
   * Count Type FCECTeamCountOutputType
   */


  export type FCECTeamCountOutputType = {
    members: number
  }

  export type FCECTeamCountOutputTypeSelect = {
    members?: boolean
  }

  export type FCECTeamCountOutputTypeGetPayload<S extends boolean | null | undefined | FCECTeamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FCECTeamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FCECTeamCountOutputTypeArgs)
    ? FCECTeamCountOutputType 
    : S extends { select: any } & (FCECTeamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FCECTeamCountOutputType ? FCECTeamCountOutputType[P] : never
  } 
      : FCECTeamCountOutputType




  // Custom InputTypes

  /**
   * FCECTeamCountOutputType without action
   */
  export type FCECTeamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FCECTeamCountOutputType
     */
    select?: FCECTeamCountOutputTypeSelect | null
  }



  /**
   * Count Type CICTeamCountOutputType
   */


  export type CICTeamCountOutputType = {
    members: number
  }

  export type CICTeamCountOutputTypeSelect = {
    members?: boolean
  }

  export type CICTeamCountOutputTypeGetPayload<S extends boolean | null | undefined | CICTeamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CICTeamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CICTeamCountOutputTypeArgs)
    ? CICTeamCountOutputType 
    : S extends { select: any } & (CICTeamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CICTeamCountOutputType ? CICTeamCountOutputType[P] : never
  } 
      : CICTeamCountOutputType




  // Custom InputTypes

  /**
   * CICTeamCountOutputType without action
   */
  export type CICTeamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CICTeamCountOutputType
     */
    select?: CICTeamCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model SBCTeam
   */


  export type AggregateSBCTeam = {
    _count: SBCTeamCountAggregateOutputType | null
    _avg: SBCTeamAvgAggregateOutputType | null
    _sum: SBCTeamSumAggregateOutputType | null
    _min: SBCTeamMinAggregateOutputType | null
    _max: SBCTeamMaxAggregateOutputType | null
  }

  export type SBCTeamAvgAggregateOutputType = {
    id: number | null
    lecturer_id: number | null
    payment_proof_id: number | null
  }

  export type SBCTeamSumAggregateOutputType = {
    id: number | null
    lecturer_id: number | null
    payment_proof_id: number | null
  }

  export type SBCTeamMinAggregateOutputType = {
    id: number | null
    university: string | null
    team_name: string | null
    bridge_name: string | null
    voucher_proof: string | null
    lecturer_id: number | null
    payment_proof_id: number | null
    truth_statement: boolean | null
    stc_statement: boolean | null
    finalized_at: Date | null
  }

  export type SBCTeamMaxAggregateOutputType = {
    id: number | null
    university: string | null
    team_name: string | null
    bridge_name: string | null
    voucher_proof: string | null
    lecturer_id: number | null
    payment_proof_id: number | null
    truth_statement: boolean | null
    stc_statement: boolean | null
    finalized_at: Date | null
  }

  export type SBCTeamCountAggregateOutputType = {
    id: number
    university: number
    team_name: number
    bridge_name: number
    voucher_proof: number
    lecturer_id: number
    payment_proof_id: number
    truth_statement: number
    stc_statement: number
    finalized_at: number
    _all: number
  }


  export type SBCTeamAvgAggregateInputType = {
    id?: true
    lecturer_id?: true
    payment_proof_id?: true
  }

  export type SBCTeamSumAggregateInputType = {
    id?: true
    lecturer_id?: true
    payment_proof_id?: true
  }

  export type SBCTeamMinAggregateInputType = {
    id?: true
    university?: true
    team_name?: true
    bridge_name?: true
    voucher_proof?: true
    lecturer_id?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
  }

  export type SBCTeamMaxAggregateInputType = {
    id?: true
    university?: true
    team_name?: true
    bridge_name?: true
    voucher_proof?: true
    lecturer_id?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
  }

  export type SBCTeamCountAggregateInputType = {
    id?: true
    university?: true
    team_name?: true
    bridge_name?: true
    voucher_proof?: true
    lecturer_id?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
    _all?: true
  }

  export type SBCTeamAggregateArgs = {
    /**
     * Filter which SBCTeam to aggregate.
     */
    where?: SBCTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCTeams to fetch.
     */
    orderBy?: Enumerable<SBCTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SBCTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SBCTeams
    **/
    _count?: true | SBCTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SBCTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SBCTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SBCTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SBCTeamMaxAggregateInputType
  }

  export type GetSBCTeamAggregateType<T extends SBCTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateSBCTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSBCTeam[P]>
      : GetScalarType<T[P], AggregateSBCTeam[P]>
  }




  export type SBCTeamGroupByArgs = {
    where?: SBCTeamWhereInput
    orderBy?: Enumerable<SBCTeamOrderByWithAggregationInput>
    by: SBCTeamScalarFieldEnum[]
    having?: SBCTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SBCTeamCountAggregateInputType | true
    _avg?: SBCTeamAvgAggregateInputType
    _sum?: SBCTeamSumAggregateInputType
    _min?: SBCTeamMinAggregateInputType
    _max?: SBCTeamMaxAggregateInputType
  }


  export type SBCTeamGroupByOutputType = {
    id: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    lecturer_id: number
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date
    _count: SBCTeamCountAggregateOutputType | null
    _avg: SBCTeamAvgAggregateOutputType | null
    _sum: SBCTeamSumAggregateOutputType | null
    _min: SBCTeamMinAggregateOutputType | null
    _max: SBCTeamMaxAggregateOutputType | null
  }

  type GetSBCTeamGroupByPayload<T extends SBCTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SBCTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SBCTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SBCTeamGroupByOutputType[P]>
            : GetScalarType<T[P], SBCTeamGroupByOutputType[P]>
        }
      >
    >


  export type SBCTeamSelect = {
    id?: boolean
    university?: boolean
    team_name?: boolean
    bridge_name?: boolean
    voucher_proof?: boolean
    members?: boolean | SBCTeam$membersArgs
    lecturer?: boolean | SBCLecturerArgs
    lecturer_id?: boolean
    payment_proof?: boolean | PaymentArgs
    payment_proof_id?: boolean
    truth_statement?: boolean
    stc_statement?: boolean
    finalized_at?: boolean
    _count?: boolean | SBCTeamCountOutputTypeArgs
  }


  export type SBCTeamInclude = {
    members?: boolean | SBCTeam$membersArgs
    lecturer?: boolean | SBCLecturerArgs
    payment_proof?: boolean | PaymentArgs
    _count?: boolean | SBCTeamCountOutputTypeArgs
  }

  export type SBCTeamGetPayload<S extends boolean | null | undefined | SBCTeamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SBCTeam :
    S extends undefined ? never :
    S extends { include: any } & (SBCTeamArgs | SBCTeamFindManyArgs)
    ? SBCTeam  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'members' ? Array < SBCMemberGetPayload<S['include'][P]>>  :
        P extends 'lecturer' ? SBCLecturerGetPayload<S['include'][P]> :
        P extends 'payment_proof' ? PaymentGetPayload<S['include'][P]> :
        P extends '_count' ? SBCTeamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SBCTeamArgs | SBCTeamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'members' ? Array < SBCMemberGetPayload<S['select'][P]>>  :
        P extends 'lecturer' ? SBCLecturerGetPayload<S['select'][P]> :
        P extends 'payment_proof' ? PaymentGetPayload<S['select'][P]> :
        P extends '_count' ? SBCTeamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SBCTeam ? SBCTeam[P] : never
  } 
      : SBCTeam


  type SBCTeamCountArgs = 
    Omit<SBCTeamFindManyArgs, 'select' | 'include'> & {
      select?: SBCTeamCountAggregateInputType | true
    }

  export interface SBCTeamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SBCTeam that matches the filter.
     * @param {SBCTeamFindUniqueArgs} args - Arguments to find a SBCTeam
     * @example
     * // Get one SBCTeam
     * const sBCTeam = await prisma.sBCTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SBCTeamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SBCTeamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SBCTeam'> extends True ? Prisma__SBCTeamClient<SBCTeamGetPayload<T>> : Prisma__SBCTeamClient<SBCTeamGetPayload<T> | null, null>

    /**
     * Find one SBCTeam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SBCTeamFindUniqueOrThrowArgs} args - Arguments to find a SBCTeam
     * @example
     * // Get one SBCTeam
     * const sBCTeam = await prisma.sBCTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SBCTeamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SBCTeamFindUniqueOrThrowArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Find the first SBCTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamFindFirstArgs} args - Arguments to find a SBCTeam
     * @example
     * // Get one SBCTeam
     * const sBCTeam = await prisma.sBCTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SBCTeamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SBCTeamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SBCTeam'> extends True ? Prisma__SBCTeamClient<SBCTeamGetPayload<T>> : Prisma__SBCTeamClient<SBCTeamGetPayload<T> | null, null>

    /**
     * Find the first SBCTeam that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamFindFirstOrThrowArgs} args - Arguments to find a SBCTeam
     * @example
     * // Get one SBCTeam
     * const sBCTeam = await prisma.sBCTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SBCTeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SBCTeamFindFirstOrThrowArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Find zero or more SBCTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SBCTeams
     * const sBCTeams = await prisma.sBCTeam.findMany()
     * 
     * // Get first 10 SBCTeams
     * const sBCTeams = await prisma.sBCTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sBCTeamWithIdOnly = await prisma.sBCTeam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SBCTeamFindManyArgs>(
      args?: SelectSubset<T, SBCTeamFindManyArgs>
    ): Prisma.PrismaPromise<Array<SBCTeamGetPayload<T>>>

    /**
     * Create a SBCTeam.
     * @param {SBCTeamCreateArgs} args - Arguments to create a SBCTeam.
     * @example
     * // Create one SBCTeam
     * const SBCTeam = await prisma.sBCTeam.create({
     *   data: {
     *     // ... data to create a SBCTeam
     *   }
     * })
     * 
    **/
    create<T extends SBCTeamCreateArgs>(
      args: SelectSubset<T, SBCTeamCreateArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Create many SBCTeams.
     *     @param {SBCTeamCreateManyArgs} args - Arguments to create many SBCTeams.
     *     @example
     *     // Create many SBCTeams
     *     const sBCTeam = await prisma.sBCTeam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SBCTeamCreateManyArgs>(
      args?: SelectSubset<T, SBCTeamCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SBCTeam.
     * @param {SBCTeamDeleteArgs} args - Arguments to delete one SBCTeam.
     * @example
     * // Delete one SBCTeam
     * const SBCTeam = await prisma.sBCTeam.delete({
     *   where: {
     *     // ... filter to delete one SBCTeam
     *   }
     * })
     * 
    **/
    delete<T extends SBCTeamDeleteArgs>(
      args: SelectSubset<T, SBCTeamDeleteArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Update one SBCTeam.
     * @param {SBCTeamUpdateArgs} args - Arguments to update one SBCTeam.
     * @example
     * // Update one SBCTeam
     * const sBCTeam = await prisma.sBCTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SBCTeamUpdateArgs>(
      args: SelectSubset<T, SBCTeamUpdateArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Delete zero or more SBCTeams.
     * @param {SBCTeamDeleteManyArgs} args - Arguments to filter SBCTeams to delete.
     * @example
     * // Delete a few SBCTeams
     * const { count } = await prisma.sBCTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SBCTeamDeleteManyArgs>(
      args?: SelectSubset<T, SBCTeamDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SBCTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SBCTeams
     * const sBCTeam = await prisma.sBCTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SBCTeamUpdateManyArgs>(
      args: SelectSubset<T, SBCTeamUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SBCTeam.
     * @param {SBCTeamUpsertArgs} args - Arguments to update or create a SBCTeam.
     * @example
     * // Update or create a SBCTeam
     * const sBCTeam = await prisma.sBCTeam.upsert({
     *   create: {
     *     // ... data to create a SBCTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SBCTeam we want to update
     *   }
     * })
    **/
    upsert<T extends SBCTeamUpsertArgs>(
      args: SelectSubset<T, SBCTeamUpsertArgs>
    ): Prisma__SBCTeamClient<SBCTeamGetPayload<T>>

    /**
     * Count the number of SBCTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamCountArgs} args - Arguments to filter SBCTeams to count.
     * @example
     * // Count the number of SBCTeams
     * const count = await prisma.sBCTeam.count({
     *   where: {
     *     // ... the filter for the SBCTeams we want to count
     *   }
     * })
    **/
    count<T extends SBCTeamCountArgs>(
      args?: Subset<T, SBCTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SBCTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SBCTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SBCTeamAggregateArgs>(args: Subset<T, SBCTeamAggregateArgs>): Prisma.PrismaPromise<GetSBCTeamAggregateType<T>>

    /**
     * Group by SBCTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SBCTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SBCTeamGroupByArgs['orderBy'] }
        : { orderBy?: SBCTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SBCTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSBCTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SBCTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SBCTeamClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    members<T extends SBCTeam$membersArgs= {}>(args?: Subset<T, SBCTeam$membersArgs>): Prisma.PrismaPromise<Array<SBCMemberGetPayload<T>>| Null>;

    lecturer<T extends SBCLecturerArgs= {}>(args?: Subset<T, SBCLecturerArgs>): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T> | Null>;

    payment_proof<T extends PaymentArgs= {}>(args?: Subset<T, PaymentArgs>): Prisma__PaymentClient<PaymentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SBCTeam base type for findUnique actions
   */
  export type SBCTeamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter, which SBCTeam to fetch.
     */
    where: SBCTeamWhereUniqueInput
  }

  /**
   * SBCTeam findUnique
   */
  export interface SBCTeamFindUniqueArgs extends SBCTeamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCTeam findUniqueOrThrow
   */
  export type SBCTeamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter, which SBCTeam to fetch.
     */
    where: SBCTeamWhereUniqueInput
  }


  /**
   * SBCTeam base type for findFirst actions
   */
  export type SBCTeamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter, which SBCTeam to fetch.
     */
    where?: SBCTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCTeams to fetch.
     */
    orderBy?: Enumerable<SBCTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCTeams.
     */
    cursor?: SBCTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCTeams.
     */
    distinct?: Enumerable<SBCTeamScalarFieldEnum>
  }

  /**
   * SBCTeam findFirst
   */
  export interface SBCTeamFindFirstArgs extends SBCTeamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCTeam findFirstOrThrow
   */
  export type SBCTeamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter, which SBCTeam to fetch.
     */
    where?: SBCTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCTeams to fetch.
     */
    orderBy?: Enumerable<SBCTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCTeams.
     */
    cursor?: SBCTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCTeams.
     */
    distinct?: Enumerable<SBCTeamScalarFieldEnum>
  }


  /**
   * SBCTeam findMany
   */
  export type SBCTeamFindManyArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter, which SBCTeams to fetch.
     */
    where?: SBCTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCTeams to fetch.
     */
    orderBy?: Enumerable<SBCTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SBCTeams.
     */
    cursor?: SBCTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCTeams.
     */
    skip?: number
    distinct?: Enumerable<SBCTeamScalarFieldEnum>
  }


  /**
   * SBCTeam create
   */
  export type SBCTeamCreateArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * The data needed to create a SBCTeam.
     */
    data: XOR<SBCTeamCreateInput, SBCTeamUncheckedCreateInput>
  }


  /**
   * SBCTeam createMany
   */
  export type SBCTeamCreateManyArgs = {
    /**
     * The data used to create many SBCTeams.
     */
    data: Enumerable<SBCTeamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SBCTeam update
   */
  export type SBCTeamUpdateArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * The data needed to update a SBCTeam.
     */
    data: XOR<SBCTeamUpdateInput, SBCTeamUncheckedUpdateInput>
    /**
     * Choose, which SBCTeam to update.
     */
    where: SBCTeamWhereUniqueInput
  }


  /**
   * SBCTeam updateMany
   */
  export type SBCTeamUpdateManyArgs = {
    /**
     * The data used to update SBCTeams.
     */
    data: XOR<SBCTeamUpdateManyMutationInput, SBCTeamUncheckedUpdateManyInput>
    /**
     * Filter which SBCTeams to update
     */
    where?: SBCTeamWhereInput
  }


  /**
   * SBCTeam upsert
   */
  export type SBCTeamUpsertArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * The filter to search for the SBCTeam to update in case it exists.
     */
    where: SBCTeamWhereUniqueInput
    /**
     * In case the SBCTeam found by the `where` argument doesn't exist, create a new SBCTeam with this data.
     */
    create: XOR<SBCTeamCreateInput, SBCTeamUncheckedCreateInput>
    /**
     * In case the SBCTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SBCTeamUpdateInput, SBCTeamUncheckedUpdateInput>
  }


  /**
   * SBCTeam delete
   */
  export type SBCTeamDeleteArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
    /**
     * Filter which SBCTeam to delete.
     */
    where: SBCTeamWhereUniqueInput
  }


  /**
   * SBCTeam deleteMany
   */
  export type SBCTeamDeleteManyArgs = {
    /**
     * Filter which SBCTeams to delete
     */
    where?: SBCTeamWhereInput
  }


  /**
   * SBCTeam.members
   */
  export type SBCTeam$membersArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    where?: SBCMemberWhereInput
    orderBy?: Enumerable<SBCMemberOrderByWithRelationInput>
    cursor?: SBCMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SBCMemberScalarFieldEnum>
  }


  /**
   * SBCTeam without action
   */
  export type SBCTeamArgs = {
    /**
     * Select specific fields to fetch from the SBCTeam
     */
    select?: SBCTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCTeamInclude | null
  }



  /**
   * Model SBCMember
   */


  export type AggregateSBCMember = {
    _count: SBCMemberCountAggregateOutputType | null
    _avg: SBCMemberAvgAggregateOutputType | null
    _sum: SBCMemberSumAggregateOutputType | null
    _min: SBCMemberMinAggregateOutputType | null
    _max: SBCMemberMaxAggregateOutputType | null
  }

  export type SBCMemberAvgAggregateOutputType = {
    id: number | null
    semester: number | null
    team_id: number | null
  }

  export type SBCMemberSumAggregateOutputType = {
    id: number | null
    semester: number | null
    team_id: number | null
  }

  export type SBCMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    student_id: string | null
    study_major: string | null
    semester: number | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    twibbon_proof: string | null
    student_card: string | null
    student_proof: string | null
    photo: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type SBCMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    student_id: string | null
    study_major: string | null
    semester: number | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    twibbon_proof: string | null
    student_card: string | null
    student_proof: string | null
    photo: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type SBCMemberCountAggregateOutputType = {
    id: number
    name: number
    student_id: number
    study_major: number
    semester: number
    email: number
    whatsapp: number
    line_id: number
    twibbon_proof: number
    student_card: number
    student_proof: number
    photo: number
    is_leader: number
    team_id: number
    _all: number
  }


  export type SBCMemberAvgAggregateInputType = {
    id?: true
    semester?: true
    team_id?: true
  }

  export type SBCMemberSumAggregateInputType = {
    id?: true
    semester?: true
    team_id?: true
  }

  export type SBCMemberMinAggregateInputType = {
    id?: true
    name?: true
    student_id?: true
    study_major?: true
    semester?: true
    email?: true
    whatsapp?: true
    line_id?: true
    twibbon_proof?: true
    student_card?: true
    student_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
  }

  export type SBCMemberMaxAggregateInputType = {
    id?: true
    name?: true
    student_id?: true
    study_major?: true
    semester?: true
    email?: true
    whatsapp?: true
    line_id?: true
    twibbon_proof?: true
    student_card?: true
    student_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
  }

  export type SBCMemberCountAggregateInputType = {
    id?: true
    name?: true
    student_id?: true
    study_major?: true
    semester?: true
    email?: true
    whatsapp?: true
    line_id?: true
    twibbon_proof?: true
    student_card?: true
    student_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
    _all?: true
  }

  export type SBCMemberAggregateArgs = {
    /**
     * Filter which SBCMember to aggregate.
     */
    where?: SBCMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCMembers to fetch.
     */
    orderBy?: Enumerable<SBCMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SBCMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SBCMembers
    **/
    _count?: true | SBCMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SBCMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SBCMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SBCMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SBCMemberMaxAggregateInputType
  }

  export type GetSBCMemberAggregateType<T extends SBCMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateSBCMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSBCMember[P]>
      : GetScalarType<T[P], AggregateSBCMember[P]>
  }




  export type SBCMemberGroupByArgs = {
    where?: SBCMemberWhereInput
    orderBy?: Enumerable<SBCMemberOrderByWithAggregationInput>
    by: SBCMemberScalarFieldEnum[]
    having?: SBCMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SBCMemberCountAggregateInputType | true
    _avg?: SBCMemberAvgAggregateInputType
    _sum?: SBCMemberSumAggregateInputType
    _min?: SBCMemberMinAggregateInputType
    _max?: SBCMemberMaxAggregateInputType
  }


  export type SBCMemberGroupByOutputType = {
    id: number
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
    team_id: number
    _count: SBCMemberCountAggregateOutputType | null
    _avg: SBCMemberAvgAggregateOutputType | null
    _sum: SBCMemberSumAggregateOutputType | null
    _min: SBCMemberMinAggregateOutputType | null
    _max: SBCMemberMaxAggregateOutputType | null
  }

  type GetSBCMemberGroupByPayload<T extends SBCMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SBCMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SBCMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SBCMemberGroupByOutputType[P]>
            : GetScalarType<T[P], SBCMemberGroupByOutputType[P]>
        }
      >
    >


  export type SBCMemberSelect = {
    id?: boolean
    name?: boolean
    student_id?: boolean
    study_major?: boolean
    semester?: boolean
    email?: boolean
    whatsapp?: boolean
    line_id?: boolean
    twibbon_proof?: boolean
    student_card?: boolean
    student_proof?: boolean
    photo?: boolean
    is_leader?: boolean
    team?: boolean | SBCTeamArgs
    team_id?: boolean
  }


  export type SBCMemberInclude = {
    team?: boolean | SBCTeamArgs
  }

  export type SBCMemberGetPayload<S extends boolean | null | undefined | SBCMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SBCMember :
    S extends undefined ? never :
    S extends { include: any } & (SBCMemberArgs | SBCMemberFindManyArgs)
    ? SBCMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? SBCTeamGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SBCMemberArgs | SBCMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? SBCTeamGetPayload<S['select'][P]> :  P extends keyof SBCMember ? SBCMember[P] : never
  } 
      : SBCMember


  type SBCMemberCountArgs = 
    Omit<SBCMemberFindManyArgs, 'select' | 'include'> & {
      select?: SBCMemberCountAggregateInputType | true
    }

  export interface SBCMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SBCMember that matches the filter.
     * @param {SBCMemberFindUniqueArgs} args - Arguments to find a SBCMember
     * @example
     * // Get one SBCMember
     * const sBCMember = await prisma.sBCMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SBCMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SBCMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SBCMember'> extends True ? Prisma__SBCMemberClient<SBCMemberGetPayload<T>> : Prisma__SBCMemberClient<SBCMemberGetPayload<T> | null, null>

    /**
     * Find one SBCMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SBCMemberFindUniqueOrThrowArgs} args - Arguments to find a SBCMember
     * @example
     * // Get one SBCMember
     * const sBCMember = await prisma.sBCMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SBCMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SBCMemberFindUniqueOrThrowArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Find the first SBCMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberFindFirstArgs} args - Arguments to find a SBCMember
     * @example
     * // Get one SBCMember
     * const sBCMember = await prisma.sBCMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SBCMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SBCMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SBCMember'> extends True ? Prisma__SBCMemberClient<SBCMemberGetPayload<T>> : Prisma__SBCMemberClient<SBCMemberGetPayload<T> | null, null>

    /**
     * Find the first SBCMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberFindFirstOrThrowArgs} args - Arguments to find a SBCMember
     * @example
     * // Get one SBCMember
     * const sBCMember = await prisma.sBCMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SBCMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SBCMemberFindFirstOrThrowArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Find zero or more SBCMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SBCMembers
     * const sBCMembers = await prisma.sBCMember.findMany()
     * 
     * // Get first 10 SBCMembers
     * const sBCMembers = await prisma.sBCMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sBCMemberWithIdOnly = await prisma.sBCMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SBCMemberFindManyArgs>(
      args?: SelectSubset<T, SBCMemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<SBCMemberGetPayload<T>>>

    /**
     * Create a SBCMember.
     * @param {SBCMemberCreateArgs} args - Arguments to create a SBCMember.
     * @example
     * // Create one SBCMember
     * const SBCMember = await prisma.sBCMember.create({
     *   data: {
     *     // ... data to create a SBCMember
     *   }
     * })
     * 
    **/
    create<T extends SBCMemberCreateArgs>(
      args: SelectSubset<T, SBCMemberCreateArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Create many SBCMembers.
     *     @param {SBCMemberCreateManyArgs} args - Arguments to create many SBCMembers.
     *     @example
     *     // Create many SBCMembers
     *     const sBCMember = await prisma.sBCMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SBCMemberCreateManyArgs>(
      args?: SelectSubset<T, SBCMemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SBCMember.
     * @param {SBCMemberDeleteArgs} args - Arguments to delete one SBCMember.
     * @example
     * // Delete one SBCMember
     * const SBCMember = await prisma.sBCMember.delete({
     *   where: {
     *     // ... filter to delete one SBCMember
     *   }
     * })
     * 
    **/
    delete<T extends SBCMemberDeleteArgs>(
      args: SelectSubset<T, SBCMemberDeleteArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Update one SBCMember.
     * @param {SBCMemberUpdateArgs} args - Arguments to update one SBCMember.
     * @example
     * // Update one SBCMember
     * const sBCMember = await prisma.sBCMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SBCMemberUpdateArgs>(
      args: SelectSubset<T, SBCMemberUpdateArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Delete zero or more SBCMembers.
     * @param {SBCMemberDeleteManyArgs} args - Arguments to filter SBCMembers to delete.
     * @example
     * // Delete a few SBCMembers
     * const { count } = await prisma.sBCMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SBCMemberDeleteManyArgs>(
      args?: SelectSubset<T, SBCMemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SBCMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SBCMembers
     * const sBCMember = await prisma.sBCMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SBCMemberUpdateManyArgs>(
      args: SelectSubset<T, SBCMemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SBCMember.
     * @param {SBCMemberUpsertArgs} args - Arguments to update or create a SBCMember.
     * @example
     * // Update or create a SBCMember
     * const sBCMember = await prisma.sBCMember.upsert({
     *   create: {
     *     // ... data to create a SBCMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SBCMember we want to update
     *   }
     * })
    **/
    upsert<T extends SBCMemberUpsertArgs>(
      args: SelectSubset<T, SBCMemberUpsertArgs>
    ): Prisma__SBCMemberClient<SBCMemberGetPayload<T>>

    /**
     * Count the number of SBCMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberCountArgs} args - Arguments to filter SBCMembers to count.
     * @example
     * // Count the number of SBCMembers
     * const count = await prisma.sBCMember.count({
     *   where: {
     *     // ... the filter for the SBCMembers we want to count
     *   }
     * })
    **/
    count<T extends SBCMemberCountArgs>(
      args?: Subset<T, SBCMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SBCMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SBCMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SBCMemberAggregateArgs>(args: Subset<T, SBCMemberAggregateArgs>): Prisma.PrismaPromise<GetSBCMemberAggregateType<T>>

    /**
     * Group by SBCMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SBCMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SBCMemberGroupByArgs['orderBy'] }
        : { orderBy?: SBCMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SBCMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSBCMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SBCMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SBCMemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    team<T extends SBCTeamArgs= {}>(args?: Subset<T, SBCTeamArgs>): Prisma__SBCTeamClient<SBCTeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SBCMember base type for findUnique actions
   */
  export type SBCMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter, which SBCMember to fetch.
     */
    where: SBCMemberWhereUniqueInput
  }

  /**
   * SBCMember findUnique
   */
  export interface SBCMemberFindUniqueArgs extends SBCMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCMember findUniqueOrThrow
   */
  export type SBCMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter, which SBCMember to fetch.
     */
    where: SBCMemberWhereUniqueInput
  }


  /**
   * SBCMember base type for findFirst actions
   */
  export type SBCMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter, which SBCMember to fetch.
     */
    where?: SBCMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCMembers to fetch.
     */
    orderBy?: Enumerable<SBCMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCMembers.
     */
    cursor?: SBCMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCMembers.
     */
    distinct?: Enumerable<SBCMemberScalarFieldEnum>
  }

  /**
   * SBCMember findFirst
   */
  export interface SBCMemberFindFirstArgs extends SBCMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCMember findFirstOrThrow
   */
  export type SBCMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter, which SBCMember to fetch.
     */
    where?: SBCMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCMembers to fetch.
     */
    orderBy?: Enumerable<SBCMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCMembers.
     */
    cursor?: SBCMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCMembers.
     */
    distinct?: Enumerable<SBCMemberScalarFieldEnum>
  }


  /**
   * SBCMember findMany
   */
  export type SBCMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter, which SBCMembers to fetch.
     */
    where?: SBCMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCMembers to fetch.
     */
    orderBy?: Enumerable<SBCMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SBCMembers.
     */
    cursor?: SBCMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCMembers.
     */
    skip?: number
    distinct?: Enumerable<SBCMemberScalarFieldEnum>
  }


  /**
   * SBCMember create
   */
  export type SBCMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * The data needed to create a SBCMember.
     */
    data: XOR<SBCMemberCreateInput, SBCMemberUncheckedCreateInput>
  }


  /**
   * SBCMember createMany
   */
  export type SBCMemberCreateManyArgs = {
    /**
     * The data used to create many SBCMembers.
     */
    data: Enumerable<SBCMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SBCMember update
   */
  export type SBCMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * The data needed to update a SBCMember.
     */
    data: XOR<SBCMemberUpdateInput, SBCMemberUncheckedUpdateInput>
    /**
     * Choose, which SBCMember to update.
     */
    where: SBCMemberWhereUniqueInput
  }


  /**
   * SBCMember updateMany
   */
  export type SBCMemberUpdateManyArgs = {
    /**
     * The data used to update SBCMembers.
     */
    data: XOR<SBCMemberUpdateManyMutationInput, SBCMemberUncheckedUpdateManyInput>
    /**
     * Filter which SBCMembers to update
     */
    where?: SBCMemberWhereInput
  }


  /**
   * SBCMember upsert
   */
  export type SBCMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * The filter to search for the SBCMember to update in case it exists.
     */
    where: SBCMemberWhereUniqueInput
    /**
     * In case the SBCMember found by the `where` argument doesn't exist, create a new SBCMember with this data.
     */
    create: XOR<SBCMemberCreateInput, SBCMemberUncheckedCreateInput>
    /**
     * In case the SBCMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SBCMemberUpdateInput, SBCMemberUncheckedUpdateInput>
  }


  /**
   * SBCMember delete
   */
  export type SBCMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
    /**
     * Filter which SBCMember to delete.
     */
    where: SBCMemberWhereUniqueInput
  }


  /**
   * SBCMember deleteMany
   */
  export type SBCMemberDeleteManyArgs = {
    /**
     * Filter which SBCMembers to delete
     */
    where?: SBCMemberWhereInput
  }


  /**
   * SBCMember without action
   */
  export type SBCMemberArgs = {
    /**
     * Select specific fields to fetch from the SBCMember
     */
    select?: SBCMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCMemberInclude | null
  }



  /**
   * Model SBCLecturer
   */


  export type AggregateSBCLecturer = {
    _count: SBCLecturerCountAggregateOutputType | null
    _avg: SBCLecturerAvgAggregateOutputType | null
    _sum: SBCLecturerSumAggregateOutputType | null
    _min: SBCLecturerMinAggregateOutputType | null
    _max: SBCLecturerMaxAggregateOutputType | null
  }

  export type SBCLecturerAvgAggregateOutputType = {
    id: number | null
  }

  export type SBCLecturerSumAggregateOutputType = {
    id: number | null
  }

  export type SBCLecturerMinAggregateOutputType = {
    id: number | null
    name: string | null
    profession_id: string | null
    email: string | null
    whatsapp: string | null
    photo: string | null
  }

  export type SBCLecturerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profession_id: string | null
    email: string | null
    whatsapp: string | null
    photo: string | null
  }

  export type SBCLecturerCountAggregateOutputType = {
    id: number
    name: number
    profession_id: number
    email: number
    whatsapp: number
    photo: number
    _all: number
  }


  export type SBCLecturerAvgAggregateInputType = {
    id?: true
  }

  export type SBCLecturerSumAggregateInputType = {
    id?: true
  }

  export type SBCLecturerMinAggregateInputType = {
    id?: true
    name?: true
    profession_id?: true
    email?: true
    whatsapp?: true
    photo?: true
  }

  export type SBCLecturerMaxAggregateInputType = {
    id?: true
    name?: true
    profession_id?: true
    email?: true
    whatsapp?: true
    photo?: true
  }

  export type SBCLecturerCountAggregateInputType = {
    id?: true
    name?: true
    profession_id?: true
    email?: true
    whatsapp?: true
    photo?: true
    _all?: true
  }

  export type SBCLecturerAggregateArgs = {
    /**
     * Filter which SBCLecturer to aggregate.
     */
    where?: SBCLecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCLecturers to fetch.
     */
    orderBy?: Enumerable<SBCLecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SBCLecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCLecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCLecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SBCLecturers
    **/
    _count?: true | SBCLecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SBCLecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SBCLecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SBCLecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SBCLecturerMaxAggregateInputType
  }

  export type GetSBCLecturerAggregateType<T extends SBCLecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateSBCLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSBCLecturer[P]>
      : GetScalarType<T[P], AggregateSBCLecturer[P]>
  }




  export type SBCLecturerGroupByArgs = {
    where?: SBCLecturerWhereInput
    orderBy?: Enumerable<SBCLecturerOrderByWithAggregationInput>
    by: SBCLecturerScalarFieldEnum[]
    having?: SBCLecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SBCLecturerCountAggregateInputType | true
    _avg?: SBCLecturerAvgAggregateInputType
    _sum?: SBCLecturerSumAggregateInputType
    _min?: SBCLecturerMinAggregateInputType
    _max?: SBCLecturerMaxAggregateInputType
  }


  export type SBCLecturerGroupByOutputType = {
    id: number
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
    _count: SBCLecturerCountAggregateOutputType | null
    _avg: SBCLecturerAvgAggregateOutputType | null
    _sum: SBCLecturerSumAggregateOutputType | null
    _min: SBCLecturerMinAggregateOutputType | null
    _max: SBCLecturerMaxAggregateOutputType | null
  }

  type GetSBCLecturerGroupByPayload<T extends SBCLecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SBCLecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SBCLecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SBCLecturerGroupByOutputType[P]>
            : GetScalarType<T[P], SBCLecturerGroupByOutputType[P]>
        }
      >
    >


  export type SBCLecturerSelect = {
    id?: boolean
    name?: boolean
    profession_id?: boolean
    email?: boolean
    whatsapp?: boolean
    photo?: boolean
    team?: boolean | SBCTeamArgs
  }


  export type SBCLecturerInclude = {
    team?: boolean | SBCTeamArgs
  }

  export type SBCLecturerGetPayload<S extends boolean | null | undefined | SBCLecturerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SBCLecturer :
    S extends undefined ? never :
    S extends { include: any } & (SBCLecturerArgs | SBCLecturerFindManyArgs)
    ? SBCLecturer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? SBCTeamGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (SBCLecturerArgs | SBCLecturerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? SBCTeamGetPayload<S['select'][P]> | null :  P extends keyof SBCLecturer ? SBCLecturer[P] : never
  } 
      : SBCLecturer


  type SBCLecturerCountArgs = 
    Omit<SBCLecturerFindManyArgs, 'select' | 'include'> & {
      select?: SBCLecturerCountAggregateInputType | true
    }

  export interface SBCLecturerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SBCLecturer that matches the filter.
     * @param {SBCLecturerFindUniqueArgs} args - Arguments to find a SBCLecturer
     * @example
     * // Get one SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SBCLecturerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SBCLecturerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SBCLecturer'> extends True ? Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>> : Prisma__SBCLecturerClient<SBCLecturerGetPayload<T> | null, null>

    /**
     * Find one SBCLecturer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SBCLecturerFindUniqueOrThrowArgs} args - Arguments to find a SBCLecturer
     * @example
     * // Get one SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SBCLecturerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SBCLecturerFindUniqueOrThrowArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Find the first SBCLecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerFindFirstArgs} args - Arguments to find a SBCLecturer
     * @example
     * // Get one SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SBCLecturerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SBCLecturerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SBCLecturer'> extends True ? Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>> : Prisma__SBCLecturerClient<SBCLecturerGetPayload<T> | null, null>

    /**
     * Find the first SBCLecturer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerFindFirstOrThrowArgs} args - Arguments to find a SBCLecturer
     * @example
     * // Get one SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SBCLecturerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SBCLecturerFindFirstOrThrowArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Find zero or more SBCLecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SBCLecturers
     * const sBCLecturers = await prisma.sBCLecturer.findMany()
     * 
     * // Get first 10 SBCLecturers
     * const sBCLecturers = await prisma.sBCLecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sBCLecturerWithIdOnly = await prisma.sBCLecturer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SBCLecturerFindManyArgs>(
      args?: SelectSubset<T, SBCLecturerFindManyArgs>
    ): Prisma.PrismaPromise<Array<SBCLecturerGetPayload<T>>>

    /**
     * Create a SBCLecturer.
     * @param {SBCLecturerCreateArgs} args - Arguments to create a SBCLecturer.
     * @example
     * // Create one SBCLecturer
     * const SBCLecturer = await prisma.sBCLecturer.create({
     *   data: {
     *     // ... data to create a SBCLecturer
     *   }
     * })
     * 
    **/
    create<T extends SBCLecturerCreateArgs>(
      args: SelectSubset<T, SBCLecturerCreateArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Create many SBCLecturers.
     *     @param {SBCLecturerCreateManyArgs} args - Arguments to create many SBCLecturers.
     *     @example
     *     // Create many SBCLecturers
     *     const sBCLecturer = await prisma.sBCLecturer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SBCLecturerCreateManyArgs>(
      args?: SelectSubset<T, SBCLecturerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SBCLecturer.
     * @param {SBCLecturerDeleteArgs} args - Arguments to delete one SBCLecturer.
     * @example
     * // Delete one SBCLecturer
     * const SBCLecturer = await prisma.sBCLecturer.delete({
     *   where: {
     *     // ... filter to delete one SBCLecturer
     *   }
     * })
     * 
    **/
    delete<T extends SBCLecturerDeleteArgs>(
      args: SelectSubset<T, SBCLecturerDeleteArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Update one SBCLecturer.
     * @param {SBCLecturerUpdateArgs} args - Arguments to update one SBCLecturer.
     * @example
     * // Update one SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SBCLecturerUpdateArgs>(
      args: SelectSubset<T, SBCLecturerUpdateArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Delete zero or more SBCLecturers.
     * @param {SBCLecturerDeleteManyArgs} args - Arguments to filter SBCLecturers to delete.
     * @example
     * // Delete a few SBCLecturers
     * const { count } = await prisma.sBCLecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SBCLecturerDeleteManyArgs>(
      args?: SelectSubset<T, SBCLecturerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SBCLecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SBCLecturers
     * const sBCLecturer = await prisma.sBCLecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SBCLecturerUpdateManyArgs>(
      args: SelectSubset<T, SBCLecturerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SBCLecturer.
     * @param {SBCLecturerUpsertArgs} args - Arguments to update or create a SBCLecturer.
     * @example
     * // Update or create a SBCLecturer
     * const sBCLecturer = await prisma.sBCLecturer.upsert({
     *   create: {
     *     // ... data to create a SBCLecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SBCLecturer we want to update
     *   }
     * })
    **/
    upsert<T extends SBCLecturerUpsertArgs>(
      args: SelectSubset<T, SBCLecturerUpsertArgs>
    ): Prisma__SBCLecturerClient<SBCLecturerGetPayload<T>>

    /**
     * Count the number of SBCLecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerCountArgs} args - Arguments to filter SBCLecturers to count.
     * @example
     * // Count the number of SBCLecturers
     * const count = await prisma.sBCLecturer.count({
     *   where: {
     *     // ... the filter for the SBCLecturers we want to count
     *   }
     * })
    **/
    count<T extends SBCLecturerCountArgs>(
      args?: Subset<T, SBCLecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SBCLecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SBCLecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SBCLecturerAggregateArgs>(args: Subset<T, SBCLecturerAggregateArgs>): Prisma.PrismaPromise<GetSBCLecturerAggregateType<T>>

    /**
     * Group by SBCLecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBCLecturerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SBCLecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SBCLecturerGroupByArgs['orderBy'] }
        : { orderBy?: SBCLecturerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SBCLecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSBCLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SBCLecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SBCLecturerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    team<T extends SBCTeamArgs= {}>(args?: Subset<T, SBCTeamArgs>): Prisma__SBCTeamClient<SBCTeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SBCLecturer base type for findUnique actions
   */
  export type SBCLecturerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter, which SBCLecturer to fetch.
     */
    where: SBCLecturerWhereUniqueInput
  }

  /**
   * SBCLecturer findUnique
   */
  export interface SBCLecturerFindUniqueArgs extends SBCLecturerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCLecturer findUniqueOrThrow
   */
  export type SBCLecturerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter, which SBCLecturer to fetch.
     */
    where: SBCLecturerWhereUniqueInput
  }


  /**
   * SBCLecturer base type for findFirst actions
   */
  export type SBCLecturerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter, which SBCLecturer to fetch.
     */
    where?: SBCLecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCLecturers to fetch.
     */
    orderBy?: Enumerable<SBCLecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCLecturers.
     */
    cursor?: SBCLecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCLecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCLecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCLecturers.
     */
    distinct?: Enumerable<SBCLecturerScalarFieldEnum>
  }

  /**
   * SBCLecturer findFirst
   */
  export interface SBCLecturerFindFirstArgs extends SBCLecturerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SBCLecturer findFirstOrThrow
   */
  export type SBCLecturerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter, which SBCLecturer to fetch.
     */
    where?: SBCLecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCLecturers to fetch.
     */
    orderBy?: Enumerable<SBCLecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBCLecturers.
     */
    cursor?: SBCLecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCLecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCLecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBCLecturers.
     */
    distinct?: Enumerable<SBCLecturerScalarFieldEnum>
  }


  /**
   * SBCLecturer findMany
   */
  export type SBCLecturerFindManyArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter, which SBCLecturers to fetch.
     */
    where?: SBCLecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBCLecturers to fetch.
     */
    orderBy?: Enumerable<SBCLecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SBCLecturers.
     */
    cursor?: SBCLecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBCLecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBCLecturers.
     */
    skip?: number
    distinct?: Enumerable<SBCLecturerScalarFieldEnum>
  }


  /**
   * SBCLecturer create
   */
  export type SBCLecturerCreateArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * The data needed to create a SBCLecturer.
     */
    data: XOR<SBCLecturerCreateInput, SBCLecturerUncheckedCreateInput>
  }


  /**
   * SBCLecturer createMany
   */
  export type SBCLecturerCreateManyArgs = {
    /**
     * The data used to create many SBCLecturers.
     */
    data: Enumerable<SBCLecturerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SBCLecturer update
   */
  export type SBCLecturerUpdateArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * The data needed to update a SBCLecturer.
     */
    data: XOR<SBCLecturerUpdateInput, SBCLecturerUncheckedUpdateInput>
    /**
     * Choose, which SBCLecturer to update.
     */
    where: SBCLecturerWhereUniqueInput
  }


  /**
   * SBCLecturer updateMany
   */
  export type SBCLecturerUpdateManyArgs = {
    /**
     * The data used to update SBCLecturers.
     */
    data: XOR<SBCLecturerUpdateManyMutationInput, SBCLecturerUncheckedUpdateManyInput>
    /**
     * Filter which SBCLecturers to update
     */
    where?: SBCLecturerWhereInput
  }


  /**
   * SBCLecturer upsert
   */
  export type SBCLecturerUpsertArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * The filter to search for the SBCLecturer to update in case it exists.
     */
    where: SBCLecturerWhereUniqueInput
    /**
     * In case the SBCLecturer found by the `where` argument doesn't exist, create a new SBCLecturer with this data.
     */
    create: XOR<SBCLecturerCreateInput, SBCLecturerUncheckedCreateInput>
    /**
     * In case the SBCLecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SBCLecturerUpdateInput, SBCLecturerUncheckedUpdateInput>
  }


  /**
   * SBCLecturer delete
   */
  export type SBCLecturerDeleteArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
    /**
     * Filter which SBCLecturer to delete.
     */
    where: SBCLecturerWhereUniqueInput
  }


  /**
   * SBCLecturer deleteMany
   */
  export type SBCLecturerDeleteManyArgs = {
    /**
     * Filter which SBCLecturers to delete
     */
    where?: SBCLecturerWhereInput
  }


  /**
   * SBCLecturer without action
   */
  export type SBCLecturerArgs = {
    /**
     * Select specific fields to fetch from the SBCLecturer
     */
    select?: SBCLecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SBCLecturerInclude | null
  }



  /**
   * Model Payment
   */


  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    proof: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    proof: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    proof: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    proof?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    proof?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    proof?: true
    _all?: true
  }

  export type PaymentAggregateArgs = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs = {
    where?: PaymentWhereInput
    orderBy?: Enumerable<PaymentOrderByWithAggregationInput>
    by: PaymentScalarFieldEnum[]
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }


  export type PaymentGroupByOutputType = {
    id: number
    proof: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect = {
    id?: boolean
    proof?: boolean
    sbc_team?: boolean | SBCTeamArgs
    cic_team?: boolean | CICTeamArgs
  }


  export type PaymentInclude = {
    sbc_team?: boolean | SBCTeamArgs
    cic_team?: boolean | CICTeamArgs
  }

  export type PaymentGetPayload<S extends boolean | null | undefined | PaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Payment :
    S extends undefined ? never :
    S extends { include: any } & (PaymentArgs | PaymentFindManyArgs)
    ? Payment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sbc_team' ? SBCTeamGetPayload<S['include'][P]> | null :
        P extends 'cic_team' ? CICTeamGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (PaymentArgs | PaymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sbc_team' ? SBCTeamGetPayload<S['select'][P]> | null :
        P extends 'cic_team' ? CICTeamGetPayload<S['select'][P]> | null :  P extends keyof Payment ? Payment[P] : never
  } 
      : Payment


  type PaymentCountArgs = 
    Omit<PaymentFindManyArgs, 'select' | 'include'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Payment'> extends True ? Prisma__PaymentClient<PaymentGetPayload<T>> : Prisma__PaymentClient<PaymentGetPayload<T> | null, null>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Payment'> extends True ? Prisma__PaymentClient<PaymentGetPayload<T>> : Prisma__PaymentClient<PaymentGetPayload<T> | null, null>

    /**
     * Find the first Payment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs>
    ): Prisma.PrismaPromise<Array<PaymentGetPayload<T>>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sbc_team<T extends SBCTeamArgs= {}>(args?: Subset<T, SBCTeamArgs>): Prisma__SBCTeamClient<SBCTeamGetPayload<T> | Null>;

    cic_team<T extends CICTeamArgs= {}>(args?: Subset<T, CICTeamArgs>): Prisma__CICTeamClient<CICTeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Payment base type for findUnique actions
   */
  export type PaymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUnique
   */
  export interface PaymentFindUniqueArgs extends PaymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment base type for findFirst actions
   */
  export type PaymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }

  /**
   * Payment findFirst
   */
  export interface PaymentFindFirstArgs extends PaymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs = {
    /**
     * The data used to create many Payments.
     */
    data: Enumerable<PaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment without action
   */
  export type PaymentArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude | null
  }



  /**
   * Model FCECMember
   */


  export type AggregateFCECMember = {
    _count: FCECMemberCountAggregateOutputType | null
    _avg: FCECMemberAvgAggregateOutputType | null
    _sum: FCECMemberSumAggregateOutputType | null
    _min: FCECMemberMinAggregateOutputType | null
    _max: FCECMemberMaxAggregateOutputType | null
  }

  export type FCECMemberAvgAggregateOutputType = {
    id: number | null
    team_id: number | null
  }

  export type FCECMemberSumAggregateOutputType = {
    id: number | null
    team_id: number | null
  }

  export type FCECMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    student_card: string | null
    student_proof: string | null
    twibbon_proof: string | null
    photo: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type FCECMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    student_card: string | null
    student_proof: string | null
    twibbon_proof: string | null
    photo: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type FCECMemberCountAggregateOutputType = {
    id: number
    name: number
    email: number
    whatsapp: number
    line_id: number
    student_card: number
    student_proof: number
    twibbon_proof: number
    photo: number
    is_leader: number
    team_id: number
    _all: number
  }


  export type FCECMemberAvgAggregateInputType = {
    id?: true
    team_id?: true
  }

  export type FCECMemberSumAggregateInputType = {
    id?: true
    team_id?: true
  }

  export type FCECMemberMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    twibbon_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
  }

  export type FCECMemberMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    twibbon_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
  }

  export type FCECMemberCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    twibbon_proof?: true
    photo?: true
    is_leader?: true
    team_id?: true
    _all?: true
  }

  export type FCECMemberAggregateArgs = {
    /**
     * Filter which FCECMember to aggregate.
     */
    where?: FCECMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECMembers to fetch.
     */
    orderBy?: Enumerable<FCECMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FCECMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FCECMembers
    **/
    _count?: true | FCECMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FCECMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FCECMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FCECMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FCECMemberMaxAggregateInputType
  }

  export type GetFCECMemberAggregateType<T extends FCECMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateFCECMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFCECMember[P]>
      : GetScalarType<T[P], AggregateFCECMember[P]>
  }




  export type FCECMemberGroupByArgs = {
    where?: FCECMemberWhereInput
    orderBy?: Enumerable<FCECMemberOrderByWithAggregationInput>
    by: FCECMemberScalarFieldEnum[]
    having?: FCECMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FCECMemberCountAggregateInputType | true
    _avg?: FCECMemberAvgAggregateInputType
    _sum?: FCECMemberSumAggregateInputType
    _min?: FCECMemberMinAggregateInputType
    _max?: FCECMemberMaxAggregateInputType
  }


  export type FCECMemberGroupByOutputType = {
    id: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
    team_id: number
    _count: FCECMemberCountAggregateOutputType | null
    _avg: FCECMemberAvgAggregateOutputType | null
    _sum: FCECMemberSumAggregateOutputType | null
    _min: FCECMemberMinAggregateOutputType | null
    _max: FCECMemberMaxAggregateOutputType | null
  }

  type GetFCECMemberGroupByPayload<T extends FCECMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FCECMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FCECMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FCECMemberGroupByOutputType[P]>
            : GetScalarType<T[P], FCECMemberGroupByOutputType[P]>
        }
      >
    >


  export type FCECMemberSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    line_id?: boolean
    student_card?: boolean
    student_proof?: boolean
    twibbon_proof?: boolean
    photo?: boolean
    is_leader?: boolean
    team?: boolean | FCECTeamArgs
    team_id?: boolean
  }


  export type FCECMemberInclude = {
    team?: boolean | FCECTeamArgs
  }

  export type FCECMemberGetPayload<S extends boolean | null | undefined | FCECMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FCECMember :
    S extends undefined ? never :
    S extends { include: any } & (FCECMemberArgs | FCECMemberFindManyArgs)
    ? FCECMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? FCECTeamGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FCECMemberArgs | FCECMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? FCECTeamGetPayload<S['select'][P]> :  P extends keyof FCECMember ? FCECMember[P] : never
  } 
      : FCECMember


  type FCECMemberCountArgs = 
    Omit<FCECMemberFindManyArgs, 'select' | 'include'> & {
      select?: FCECMemberCountAggregateInputType | true
    }

  export interface FCECMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FCECMember that matches the filter.
     * @param {FCECMemberFindUniqueArgs} args - Arguments to find a FCECMember
     * @example
     * // Get one FCECMember
     * const fCECMember = await prisma.fCECMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FCECMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FCECMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FCECMember'> extends True ? Prisma__FCECMemberClient<FCECMemberGetPayload<T>> : Prisma__FCECMemberClient<FCECMemberGetPayload<T> | null, null>

    /**
     * Find one FCECMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FCECMemberFindUniqueOrThrowArgs} args - Arguments to find a FCECMember
     * @example
     * // Get one FCECMember
     * const fCECMember = await prisma.fCECMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FCECMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FCECMemberFindUniqueOrThrowArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Find the first FCECMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberFindFirstArgs} args - Arguments to find a FCECMember
     * @example
     * // Get one FCECMember
     * const fCECMember = await prisma.fCECMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FCECMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FCECMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FCECMember'> extends True ? Prisma__FCECMemberClient<FCECMemberGetPayload<T>> : Prisma__FCECMemberClient<FCECMemberGetPayload<T> | null, null>

    /**
     * Find the first FCECMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberFindFirstOrThrowArgs} args - Arguments to find a FCECMember
     * @example
     * // Get one FCECMember
     * const fCECMember = await prisma.fCECMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FCECMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FCECMemberFindFirstOrThrowArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Find zero or more FCECMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FCECMembers
     * const fCECMembers = await prisma.fCECMember.findMany()
     * 
     * // Get first 10 FCECMembers
     * const fCECMembers = await prisma.fCECMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fCECMemberWithIdOnly = await prisma.fCECMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FCECMemberFindManyArgs>(
      args?: SelectSubset<T, FCECMemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<FCECMemberGetPayload<T>>>

    /**
     * Create a FCECMember.
     * @param {FCECMemberCreateArgs} args - Arguments to create a FCECMember.
     * @example
     * // Create one FCECMember
     * const FCECMember = await prisma.fCECMember.create({
     *   data: {
     *     // ... data to create a FCECMember
     *   }
     * })
     * 
    **/
    create<T extends FCECMemberCreateArgs>(
      args: SelectSubset<T, FCECMemberCreateArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Create many FCECMembers.
     *     @param {FCECMemberCreateManyArgs} args - Arguments to create many FCECMembers.
     *     @example
     *     // Create many FCECMembers
     *     const fCECMember = await prisma.fCECMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FCECMemberCreateManyArgs>(
      args?: SelectSubset<T, FCECMemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FCECMember.
     * @param {FCECMemberDeleteArgs} args - Arguments to delete one FCECMember.
     * @example
     * // Delete one FCECMember
     * const FCECMember = await prisma.fCECMember.delete({
     *   where: {
     *     // ... filter to delete one FCECMember
     *   }
     * })
     * 
    **/
    delete<T extends FCECMemberDeleteArgs>(
      args: SelectSubset<T, FCECMemberDeleteArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Update one FCECMember.
     * @param {FCECMemberUpdateArgs} args - Arguments to update one FCECMember.
     * @example
     * // Update one FCECMember
     * const fCECMember = await prisma.fCECMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FCECMemberUpdateArgs>(
      args: SelectSubset<T, FCECMemberUpdateArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Delete zero or more FCECMembers.
     * @param {FCECMemberDeleteManyArgs} args - Arguments to filter FCECMembers to delete.
     * @example
     * // Delete a few FCECMembers
     * const { count } = await prisma.fCECMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FCECMemberDeleteManyArgs>(
      args?: SelectSubset<T, FCECMemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FCECMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FCECMembers
     * const fCECMember = await prisma.fCECMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FCECMemberUpdateManyArgs>(
      args: SelectSubset<T, FCECMemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FCECMember.
     * @param {FCECMemberUpsertArgs} args - Arguments to update or create a FCECMember.
     * @example
     * // Update or create a FCECMember
     * const fCECMember = await prisma.fCECMember.upsert({
     *   create: {
     *     // ... data to create a FCECMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FCECMember we want to update
     *   }
     * })
    **/
    upsert<T extends FCECMemberUpsertArgs>(
      args: SelectSubset<T, FCECMemberUpsertArgs>
    ): Prisma__FCECMemberClient<FCECMemberGetPayload<T>>

    /**
     * Count the number of FCECMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberCountArgs} args - Arguments to filter FCECMembers to count.
     * @example
     * // Count the number of FCECMembers
     * const count = await prisma.fCECMember.count({
     *   where: {
     *     // ... the filter for the FCECMembers we want to count
     *   }
     * })
    **/
    count<T extends FCECMemberCountArgs>(
      args?: Subset<T, FCECMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FCECMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FCECMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FCECMemberAggregateArgs>(args: Subset<T, FCECMemberAggregateArgs>): Prisma.PrismaPromise<GetFCECMemberAggregateType<T>>

    /**
     * Group by FCECMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FCECMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FCECMemberGroupByArgs['orderBy'] }
        : { orderBy?: FCECMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FCECMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFCECMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FCECMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FCECMemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    team<T extends FCECTeamArgs= {}>(args?: Subset<T, FCECTeamArgs>): Prisma__FCECTeamClient<FCECTeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FCECMember base type for findUnique actions
   */
  export type FCECMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter, which FCECMember to fetch.
     */
    where: FCECMemberWhereUniqueInput
  }

  /**
   * FCECMember findUnique
   */
  export interface FCECMemberFindUniqueArgs extends FCECMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FCECMember findUniqueOrThrow
   */
  export type FCECMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter, which FCECMember to fetch.
     */
    where: FCECMemberWhereUniqueInput
  }


  /**
   * FCECMember base type for findFirst actions
   */
  export type FCECMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter, which FCECMember to fetch.
     */
    where?: FCECMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECMembers to fetch.
     */
    orderBy?: Enumerable<FCECMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCECMembers.
     */
    cursor?: FCECMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCECMembers.
     */
    distinct?: Enumerable<FCECMemberScalarFieldEnum>
  }

  /**
   * FCECMember findFirst
   */
  export interface FCECMemberFindFirstArgs extends FCECMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FCECMember findFirstOrThrow
   */
  export type FCECMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter, which FCECMember to fetch.
     */
    where?: FCECMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECMembers to fetch.
     */
    orderBy?: Enumerable<FCECMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCECMembers.
     */
    cursor?: FCECMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCECMembers.
     */
    distinct?: Enumerable<FCECMemberScalarFieldEnum>
  }


  /**
   * FCECMember findMany
   */
  export type FCECMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter, which FCECMembers to fetch.
     */
    where?: FCECMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECMembers to fetch.
     */
    orderBy?: Enumerable<FCECMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FCECMembers.
     */
    cursor?: FCECMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECMembers.
     */
    skip?: number
    distinct?: Enumerable<FCECMemberScalarFieldEnum>
  }


  /**
   * FCECMember create
   */
  export type FCECMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * The data needed to create a FCECMember.
     */
    data: XOR<FCECMemberCreateInput, FCECMemberUncheckedCreateInput>
  }


  /**
   * FCECMember createMany
   */
  export type FCECMemberCreateManyArgs = {
    /**
     * The data used to create many FCECMembers.
     */
    data: Enumerable<FCECMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FCECMember update
   */
  export type FCECMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * The data needed to update a FCECMember.
     */
    data: XOR<FCECMemberUpdateInput, FCECMemberUncheckedUpdateInput>
    /**
     * Choose, which FCECMember to update.
     */
    where: FCECMemberWhereUniqueInput
  }


  /**
   * FCECMember updateMany
   */
  export type FCECMemberUpdateManyArgs = {
    /**
     * The data used to update FCECMembers.
     */
    data: XOR<FCECMemberUpdateManyMutationInput, FCECMemberUncheckedUpdateManyInput>
    /**
     * Filter which FCECMembers to update
     */
    where?: FCECMemberWhereInput
  }


  /**
   * FCECMember upsert
   */
  export type FCECMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * The filter to search for the FCECMember to update in case it exists.
     */
    where: FCECMemberWhereUniqueInput
    /**
     * In case the FCECMember found by the `where` argument doesn't exist, create a new FCECMember with this data.
     */
    create: XOR<FCECMemberCreateInput, FCECMemberUncheckedCreateInput>
    /**
     * In case the FCECMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FCECMemberUpdateInput, FCECMemberUncheckedUpdateInput>
  }


  /**
   * FCECMember delete
   */
  export type FCECMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    /**
     * Filter which FCECMember to delete.
     */
    where: FCECMemberWhereUniqueInput
  }


  /**
   * FCECMember deleteMany
   */
  export type FCECMemberDeleteManyArgs = {
    /**
     * Filter which FCECMembers to delete
     */
    where?: FCECMemberWhereInput
  }


  /**
   * FCECMember without action
   */
  export type FCECMemberArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
  }



  /**
   * Model FCECTeam
   */


  export type AggregateFCECTeam = {
    _count: FCECTeamCountAggregateOutputType | null
    _avg: FCECTeamAvgAggregateOutputType | null
    _sum: FCECTeamSumAggregateOutputType | null
    _min: FCECTeamMinAggregateOutputType | null
    _max: FCECTeamMaxAggregateOutputType | null
  }

  export type FCECTeamAvgAggregateOutputType = {
    id: number | null
  }

  export type FCECTeamSumAggregateOutputType = {
    id: number | null
  }

  export type FCECTeamMinAggregateOutputType = {
    id: number | null
    school: string | null
    abstract_title: string | null
    team_name: string | null
    originality_letter: string | null
    abstract: string | null
    finalized_at: Date | null
  }

  export type FCECTeamMaxAggregateOutputType = {
    id: number | null
    school: string | null
    abstract_title: string | null
    team_name: string | null
    originality_letter: string | null
    abstract: string | null
    finalized_at: Date | null
  }

  export type FCECTeamCountAggregateOutputType = {
    id: number
    school: number
    abstract_title: number
    team_name: number
    originality_letter: number
    abstract: number
    finalized_at: number
    _all: number
  }


  export type FCECTeamAvgAggregateInputType = {
    id?: true
  }

  export type FCECTeamSumAggregateInputType = {
    id?: true
  }

  export type FCECTeamMinAggregateInputType = {
    id?: true
    school?: true
    abstract_title?: true
    team_name?: true
    originality_letter?: true
    abstract?: true
    finalized_at?: true
  }

  export type FCECTeamMaxAggregateInputType = {
    id?: true
    school?: true
    abstract_title?: true
    team_name?: true
    originality_letter?: true
    abstract?: true
    finalized_at?: true
  }

  export type FCECTeamCountAggregateInputType = {
    id?: true
    school?: true
    abstract_title?: true
    team_name?: true
    originality_letter?: true
    abstract?: true
    finalized_at?: true
    _all?: true
  }

  export type FCECTeamAggregateArgs = {
    /**
     * Filter which FCECTeam to aggregate.
     */
    where?: FCECTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECTeams to fetch.
     */
    orderBy?: Enumerable<FCECTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FCECTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FCECTeams
    **/
    _count?: true | FCECTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FCECTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FCECTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FCECTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FCECTeamMaxAggregateInputType
  }

  export type GetFCECTeamAggregateType<T extends FCECTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateFCECTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFCECTeam[P]>
      : GetScalarType<T[P], AggregateFCECTeam[P]>
  }




  export type FCECTeamGroupByArgs = {
    where?: FCECTeamWhereInput
    orderBy?: Enumerable<FCECTeamOrderByWithAggregationInput>
    by: FCECTeamScalarFieldEnum[]
    having?: FCECTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FCECTeamCountAggregateInputType | true
    _avg?: FCECTeamAvgAggregateInputType
    _sum?: FCECTeamSumAggregateInputType
    _min?: FCECTeamMinAggregateInputType
    _max?: FCECTeamMaxAggregateInputType
  }


  export type FCECTeamGroupByOutputType = {
    id: number
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    finalized_at: Date
    _count: FCECTeamCountAggregateOutputType | null
    _avg: FCECTeamAvgAggregateOutputType | null
    _sum: FCECTeamSumAggregateOutputType | null
    _min: FCECTeamMinAggregateOutputType | null
    _max: FCECTeamMaxAggregateOutputType | null
  }

  type GetFCECTeamGroupByPayload<T extends FCECTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FCECTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FCECTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FCECTeamGroupByOutputType[P]>
            : GetScalarType<T[P], FCECTeamGroupByOutputType[P]>
        }
      >
    >


  export type FCECTeamSelect = {
    id?: boolean
    school?: boolean
    abstract_title?: boolean
    team_name?: boolean
    originality_letter?: boolean
    abstract?: boolean
    members?: boolean | FCECTeam$membersArgs
    finalized_at?: boolean
    _count?: boolean | FCECTeamCountOutputTypeArgs
  }


  export type FCECTeamInclude = {
    members?: boolean | FCECTeam$membersArgs
    _count?: boolean | FCECTeamCountOutputTypeArgs
  }

  export type FCECTeamGetPayload<S extends boolean | null | undefined | FCECTeamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FCECTeam :
    S extends undefined ? never :
    S extends { include: any } & (FCECTeamArgs | FCECTeamFindManyArgs)
    ? FCECTeam  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'members' ? Array < FCECMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? FCECTeamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FCECTeamArgs | FCECTeamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'members' ? Array < FCECMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? FCECTeamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FCECTeam ? FCECTeam[P] : never
  } 
      : FCECTeam


  type FCECTeamCountArgs = 
    Omit<FCECTeamFindManyArgs, 'select' | 'include'> & {
      select?: FCECTeamCountAggregateInputType | true
    }

  export interface FCECTeamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FCECTeam that matches the filter.
     * @param {FCECTeamFindUniqueArgs} args - Arguments to find a FCECTeam
     * @example
     * // Get one FCECTeam
     * const fCECTeam = await prisma.fCECTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FCECTeamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FCECTeamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FCECTeam'> extends True ? Prisma__FCECTeamClient<FCECTeamGetPayload<T>> : Prisma__FCECTeamClient<FCECTeamGetPayload<T> | null, null>

    /**
     * Find one FCECTeam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FCECTeamFindUniqueOrThrowArgs} args - Arguments to find a FCECTeam
     * @example
     * // Get one FCECTeam
     * const fCECTeam = await prisma.fCECTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FCECTeamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FCECTeamFindUniqueOrThrowArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Find the first FCECTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamFindFirstArgs} args - Arguments to find a FCECTeam
     * @example
     * // Get one FCECTeam
     * const fCECTeam = await prisma.fCECTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FCECTeamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FCECTeamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FCECTeam'> extends True ? Prisma__FCECTeamClient<FCECTeamGetPayload<T>> : Prisma__FCECTeamClient<FCECTeamGetPayload<T> | null, null>

    /**
     * Find the first FCECTeam that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamFindFirstOrThrowArgs} args - Arguments to find a FCECTeam
     * @example
     * // Get one FCECTeam
     * const fCECTeam = await prisma.fCECTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FCECTeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FCECTeamFindFirstOrThrowArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Find zero or more FCECTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FCECTeams
     * const fCECTeams = await prisma.fCECTeam.findMany()
     * 
     * // Get first 10 FCECTeams
     * const fCECTeams = await prisma.fCECTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fCECTeamWithIdOnly = await prisma.fCECTeam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FCECTeamFindManyArgs>(
      args?: SelectSubset<T, FCECTeamFindManyArgs>
    ): Prisma.PrismaPromise<Array<FCECTeamGetPayload<T>>>

    /**
     * Create a FCECTeam.
     * @param {FCECTeamCreateArgs} args - Arguments to create a FCECTeam.
     * @example
     * // Create one FCECTeam
     * const FCECTeam = await prisma.fCECTeam.create({
     *   data: {
     *     // ... data to create a FCECTeam
     *   }
     * })
     * 
    **/
    create<T extends FCECTeamCreateArgs>(
      args: SelectSubset<T, FCECTeamCreateArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Create many FCECTeams.
     *     @param {FCECTeamCreateManyArgs} args - Arguments to create many FCECTeams.
     *     @example
     *     // Create many FCECTeams
     *     const fCECTeam = await prisma.fCECTeam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FCECTeamCreateManyArgs>(
      args?: SelectSubset<T, FCECTeamCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FCECTeam.
     * @param {FCECTeamDeleteArgs} args - Arguments to delete one FCECTeam.
     * @example
     * // Delete one FCECTeam
     * const FCECTeam = await prisma.fCECTeam.delete({
     *   where: {
     *     // ... filter to delete one FCECTeam
     *   }
     * })
     * 
    **/
    delete<T extends FCECTeamDeleteArgs>(
      args: SelectSubset<T, FCECTeamDeleteArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Update one FCECTeam.
     * @param {FCECTeamUpdateArgs} args - Arguments to update one FCECTeam.
     * @example
     * // Update one FCECTeam
     * const fCECTeam = await prisma.fCECTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FCECTeamUpdateArgs>(
      args: SelectSubset<T, FCECTeamUpdateArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Delete zero or more FCECTeams.
     * @param {FCECTeamDeleteManyArgs} args - Arguments to filter FCECTeams to delete.
     * @example
     * // Delete a few FCECTeams
     * const { count } = await prisma.fCECTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FCECTeamDeleteManyArgs>(
      args?: SelectSubset<T, FCECTeamDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FCECTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FCECTeams
     * const fCECTeam = await prisma.fCECTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FCECTeamUpdateManyArgs>(
      args: SelectSubset<T, FCECTeamUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FCECTeam.
     * @param {FCECTeamUpsertArgs} args - Arguments to update or create a FCECTeam.
     * @example
     * // Update or create a FCECTeam
     * const fCECTeam = await prisma.fCECTeam.upsert({
     *   create: {
     *     // ... data to create a FCECTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FCECTeam we want to update
     *   }
     * })
    **/
    upsert<T extends FCECTeamUpsertArgs>(
      args: SelectSubset<T, FCECTeamUpsertArgs>
    ): Prisma__FCECTeamClient<FCECTeamGetPayload<T>>

    /**
     * Count the number of FCECTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamCountArgs} args - Arguments to filter FCECTeams to count.
     * @example
     * // Count the number of FCECTeams
     * const count = await prisma.fCECTeam.count({
     *   where: {
     *     // ... the filter for the FCECTeams we want to count
     *   }
     * })
    **/
    count<T extends FCECTeamCountArgs>(
      args?: Subset<T, FCECTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FCECTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FCECTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FCECTeamAggregateArgs>(args: Subset<T, FCECTeamAggregateArgs>): Prisma.PrismaPromise<GetFCECTeamAggregateType<T>>

    /**
     * Group by FCECTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCECTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FCECTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FCECTeamGroupByArgs['orderBy'] }
        : { orderBy?: FCECTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FCECTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFCECTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FCECTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FCECTeamClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    members<T extends FCECTeam$membersArgs= {}>(args?: Subset<T, FCECTeam$membersArgs>): Prisma.PrismaPromise<Array<FCECMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FCECTeam base type for findUnique actions
   */
  export type FCECTeamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter, which FCECTeam to fetch.
     */
    where: FCECTeamWhereUniqueInput
  }

  /**
   * FCECTeam findUnique
   */
  export interface FCECTeamFindUniqueArgs extends FCECTeamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FCECTeam findUniqueOrThrow
   */
  export type FCECTeamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter, which FCECTeam to fetch.
     */
    where: FCECTeamWhereUniqueInput
  }


  /**
   * FCECTeam base type for findFirst actions
   */
  export type FCECTeamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter, which FCECTeam to fetch.
     */
    where?: FCECTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECTeams to fetch.
     */
    orderBy?: Enumerable<FCECTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCECTeams.
     */
    cursor?: FCECTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCECTeams.
     */
    distinct?: Enumerable<FCECTeamScalarFieldEnum>
  }

  /**
   * FCECTeam findFirst
   */
  export interface FCECTeamFindFirstArgs extends FCECTeamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FCECTeam findFirstOrThrow
   */
  export type FCECTeamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter, which FCECTeam to fetch.
     */
    where?: FCECTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECTeams to fetch.
     */
    orderBy?: Enumerable<FCECTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCECTeams.
     */
    cursor?: FCECTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCECTeams.
     */
    distinct?: Enumerable<FCECTeamScalarFieldEnum>
  }


  /**
   * FCECTeam findMany
   */
  export type FCECTeamFindManyArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter, which FCECTeams to fetch.
     */
    where?: FCECTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCECTeams to fetch.
     */
    orderBy?: Enumerable<FCECTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FCECTeams.
     */
    cursor?: FCECTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCECTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCECTeams.
     */
    skip?: number
    distinct?: Enumerable<FCECTeamScalarFieldEnum>
  }


  /**
   * FCECTeam create
   */
  export type FCECTeamCreateArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * The data needed to create a FCECTeam.
     */
    data: XOR<FCECTeamCreateInput, FCECTeamUncheckedCreateInput>
  }


  /**
   * FCECTeam createMany
   */
  export type FCECTeamCreateManyArgs = {
    /**
     * The data used to create many FCECTeams.
     */
    data: Enumerable<FCECTeamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FCECTeam update
   */
  export type FCECTeamUpdateArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * The data needed to update a FCECTeam.
     */
    data: XOR<FCECTeamUpdateInput, FCECTeamUncheckedUpdateInput>
    /**
     * Choose, which FCECTeam to update.
     */
    where: FCECTeamWhereUniqueInput
  }


  /**
   * FCECTeam updateMany
   */
  export type FCECTeamUpdateManyArgs = {
    /**
     * The data used to update FCECTeams.
     */
    data: XOR<FCECTeamUpdateManyMutationInput, FCECTeamUncheckedUpdateManyInput>
    /**
     * Filter which FCECTeams to update
     */
    where?: FCECTeamWhereInput
  }


  /**
   * FCECTeam upsert
   */
  export type FCECTeamUpsertArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * The filter to search for the FCECTeam to update in case it exists.
     */
    where: FCECTeamWhereUniqueInput
    /**
     * In case the FCECTeam found by the `where` argument doesn't exist, create a new FCECTeam with this data.
     */
    create: XOR<FCECTeamCreateInput, FCECTeamUncheckedCreateInput>
    /**
     * In case the FCECTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FCECTeamUpdateInput, FCECTeamUncheckedUpdateInput>
  }


  /**
   * FCECTeam delete
   */
  export type FCECTeamDeleteArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
    /**
     * Filter which FCECTeam to delete.
     */
    where: FCECTeamWhereUniqueInput
  }


  /**
   * FCECTeam deleteMany
   */
  export type FCECTeamDeleteManyArgs = {
    /**
     * Filter which FCECTeams to delete
     */
    where?: FCECTeamWhereInput
  }


  /**
   * FCECTeam.members
   */
  export type FCECTeam$membersArgs = {
    /**
     * Select specific fields to fetch from the FCECMember
     */
    select?: FCECMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECMemberInclude | null
    where?: FCECMemberWhereInput
    orderBy?: Enumerable<FCECMemberOrderByWithRelationInput>
    cursor?: FCECMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FCECMemberScalarFieldEnum>
  }


  /**
   * FCECTeam without action
   */
  export type FCECTeamArgs = {
    /**
     * Select specific fields to fetch from the FCECTeam
     */
    select?: FCECTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FCECTeamInclude | null
  }



  /**
   * Model CICMember
   */


  export type AggregateCICMember = {
    _count: CICMemberCountAggregateOutputType | null
    _avg: CICMemberAvgAggregateOutputType | null
    _sum: CICMemberSumAggregateOutputType | null
    _min: CICMemberMinAggregateOutputType | null
    _max: CICMemberMaxAggregateOutputType | null
  }

  export type CICMemberAvgAggregateOutputType = {
    id: number | null
    team_id: number | null
  }

  export type CICMemberSumAggregateOutputType = {
    id: number | null
    team_id: number | null
  }

  export type CICMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    student_card: string | null
    student_proof: string | null
    study_major: string | null
    generation: string | null
    twibbon_proof: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type CICMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    whatsapp: string | null
    line_id: string | null
    student_card: string | null
    student_proof: string | null
    study_major: string | null
    generation: string | null
    twibbon_proof: string | null
    is_leader: boolean | null
    team_id: number | null
  }

  export type CICMemberCountAggregateOutputType = {
    id: number
    name: number
    email: number
    whatsapp: number
    line_id: number
    student_card: number
    student_proof: number
    study_major: number
    generation: number
    twibbon_proof: number
    is_leader: number
    team_id: number
    _all: number
  }


  export type CICMemberAvgAggregateInputType = {
    id?: true
    team_id?: true
  }

  export type CICMemberSumAggregateInputType = {
    id?: true
    team_id?: true
  }

  export type CICMemberMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    study_major?: true
    generation?: true
    twibbon_proof?: true
    is_leader?: true
    team_id?: true
  }

  export type CICMemberMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    study_major?: true
    generation?: true
    twibbon_proof?: true
    is_leader?: true
    team_id?: true
  }

  export type CICMemberCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    line_id?: true
    student_card?: true
    student_proof?: true
    study_major?: true
    generation?: true
    twibbon_proof?: true
    is_leader?: true
    team_id?: true
    _all?: true
  }

  export type CICMemberAggregateArgs = {
    /**
     * Filter which CICMember to aggregate.
     */
    where?: CICMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICMembers to fetch.
     */
    orderBy?: Enumerable<CICMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CICMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CICMembers
    **/
    _count?: true | CICMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CICMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CICMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CICMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CICMemberMaxAggregateInputType
  }

  export type GetCICMemberAggregateType<T extends CICMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCICMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCICMember[P]>
      : GetScalarType<T[P], AggregateCICMember[P]>
  }




  export type CICMemberGroupByArgs = {
    where?: CICMemberWhereInput
    orderBy?: Enumerable<CICMemberOrderByWithAggregationInput>
    by: CICMemberScalarFieldEnum[]
    having?: CICMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CICMemberCountAggregateInputType | true
    _avg?: CICMemberAvgAggregateInputType
    _sum?: CICMemberSumAggregateInputType
    _min?: CICMemberMinAggregateInputType
    _max?: CICMemberMaxAggregateInputType
  }


  export type CICMemberGroupByOutputType = {
    id: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
    team_id: number
    _count: CICMemberCountAggregateOutputType | null
    _avg: CICMemberAvgAggregateOutputType | null
    _sum: CICMemberSumAggregateOutputType | null
    _min: CICMemberMinAggregateOutputType | null
    _max: CICMemberMaxAggregateOutputType | null
  }

  type GetCICMemberGroupByPayload<T extends CICMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CICMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CICMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CICMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CICMemberGroupByOutputType[P]>
        }
      >
    >


  export type CICMemberSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    line_id?: boolean
    student_card?: boolean
    student_proof?: boolean
    study_major?: boolean
    generation?: boolean
    twibbon_proof?: boolean
    is_leader?: boolean
    team?: boolean | CICTeamArgs
    team_id?: boolean
  }


  export type CICMemberInclude = {
    team?: boolean | CICTeamArgs
  }

  export type CICMemberGetPayload<S extends boolean | null | undefined | CICMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CICMember :
    S extends undefined ? never :
    S extends { include: any } & (CICMemberArgs | CICMemberFindManyArgs)
    ? CICMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? CICTeamGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CICMemberArgs | CICMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? CICTeamGetPayload<S['select'][P]> :  P extends keyof CICMember ? CICMember[P] : never
  } 
      : CICMember


  type CICMemberCountArgs = 
    Omit<CICMemberFindManyArgs, 'select' | 'include'> & {
      select?: CICMemberCountAggregateInputType | true
    }

  export interface CICMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CICMember that matches the filter.
     * @param {CICMemberFindUniqueArgs} args - Arguments to find a CICMember
     * @example
     * // Get one CICMember
     * const cICMember = await prisma.cICMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CICMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CICMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CICMember'> extends True ? Prisma__CICMemberClient<CICMemberGetPayload<T>> : Prisma__CICMemberClient<CICMemberGetPayload<T> | null, null>

    /**
     * Find one CICMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CICMemberFindUniqueOrThrowArgs} args - Arguments to find a CICMember
     * @example
     * // Get one CICMember
     * const cICMember = await prisma.cICMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CICMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CICMemberFindUniqueOrThrowArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Find the first CICMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberFindFirstArgs} args - Arguments to find a CICMember
     * @example
     * // Get one CICMember
     * const cICMember = await prisma.cICMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CICMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CICMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CICMember'> extends True ? Prisma__CICMemberClient<CICMemberGetPayload<T>> : Prisma__CICMemberClient<CICMemberGetPayload<T> | null, null>

    /**
     * Find the first CICMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberFindFirstOrThrowArgs} args - Arguments to find a CICMember
     * @example
     * // Get one CICMember
     * const cICMember = await prisma.cICMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CICMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CICMemberFindFirstOrThrowArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Find zero or more CICMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CICMembers
     * const cICMembers = await prisma.cICMember.findMany()
     * 
     * // Get first 10 CICMembers
     * const cICMembers = await prisma.cICMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cICMemberWithIdOnly = await prisma.cICMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CICMemberFindManyArgs>(
      args?: SelectSubset<T, CICMemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<CICMemberGetPayload<T>>>

    /**
     * Create a CICMember.
     * @param {CICMemberCreateArgs} args - Arguments to create a CICMember.
     * @example
     * // Create one CICMember
     * const CICMember = await prisma.cICMember.create({
     *   data: {
     *     // ... data to create a CICMember
     *   }
     * })
     * 
    **/
    create<T extends CICMemberCreateArgs>(
      args: SelectSubset<T, CICMemberCreateArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Create many CICMembers.
     *     @param {CICMemberCreateManyArgs} args - Arguments to create many CICMembers.
     *     @example
     *     // Create many CICMembers
     *     const cICMember = await prisma.cICMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CICMemberCreateManyArgs>(
      args?: SelectSubset<T, CICMemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CICMember.
     * @param {CICMemberDeleteArgs} args - Arguments to delete one CICMember.
     * @example
     * // Delete one CICMember
     * const CICMember = await prisma.cICMember.delete({
     *   where: {
     *     // ... filter to delete one CICMember
     *   }
     * })
     * 
    **/
    delete<T extends CICMemberDeleteArgs>(
      args: SelectSubset<T, CICMemberDeleteArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Update one CICMember.
     * @param {CICMemberUpdateArgs} args - Arguments to update one CICMember.
     * @example
     * // Update one CICMember
     * const cICMember = await prisma.cICMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CICMemberUpdateArgs>(
      args: SelectSubset<T, CICMemberUpdateArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Delete zero or more CICMembers.
     * @param {CICMemberDeleteManyArgs} args - Arguments to filter CICMembers to delete.
     * @example
     * // Delete a few CICMembers
     * const { count } = await prisma.cICMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CICMemberDeleteManyArgs>(
      args?: SelectSubset<T, CICMemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CICMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CICMembers
     * const cICMember = await prisma.cICMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CICMemberUpdateManyArgs>(
      args: SelectSubset<T, CICMemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CICMember.
     * @param {CICMemberUpsertArgs} args - Arguments to update or create a CICMember.
     * @example
     * // Update or create a CICMember
     * const cICMember = await prisma.cICMember.upsert({
     *   create: {
     *     // ... data to create a CICMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CICMember we want to update
     *   }
     * })
    **/
    upsert<T extends CICMemberUpsertArgs>(
      args: SelectSubset<T, CICMemberUpsertArgs>
    ): Prisma__CICMemberClient<CICMemberGetPayload<T>>

    /**
     * Count the number of CICMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberCountArgs} args - Arguments to filter CICMembers to count.
     * @example
     * // Count the number of CICMembers
     * const count = await prisma.cICMember.count({
     *   where: {
     *     // ... the filter for the CICMembers we want to count
     *   }
     * })
    **/
    count<T extends CICMemberCountArgs>(
      args?: Subset<T, CICMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CICMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CICMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CICMemberAggregateArgs>(args: Subset<T, CICMemberAggregateArgs>): Prisma.PrismaPromise<GetCICMemberAggregateType<T>>

    /**
     * Group by CICMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CICMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CICMemberGroupByArgs['orderBy'] }
        : { orderBy?: CICMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CICMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCICMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CICMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CICMemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    team<T extends CICTeamArgs= {}>(args?: Subset<T, CICTeamArgs>): Prisma__CICTeamClient<CICTeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CICMember base type for findUnique actions
   */
  export type CICMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter, which CICMember to fetch.
     */
    where: CICMemberWhereUniqueInput
  }

  /**
   * CICMember findUnique
   */
  export interface CICMemberFindUniqueArgs extends CICMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CICMember findUniqueOrThrow
   */
  export type CICMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter, which CICMember to fetch.
     */
    where: CICMemberWhereUniqueInput
  }


  /**
   * CICMember base type for findFirst actions
   */
  export type CICMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter, which CICMember to fetch.
     */
    where?: CICMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICMembers to fetch.
     */
    orderBy?: Enumerable<CICMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CICMembers.
     */
    cursor?: CICMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CICMembers.
     */
    distinct?: Enumerable<CICMemberScalarFieldEnum>
  }

  /**
   * CICMember findFirst
   */
  export interface CICMemberFindFirstArgs extends CICMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CICMember findFirstOrThrow
   */
  export type CICMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter, which CICMember to fetch.
     */
    where?: CICMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICMembers to fetch.
     */
    orderBy?: Enumerable<CICMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CICMembers.
     */
    cursor?: CICMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CICMembers.
     */
    distinct?: Enumerable<CICMemberScalarFieldEnum>
  }


  /**
   * CICMember findMany
   */
  export type CICMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter, which CICMembers to fetch.
     */
    where?: CICMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICMembers to fetch.
     */
    orderBy?: Enumerable<CICMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CICMembers.
     */
    cursor?: CICMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICMembers.
     */
    skip?: number
    distinct?: Enumerable<CICMemberScalarFieldEnum>
  }


  /**
   * CICMember create
   */
  export type CICMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * The data needed to create a CICMember.
     */
    data: XOR<CICMemberCreateInput, CICMemberUncheckedCreateInput>
  }


  /**
   * CICMember createMany
   */
  export type CICMemberCreateManyArgs = {
    /**
     * The data used to create many CICMembers.
     */
    data: Enumerable<CICMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CICMember update
   */
  export type CICMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * The data needed to update a CICMember.
     */
    data: XOR<CICMemberUpdateInput, CICMemberUncheckedUpdateInput>
    /**
     * Choose, which CICMember to update.
     */
    where: CICMemberWhereUniqueInput
  }


  /**
   * CICMember updateMany
   */
  export type CICMemberUpdateManyArgs = {
    /**
     * The data used to update CICMembers.
     */
    data: XOR<CICMemberUpdateManyMutationInput, CICMemberUncheckedUpdateManyInput>
    /**
     * Filter which CICMembers to update
     */
    where?: CICMemberWhereInput
  }


  /**
   * CICMember upsert
   */
  export type CICMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * The filter to search for the CICMember to update in case it exists.
     */
    where: CICMemberWhereUniqueInput
    /**
     * In case the CICMember found by the `where` argument doesn't exist, create a new CICMember with this data.
     */
    create: XOR<CICMemberCreateInput, CICMemberUncheckedCreateInput>
    /**
     * In case the CICMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CICMemberUpdateInput, CICMemberUncheckedUpdateInput>
  }


  /**
   * CICMember delete
   */
  export type CICMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    /**
     * Filter which CICMember to delete.
     */
    where: CICMemberWhereUniqueInput
  }


  /**
   * CICMember deleteMany
   */
  export type CICMemberDeleteManyArgs = {
    /**
     * Filter which CICMembers to delete
     */
    where?: CICMemberWhereInput
  }


  /**
   * CICMember without action
   */
  export type CICMemberArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
  }



  /**
   * Model CICTeam
   */


  export type AggregateCICTeam = {
    _count: CICTeamCountAggregateOutputType | null
    _avg: CICTeamAvgAggregateOutputType | null
    _sum: CICTeamSumAggregateOutputType | null
    _min: CICTeamMinAggregateOutputType | null
    _max: CICTeamMaxAggregateOutputType | null
  }

  export type CICTeamAvgAggregateOutputType = {
    id: number | null
    payment_proof_id: number | null
  }

  export type CICTeamSumAggregateOutputType = {
    id: number | null
    payment_proof_id: number | null
  }

  export type CICTeamMinAggregateOutputType = {
    id: number | null
    team_name: string | null
    university: string | null
    payment_proof_id: number | null
    truth_statement: boolean | null
    stc_statement: boolean | null
    finalized_at: Date | null
  }

  export type CICTeamMaxAggregateOutputType = {
    id: number | null
    team_name: string | null
    university: string | null
    payment_proof_id: number | null
    truth_statement: boolean | null
    stc_statement: boolean | null
    finalized_at: Date | null
  }

  export type CICTeamCountAggregateOutputType = {
    id: number
    team_name: number
    university: number
    payment_proof_id: number
    truth_statement: number
    stc_statement: number
    finalized_at: number
    _all: number
  }


  export type CICTeamAvgAggregateInputType = {
    id?: true
    payment_proof_id?: true
  }

  export type CICTeamSumAggregateInputType = {
    id?: true
    payment_proof_id?: true
  }

  export type CICTeamMinAggregateInputType = {
    id?: true
    team_name?: true
    university?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
  }

  export type CICTeamMaxAggregateInputType = {
    id?: true
    team_name?: true
    university?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
  }

  export type CICTeamCountAggregateInputType = {
    id?: true
    team_name?: true
    university?: true
    payment_proof_id?: true
    truth_statement?: true
    stc_statement?: true
    finalized_at?: true
    _all?: true
  }

  export type CICTeamAggregateArgs = {
    /**
     * Filter which CICTeam to aggregate.
     */
    where?: CICTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICTeams to fetch.
     */
    orderBy?: Enumerable<CICTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CICTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CICTeams
    **/
    _count?: true | CICTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CICTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CICTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CICTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CICTeamMaxAggregateInputType
  }

  export type GetCICTeamAggregateType<T extends CICTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateCICTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCICTeam[P]>
      : GetScalarType<T[P], AggregateCICTeam[P]>
  }




  export type CICTeamGroupByArgs = {
    where?: CICTeamWhereInput
    orderBy?: Enumerable<CICTeamOrderByWithAggregationInput>
    by: CICTeamScalarFieldEnum[]
    having?: CICTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CICTeamCountAggregateInputType | true
    _avg?: CICTeamAvgAggregateInputType
    _sum?: CICTeamSumAggregateInputType
    _min?: CICTeamMinAggregateInputType
    _max?: CICTeamMaxAggregateInputType
  }


  export type CICTeamGroupByOutputType = {
    id: number
    team_name: string
    university: string
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date
    _count: CICTeamCountAggregateOutputType | null
    _avg: CICTeamAvgAggregateOutputType | null
    _sum: CICTeamSumAggregateOutputType | null
    _min: CICTeamMinAggregateOutputType | null
    _max: CICTeamMaxAggregateOutputType | null
  }

  type GetCICTeamGroupByPayload<T extends CICTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CICTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CICTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CICTeamGroupByOutputType[P]>
            : GetScalarType<T[P], CICTeamGroupByOutputType[P]>
        }
      >
    >


  export type CICTeamSelect = {
    id?: boolean
    team_name?: boolean
    university?: boolean
    payment_proof?: boolean | PaymentArgs
    payment_proof_id?: boolean
    members?: boolean | CICTeam$membersArgs
    truth_statement?: boolean
    stc_statement?: boolean
    finalized_at?: boolean
    _count?: boolean | CICTeamCountOutputTypeArgs
  }


  export type CICTeamInclude = {
    payment_proof?: boolean | PaymentArgs
    members?: boolean | CICTeam$membersArgs
    _count?: boolean | CICTeamCountOutputTypeArgs
  }

  export type CICTeamGetPayload<S extends boolean | null | undefined | CICTeamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CICTeam :
    S extends undefined ? never :
    S extends { include: any } & (CICTeamArgs | CICTeamFindManyArgs)
    ? CICTeam  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'payment_proof' ? PaymentGetPayload<S['include'][P]> :
        P extends 'members' ? Array < CICMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? CICTeamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CICTeamArgs | CICTeamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'payment_proof' ? PaymentGetPayload<S['select'][P]> :
        P extends 'members' ? Array < CICMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? CICTeamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CICTeam ? CICTeam[P] : never
  } 
      : CICTeam


  type CICTeamCountArgs = 
    Omit<CICTeamFindManyArgs, 'select' | 'include'> & {
      select?: CICTeamCountAggregateInputType | true
    }

  export interface CICTeamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CICTeam that matches the filter.
     * @param {CICTeamFindUniqueArgs} args - Arguments to find a CICTeam
     * @example
     * // Get one CICTeam
     * const cICTeam = await prisma.cICTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CICTeamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CICTeamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CICTeam'> extends True ? Prisma__CICTeamClient<CICTeamGetPayload<T>> : Prisma__CICTeamClient<CICTeamGetPayload<T> | null, null>

    /**
     * Find one CICTeam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CICTeamFindUniqueOrThrowArgs} args - Arguments to find a CICTeam
     * @example
     * // Get one CICTeam
     * const cICTeam = await prisma.cICTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CICTeamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CICTeamFindUniqueOrThrowArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Find the first CICTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamFindFirstArgs} args - Arguments to find a CICTeam
     * @example
     * // Get one CICTeam
     * const cICTeam = await prisma.cICTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CICTeamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CICTeamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CICTeam'> extends True ? Prisma__CICTeamClient<CICTeamGetPayload<T>> : Prisma__CICTeamClient<CICTeamGetPayload<T> | null, null>

    /**
     * Find the first CICTeam that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamFindFirstOrThrowArgs} args - Arguments to find a CICTeam
     * @example
     * // Get one CICTeam
     * const cICTeam = await prisma.cICTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CICTeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CICTeamFindFirstOrThrowArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Find zero or more CICTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CICTeams
     * const cICTeams = await prisma.cICTeam.findMany()
     * 
     * // Get first 10 CICTeams
     * const cICTeams = await prisma.cICTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cICTeamWithIdOnly = await prisma.cICTeam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CICTeamFindManyArgs>(
      args?: SelectSubset<T, CICTeamFindManyArgs>
    ): Prisma.PrismaPromise<Array<CICTeamGetPayload<T>>>

    /**
     * Create a CICTeam.
     * @param {CICTeamCreateArgs} args - Arguments to create a CICTeam.
     * @example
     * // Create one CICTeam
     * const CICTeam = await prisma.cICTeam.create({
     *   data: {
     *     // ... data to create a CICTeam
     *   }
     * })
     * 
    **/
    create<T extends CICTeamCreateArgs>(
      args: SelectSubset<T, CICTeamCreateArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Create many CICTeams.
     *     @param {CICTeamCreateManyArgs} args - Arguments to create many CICTeams.
     *     @example
     *     // Create many CICTeams
     *     const cICTeam = await prisma.cICTeam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CICTeamCreateManyArgs>(
      args?: SelectSubset<T, CICTeamCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CICTeam.
     * @param {CICTeamDeleteArgs} args - Arguments to delete one CICTeam.
     * @example
     * // Delete one CICTeam
     * const CICTeam = await prisma.cICTeam.delete({
     *   where: {
     *     // ... filter to delete one CICTeam
     *   }
     * })
     * 
    **/
    delete<T extends CICTeamDeleteArgs>(
      args: SelectSubset<T, CICTeamDeleteArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Update one CICTeam.
     * @param {CICTeamUpdateArgs} args - Arguments to update one CICTeam.
     * @example
     * // Update one CICTeam
     * const cICTeam = await prisma.cICTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CICTeamUpdateArgs>(
      args: SelectSubset<T, CICTeamUpdateArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Delete zero or more CICTeams.
     * @param {CICTeamDeleteManyArgs} args - Arguments to filter CICTeams to delete.
     * @example
     * // Delete a few CICTeams
     * const { count } = await prisma.cICTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CICTeamDeleteManyArgs>(
      args?: SelectSubset<T, CICTeamDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CICTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CICTeams
     * const cICTeam = await prisma.cICTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CICTeamUpdateManyArgs>(
      args: SelectSubset<T, CICTeamUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CICTeam.
     * @param {CICTeamUpsertArgs} args - Arguments to update or create a CICTeam.
     * @example
     * // Update or create a CICTeam
     * const cICTeam = await prisma.cICTeam.upsert({
     *   create: {
     *     // ... data to create a CICTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CICTeam we want to update
     *   }
     * })
    **/
    upsert<T extends CICTeamUpsertArgs>(
      args: SelectSubset<T, CICTeamUpsertArgs>
    ): Prisma__CICTeamClient<CICTeamGetPayload<T>>

    /**
     * Count the number of CICTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamCountArgs} args - Arguments to filter CICTeams to count.
     * @example
     * // Count the number of CICTeams
     * const count = await prisma.cICTeam.count({
     *   where: {
     *     // ... the filter for the CICTeams we want to count
     *   }
     * })
    **/
    count<T extends CICTeamCountArgs>(
      args?: Subset<T, CICTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CICTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CICTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CICTeamAggregateArgs>(args: Subset<T, CICTeamAggregateArgs>): Prisma.PrismaPromise<GetCICTeamAggregateType<T>>

    /**
     * Group by CICTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CICTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CICTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CICTeamGroupByArgs['orderBy'] }
        : { orderBy?: CICTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CICTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCICTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CICTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CICTeamClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    payment_proof<T extends PaymentArgs= {}>(args?: Subset<T, PaymentArgs>): Prisma__PaymentClient<PaymentGetPayload<T> | Null>;

    members<T extends CICTeam$membersArgs= {}>(args?: Subset<T, CICTeam$membersArgs>): Prisma.PrismaPromise<Array<CICMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CICTeam base type for findUnique actions
   */
  export type CICTeamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter, which CICTeam to fetch.
     */
    where: CICTeamWhereUniqueInput
  }

  /**
   * CICTeam findUnique
   */
  export interface CICTeamFindUniqueArgs extends CICTeamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CICTeam findUniqueOrThrow
   */
  export type CICTeamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter, which CICTeam to fetch.
     */
    where: CICTeamWhereUniqueInput
  }


  /**
   * CICTeam base type for findFirst actions
   */
  export type CICTeamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter, which CICTeam to fetch.
     */
    where?: CICTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICTeams to fetch.
     */
    orderBy?: Enumerable<CICTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CICTeams.
     */
    cursor?: CICTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CICTeams.
     */
    distinct?: Enumerable<CICTeamScalarFieldEnum>
  }

  /**
   * CICTeam findFirst
   */
  export interface CICTeamFindFirstArgs extends CICTeamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CICTeam findFirstOrThrow
   */
  export type CICTeamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter, which CICTeam to fetch.
     */
    where?: CICTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICTeams to fetch.
     */
    orderBy?: Enumerable<CICTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CICTeams.
     */
    cursor?: CICTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CICTeams.
     */
    distinct?: Enumerable<CICTeamScalarFieldEnum>
  }


  /**
   * CICTeam findMany
   */
  export type CICTeamFindManyArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter, which CICTeams to fetch.
     */
    where?: CICTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CICTeams to fetch.
     */
    orderBy?: Enumerable<CICTeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CICTeams.
     */
    cursor?: CICTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CICTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CICTeams.
     */
    skip?: number
    distinct?: Enumerable<CICTeamScalarFieldEnum>
  }


  /**
   * CICTeam create
   */
  export type CICTeamCreateArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * The data needed to create a CICTeam.
     */
    data: XOR<CICTeamCreateInput, CICTeamUncheckedCreateInput>
  }


  /**
   * CICTeam createMany
   */
  export type CICTeamCreateManyArgs = {
    /**
     * The data used to create many CICTeams.
     */
    data: Enumerable<CICTeamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CICTeam update
   */
  export type CICTeamUpdateArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * The data needed to update a CICTeam.
     */
    data: XOR<CICTeamUpdateInput, CICTeamUncheckedUpdateInput>
    /**
     * Choose, which CICTeam to update.
     */
    where: CICTeamWhereUniqueInput
  }


  /**
   * CICTeam updateMany
   */
  export type CICTeamUpdateManyArgs = {
    /**
     * The data used to update CICTeams.
     */
    data: XOR<CICTeamUpdateManyMutationInput, CICTeamUncheckedUpdateManyInput>
    /**
     * Filter which CICTeams to update
     */
    where?: CICTeamWhereInput
  }


  /**
   * CICTeam upsert
   */
  export type CICTeamUpsertArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * The filter to search for the CICTeam to update in case it exists.
     */
    where: CICTeamWhereUniqueInput
    /**
     * In case the CICTeam found by the `where` argument doesn't exist, create a new CICTeam with this data.
     */
    create: XOR<CICTeamCreateInput, CICTeamUncheckedCreateInput>
    /**
     * In case the CICTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CICTeamUpdateInput, CICTeamUncheckedUpdateInput>
  }


  /**
   * CICTeam delete
   */
  export type CICTeamDeleteArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
    /**
     * Filter which CICTeam to delete.
     */
    where: CICTeamWhereUniqueInput
  }


  /**
   * CICTeam deleteMany
   */
  export type CICTeamDeleteManyArgs = {
    /**
     * Filter which CICTeams to delete
     */
    where?: CICTeamWhereInput
  }


  /**
   * CICTeam.members
   */
  export type CICTeam$membersArgs = {
    /**
     * Select specific fields to fetch from the CICMember
     */
    select?: CICMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICMemberInclude | null
    where?: CICMemberWhereInput
    orderBy?: Enumerable<CICMemberOrderByWithRelationInput>
    cursor?: CICMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CICMemberScalarFieldEnum>
  }


  /**
   * CICTeam without action
   */
  export type CICTeamArgs = {
    /**
     * Select specific fields to fetch from the CICTeam
     */
    select?: CICTeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CICTeamInclude | null
  }



  /**
   * Model Announcement
   */


  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: number | null
    event: string | null
    message: string | null
    published_at: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: number | null
    event: string | null
    message: string | null
    published_at: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    event: number
    message: number
    published_at: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    event?: true
    message?: true
    published_at?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    event?: true
    message?: true
    published_at?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    event?: true
    message?: true
    published_at?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs = {
    where?: AnnouncementWhereInput
    orderBy?: Enumerable<AnnouncementOrderByWithAggregationInput>
    by: AnnouncementScalarFieldEnum[]
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }


  export type AnnouncementGroupByOutputType = {
    id: number
    event: string
    message: string
    published_at: Date
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect = {
    id?: boolean
    event?: boolean
    message?: boolean
    published_at?: boolean
  }


  export type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Announcement :
    S extends undefined ? never :
    S extends { include: any } & (AnnouncementArgs | AnnouncementFindManyArgs)
    ? Announcement 
    : S extends { select: any } & (AnnouncementArgs | AnnouncementFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Announcement ? Announcement[P] : never
  } 
      : Announcement


  type AnnouncementCountArgs = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnnouncementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnnouncementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Announcement'> extends True ? Prisma__AnnouncementClient<AnnouncementGetPayload<T>> : Prisma__AnnouncementClient<AnnouncementGetPayload<T> | null, null>

    /**
     * Find one Announcement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnnouncementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnnouncementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Announcement'> extends True ? Prisma__AnnouncementClient<AnnouncementGetPayload<T>> : Prisma__AnnouncementClient<AnnouncementGetPayload<T> | null, null>

    /**
     * Find the first Announcement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnnouncementFindManyArgs>(
      args?: SelectSubset<T, AnnouncementFindManyArgs>
    ): Prisma.PrismaPromise<Array<AnnouncementGetPayload<T>>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
    **/
    create<T extends AnnouncementCreateArgs>(
      args: SelectSubset<T, AnnouncementCreateArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Create many Announcements.
     *     @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     *     @example
     *     // Create many Announcements
     *     const announcement = await prisma.announcement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnnouncementCreateManyArgs>(
      args?: SelectSubset<T, AnnouncementCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
    **/
    delete<T extends AnnouncementDeleteArgs>(
      args: SelectSubset<T, AnnouncementDeleteArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnnouncementUpdateArgs>(
      args: SelectSubset<T, AnnouncementUpdateArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnnouncementDeleteManyArgs>(
      args?: SelectSubset<T, AnnouncementDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnnouncementUpdateManyArgs>(
      args: SelectSubset<T, AnnouncementUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
    **/
    upsert<T extends AnnouncementUpsertArgs>(
      args: SelectSubset<T, AnnouncementUpsertArgs>
    ): Prisma__AnnouncementClient<AnnouncementGetPayload<T>>

    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnnouncementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Announcement base type for findUnique actions
   */
  export type AnnouncementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUnique
   */
  export interface AnnouncementFindUniqueArgs extends AnnouncementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement base type for findFirst actions
   */
  export type AnnouncementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }

  /**
   * Announcement findFirst
   */
  export interface AnnouncementFindFirstArgs extends AnnouncementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }


  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs = {
    /**
     * The data used to create many Announcements.
     */
    data: Enumerable<AnnouncementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }


  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement without action
   */
  export type AnnouncementArgs = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect | null
  }



  /**
   * Model Service
   */


  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    service: string | null
    active: boolean | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    service: string | null
    active: boolean | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    service: number
    active: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    service?: true
    active?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    service?: true
    active?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    service?: true
    active?: true
    _all?: true
  }

  export type ServiceAggregateArgs = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs = {
    where?: ServiceWhereInput
    orderBy?: Enumerable<ServiceOrderByWithAggregationInput>
    by: ServiceScalarFieldEnum[]
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }


  export type ServiceGroupByOutputType = {
    id: number
    service: string
    active: boolean
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect = {
    id?: boolean
    service?: boolean
    active?: boolean
  }


  export type ServiceGetPayload<S extends boolean | null | undefined | ServiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Service :
    S extends undefined ? never :
    S extends { include: any } & (ServiceArgs | ServiceFindManyArgs)
    ? Service 
    : S extends { select: any } & (ServiceArgs | ServiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Service ? Service[P] : never
  } 
      : Service


  type ServiceCountArgs = 
    Omit<ServiceFindManyArgs, 'select' | 'include'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Service'> extends True ? Prisma__ServiceClient<ServiceGetPayload<T>> : Prisma__ServiceClient<ServiceGetPayload<T> | null, null>

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindUniqueOrThrowArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Service'> extends True ? Prisma__ServiceClient<ServiceGetPayload<T>> : Prisma__ServiceClient<ServiceGetPayload<T> | null, null>

    /**
     * Find the first Service that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceFindManyArgs>(
      args?: SelectSubset<T, ServiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServiceGetPayload<T>>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
    **/
    create<T extends ServiceCreateArgs>(
      args: SelectSubset<T, ServiceCreateArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Create many Services.
     *     @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceCreateManyArgs>(
      args?: SelectSubset<T, ServiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
    **/
    delete<T extends ServiceDeleteArgs>(
      args: SelectSubset<T, ServiceDeleteArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceUpdateArgs>(
      args: SelectSubset<T, ServiceUpdateArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceDeleteManyArgs>(
      args?: SelectSubset<T, ServiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceUpdateManyArgs>(
      args: SelectSubset<T, ServiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceUpsertArgs>(
      args: SelectSubset<T, ServiceUpsertArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Service base type for findUnique actions
   */
  export type ServiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUnique
   */
  export interface ServiceFindUniqueArgs extends ServiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service base type for findFirst actions
   */
  export type ServiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }

  /**
   * Service findFirst
   */
  export interface ServiceFindFirstArgs extends ServiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * Service findMany
   */
  export type ServiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * Service create
   */
  export type ServiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }


  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs = {
    /**
     * The data used to create many Services.
     */
    data: Enumerable<ServiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Service update
   */
  export type ServiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }


  /**
   * Service upsert
   */
  export type ServiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }


  /**
   * Service delete
   */
  export type ServiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }


  /**
   * Service without action
   */
  export type ServiceArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    event: 'event',
    message: 'message',
    published_at: 'published_at'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const CICMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    whatsapp: 'whatsapp',
    line_id: 'line_id',
    student_card: 'student_card',
    student_proof: 'student_proof',
    study_major: 'study_major',
    generation: 'generation',
    twibbon_proof: 'twibbon_proof',
    is_leader: 'is_leader',
    team_id: 'team_id'
  };

  export type CICMemberScalarFieldEnum = (typeof CICMemberScalarFieldEnum)[keyof typeof CICMemberScalarFieldEnum]


  export const CICTeamScalarFieldEnum: {
    id: 'id',
    team_name: 'team_name',
    university: 'university',
    payment_proof_id: 'payment_proof_id',
    truth_statement: 'truth_statement',
    stc_statement: 'stc_statement',
    finalized_at: 'finalized_at'
  };

  export type CICTeamScalarFieldEnum = (typeof CICTeamScalarFieldEnum)[keyof typeof CICTeamScalarFieldEnum]


  export const FCECMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    whatsapp: 'whatsapp',
    line_id: 'line_id',
    student_card: 'student_card',
    student_proof: 'student_proof',
    twibbon_proof: 'twibbon_proof',
    photo: 'photo',
    is_leader: 'is_leader',
    team_id: 'team_id'
  };

  export type FCECMemberScalarFieldEnum = (typeof FCECMemberScalarFieldEnum)[keyof typeof FCECMemberScalarFieldEnum]


  export const FCECTeamScalarFieldEnum: {
    id: 'id',
    school: 'school',
    abstract_title: 'abstract_title',
    team_name: 'team_name',
    originality_letter: 'originality_letter',
    abstract: 'abstract',
    finalized_at: 'finalized_at'
  };

  export type FCECTeamScalarFieldEnum = (typeof FCECTeamScalarFieldEnum)[keyof typeof FCECTeamScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    proof: 'proof'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SBCLecturerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profession_id: 'profession_id',
    email: 'email',
    whatsapp: 'whatsapp',
    photo: 'photo'
  };

  export type SBCLecturerScalarFieldEnum = (typeof SBCLecturerScalarFieldEnum)[keyof typeof SBCLecturerScalarFieldEnum]


  export const SBCMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    student_id: 'student_id',
    study_major: 'study_major',
    semester: 'semester',
    email: 'email',
    whatsapp: 'whatsapp',
    line_id: 'line_id',
    twibbon_proof: 'twibbon_proof',
    student_card: 'student_card',
    student_proof: 'student_proof',
    photo: 'photo',
    is_leader: 'is_leader',
    team_id: 'team_id'
  };

  export type SBCMemberScalarFieldEnum = (typeof SBCMemberScalarFieldEnum)[keyof typeof SBCMemberScalarFieldEnum]


  export const SBCTeamScalarFieldEnum: {
    id: 'id',
    university: 'university',
    team_name: 'team_name',
    bridge_name: 'bridge_name',
    voucher_proof: 'voucher_proof',
    lecturer_id: 'lecturer_id',
    payment_proof_id: 'payment_proof_id',
    truth_statement: 'truth_statement',
    stc_statement: 'stc_statement',
    finalized_at: 'finalized_at'
  };

  export type SBCTeamScalarFieldEnum = (typeof SBCTeamScalarFieldEnum)[keyof typeof SBCTeamScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    service: 'service',
    active: 'active'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type SBCTeamWhereInput = {
    AND?: Enumerable<SBCTeamWhereInput>
    OR?: Enumerable<SBCTeamWhereInput>
    NOT?: Enumerable<SBCTeamWhereInput>
    id?: IntFilter | number
    university?: StringFilter | string
    team_name?: StringFilter | string
    bridge_name?: StringFilter | string
    voucher_proof?: StringFilter | string
    members?: SBCMemberListRelationFilter
    lecturer?: XOR<SBCLecturerRelationFilter, SBCLecturerWhereInput>
    lecturer_id?: IntFilter | number
    payment_proof?: XOR<PaymentRelationFilter, PaymentWhereInput>
    payment_proof_id?: IntFilter | number
    truth_statement?: BoolFilter | boolean
    stc_statement?: BoolFilter | boolean
    finalized_at?: DateTimeFilter | Date | string
  }

  export type SBCTeamOrderByWithRelationInput = {
    id?: SortOrder
    university?: SortOrder
    team_name?: SortOrder
    bridge_name?: SortOrder
    voucher_proof?: SortOrder
    members?: SBCMemberOrderByRelationAggregateInput
    lecturer?: SBCLecturerOrderByWithRelationInput
    lecturer_id?: SortOrder
    payment_proof?: PaymentOrderByWithRelationInput
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type SBCTeamWhereUniqueInput = {
    id?: number
    lecturer_id?: number
    payment_proof_id?: number
  }

  export type SBCTeamOrderByWithAggregationInput = {
    id?: SortOrder
    university?: SortOrder
    team_name?: SortOrder
    bridge_name?: SortOrder
    voucher_proof?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
    _count?: SBCTeamCountOrderByAggregateInput
    _avg?: SBCTeamAvgOrderByAggregateInput
    _max?: SBCTeamMaxOrderByAggregateInput
    _min?: SBCTeamMinOrderByAggregateInput
    _sum?: SBCTeamSumOrderByAggregateInput
  }

  export type SBCTeamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SBCTeamScalarWhereWithAggregatesInput>
    OR?: Enumerable<SBCTeamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SBCTeamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    university?: StringWithAggregatesFilter | string
    team_name?: StringWithAggregatesFilter | string
    bridge_name?: StringWithAggregatesFilter | string
    voucher_proof?: StringWithAggregatesFilter | string
    lecturer_id?: IntWithAggregatesFilter | number
    payment_proof_id?: IntWithAggregatesFilter | number
    truth_statement?: BoolWithAggregatesFilter | boolean
    stc_statement?: BoolWithAggregatesFilter | boolean
    finalized_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SBCMemberWhereInput = {
    AND?: Enumerable<SBCMemberWhereInput>
    OR?: Enumerable<SBCMemberWhereInput>
    NOT?: Enumerable<SBCMemberWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    student_id?: StringFilter | string
    study_major?: StringFilter | string
    semester?: IntFilter | number
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    twibbon_proof?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    photo?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team?: XOR<SBCTeamRelationFilter, SBCTeamWhereInput>
    team_id?: IntFilter | number
  }

  export type SBCMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    student_id?: SortOrder
    study_major?: SortOrder
    semester?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    twibbon_proof?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team?: SBCTeamOrderByWithRelationInput
    team_id?: SortOrder
  }

  export type SBCMemberWhereUniqueInput = {
    id?: number
  }

  export type SBCMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    student_id?: SortOrder
    study_major?: SortOrder
    semester?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    twibbon_proof?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
    _count?: SBCMemberCountOrderByAggregateInput
    _avg?: SBCMemberAvgOrderByAggregateInput
    _max?: SBCMemberMaxOrderByAggregateInput
    _min?: SBCMemberMinOrderByAggregateInput
    _sum?: SBCMemberSumOrderByAggregateInput
  }

  export type SBCMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SBCMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<SBCMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SBCMemberScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    student_id?: StringWithAggregatesFilter | string
    study_major?: StringWithAggregatesFilter | string
    semester?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    line_id?: StringWithAggregatesFilter | string
    twibbon_proof?: StringWithAggregatesFilter | string
    student_card?: StringWithAggregatesFilter | string
    student_proof?: StringWithAggregatesFilter | string
    photo?: StringWithAggregatesFilter | string
    is_leader?: BoolWithAggregatesFilter | boolean
    team_id?: IntWithAggregatesFilter | number
  }

  export type SBCLecturerWhereInput = {
    AND?: Enumerable<SBCLecturerWhereInput>
    OR?: Enumerable<SBCLecturerWhereInput>
    NOT?: Enumerable<SBCLecturerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    profession_id?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    photo?: StringFilter | string
    team?: XOR<SBCTeamRelationFilter, SBCTeamWhereInput> | null
  }

  export type SBCLecturerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profession_id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    photo?: SortOrder
    team?: SBCTeamOrderByWithRelationInput
  }

  export type SBCLecturerWhereUniqueInput = {
    id?: number
  }

  export type SBCLecturerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profession_id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    photo?: SortOrder
    _count?: SBCLecturerCountOrderByAggregateInput
    _avg?: SBCLecturerAvgOrderByAggregateInput
    _max?: SBCLecturerMaxOrderByAggregateInput
    _min?: SBCLecturerMinOrderByAggregateInput
    _sum?: SBCLecturerSumOrderByAggregateInput
  }

  export type SBCLecturerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SBCLecturerScalarWhereWithAggregatesInput>
    OR?: Enumerable<SBCLecturerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SBCLecturerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    profession_id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    photo?: StringWithAggregatesFilter | string
  }

  export type PaymentWhereInput = {
    AND?: Enumerable<PaymentWhereInput>
    OR?: Enumerable<PaymentWhereInput>
    NOT?: Enumerable<PaymentWhereInput>
    id?: IntFilter | number
    proof?: StringFilter | string
    sbc_team?: XOR<SBCTeamRelationFilter, SBCTeamWhereInput> | null
    cic_team?: XOR<CICTeamRelationFilter, CICTeamWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    proof?: SortOrder
    sbc_team?: SBCTeamOrderByWithRelationInput
    cic_team?: CICTeamOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = {
    id?: number
  }

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    proof?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    proof?: StringWithAggregatesFilter | string
  }

  export type FCECMemberWhereInput = {
    AND?: Enumerable<FCECMemberWhereInput>
    OR?: Enumerable<FCECMemberWhereInput>
    NOT?: Enumerable<FCECMemberWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    twibbon_proof?: StringFilter | string
    photo?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team?: XOR<FCECTeamRelationFilter, FCECTeamWhereInput>
    team_id?: IntFilter | number
  }

  export type FCECMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    twibbon_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team?: FCECTeamOrderByWithRelationInput
    team_id?: SortOrder
  }

  export type FCECMemberWhereUniqueInput = {
    id?: number
  }

  export type FCECMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    twibbon_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
    _count?: FCECMemberCountOrderByAggregateInput
    _avg?: FCECMemberAvgOrderByAggregateInput
    _max?: FCECMemberMaxOrderByAggregateInput
    _min?: FCECMemberMinOrderByAggregateInput
    _sum?: FCECMemberSumOrderByAggregateInput
  }

  export type FCECMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FCECMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<FCECMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FCECMemberScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    line_id?: StringWithAggregatesFilter | string
    student_card?: StringWithAggregatesFilter | string
    student_proof?: StringWithAggregatesFilter | string
    twibbon_proof?: StringWithAggregatesFilter | string
    photo?: StringWithAggregatesFilter | string
    is_leader?: BoolWithAggregatesFilter | boolean
    team_id?: IntWithAggregatesFilter | number
  }

  export type FCECTeamWhereInput = {
    AND?: Enumerable<FCECTeamWhereInput>
    OR?: Enumerable<FCECTeamWhereInput>
    NOT?: Enumerable<FCECTeamWhereInput>
    id?: IntFilter | number
    school?: StringFilter | string
    abstract_title?: StringFilter | string
    team_name?: StringFilter | string
    originality_letter?: StringFilter | string
    abstract?: StringFilter | string
    members?: FCECMemberListRelationFilter
    finalized_at?: DateTimeFilter | Date | string
  }

  export type FCECTeamOrderByWithRelationInput = {
    id?: SortOrder
    school?: SortOrder
    abstract_title?: SortOrder
    team_name?: SortOrder
    originality_letter?: SortOrder
    abstract?: SortOrder
    members?: FCECMemberOrderByRelationAggregateInput
    finalized_at?: SortOrder
  }

  export type FCECTeamWhereUniqueInput = {
    id?: number
  }

  export type FCECTeamOrderByWithAggregationInput = {
    id?: SortOrder
    school?: SortOrder
    abstract_title?: SortOrder
    team_name?: SortOrder
    originality_letter?: SortOrder
    abstract?: SortOrder
    finalized_at?: SortOrder
    _count?: FCECTeamCountOrderByAggregateInput
    _avg?: FCECTeamAvgOrderByAggregateInput
    _max?: FCECTeamMaxOrderByAggregateInput
    _min?: FCECTeamMinOrderByAggregateInput
    _sum?: FCECTeamSumOrderByAggregateInput
  }

  export type FCECTeamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FCECTeamScalarWhereWithAggregatesInput>
    OR?: Enumerable<FCECTeamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FCECTeamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    school?: StringWithAggregatesFilter | string
    abstract_title?: StringWithAggregatesFilter | string
    team_name?: StringWithAggregatesFilter | string
    originality_letter?: StringWithAggregatesFilter | string
    abstract?: StringWithAggregatesFilter | string
    finalized_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CICMemberWhereInput = {
    AND?: Enumerable<CICMemberWhereInput>
    OR?: Enumerable<CICMemberWhereInput>
    NOT?: Enumerable<CICMemberWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    study_major?: StringFilter | string
    generation?: StringFilter | string
    twibbon_proof?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team?: XOR<CICTeamRelationFilter, CICTeamWhereInput>
    team_id?: IntFilter | number
  }

  export type CICMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    study_major?: SortOrder
    generation?: SortOrder
    twibbon_proof?: SortOrder
    is_leader?: SortOrder
    team?: CICTeamOrderByWithRelationInput
    team_id?: SortOrder
  }

  export type CICMemberWhereUniqueInput = {
    id?: number
  }

  export type CICMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    study_major?: SortOrder
    generation?: SortOrder
    twibbon_proof?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
    _count?: CICMemberCountOrderByAggregateInput
    _avg?: CICMemberAvgOrderByAggregateInput
    _max?: CICMemberMaxOrderByAggregateInput
    _min?: CICMemberMinOrderByAggregateInput
    _sum?: CICMemberSumOrderByAggregateInput
  }

  export type CICMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CICMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<CICMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CICMemberScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    line_id?: StringWithAggregatesFilter | string
    student_card?: StringWithAggregatesFilter | string
    student_proof?: StringWithAggregatesFilter | string
    study_major?: StringWithAggregatesFilter | string
    generation?: StringWithAggregatesFilter | string
    twibbon_proof?: StringWithAggregatesFilter | string
    is_leader?: BoolWithAggregatesFilter | boolean
    team_id?: IntWithAggregatesFilter | number
  }

  export type CICTeamWhereInput = {
    AND?: Enumerable<CICTeamWhereInput>
    OR?: Enumerable<CICTeamWhereInput>
    NOT?: Enumerable<CICTeamWhereInput>
    id?: IntFilter | number
    team_name?: StringFilter | string
    university?: StringFilter | string
    payment_proof?: XOR<PaymentRelationFilter, PaymentWhereInput>
    payment_proof_id?: IntFilter | number
    members?: CICMemberListRelationFilter
    truth_statement?: BoolFilter | boolean
    stc_statement?: BoolFilter | boolean
    finalized_at?: DateTimeFilter | Date | string
  }

  export type CICTeamOrderByWithRelationInput = {
    id?: SortOrder
    team_name?: SortOrder
    university?: SortOrder
    payment_proof?: PaymentOrderByWithRelationInput
    payment_proof_id?: SortOrder
    members?: CICMemberOrderByRelationAggregateInput
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type CICTeamWhereUniqueInput = {
    id?: number
    payment_proof_id?: number
  }

  export type CICTeamOrderByWithAggregationInput = {
    id?: SortOrder
    team_name?: SortOrder
    university?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
    _count?: CICTeamCountOrderByAggregateInput
    _avg?: CICTeamAvgOrderByAggregateInput
    _max?: CICTeamMaxOrderByAggregateInput
    _min?: CICTeamMinOrderByAggregateInput
    _sum?: CICTeamSumOrderByAggregateInput
  }

  export type CICTeamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CICTeamScalarWhereWithAggregatesInput>
    OR?: Enumerable<CICTeamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CICTeamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    team_name?: StringWithAggregatesFilter | string
    university?: StringWithAggregatesFilter | string
    payment_proof_id?: IntWithAggregatesFilter | number
    truth_statement?: BoolWithAggregatesFilter | boolean
    stc_statement?: BoolWithAggregatesFilter | boolean
    finalized_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: Enumerable<AnnouncementWhereInput>
    OR?: Enumerable<AnnouncementWhereInput>
    NOT?: Enumerable<AnnouncementWhereInput>
    id?: IntFilter | number
    event?: StringFilter | string
    message?: StringFilter | string
    published_at?: DateTimeFilter | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    message?: SortOrder
    published_at?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = {
    id?: number
  }

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    message?: SortOrder
    published_at?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    event?: StringWithAggregatesFilter | string
    message?: StringWithAggregatesFilter | string
    published_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ServiceWhereInput = {
    AND?: Enumerable<ServiceWhereInput>
    OR?: Enumerable<ServiceWhereInput>
    NOT?: Enumerable<ServiceWhereInput>
    id?: IntFilter | number
    service?: StringFilter | string
    active?: BoolFilter | boolean
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    active?: SortOrder
  }

  export type ServiceWhereUniqueInput = {
    id?: number
    service?: string
  }

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    active?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    service?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
  }

  export type SBCTeamCreateInput = {
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberCreateNestedManyWithoutTeamInput
    lecturer: SBCLecturerCreateNestedOneWithoutTeamInput
    payment_proof: PaymentCreateNestedOneWithoutSbc_teamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUncheckedCreateInput = {
    id?: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberUncheckedCreateNestedManyWithoutTeamInput
    lecturer_id: number
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUpdateInput = {
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUpdateManyWithoutTeamNestedInput
    lecturer?: SBCLecturerUpdateOneRequiredWithoutTeamNestedInput
    payment_proof?: PaymentUpdateOneRequiredWithoutSbc_teamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUncheckedUpdateManyWithoutTeamNestedInput
    lecturer_id?: IntFieldUpdateOperationsInput | number
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamCreateManyInput = {
    id?: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    lecturer_id: number
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUpdateManyMutationInput = {
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    lecturer_id?: IntFieldUpdateOperationsInput | number
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCMemberCreateInput = {
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
    team: SBCTeamCreateNestedOneWithoutMembersInput
  }

  export type SBCMemberUncheckedCreateInput = {
    id?: number
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
    team_id: number
  }

  export type SBCMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team?: SBCTeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type SBCMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type SBCMemberCreateManyInput = {
    id?: number
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
    team_id: number
  }

  export type SBCMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SBCMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type SBCLecturerCreateInput = {
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
    team?: SBCTeamCreateNestedOneWithoutLecturerInput
  }

  export type SBCLecturerUncheckedCreateInput = {
    id?: number
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
    team?: SBCTeamUncheckedCreateNestedOneWithoutLecturerInput
  }

  export type SBCLecturerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    team?: SBCTeamUpdateOneWithoutLecturerNestedInput
  }

  export type SBCLecturerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    team?: SBCTeamUncheckedUpdateOneWithoutLecturerNestedInput
  }

  export type SBCLecturerCreateManyInput = {
    id?: number
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
  }

  export type SBCLecturerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type SBCLecturerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    proof: string
    sbc_team?: SBCTeamCreateNestedOneWithoutPayment_proofInput
    cic_team?: CICTeamCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    proof: string
    sbc_team?: SBCTeamUncheckedCreateNestedOneWithoutPayment_proofInput
    cic_team?: CICTeamUncheckedCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentUpdateInput = {
    proof?: StringFieldUpdateOperationsInput | string
    sbc_team?: SBCTeamUpdateOneWithoutPayment_proofNestedInput
    cic_team?: CICTeamUpdateOneWithoutPayment_proofNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    proof?: StringFieldUpdateOperationsInput | string
    sbc_team?: SBCTeamUncheckedUpdateOneWithoutPayment_proofNestedInput
    cic_team?: CICTeamUncheckedUpdateOneWithoutPayment_proofNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    proof: string
  }

  export type PaymentUpdateManyMutationInput = {
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type FCECMemberCreateInput = {
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
    team: FCECTeamCreateNestedOneWithoutMembersInput
  }

  export type FCECMemberUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
    team_id: number
  }

  export type FCECMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team?: FCECTeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type FCECMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type FCECMemberCreateManyInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
    team_id: number
  }

  export type FCECMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FCECMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type FCECTeamCreateInput = {
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    members?: FCECMemberCreateNestedManyWithoutTeamInput
    finalized_at: Date | string
  }

  export type FCECTeamUncheckedCreateInput = {
    id?: number
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    members?: FCECMemberUncheckedCreateNestedManyWithoutTeamInput
    finalized_at: Date | string
  }

  export type FCECTeamUpdateInput = {
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    members?: FCECMemberUpdateManyWithoutTeamNestedInput
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECTeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    members?: FCECMemberUncheckedUpdateManyWithoutTeamNestedInput
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECTeamCreateManyInput = {
    id?: number
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    finalized_at: Date | string
  }

  export type FCECTeamUpdateManyMutationInput = {
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECTeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICMemberCreateInput = {
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
    team: CICTeamCreateNestedOneWithoutMembersInput
  }

  export type CICMemberUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
    team_id: number
  }

  export type CICMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team?: CICTeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CICMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type CICMemberCreateManyInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
    team_id: number
  }

  export type CICMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CICMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
    team_id?: IntFieldUpdateOperationsInput | number
  }

  export type CICTeamCreateInput = {
    team_name: string
    university: string
    payment_proof: PaymentCreateNestedOneWithoutCic_teamInput
    members?: CICMemberCreateNestedManyWithoutTeamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamUncheckedCreateInput = {
    id?: number
    team_name: string
    university: string
    payment_proof_id: number
    members?: CICMemberUncheckedCreateNestedManyWithoutTeamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamUpdateInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    payment_proof?: PaymentUpdateOneRequiredWithoutCic_teamNestedInput
    members?: CICMemberUpdateManyWithoutTeamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    members?: CICMemberUncheckedUpdateManyWithoutTeamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamCreateManyInput = {
    id?: number
    team_name: string
    university: string
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamUpdateManyMutationInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    event: string
    message: string
    published_at: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: number
    event: string
    message: string
    published_at: Date | string
  }

  export type AnnouncementUpdateInput = {
    event?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: number
    event: string
    message: string
    published_at: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    event?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    service: string
    active: boolean
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    service: string
    active: boolean
  }

  export type ServiceUpdateInput = {
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceCreateManyInput = {
    id?: number
    service: string
    active: boolean
  }

  export type ServiceUpdateManyMutationInput = {
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type SBCMemberListRelationFilter = {
    every?: SBCMemberWhereInput
    some?: SBCMemberWhereInput
    none?: SBCMemberWhereInput
  }

  export type SBCLecturerRelationFilter = {
    is?: SBCLecturerWhereInput
    isNot?: SBCLecturerWhereInput
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SBCMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SBCTeamCountOrderByAggregateInput = {
    id?: SortOrder
    university?: SortOrder
    team_name?: SortOrder
    bridge_name?: SortOrder
    voucher_proof?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type SBCTeamAvgOrderByAggregateInput = {
    id?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
  }

  export type SBCTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    university?: SortOrder
    team_name?: SortOrder
    bridge_name?: SortOrder
    voucher_proof?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type SBCTeamMinOrderByAggregateInput = {
    id?: SortOrder
    university?: SortOrder
    team_name?: SortOrder
    bridge_name?: SortOrder
    voucher_proof?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type SBCTeamSumOrderByAggregateInput = {
    id?: SortOrder
    lecturer_id?: SortOrder
    payment_proof_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SBCTeamRelationFilter = {
    is?: SBCTeamWhereInput | null
    isNot?: SBCTeamWhereInput | null
  }

  export type SBCMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    student_id?: SortOrder
    study_major?: SortOrder
    semester?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    twibbon_proof?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type SBCMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    team_id?: SortOrder
  }

  export type SBCMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    student_id?: SortOrder
    study_major?: SortOrder
    semester?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    twibbon_proof?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type SBCMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    student_id?: SortOrder
    study_major?: SortOrder
    semester?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    twibbon_proof?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type SBCMemberSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    team_id?: SortOrder
  }

  export type SBCLecturerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession_id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    photo?: SortOrder
  }

  export type SBCLecturerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SBCLecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession_id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    photo?: SortOrder
  }

  export type SBCLecturerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession_id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    photo?: SortOrder
  }

  export type SBCLecturerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CICTeamRelationFilter = {
    is?: CICTeamWhereInput
    isNot?: CICTeamWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    proof?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    proof?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    proof?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FCECTeamRelationFilter = {
    is?: FCECTeamWhereInput
    isNot?: FCECTeamWhereInput
  }

  export type FCECMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    twibbon_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type FCECMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
  }

  export type FCECMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    twibbon_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type FCECMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    twibbon_proof?: SortOrder
    photo?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type FCECMemberSumOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
  }

  export type FCECMemberListRelationFilter = {
    every?: FCECMemberWhereInput
    some?: FCECMemberWhereInput
    none?: FCECMemberWhereInput
  }

  export type FCECMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FCECTeamCountOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    abstract_title?: SortOrder
    team_name?: SortOrder
    originality_letter?: SortOrder
    abstract?: SortOrder
    finalized_at?: SortOrder
  }

  export type FCECTeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FCECTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    abstract_title?: SortOrder
    team_name?: SortOrder
    originality_letter?: SortOrder
    abstract?: SortOrder
    finalized_at?: SortOrder
  }

  export type FCECTeamMinOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    abstract_title?: SortOrder
    team_name?: SortOrder
    originality_letter?: SortOrder
    abstract?: SortOrder
    finalized_at?: SortOrder
  }

  export type FCECTeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CICMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    study_major?: SortOrder
    generation?: SortOrder
    twibbon_proof?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type CICMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
  }

  export type CICMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    study_major?: SortOrder
    generation?: SortOrder
    twibbon_proof?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type CICMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    line_id?: SortOrder
    student_card?: SortOrder
    student_proof?: SortOrder
    study_major?: SortOrder
    generation?: SortOrder
    twibbon_proof?: SortOrder
    is_leader?: SortOrder
    team_id?: SortOrder
  }

  export type CICMemberSumOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
  }

  export type CICMemberListRelationFilter = {
    every?: CICMemberWhereInput
    some?: CICMemberWhereInput
    none?: CICMemberWhereInput
  }

  export type CICMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CICTeamCountOrderByAggregateInput = {
    id?: SortOrder
    team_name?: SortOrder
    university?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type CICTeamAvgOrderByAggregateInput = {
    id?: SortOrder
    payment_proof_id?: SortOrder
  }

  export type CICTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    team_name?: SortOrder
    university?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type CICTeamMinOrderByAggregateInput = {
    id?: SortOrder
    team_name?: SortOrder
    university?: SortOrder
    payment_proof_id?: SortOrder
    truth_statement?: SortOrder
    stc_statement?: SortOrder
    finalized_at?: SortOrder
  }

  export type CICTeamSumOrderByAggregateInput = {
    id?: SortOrder
    payment_proof_id?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    message?: SortOrder
    published_at?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    message?: SortOrder
    published_at?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    message?: SortOrder
    published_at?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    active?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    active?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    active?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SBCMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<SBCMemberCreateWithoutTeamInput>, Enumerable<SBCMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<SBCMemberCreateOrConnectWithoutTeamInput>
    createMany?: SBCMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<SBCMemberWhereUniqueInput>
  }

  export type SBCLecturerCreateNestedOneWithoutTeamInput = {
    create?: XOR<SBCLecturerCreateWithoutTeamInput, SBCLecturerUncheckedCreateWithoutTeamInput>
    connectOrCreate?: SBCLecturerCreateOrConnectWithoutTeamInput
    connect?: SBCLecturerWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutSbc_teamInput = {
    create?: XOR<PaymentCreateWithoutSbc_teamInput, PaymentUncheckedCreateWithoutSbc_teamInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSbc_teamInput
    connect?: PaymentWhereUniqueInput
  }

  export type SBCMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<SBCMemberCreateWithoutTeamInput>, Enumerable<SBCMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<SBCMemberCreateOrConnectWithoutTeamInput>
    createMany?: SBCMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<SBCMemberWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SBCMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<SBCMemberCreateWithoutTeamInput>, Enumerable<SBCMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<SBCMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<SBCMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: SBCMemberCreateManyTeamInputEnvelope
    set?: Enumerable<SBCMemberWhereUniqueInput>
    disconnect?: Enumerable<SBCMemberWhereUniqueInput>
    delete?: Enumerable<SBCMemberWhereUniqueInput>
    connect?: Enumerable<SBCMemberWhereUniqueInput>
    update?: Enumerable<SBCMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<SBCMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<SBCMemberScalarWhereInput>
  }

  export type SBCLecturerUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<SBCLecturerCreateWithoutTeamInput, SBCLecturerUncheckedCreateWithoutTeamInput>
    connectOrCreate?: SBCLecturerCreateOrConnectWithoutTeamInput
    upsert?: SBCLecturerUpsertWithoutTeamInput
    connect?: SBCLecturerWhereUniqueInput
    update?: XOR<SBCLecturerUpdateWithoutTeamInput, SBCLecturerUncheckedUpdateWithoutTeamInput>
  }

  export type PaymentUpdateOneRequiredWithoutSbc_teamNestedInput = {
    create?: XOR<PaymentCreateWithoutSbc_teamInput, PaymentUncheckedCreateWithoutSbc_teamInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSbc_teamInput
    upsert?: PaymentUpsertWithoutSbc_teamInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<PaymentUpdateWithoutSbc_teamInput, PaymentUncheckedUpdateWithoutSbc_teamInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SBCMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<SBCMemberCreateWithoutTeamInput>, Enumerable<SBCMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<SBCMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<SBCMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: SBCMemberCreateManyTeamInputEnvelope
    set?: Enumerable<SBCMemberWhereUniqueInput>
    disconnect?: Enumerable<SBCMemberWhereUniqueInput>
    delete?: Enumerable<SBCMemberWhereUniqueInput>
    connect?: Enumerable<SBCMemberWhereUniqueInput>
    update?: Enumerable<SBCMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<SBCMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<SBCMemberScalarWhereInput>
  }

  export type SBCTeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<SBCTeamCreateWithoutMembersInput, SBCTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutMembersInput
    connect?: SBCTeamWhereUniqueInput
  }

  export type SBCTeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<SBCTeamCreateWithoutMembersInput, SBCTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutMembersInput
    upsert?: SBCTeamUpsertWithoutMembersInput
    connect?: SBCTeamWhereUniqueInput
    update?: XOR<SBCTeamUpdateWithoutMembersInput, SBCTeamUncheckedUpdateWithoutMembersInput>
  }

  export type SBCTeamCreateNestedOneWithoutLecturerInput = {
    create?: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutLecturerInput
    connect?: SBCTeamWhereUniqueInput
  }

  export type SBCTeamUncheckedCreateNestedOneWithoutLecturerInput = {
    create?: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutLecturerInput
    connect?: SBCTeamWhereUniqueInput
  }

  export type SBCTeamUpdateOneWithoutLecturerNestedInput = {
    create?: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutLecturerInput
    upsert?: SBCTeamUpsertWithoutLecturerInput
    disconnect?: boolean
    delete?: boolean
    connect?: SBCTeamWhereUniqueInput
    update?: XOR<SBCTeamUpdateWithoutLecturerInput, SBCTeamUncheckedUpdateWithoutLecturerInput>
  }

  export type SBCTeamUncheckedUpdateOneWithoutLecturerNestedInput = {
    create?: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutLecturerInput
    upsert?: SBCTeamUpsertWithoutLecturerInput
    disconnect?: boolean
    delete?: boolean
    connect?: SBCTeamWhereUniqueInput
    update?: XOR<SBCTeamUpdateWithoutLecturerInput, SBCTeamUncheckedUpdateWithoutLecturerInput>
  }

  export type SBCTeamCreateNestedOneWithoutPayment_proofInput = {
    create?: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutPayment_proofInput
    connect?: SBCTeamWhereUniqueInput
  }

  export type CICTeamCreateNestedOneWithoutPayment_proofInput = {
    create?: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutPayment_proofInput
    connect?: CICTeamWhereUniqueInput
  }

  export type SBCTeamUncheckedCreateNestedOneWithoutPayment_proofInput = {
    create?: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutPayment_proofInput
    connect?: SBCTeamWhereUniqueInput
  }

  export type CICTeamUncheckedCreateNestedOneWithoutPayment_proofInput = {
    create?: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutPayment_proofInput
    connect?: CICTeamWhereUniqueInput
  }

  export type SBCTeamUpdateOneWithoutPayment_proofNestedInput = {
    create?: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutPayment_proofInput
    upsert?: SBCTeamUpsertWithoutPayment_proofInput
    disconnect?: boolean
    delete?: boolean
    connect?: SBCTeamWhereUniqueInput
    update?: XOR<SBCTeamUpdateWithoutPayment_proofInput, SBCTeamUncheckedUpdateWithoutPayment_proofInput>
  }

  export type CICTeamUpdateOneWithoutPayment_proofNestedInput = {
    create?: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutPayment_proofInput
    upsert?: CICTeamUpsertWithoutPayment_proofInput
    disconnect?: boolean
    delete?: boolean
    connect?: CICTeamWhereUniqueInput
    update?: XOR<CICTeamUpdateWithoutPayment_proofInput, CICTeamUncheckedUpdateWithoutPayment_proofInput>
  }

  export type SBCTeamUncheckedUpdateOneWithoutPayment_proofNestedInput = {
    create?: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: SBCTeamCreateOrConnectWithoutPayment_proofInput
    upsert?: SBCTeamUpsertWithoutPayment_proofInput
    disconnect?: boolean
    delete?: boolean
    connect?: SBCTeamWhereUniqueInput
    update?: XOR<SBCTeamUpdateWithoutPayment_proofInput, SBCTeamUncheckedUpdateWithoutPayment_proofInput>
  }

  export type CICTeamUncheckedUpdateOneWithoutPayment_proofNestedInput = {
    create?: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutPayment_proofInput
    upsert?: CICTeamUpsertWithoutPayment_proofInput
    disconnect?: boolean
    delete?: boolean
    connect?: CICTeamWhereUniqueInput
    update?: XOR<CICTeamUpdateWithoutPayment_proofInput, CICTeamUncheckedUpdateWithoutPayment_proofInput>
  }

  export type FCECTeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<FCECTeamCreateWithoutMembersInput, FCECTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FCECTeamCreateOrConnectWithoutMembersInput
    connect?: FCECTeamWhereUniqueInput
  }

  export type FCECTeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<FCECTeamCreateWithoutMembersInput, FCECTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FCECTeamCreateOrConnectWithoutMembersInput
    upsert?: FCECTeamUpsertWithoutMembersInput
    connect?: FCECTeamWhereUniqueInput
    update?: XOR<FCECTeamUpdateWithoutMembersInput, FCECTeamUncheckedUpdateWithoutMembersInput>
  }

  export type FCECMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<FCECMemberCreateWithoutTeamInput>, Enumerable<FCECMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<FCECMemberCreateOrConnectWithoutTeamInput>
    createMany?: FCECMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<FCECMemberWhereUniqueInput>
  }

  export type FCECMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<FCECMemberCreateWithoutTeamInput>, Enumerable<FCECMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<FCECMemberCreateOrConnectWithoutTeamInput>
    createMany?: FCECMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<FCECMemberWhereUniqueInput>
  }

  export type FCECMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<FCECMemberCreateWithoutTeamInput>, Enumerable<FCECMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<FCECMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<FCECMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: FCECMemberCreateManyTeamInputEnvelope
    set?: Enumerable<FCECMemberWhereUniqueInput>
    disconnect?: Enumerable<FCECMemberWhereUniqueInput>
    delete?: Enumerable<FCECMemberWhereUniqueInput>
    connect?: Enumerable<FCECMemberWhereUniqueInput>
    update?: Enumerable<FCECMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<FCECMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<FCECMemberScalarWhereInput>
  }

  export type FCECMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<FCECMemberCreateWithoutTeamInput>, Enumerable<FCECMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<FCECMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<FCECMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: FCECMemberCreateManyTeamInputEnvelope
    set?: Enumerable<FCECMemberWhereUniqueInput>
    disconnect?: Enumerable<FCECMemberWhereUniqueInput>
    delete?: Enumerable<FCECMemberWhereUniqueInput>
    connect?: Enumerable<FCECMemberWhereUniqueInput>
    update?: Enumerable<FCECMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<FCECMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<FCECMemberScalarWhereInput>
  }

  export type CICTeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<CICTeamCreateWithoutMembersInput, CICTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutMembersInput
    connect?: CICTeamWhereUniqueInput
  }

  export type CICTeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CICTeamCreateWithoutMembersInput, CICTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CICTeamCreateOrConnectWithoutMembersInput
    upsert?: CICTeamUpsertWithoutMembersInput
    connect?: CICTeamWhereUniqueInput
    update?: XOR<CICTeamUpdateWithoutMembersInput, CICTeamUncheckedUpdateWithoutMembersInput>
  }

  export type PaymentCreateNestedOneWithoutCic_teamInput = {
    create?: XOR<PaymentCreateWithoutCic_teamInput, PaymentUncheckedCreateWithoutCic_teamInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCic_teamInput
    connect?: PaymentWhereUniqueInput
  }

  export type CICMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<CICMemberCreateWithoutTeamInput>, Enumerable<CICMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<CICMemberCreateOrConnectWithoutTeamInput>
    createMany?: CICMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<CICMemberWhereUniqueInput>
  }

  export type CICMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<CICMemberCreateWithoutTeamInput>, Enumerable<CICMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<CICMemberCreateOrConnectWithoutTeamInput>
    createMany?: CICMemberCreateManyTeamInputEnvelope
    connect?: Enumerable<CICMemberWhereUniqueInput>
  }

  export type PaymentUpdateOneRequiredWithoutCic_teamNestedInput = {
    create?: XOR<PaymentCreateWithoutCic_teamInput, PaymentUncheckedCreateWithoutCic_teamInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCic_teamInput
    upsert?: PaymentUpsertWithoutCic_teamInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<PaymentUpdateWithoutCic_teamInput, PaymentUncheckedUpdateWithoutCic_teamInput>
  }

  export type CICMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<CICMemberCreateWithoutTeamInput>, Enumerable<CICMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<CICMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<CICMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: CICMemberCreateManyTeamInputEnvelope
    set?: Enumerable<CICMemberWhereUniqueInput>
    disconnect?: Enumerable<CICMemberWhereUniqueInput>
    delete?: Enumerable<CICMemberWhereUniqueInput>
    connect?: Enumerable<CICMemberWhereUniqueInput>
    update?: Enumerable<CICMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<CICMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<CICMemberScalarWhereInput>
  }

  export type CICMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<CICMemberCreateWithoutTeamInput>, Enumerable<CICMemberUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<CICMemberCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<CICMemberUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: CICMemberCreateManyTeamInputEnvelope
    set?: Enumerable<CICMemberWhereUniqueInput>
    disconnect?: Enumerable<CICMemberWhereUniqueInput>
    delete?: Enumerable<CICMemberWhereUniqueInput>
    connect?: Enumerable<CICMemberWhereUniqueInput>
    update?: Enumerable<CICMemberUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<CICMemberUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<CICMemberScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SBCMemberCreateWithoutTeamInput = {
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
  }

  export type SBCMemberUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
  }

  export type SBCMemberCreateOrConnectWithoutTeamInput = {
    where: SBCMemberWhereUniqueInput
    create: XOR<SBCMemberCreateWithoutTeamInput, SBCMemberUncheckedCreateWithoutTeamInput>
  }

  export type SBCMemberCreateManyTeamInputEnvelope = {
    data: Enumerable<SBCMemberCreateManyTeamInput>
    skipDuplicates?: boolean
  }

  export type SBCLecturerCreateWithoutTeamInput = {
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
  }

  export type SBCLecturerUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    profession_id: string
    email: string
    whatsapp: string
    photo: string
  }

  export type SBCLecturerCreateOrConnectWithoutTeamInput = {
    where: SBCLecturerWhereUniqueInput
    create: XOR<SBCLecturerCreateWithoutTeamInput, SBCLecturerUncheckedCreateWithoutTeamInput>
  }

  export type PaymentCreateWithoutSbc_teamInput = {
    proof: string
    cic_team?: CICTeamCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentUncheckedCreateWithoutSbc_teamInput = {
    id?: number
    proof: string
    cic_team?: CICTeamUncheckedCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentCreateOrConnectWithoutSbc_teamInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSbc_teamInput, PaymentUncheckedCreateWithoutSbc_teamInput>
  }

  export type SBCMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: SBCMemberWhereUniqueInput
    update: XOR<SBCMemberUpdateWithoutTeamInput, SBCMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<SBCMemberCreateWithoutTeamInput, SBCMemberUncheckedCreateWithoutTeamInput>
  }

  export type SBCMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: SBCMemberWhereUniqueInput
    data: XOR<SBCMemberUpdateWithoutTeamInput, SBCMemberUncheckedUpdateWithoutTeamInput>
  }

  export type SBCMemberUpdateManyWithWhereWithoutTeamInput = {
    where: SBCMemberScalarWhereInput
    data: XOR<SBCMemberUpdateManyMutationInput, SBCMemberUncheckedUpdateManyWithoutMembersInput>
  }

  export type SBCMemberScalarWhereInput = {
    AND?: Enumerable<SBCMemberScalarWhereInput>
    OR?: Enumerable<SBCMemberScalarWhereInput>
    NOT?: Enumerable<SBCMemberScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    student_id?: StringFilter | string
    study_major?: StringFilter | string
    semester?: IntFilter | number
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    twibbon_proof?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    photo?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team_id?: IntFilter | number
  }

  export type SBCLecturerUpsertWithoutTeamInput = {
    update: XOR<SBCLecturerUpdateWithoutTeamInput, SBCLecturerUncheckedUpdateWithoutTeamInput>
    create: XOR<SBCLecturerCreateWithoutTeamInput, SBCLecturerUncheckedCreateWithoutTeamInput>
  }

  export type SBCLecturerUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type SBCLecturerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpsertWithoutSbc_teamInput = {
    update: XOR<PaymentUpdateWithoutSbc_teamInput, PaymentUncheckedUpdateWithoutSbc_teamInput>
    create: XOR<PaymentCreateWithoutSbc_teamInput, PaymentUncheckedCreateWithoutSbc_teamInput>
  }

  export type PaymentUpdateWithoutSbc_teamInput = {
    proof?: StringFieldUpdateOperationsInput | string
    cic_team?: CICTeamUpdateOneWithoutPayment_proofNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSbc_teamInput = {
    id?: IntFieldUpdateOperationsInput | number
    proof?: StringFieldUpdateOperationsInput | string
    cic_team?: CICTeamUncheckedUpdateOneWithoutPayment_proofNestedInput
  }

  export type SBCTeamCreateWithoutMembersInput = {
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    lecturer: SBCLecturerCreateNestedOneWithoutTeamInput
    payment_proof: PaymentCreateNestedOneWithoutSbc_teamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUncheckedCreateWithoutMembersInput = {
    id?: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    lecturer_id: number
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamCreateOrConnectWithoutMembersInput = {
    where: SBCTeamWhereUniqueInput
    create: XOR<SBCTeamCreateWithoutMembersInput, SBCTeamUncheckedCreateWithoutMembersInput>
  }

  export type SBCTeamUpsertWithoutMembersInput = {
    update: XOR<SBCTeamUpdateWithoutMembersInput, SBCTeamUncheckedUpdateWithoutMembersInput>
    create: XOR<SBCTeamCreateWithoutMembersInput, SBCTeamUncheckedCreateWithoutMembersInput>
  }

  export type SBCTeamUpdateWithoutMembersInput = {
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    lecturer?: SBCLecturerUpdateOneRequiredWithoutTeamNestedInput
    payment_proof?: PaymentUpdateOneRequiredWithoutSbc_teamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    lecturer_id?: IntFieldUpdateOperationsInput | number
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamCreateWithoutLecturerInput = {
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberCreateNestedManyWithoutTeamInput
    payment_proof: PaymentCreateNestedOneWithoutSbc_teamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUncheckedCreateWithoutLecturerInput = {
    id?: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberUncheckedCreateNestedManyWithoutTeamInput
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamCreateOrConnectWithoutLecturerInput = {
    where: SBCTeamWhereUniqueInput
    create: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
  }

  export type SBCTeamUpsertWithoutLecturerInput = {
    update: XOR<SBCTeamUpdateWithoutLecturerInput, SBCTeamUncheckedUpdateWithoutLecturerInput>
    create: XOR<SBCTeamCreateWithoutLecturerInput, SBCTeamUncheckedCreateWithoutLecturerInput>
  }

  export type SBCTeamUpdateWithoutLecturerInput = {
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUpdateManyWithoutTeamNestedInput
    payment_proof?: PaymentUpdateOneRequiredWithoutSbc_teamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUncheckedUpdateManyWithoutTeamNestedInput
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamCreateWithoutPayment_proofInput = {
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberCreateNestedManyWithoutTeamInput
    lecturer: SBCLecturerCreateNestedOneWithoutTeamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamUncheckedCreateWithoutPayment_proofInput = {
    id?: number
    university: string
    team_name: string
    bridge_name: string
    voucher_proof: string
    members?: SBCMemberUncheckedCreateNestedManyWithoutTeamInput
    lecturer_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type SBCTeamCreateOrConnectWithoutPayment_proofInput = {
    where: SBCTeamWhereUniqueInput
    create: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
  }

  export type CICTeamCreateWithoutPayment_proofInput = {
    team_name: string
    university: string
    members?: CICMemberCreateNestedManyWithoutTeamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamUncheckedCreateWithoutPayment_proofInput = {
    id?: number
    team_name: string
    university: string
    members?: CICMemberUncheckedCreateNestedManyWithoutTeamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamCreateOrConnectWithoutPayment_proofInput = {
    where: CICTeamWhereUniqueInput
    create: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
  }

  export type SBCTeamUpsertWithoutPayment_proofInput = {
    update: XOR<SBCTeamUpdateWithoutPayment_proofInput, SBCTeamUncheckedUpdateWithoutPayment_proofInput>
    create: XOR<SBCTeamCreateWithoutPayment_proofInput, SBCTeamUncheckedCreateWithoutPayment_proofInput>
  }

  export type SBCTeamUpdateWithoutPayment_proofInput = {
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUpdateManyWithoutTeamNestedInput
    lecturer?: SBCLecturerUpdateOneRequiredWithoutTeamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SBCTeamUncheckedUpdateWithoutPayment_proofInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    bridge_name?: StringFieldUpdateOperationsInput | string
    voucher_proof?: StringFieldUpdateOperationsInput | string
    members?: SBCMemberUncheckedUpdateManyWithoutTeamNestedInput
    lecturer_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamUpsertWithoutPayment_proofInput = {
    update: XOR<CICTeamUpdateWithoutPayment_proofInput, CICTeamUncheckedUpdateWithoutPayment_proofInput>
    create: XOR<CICTeamCreateWithoutPayment_proofInput, CICTeamUncheckedCreateWithoutPayment_proofInput>
  }

  export type CICTeamUpdateWithoutPayment_proofInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    members?: CICMemberUpdateManyWithoutTeamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamUncheckedUpdateWithoutPayment_proofInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    members?: CICMemberUncheckedUpdateManyWithoutTeamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECTeamCreateWithoutMembersInput = {
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    finalized_at: Date | string
  }

  export type FCECTeamUncheckedCreateWithoutMembersInput = {
    id?: number
    school: string
    abstract_title: string
    team_name: string
    originality_letter: string
    abstract: string
    finalized_at: Date | string
  }

  export type FCECTeamCreateOrConnectWithoutMembersInput = {
    where: FCECTeamWhereUniqueInput
    create: XOR<FCECTeamCreateWithoutMembersInput, FCECTeamUncheckedCreateWithoutMembersInput>
  }

  export type FCECTeamUpsertWithoutMembersInput = {
    update: XOR<FCECTeamUpdateWithoutMembersInput, FCECTeamUncheckedUpdateWithoutMembersInput>
    create: XOR<FCECTeamCreateWithoutMembersInput, FCECTeamUncheckedCreateWithoutMembersInput>
  }

  export type FCECTeamUpdateWithoutMembersInput = {
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECTeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    originality_letter?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCECMemberCreateWithoutTeamInput = {
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
  }

  export type FCECMemberUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
  }

  export type FCECMemberCreateOrConnectWithoutTeamInput = {
    where: FCECMemberWhereUniqueInput
    create: XOR<FCECMemberCreateWithoutTeamInput, FCECMemberUncheckedCreateWithoutTeamInput>
  }

  export type FCECMemberCreateManyTeamInputEnvelope = {
    data: Enumerable<FCECMemberCreateManyTeamInput>
    skipDuplicates?: boolean
  }

  export type FCECMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: FCECMemberWhereUniqueInput
    update: XOR<FCECMemberUpdateWithoutTeamInput, FCECMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<FCECMemberCreateWithoutTeamInput, FCECMemberUncheckedCreateWithoutTeamInput>
  }

  export type FCECMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: FCECMemberWhereUniqueInput
    data: XOR<FCECMemberUpdateWithoutTeamInput, FCECMemberUncheckedUpdateWithoutTeamInput>
  }

  export type FCECMemberUpdateManyWithWhereWithoutTeamInput = {
    where: FCECMemberScalarWhereInput
    data: XOR<FCECMemberUpdateManyMutationInput, FCECMemberUncheckedUpdateManyWithoutMembersInput>
  }

  export type FCECMemberScalarWhereInput = {
    AND?: Enumerable<FCECMemberScalarWhereInput>
    OR?: Enumerable<FCECMemberScalarWhereInput>
    NOT?: Enumerable<FCECMemberScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    twibbon_proof?: StringFilter | string
    photo?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team_id?: IntFilter | number
  }

  export type CICTeamCreateWithoutMembersInput = {
    team_name: string
    university: string
    payment_proof: PaymentCreateNestedOneWithoutCic_teamInput
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamUncheckedCreateWithoutMembersInput = {
    id?: number
    team_name: string
    university: string
    payment_proof_id: number
    truth_statement: boolean
    stc_statement: boolean
    finalized_at: Date | string
  }

  export type CICTeamCreateOrConnectWithoutMembersInput = {
    where: CICTeamWhereUniqueInput
    create: XOR<CICTeamCreateWithoutMembersInput, CICTeamUncheckedCreateWithoutMembersInput>
  }

  export type CICTeamUpsertWithoutMembersInput = {
    update: XOR<CICTeamUpdateWithoutMembersInput, CICTeamUncheckedUpdateWithoutMembersInput>
    create: XOR<CICTeamCreateWithoutMembersInput, CICTeamUncheckedCreateWithoutMembersInput>
  }

  export type CICTeamUpdateWithoutMembersInput = {
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    payment_proof?: PaymentUpdateOneRequiredWithoutCic_teamNestedInput
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CICTeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_name?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    payment_proof_id?: IntFieldUpdateOperationsInput | number
    truth_statement?: BoolFieldUpdateOperationsInput | boolean
    stc_statement?: BoolFieldUpdateOperationsInput | boolean
    finalized_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutCic_teamInput = {
    proof: string
    sbc_team?: SBCTeamCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentUncheckedCreateWithoutCic_teamInput = {
    id?: number
    proof: string
    sbc_team?: SBCTeamUncheckedCreateNestedOneWithoutPayment_proofInput
  }

  export type PaymentCreateOrConnectWithoutCic_teamInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCic_teamInput, PaymentUncheckedCreateWithoutCic_teamInput>
  }

  export type CICMemberCreateWithoutTeamInput = {
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
  }

  export type CICMemberUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
  }

  export type CICMemberCreateOrConnectWithoutTeamInput = {
    where: CICMemberWhereUniqueInput
    create: XOR<CICMemberCreateWithoutTeamInput, CICMemberUncheckedCreateWithoutTeamInput>
  }

  export type CICMemberCreateManyTeamInputEnvelope = {
    data: Enumerable<CICMemberCreateManyTeamInput>
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithoutCic_teamInput = {
    update: XOR<PaymentUpdateWithoutCic_teamInput, PaymentUncheckedUpdateWithoutCic_teamInput>
    create: XOR<PaymentCreateWithoutCic_teamInput, PaymentUncheckedCreateWithoutCic_teamInput>
  }

  export type PaymentUpdateWithoutCic_teamInput = {
    proof?: StringFieldUpdateOperationsInput | string
    sbc_team?: SBCTeamUpdateOneWithoutPayment_proofNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCic_teamInput = {
    id?: IntFieldUpdateOperationsInput | number
    proof?: StringFieldUpdateOperationsInput | string
    sbc_team?: SBCTeamUncheckedUpdateOneWithoutPayment_proofNestedInput
  }

  export type CICMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: CICMemberWhereUniqueInput
    update: XOR<CICMemberUpdateWithoutTeamInput, CICMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<CICMemberCreateWithoutTeamInput, CICMemberUncheckedCreateWithoutTeamInput>
  }

  export type CICMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: CICMemberWhereUniqueInput
    data: XOR<CICMemberUpdateWithoutTeamInput, CICMemberUncheckedUpdateWithoutTeamInput>
  }

  export type CICMemberUpdateManyWithWhereWithoutTeamInput = {
    where: CICMemberScalarWhereInput
    data: XOR<CICMemberUpdateManyMutationInput, CICMemberUncheckedUpdateManyWithoutMembersInput>
  }

  export type CICMemberScalarWhereInput = {
    AND?: Enumerable<CICMemberScalarWhereInput>
    OR?: Enumerable<CICMemberScalarWhereInput>
    NOT?: Enumerable<CICMemberScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    line_id?: StringFilter | string
    student_card?: StringFilter | string
    student_proof?: StringFilter | string
    study_major?: StringFilter | string
    generation?: StringFilter | string
    twibbon_proof?: StringFilter | string
    is_leader?: BoolFilter | boolean
    team_id?: IntFilter | number
  }

  export type SBCMemberCreateManyTeamInput = {
    id?: number
    name: string
    student_id: string
    study_major: string
    semester: number
    email: string
    whatsapp: string
    line_id: string
    twibbon_proof: string
    student_card: string
    student_proof: string
    photo: string
    is_leader: boolean
  }

  export type SBCMemberUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SBCMemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SBCMemberUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FCECMemberCreateManyTeamInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    twibbon_proof: string
    photo: string
    is_leader: boolean
  }

  export type FCECMemberUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FCECMemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FCECMemberUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CICMemberCreateManyTeamInput = {
    id?: number
    name: string
    email: string
    whatsapp: string
    line_id: string
    student_card: string
    student_proof: string
    study_major: string
    generation: string
    twibbon_proof: string
    is_leader: boolean
  }

  export type CICMemberUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CICMemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CICMemberUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    student_card?: StringFieldUpdateOperationsInput | string
    student_proof?: StringFieldUpdateOperationsInput | string
    study_major?: StringFieldUpdateOperationsInput | string
    generation?: StringFieldUpdateOperationsInput | string
    twibbon_proof?: StringFieldUpdateOperationsInput | string
    is_leader?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}