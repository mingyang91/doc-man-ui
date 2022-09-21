/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ScalarJson,
  ScalarTz,
  ScalarNumeric,
  UUIDV4,
  InspectionTypeEnum,
} from 'm/presets'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb: ScalarJson
  numeric: ScalarNumeric
  role: any
  timestamp: ScalarTz
  timestamptz: ScalarTz
  uuid: UUIDV4
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** 委托单位管理 */
export interface Clients {
  address: Scalars['jsonb']
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id: Scalars['uuid']
  name: Scalars['String']
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** 委托单位管理 */
export interface ClientsAddressArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "clients" */
export interface ClientsAggregate {
  aggregate?: Maybe<ClientsAggregateFields>
  nodes: Array<Clients>
}

/** aggregate fields of "clients" */
export interface ClientsAggregateFields {
  count: Scalars['Int']
  max?: Maybe<ClientsMaxFields>
  min?: Maybe<ClientsMinFields>
}

/** aggregate fields of "clients" */
export interface ClientsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ClientsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface ClientsAppendInput {
  address?: InputMaybe<Scalars['jsonb']>
}

/** Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'. */
export interface ClientsBoolExp {
  _and?: InputMaybe<Array<ClientsBoolExp>>
  _not?: InputMaybe<ClientsBoolExp>
  _or?: InputMaybe<Array<ClientsBoolExp>>
  address?: InputMaybe<JsonbComparisonExp>
  comment?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "clients" */
export enum ClientsConstraint {
  /** unique or primary key constraint */
  CLIENTS_PKEY = 'clients_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface ClientsDeleteAtPathInput {
  address?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface ClientsDeleteElemInput {
  address?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface ClientsDeleteKeyInput {
  address?: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "clients" */
export interface ClientsInsertInput {
  address?: InputMaybe<Scalars['jsonb']>
  comment?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export interface ClientsMaxFields {
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export interface ClientsMinFields {
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "clients" */
export interface ClientsMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Clients>
}

/** input type for inserting object relation for remote table "clients" */
export interface ClientsObjRelInsertInput {
  data: ClientsInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<ClientsOnConflict>
}

/** on_conflict condition type for table "clients" */
export interface ClientsOnConflict {
  constraint: ClientsConstraint
  update_columns?: Array<ClientsUpdateColumn>
  where?: InputMaybe<ClientsBoolExp>
}

/** Ordering options when selecting data from "clients". */
export interface ClientsOrderBy {
  address?: InputMaybe<OrderBy>
  comment?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: clients */
export interface ClientsPkColumnsInput {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface ClientsPrependInput {
  address?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "clients" */
export enum ClientsSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** input type for updating data in table "clients" */
export interface ClientsSetInput {
  address?: InputMaybe<Scalars['jsonb']>
  comment?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "clients" */
export enum ClientsUpdateColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** columns and relationships of "device" */
export interface Device {
  /** 检测地址 */
  address: Scalars['jsonb']
  /** An object relationship */
  client?: Maybe<Clients>
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime: Scalars['timestamptz']
  /** 创建者id */
  createrId?: Maybe<Scalars['Int']>
  /** An object relationship */
  creator?: Maybe<User>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 设备ID */
  id: Scalars['uuid']
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  /** 更新时间 */
  updateTime: Scalars['timestamptz']
}

/** columns and relationships of "device" */
export interface DeviceAddressArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "device" */
export interface DeviceAggregate {
  aggregate?: Maybe<DeviceAggregateFields>
  nodes: Array<Device>
}

/** aggregate fields of "device" */
export interface DeviceAggregateFields {
  avg?: Maybe<DeviceAvgFields>
  count: Scalars['Int']
  max?: Maybe<DeviceMaxFields>
  min?: Maybe<DeviceMinFields>
  stddev?: Maybe<DeviceStddevFields>
  stddev_pop?: Maybe<DeviceStddevPopFields>
  stddev_samp?: Maybe<DeviceStddevSampFields>
  sum?: Maybe<DeviceSumFields>
  var_pop?: Maybe<DeviceVarPopFields>
  var_samp?: Maybe<DeviceVarSampFields>
  variance?: Maybe<DeviceVarianceFields>
}

/** aggregate fields of "device" */
export interface DeviceAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<DeviceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "device" */
export interface DeviceAggregateOrderBy {
  avg?: InputMaybe<DeviceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<DeviceMaxOrderBy>
  min?: InputMaybe<DeviceMinOrderBy>
  stddev?: InputMaybe<DeviceStddevOrderBy>
  stddev_pop?: InputMaybe<DeviceStddevPopOrderBy>
  stddev_samp?: InputMaybe<DeviceStddevSampOrderBy>
  sum?: InputMaybe<DeviceSumOrderBy>
  var_pop?: InputMaybe<DeviceVarPopOrderBy>
  var_samp?: InputMaybe<DeviceVarSampOrderBy>
  variance?: InputMaybe<DeviceVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface DeviceAppendInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "device" */
export interface DeviceArrRelInsertInput {
  data: Array<DeviceInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<DeviceOnConflict>
}

/** aggregate avg on columns */
export interface DeviceAvgFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "device" */
export interface DeviceAvgOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export interface DeviceBoolExp {
  _and?: InputMaybe<Array<DeviceBoolExp>>
  _not?: InputMaybe<DeviceBoolExp>
  _or?: InputMaybe<Array<DeviceBoolExp>>
  address?: InputMaybe<JsonbComparisonExp>
  client?: InputMaybe<ClientsBoolExp>
  clientId?: InputMaybe<UuidComparisonExp>
  comment?: InputMaybe<StringComparisonExp>
  createTime?: InputMaybe<TimestamptzComparisonExp>
  createrId?: InputMaybe<IntComparisonExp>
  creator?: InputMaybe<UserBoolExp>
  equipmentCode?: InputMaybe<StringComparisonExp>
  equipmentManufacturer?: InputMaybe<StringComparisonExp>
  equipmentModel?: InputMaybe<StringComparisonExp>
  equipmentName?: InputMaybe<StringComparisonExp>
  equipmentRequester?: InputMaybe<StringComparisonExp>
  equipmentSampleId?: InputMaybe<StringComparisonExp>
  equipmentSite?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspectionInstrument?: InputMaybe<StringComparisonExp>
  updateTime?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "device" */
export enum DeviceConstraint {
  /** unique or primary key constraint */
  DEVICE_ID_KEY = 'device_id_key',
  /** unique or primary key constraint */
  DEVICE_PKEY = 'device_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface DeviceDeleteAtPathInput {
  /** 检测地址 */
  address?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface DeviceDeleteElemInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface DeviceDeleteKeyInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "device" */
export interface DeviceIncInput {
  /** 创建者id */
  createrId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "device" */
export interface DeviceInsertInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
  client?: InputMaybe<ClientsObjRelInsertInput>
  /** 委托单位Id */
  clientId?: InputMaybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: InputMaybe<Scalars['String']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['timestamptz']>
  /** 创建者id */
  createrId?: InputMaybe<Scalars['Int']>
  creator?: InputMaybe<UserObjRelInsertInput>
  /** 设备编号 */
  equipmentCode?: InputMaybe<Scalars['String']>
  /** 制造商 */
  equipmentManufacturer?: InputMaybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: InputMaybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: InputMaybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  /** 设备ID */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export interface DeviceMaxFields {
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['timestamptz']>
  /** 创建者id */
  createrId?: Maybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 设备ID */
  id?: Maybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "device" */
export interface DeviceMaxOrderBy {
  /** 委托单位Id */
  clientId?: InputMaybe<OrderBy>
  /** 备注信息 */
  comment?: InputMaybe<OrderBy>
  /** 创建时间 */
  createTime?: InputMaybe<OrderBy>
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
  /** 设备编号 */
  equipmentCode?: InputMaybe<OrderBy>
  /** 制造商 */
  equipmentManufacturer?: InputMaybe<OrderBy>
  /** 设备型号 */
  equipmentModel?: InputMaybe<OrderBy>
  /** 设备名称 */
  equipmentName?: InputMaybe<OrderBy>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<OrderBy>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  /** 设备ID */
  id?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  /** 更新时间 */
  updateTime?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface DeviceMinFields {
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['timestamptz']>
  /** 创建者id */
  createrId?: Maybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 设备ID */
  id?: Maybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "device" */
export interface DeviceMinOrderBy {
  /** 委托单位Id */
  clientId?: InputMaybe<OrderBy>
  /** 备注信息 */
  comment?: InputMaybe<OrderBy>
  /** 创建时间 */
  createTime?: InputMaybe<OrderBy>
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
  /** 设备编号 */
  equipmentCode?: InputMaybe<OrderBy>
  /** 制造商 */
  equipmentManufacturer?: InputMaybe<OrderBy>
  /** 设备型号 */
  equipmentModel?: InputMaybe<OrderBy>
  /** 设备名称 */
  equipmentName?: InputMaybe<OrderBy>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<OrderBy>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  /** 设备ID */
  id?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  /** 更新时间 */
  updateTime?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "device" */
export interface DeviceMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Device>
}

/** on_conflict condition type for table "device" */
export interface DeviceOnConflict {
  constraint: DeviceConstraint
  update_columns?: Array<DeviceUpdateColumn>
  where?: InputMaybe<DeviceBoolExp>
}

/** Ordering options when selecting data from "device". */
export interface DeviceOrderBy {
  address?: InputMaybe<OrderBy>
  client?: InputMaybe<ClientsOrderBy>
  clientId?: InputMaybe<OrderBy>
  comment?: InputMaybe<OrderBy>
  createTime?: InputMaybe<OrderBy>
  createrId?: InputMaybe<OrderBy>
  creator?: InputMaybe<UserOrderBy>
  equipmentCode?: InputMaybe<OrderBy>
  equipmentManufacturer?: InputMaybe<OrderBy>
  equipmentModel?: InputMaybe<OrderBy>
  equipmentName?: InputMaybe<OrderBy>
  equipmentRequester?: InputMaybe<OrderBy>
  equipmentSampleId?: InputMaybe<OrderBy>
  equipmentSite?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspectionInstrument?: InputMaybe<OrderBy>
  updateTime?: InputMaybe<OrderBy>
}

/** primary key columns input for table: device */
export interface DevicePkColumnsInput {
  /** 设备ID */
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface DevicePrependInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "device" */
export enum DeviceSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CLIENTID = 'clientId',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  CREATERID = 'createrId',
  /** column name */
  EQUIPMENTCODE = 'equipmentCode',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  UPDATETIME = 'updateTime',
}

/** input type for updating data in table "device" */
export interface DeviceSetInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
  /** 委托单位Id */
  clientId?: InputMaybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: InputMaybe<Scalars['String']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['timestamptz']>
  /** 创建者id */
  createrId?: InputMaybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: InputMaybe<Scalars['String']>
  /** 制造商 */
  equipmentManufacturer?: InputMaybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: InputMaybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: InputMaybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  /** 设备ID */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  /** 更新时间 */
  updateTime?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export interface DeviceStddevFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "device" */
export interface DeviceStddevOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface DeviceStddevPopFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "device" */
export interface DeviceStddevPopOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface DeviceStddevSampFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "device" */
export interface DeviceStddevSampOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface DeviceSumFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "device" */
export interface DeviceSumOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** update columns of table "device" */
export enum DeviceUpdateColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CLIENTID = 'clientId',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  CREATERID = 'createrId',
  /** column name */
  EQUIPMENTCODE = 'equipmentCode',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  UPDATETIME = 'updateTime',
}

/** aggregate var_pop on columns */
export interface DeviceVarPopFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "device" */
export interface DeviceVarPopOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface DeviceVarSampFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "device" */
export interface DeviceVarSampOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface DeviceVarianceFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "device" */
export interface DeviceVarianceOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** 设备种类举例 */
export interface EquipmentEnum {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  /** An array relationship */
  inspection_items: Array<InspectionItemEnum>
  /** An aggregate relationship */
  inspection_items_aggregate: InspectionItemEnumAggregate
  name: Scalars['String']
}

/** 设备种类举例 */
export interface EquipmentEnumInspectionItemsArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

/** 设备种类举例 */
export interface EquipmentEnumInspectionItemsAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

/** aggregated selection of "equipment_enum" */
export interface EquipmentEnumAggregate {
  aggregate?: Maybe<EquipmentEnumAggregateFields>
  nodes: Array<EquipmentEnum>
}

/** aggregate fields of "equipment_enum" */
export interface EquipmentEnumAggregateFields {
  count: Scalars['Int']
  max?: Maybe<EquipmentEnumMaxFields>
  min?: Maybe<EquipmentEnumMinFields>
}

/** aggregate fields of "equipment_enum" */
export interface EquipmentEnumAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<EquipmentEnumSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "equipment_enum". All fields are combined with a logical 'AND'. */
export interface EquipmentEnumBoolExp {
  _and?: InputMaybe<Array<EquipmentEnumBoolExp>>
  _not?: InputMaybe<EquipmentEnumBoolExp>
  _or?: InputMaybe<Array<EquipmentEnumBoolExp>>
  comment?: InputMaybe<StringComparisonExp>
  displayName?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspection_items?: InputMaybe<InspectionItemEnumBoolExp>
  name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "equipment_enum" */
export enum EquipmentEnumConstraint {
  /** unique or primary key constraint */
  EQUIPMENT_ENUM_NAME_KEY = 'equipment_enum_name_key',
  /** unique or primary key constraint */
  EQUIPMENT_ENUM_PKEY = 'equipment_enum_pkey',
}

/** input type for inserting data into table "equipment_enum" */
export interface EquipmentEnumInsertInput {
  comment?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  inspection_items?: InputMaybe<InspectionItemEnumArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface EquipmentEnumMaxFields {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface EquipmentEnumMinFields {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "equipment_enum" */
export interface EquipmentEnumMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<EquipmentEnum>
}

/** input type for inserting object relation for remote table "equipment_enum" */
export interface EquipmentEnumObjRelInsertInput {
  data: EquipmentEnumInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<EquipmentEnumOnConflict>
}

/** on_conflict condition type for table "equipment_enum" */
export interface EquipmentEnumOnConflict {
  constraint: EquipmentEnumConstraint
  update_columns?: Array<EquipmentEnumUpdateColumn>
  where?: InputMaybe<EquipmentEnumBoolExp>
}

/** Ordering options when selecting data from "equipment_enum". */
export interface EquipmentEnumOrderBy {
  comment?: InputMaybe<OrderBy>
  displayName?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspection_items_aggregate?: InputMaybe<InspectionItemEnumAggregateOrderBy>
  name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: equipment_enum */
export interface EquipmentEnumPkColumnsInput {
  id: Scalars['uuid']
}

/** select columns of table "equipment_enum" */
export enum EquipmentEnumSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
}

/** input type for updating data in table "equipment_enum" */
export interface EquipmentEnumSetInput {
  comment?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "equipment_enum" */
export enum EquipmentEnumUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
}

/** 全局常量 */
export interface GlobalConst {
  /** 备注 */
  comment: Scalars['String']
  id: Scalars['uuid']
  /** 常量名 */
  name: Scalars['String']
  /** 常量值 */
  value: Scalars['numeric']
}

/** aggregated selection of "global_const" */
export interface GlobalConstAggregate {
  aggregate?: Maybe<GlobalConstAggregateFields>
  nodes: Array<GlobalConst>
}

/** aggregate fields of "global_const" */
export interface GlobalConstAggregateFields {
  avg?: Maybe<GlobalConstAvgFields>
  count: Scalars['Int']
  max?: Maybe<GlobalConstMaxFields>
  min?: Maybe<GlobalConstMinFields>
  stddev?: Maybe<GlobalConstStddevFields>
  stddev_pop?: Maybe<GlobalConstStddevPopFields>
  stddev_samp?: Maybe<GlobalConstStddevSampFields>
  sum?: Maybe<GlobalConstSumFields>
  var_pop?: Maybe<GlobalConstVarPopFields>
  var_samp?: Maybe<GlobalConstVarSampFields>
  variance?: Maybe<GlobalConstVarianceFields>
}

/** aggregate fields of "global_const" */
export interface GlobalConstAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<GlobalConstSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface GlobalConstAvgFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "global_const". All fields are combined with a logical 'AND'. */
export interface GlobalConstBoolExp {
  _and?: InputMaybe<Array<GlobalConstBoolExp>>
  _not?: InputMaybe<GlobalConstBoolExp>
  _or?: InputMaybe<Array<GlobalConstBoolExp>>
  comment?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  value?: InputMaybe<NumericComparisonExp>
}

/** unique or primary key constraints on table "global_const" */
export enum GlobalConstConstraint {
  /** unique or primary key constraint */
  GLOBAL_CONST_NAME_KEY = 'global_const_name_key',
  /** unique or primary key constraint */
  GLOBAL_CONST_PKEY = 'global_const_pkey',
}

/** input type for incrementing numeric columns in table "global_const" */
export interface GlobalConstIncInput {
  /** 常量值 */
  value?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "global_const" */
export interface GlobalConstInsertInput {
  /** 备注 */
  comment?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  /** 常量名 */
  name?: InputMaybe<Scalars['String']>
  /** 常量值 */
  value?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export interface GlobalConstMaxFields {
  /** 备注 */
  comment?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  /** 常量名 */
  name?: Maybe<Scalars['String']>
  /** 常量值 */
  value?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export interface GlobalConstMinFields {
  /** 备注 */
  comment?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  /** 常量名 */
  name?: Maybe<Scalars['String']>
  /** 常量值 */
  value?: Maybe<Scalars['numeric']>
}

/** response of any mutation on the table "global_const" */
export interface GlobalConstMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<GlobalConst>
}

/** on_conflict condition type for table "global_const" */
export interface GlobalConstOnConflict {
  constraint: GlobalConstConstraint
  update_columns?: Array<GlobalConstUpdateColumn>
  where?: InputMaybe<GlobalConstBoolExp>
}

/** Ordering options when selecting data from "global_const". */
export interface GlobalConstOrderBy {
  comment?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** primary key columns input for table: global_const */
export interface GlobalConstPkColumnsInput {
  id: Scalars['uuid']
}

/** select columns of table "global_const" */
export enum GlobalConstSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  VALUE = 'value',
}

/** input type for updating data in table "global_const" */
export interface GlobalConstSetInput {
  /** 备注 */
  comment?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  /** 常量名 */
  name?: InputMaybe<Scalars['String']>
  /** 常量值 */
  value?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export interface GlobalConstStddevFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface GlobalConstStddevPopFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface GlobalConstStddevSampFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export interface GlobalConstSumFields {
  /** 常量值 */
  value?: Maybe<Scalars['numeric']>
}

/** update columns of table "global_const" */
export enum GlobalConstUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  VALUE = 'value',
}

/** aggregate var_pop on columns */
export interface GlobalConstVarPopFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface GlobalConstVarSampFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface GlobalConstVarianceFields {
  /** 常量值 */
  value?: Maybe<Scalars['Float']>
}

/** 检测项目枚举 */
export interface InspectionItemEnum {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: Maybe<Scalars['String']>
  /** An object relationship */
  equipment?: Maybe<EquipmentEnum>
  equipment_id?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  /** 输入值数量 */
  inputCount: Scalars['Int']
  /** 输入值名称 */
  inputName?: Maybe<Scalars['String']>
  /** 输入值单位 */
  inputUnit?: Maybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition: Scalars['jsonb']
  name?: Maybe<Scalars['String']>
  /** 输出值名称 */
  outputName: Scalars['String']
  /** 输出值单位 */
  outputUnit?: Maybe<Scalars['String']>
  /** 指标要求 - 状态检测 */
  stateRequire?: Maybe<Scalars['String']>
}

/** 检测项目枚举 */
export interface InspectionItemEnumInspectionConditionArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "inspection_item_enum" */
export interface InspectionItemEnumAggregate {
  aggregate?: Maybe<InspectionItemEnumAggregateFields>
  nodes: Array<InspectionItemEnum>
}

/** aggregate fields of "inspection_item_enum" */
export interface InspectionItemEnumAggregateFields {
  avg?: Maybe<InspectionItemEnumAvgFields>
  count: Scalars['Int']
  max?: Maybe<InspectionItemEnumMaxFields>
  min?: Maybe<InspectionItemEnumMinFields>
  stddev?: Maybe<InspectionItemEnumStddevFields>
  stddev_pop?: Maybe<InspectionItemEnumStddevPopFields>
  stddev_samp?: Maybe<InspectionItemEnumStddevSampFields>
  sum?: Maybe<InspectionItemEnumSumFields>
  var_pop?: Maybe<InspectionItemEnumVarPopFields>
  var_samp?: Maybe<InspectionItemEnumVarSampFields>
  variance?: Maybe<InspectionItemEnumVarianceFields>
}

/** aggregate fields of "inspection_item_enum" */
export interface InspectionItemEnumAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "inspection_item_enum" */
export interface InspectionItemEnumAggregateOrderBy {
  avg?: InputMaybe<InspectionItemEnumAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<InspectionItemEnumMaxOrderBy>
  min?: InputMaybe<InspectionItemEnumMinOrderBy>
  stddev?: InputMaybe<InspectionItemEnumStddevOrderBy>
  stddev_pop?: InputMaybe<InspectionItemEnumStddevPopOrderBy>
  stddev_samp?: InputMaybe<InspectionItemEnumStddevSampOrderBy>
  sum?: InputMaybe<InspectionItemEnumSumOrderBy>
  var_pop?: InputMaybe<InspectionItemEnumVarPopOrderBy>
  var_samp?: InputMaybe<InspectionItemEnumVarSampOrderBy>
  variance?: InputMaybe<InspectionItemEnumVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface InspectionItemEnumAppendInput {
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "inspection_item_enum" */
export interface InspectionItemEnumArrRelInsertInput {
  data: Array<InspectionItemEnumInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionItemEnumOnConflict>
}

/** aggregate avg on columns */
export interface InspectionItemEnumAvgFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumAvgOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "inspection_item_enum". All fields are combined with a logical 'AND'. */
export interface InspectionItemEnumBoolExp {
  _and?: InputMaybe<Array<InspectionItemEnumBoolExp>>
  _not?: InputMaybe<InspectionItemEnumBoolExp>
  _or?: InputMaybe<Array<InspectionItemEnumBoolExp>>
  acceptanceRequire?: InputMaybe<StringComparisonExp>
  comment?: InputMaybe<StringComparisonExp>
  displayName?: InputMaybe<StringComparisonExp>
  equipment?: InputMaybe<EquipmentEnumBoolExp>
  equipment_id?: InputMaybe<UuidComparisonExp>
  formula?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inputCount?: InputMaybe<IntComparisonExp>
  inputName?: InputMaybe<StringComparisonExp>
  inputUnit?: InputMaybe<StringComparisonExp>
  inspectionCondition?: InputMaybe<JsonbComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  outputName?: InputMaybe<StringComparisonExp>
  outputUnit?: InputMaybe<StringComparisonExp>
  stateRequire?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "inspection_item_enum" */
export enum InspectionItemEnumConstraint {
  /** unique or primary key constraint */
  INSPECTION_ITEM_ENUM_NAME_KEY1 = 'inspection_item_enum_name_key1',
  /** unique or primary key constraint */
  INSPECTION_ITEM_ENUM_PKEY = 'inspection_item_enum_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface InspectionItemEnumDeleteAtPathInput {
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface InspectionItemEnumDeleteElemInput {
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface InspectionItemEnumDeleteKeyInput {
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "inspection_item_enum" */
export interface InspectionItemEnumIncInput {
  /** 输入值数量 */
  inputCount?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "inspection_item_enum" */
export interface InspectionItemEnumInsertInput {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: InputMaybe<Scalars['String']>
  /** 检测项目备注 */
  comment?: InputMaybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: InputMaybe<Scalars['String']>
  equipment?: InputMaybe<EquipmentEnumObjRelInsertInput>
  equipment_id?: InputMaybe<Scalars['uuid']>
  /** 公式 */
  formula?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  /** 输入值数量 */
  inputCount?: InputMaybe<Scalars['Int']>
  /** 输入值名称 */
  inputName?: InputMaybe<Scalars['String']>
  /** 输入值单位 */
  inputUnit?: InputMaybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>
  name?: InputMaybe<Scalars['String']>
  /** 输出值名称 */
  outputName?: InputMaybe<Scalars['String']>
  /** 输出值单位 */
  outputUnit?: InputMaybe<Scalars['String']>
  /** 指标要求 - 状态检测 */
  stateRequire?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface InspectionItemEnumMaxFields {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: Maybe<Scalars['String']>
  equipment_id?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Int']>
  /** 输入值名称 */
  inputName?: Maybe<Scalars['String']>
  /** 输入值单位 */
  inputUnit?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** 输出值名称 */
  outputName?: Maybe<Scalars['String']>
  /** 输出值单位 */
  outputUnit?: Maybe<Scalars['String']>
  /** 指标要求 - 状态检测 */
  stateRequire?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumMaxOrderBy {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: InputMaybe<OrderBy>
  /** 检测项目备注 */
  comment?: InputMaybe<OrderBy>
  /** 检测项目名 */
  displayName?: InputMaybe<OrderBy>
  equipment_id?: InputMaybe<OrderBy>
  /** 公式 */
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
  /** 输入值名称 */
  inputName?: InputMaybe<OrderBy>
  /** 输入值单位 */
  inputUnit?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  /** 输出值名称 */
  outputName?: InputMaybe<OrderBy>
  /** 输出值单位 */
  outputUnit?: InputMaybe<OrderBy>
  /** 指标要求 - 状态检测 */
  stateRequire?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface InspectionItemEnumMinFields {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: Maybe<Scalars['String']>
  equipment_id?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Int']>
  /** 输入值名称 */
  inputName?: Maybe<Scalars['String']>
  /** 输入值单位 */
  inputUnit?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** 输出值名称 */
  outputName?: Maybe<Scalars['String']>
  /** 输出值单位 */
  outputUnit?: Maybe<Scalars['String']>
  /** 指标要求 - 状态检测 */
  stateRequire?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumMinOrderBy {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: InputMaybe<OrderBy>
  /** 检测项目备注 */
  comment?: InputMaybe<OrderBy>
  /** 检测项目名 */
  displayName?: InputMaybe<OrderBy>
  equipment_id?: InputMaybe<OrderBy>
  /** 公式 */
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
  /** 输入值名称 */
  inputName?: InputMaybe<OrderBy>
  /** 输入值单位 */
  inputUnit?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  /** 输出值名称 */
  outputName?: InputMaybe<OrderBy>
  /** 输出值单位 */
  outputUnit?: InputMaybe<OrderBy>
  /** 指标要求 - 状态检测 */
  stateRequire?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "inspection_item_enum" */
export interface InspectionItemEnumMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<InspectionItemEnum>
}

/** input type for inserting object relation for remote table "inspection_item_enum" */
export interface InspectionItemEnumObjRelInsertInput {
  data: InspectionItemEnumInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionItemEnumOnConflict>
}

/** on_conflict condition type for table "inspection_item_enum" */
export interface InspectionItemEnumOnConflict {
  constraint: InspectionItemEnumConstraint
  update_columns?: Array<InspectionItemEnumUpdateColumn>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

/** Ordering options when selecting data from "inspection_item_enum". */
export interface InspectionItemEnumOrderBy {
  acceptanceRequire?: InputMaybe<OrderBy>
  comment?: InputMaybe<OrderBy>
  displayName?: InputMaybe<OrderBy>
  equipment?: InputMaybe<EquipmentEnumOrderBy>
  equipment_id?: InputMaybe<OrderBy>
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inputCount?: InputMaybe<OrderBy>
  inputName?: InputMaybe<OrderBy>
  inputUnit?: InputMaybe<OrderBy>
  inspectionCondition?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  outputName?: InputMaybe<OrderBy>
  outputUnit?: InputMaybe<OrderBy>
  stateRequire?: InputMaybe<OrderBy>
}

/** primary key columns input for table: inspection_item_enum */
export interface InspectionItemEnumPkColumnsInput {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface InspectionItemEnumPrependInput {
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "inspection_item_enum" */
export enum InspectionItemEnumSelectColumn {
  /** column name */
  ACCEPTANCEREQUIRE = 'acceptanceRequire',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  EQUIPMENT_ID = 'equipment_id',
  /** column name */
  FORMULA = 'formula',
  /** column name */
  ID = 'id',
  /** column name */
  INPUTCOUNT = 'inputCount',
  /** column name */
  INPUTNAME = 'inputName',
  /** column name */
  INPUTUNIT = 'inputUnit',
  /** column name */
  INSPECTIONCONDITION = 'inspectionCondition',
  /** column name */
  NAME = 'name',
  /** column name */
  OUTPUTNAME = 'outputName',
  /** column name */
  OUTPUTUNIT = 'outputUnit',
  /** column name */
  STATEREQUIRE = 'stateRequire',
}

/** input type for updating data in table "inspection_item_enum" */
export interface InspectionItemEnumSetInput {
  /** 指标要求 - 验收检测 */
  acceptanceRequire?: InputMaybe<Scalars['String']>
  /** 检测项目备注 */
  comment?: InputMaybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: InputMaybe<Scalars['String']>
  equipment_id?: InputMaybe<Scalars['uuid']>
  /** 公式 */
  formula?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  /** 输入值数量 */
  inputCount?: InputMaybe<Scalars['Int']>
  /** 输入值名称 */
  inputName?: InputMaybe<Scalars['String']>
  /** 输入值单位 */
  inputUnit?: InputMaybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>
  name?: InputMaybe<Scalars['String']>
  /** 输出值名称 */
  outputName?: InputMaybe<Scalars['String']>
  /** 输出值单位 */
  outputUnit?: InputMaybe<Scalars['String']>
  /** 指标要求 - 状态检测 */
  stateRequire?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface InspectionItemEnumStddevFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumStddevOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface InspectionItemEnumStddevPopFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumStddevPopOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface InspectionItemEnumStddevSampFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumStddevSampOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface InspectionItemEnumSumFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumSumOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** update columns of table "inspection_item_enum" */
export enum InspectionItemEnumUpdateColumn {
  /** column name */
  ACCEPTANCEREQUIRE = 'acceptanceRequire',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  EQUIPMENT_ID = 'equipment_id',
  /** column name */
  FORMULA = 'formula',
  /** column name */
  ID = 'id',
  /** column name */
  INPUTCOUNT = 'inputCount',
  /** column name */
  INPUTNAME = 'inputName',
  /** column name */
  INPUTUNIT = 'inputUnit',
  /** column name */
  INSPECTIONCONDITION = 'inspectionCondition',
  /** column name */
  NAME = 'name',
  /** column name */
  OUTPUTNAME = 'outputName',
  /** column name */
  OUTPUTUNIT = 'outputUnit',
  /** column name */
  STATEREQUIRE = 'stateRequire',
}

/** aggregate var_pop on columns */
export interface InspectionItemEnumVarPopFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumVarPopOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface InspectionItemEnumVarSampFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumVarSampOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface InspectionItemEnumVarianceFields {
  /** 输入值数量 */
  inputCount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "inspection_item_enum" */
export interface InspectionItemEnumVarianceOrderBy {
  /** 输入值数量 */
  inputCount?: InputMaybe<OrderBy>
}

/** 设备检验检测报告 */
export interface InspectionReport {
  /** 创建时间 */
  createAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  creator?: Maybe<User>
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造厂商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 主键 */
  id: Scalars['uuid']
  /** 检测地址 */
  inspectionAddress: Scalars['jsonb']
  /** 检测依据 */
  inspectionBasis?: Maybe<Scalars['String']>
  /** 检测日期 */
  inspectionDate?: Maybe<Scalars['timestamptz']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  /** 检测类型 */
  inspectionItem: Scalars['jsonb']
  /** An array relationship */
  items: Array<InspectionReportItem>
  /** An aggregate relationship */
  items_aggregate: InspectionReportItemAggregate
  /** 序列号 */
  serialNumber?: Maybe<Scalars['jsonb']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** 设备检验检测报告 */
export interface InspectionReportInspectionAddressArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 设备检验检测报告 */
export interface InspectionReportInspectionItemArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 设备检验检测报告 */
export interface InspectionReportItemsArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

/** 设备检验检测报告 */
export interface InspectionReportItemsAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

/** 设备检验检测报告 */
export interface InspectionReportSerialNumberArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "inspection_report" */
export interface InspectionReportAggregate {
  aggregate?: Maybe<InspectionReportAggregateFields>
  nodes: Array<InspectionReport>
}

/** aggregate fields of "inspection_report" */
export interface InspectionReportAggregateFields {
  avg?: Maybe<InspectionReportAvgFields>
  count: Scalars['Int']
  max?: Maybe<InspectionReportMaxFields>
  min?: Maybe<InspectionReportMinFields>
  stddev?: Maybe<InspectionReportStddevFields>
  stddev_pop?: Maybe<InspectionReportStddevPopFields>
  stddev_samp?: Maybe<InspectionReportStddevSampFields>
  sum?: Maybe<InspectionReportSumFields>
  var_pop?: Maybe<InspectionReportVarPopFields>
  var_samp?: Maybe<InspectionReportVarSampFields>
  variance?: Maybe<InspectionReportVarianceFields>
}

/** aggregate fields of "inspection_report" */
export interface InspectionReportAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<InspectionReportSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "inspection_report" */
export interface InspectionReportAggregateOrderBy {
  avg?: InputMaybe<InspectionReportAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<InspectionReportMaxOrderBy>
  min?: InputMaybe<InspectionReportMinOrderBy>
  stddev?: InputMaybe<InspectionReportStddevOrderBy>
  stddev_pop?: InputMaybe<InspectionReportStddevPopOrderBy>
  stddev_samp?: InputMaybe<InspectionReportStddevSampOrderBy>
  sum?: InputMaybe<InspectionReportSumOrderBy>
  var_pop?: InputMaybe<InspectionReportVarPopOrderBy>
  var_samp?: InputMaybe<InspectionReportVarSampOrderBy>
  variance?: InputMaybe<InspectionReportVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface InspectionReportAppendInput {
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "inspection_report" */
export interface InspectionReportArrRelInsertInput {
  data: Array<InspectionReportInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** aggregate avg on columns */
export interface InspectionReportAvgFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "inspection_report" */
export interface InspectionReportAvgOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "inspection_report". All fields are combined with a logical 'AND'. */
export interface InspectionReportBoolExp {
  _and?: InputMaybe<Array<InspectionReportBoolExp>>
  _not?: InputMaybe<InspectionReportBoolExp>
  _or?: InputMaybe<Array<InspectionReportBoolExp>>
  createAt?: InputMaybe<TimestamptzComparisonExp>
  creator?: InputMaybe<UserBoolExp>
  creatorId?: InputMaybe<IntComparisonExp>
  equipmentCode?: InputMaybe<StringComparisonExp>
  equipmentManufacturer?: InputMaybe<StringComparisonExp>
  equipmentModel?: InputMaybe<StringComparisonExp>
  equipmentName?: InputMaybe<StringComparisonExp>
  equipmentRequester?: InputMaybe<StringComparisonExp>
  equipmentSampleId?: InputMaybe<StringComparisonExp>
  equipmentSite?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspectionAddress?: InputMaybe<JsonbComparisonExp>
  inspectionBasis?: InputMaybe<StringComparisonExp>
  inspectionDate?: InputMaybe<TimestamptzComparisonExp>
  inspectionInstrument?: InputMaybe<StringComparisonExp>
  inspectionItem?: InputMaybe<JsonbComparisonExp>
  items?: InputMaybe<InspectionReportItemBoolExp>
  serialNumber?: InputMaybe<JsonbComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "inspection_report" */
export enum InspectionReportConstraint {
  /** unique or primary key constraint */
  EQUIPMENT_INSPECTION_REPORTS_ID_KEY = 'equipment_inspection_reports_id_key',
  /** unique or primary key constraint */
  EQUIPMENT_INSPECTION_REPORTS_PKEY = 'equipment_inspection_reports_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface InspectionReportDeleteAtPathInput {
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Array<Scalars['String']>>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Array<Scalars['String']>>
  /** 序列号 */
  serialNumber?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface InspectionReportDeleteElemInput {
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['Int']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['Int']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface InspectionReportDeleteKeyInput {
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['String']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['String']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "inspection_report" */
export interface InspectionReportIncInput {
  /** 创建者id */
  creatorId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "inspection_report" */
export interface InspectionReportInsertInput {
  /** 创建时间 */
  createAt?: InputMaybe<Scalars['timestamptz']>
  creator?: InputMaybe<UserObjRelInsertInput>
  /** 创建者id */
  creatorId?: InputMaybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: InputMaybe<Scalars['String']>
  /** 制造厂商 */
  equipmentManufacturer?: InputMaybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: InputMaybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: InputMaybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  /** 主键 */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测依据 */
  inspectionBasis?: InputMaybe<Scalars['String']>
  /** 检测日期 */
  inspectionDate?: InputMaybe<Scalars['timestamptz']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  items?: InputMaybe<InspectionReportItemArrRelInsertInput>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** 检测项，全扔这里，不再JSON */
export interface InspectionReportItem {
  /** 结论 */
  conclusion?: Maybe<Scalars['String']>
  /** 检测条件 */
  condition?: Maybe<Scalars['jsonb']>
  /** 检测项名 */
  displayName: Scalars['String']
  /** An object relationship */
  enum?: Maybe<InspectionItemEnum>
  /** 字段id */
  id: Scalars['uuid']
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: Maybe<Scalars['jsonb']>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: Maybe<Scalars['String']>
  /** An object relationship */
  report?: Maybe<InspectionReport>
  reportId?: Maybe<Scalars['uuid']>
  /** 指标要求：验收检测 */
  requirementAcceptance?: Maybe<Scalars['String']>
  /** 指标要求：状态检测 */
  requirementState?: Maybe<Scalars['String']>
  /** 检测结果 */
  result?: Maybe<Scalars['jsonb']>
}

/** 检测项，全扔这里，不再JSON */
export interface InspectionReportItemConditionArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 检测项，全扔这里，不再JSON */
export interface InspectionReportItemInputValuesArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 检测项，全扔这里，不再JSON */
export interface InspectionReportItemResultArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "inspection_report_item" */
export interface InspectionReportItemAggregate {
  aggregate?: Maybe<InspectionReportItemAggregateFields>
  nodes: Array<InspectionReportItem>
}

/** aggregate fields of "inspection_report_item" */
export interface InspectionReportItemAggregateFields {
  count: Scalars['Int']
  max?: Maybe<InspectionReportItemMaxFields>
  min?: Maybe<InspectionReportItemMinFields>
}

/** aggregate fields of "inspection_report_item" */
export interface InspectionReportItemAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "inspection_report_item" */
export interface InspectionReportItemAggregateOrderBy {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<InspectionReportItemMaxOrderBy>
  min?: InputMaybe<InspectionReportItemMinOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface InspectionReportItemAppendInput {
  /** 检测条件 */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['jsonb']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "inspection_report_item" */
export interface InspectionReportItemArrRelInsertInput {
  data: Array<InspectionReportItemInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionReportItemOnConflict>
}

/** Boolean expression to filter rows from the table "inspection_report_item". All fields are combined with a logical 'AND'. */
export interface InspectionReportItemBoolExp {
  _and?: InputMaybe<Array<InspectionReportItemBoolExp>>
  _not?: InputMaybe<InspectionReportItemBoolExp>
  _or?: InputMaybe<Array<InspectionReportItemBoolExp>>
  conclusion?: InputMaybe<StringComparisonExp>
  condition?: InputMaybe<JsonbComparisonExp>
  displayName?: InputMaybe<StringComparisonExp>
  enum?: InputMaybe<InspectionItemEnumBoolExp>
  id?: InputMaybe<UuidComparisonExp>
  inputValues?: InputMaybe<JsonbComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  report?: InputMaybe<InspectionReportBoolExp>
  reportId?: InputMaybe<UuidComparisonExp>
  requirementAcceptance?: InputMaybe<StringComparisonExp>
  requirementState?: InputMaybe<StringComparisonExp>
  result?: InputMaybe<JsonbComparisonExp>
}

/** unique or primary key constraints on table "inspection_report_item" */
export enum InspectionReportItemConstraint {
  /** unique or primary key constraint */
  INSPECTION_ITEMS_ID_KEY = 'inspection_items_id_key',
  /** unique or primary key constraint */
  INSPECTION_ITEMS_PKEY = 'inspection_items_pkey',
  /** unique or primary key constraint */
  INSPECTION_REPORT_ITEM_ITEMNAME_KEY = 'inspection_report_item_itemName_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface InspectionReportItemDeleteAtPathInput {
  /** 检测条件 */
  condition?: InputMaybe<Array<Scalars['String']>>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Array<Scalars['String']>>
  /** 检测结果 */
  result?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface InspectionReportItemDeleteElemInput {
  /** 检测条件 */
  condition?: InputMaybe<Scalars['Int']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['Int']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface InspectionReportItemDeleteKeyInput {
  /** 检测条件 */
  condition?: InputMaybe<Scalars['String']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['String']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "inspection_report_item" */
export interface InspectionReportItemInsertInput {
  /** 结论 */
  conclusion?: InputMaybe<Scalars['String']>
  /** 检测条件 */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 检测项名 */
  displayName?: InputMaybe<Scalars['String']>
  enum?: InputMaybe<InspectionItemEnumObjRelInsertInput>
  /** 字段id */
  id?: InputMaybe<Scalars['uuid']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['jsonb']>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: InputMaybe<Scalars['String']>
  report?: InputMaybe<InspectionReportObjRelInsertInput>
  reportId?: InputMaybe<Scalars['uuid']>
  /** 指标要求：验收检测 */
  requirementAcceptance?: InputMaybe<Scalars['String']>
  /** 指标要求：状态检测 */
  requirementState?: InputMaybe<Scalars['String']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export interface InspectionReportItemMaxFields {
  /** 结论 */
  conclusion?: Maybe<Scalars['String']>
  /** 检测项名 */
  displayName?: Maybe<Scalars['String']>
  /** 字段id */
  id?: Maybe<Scalars['uuid']>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: Maybe<Scalars['String']>
  reportId?: Maybe<Scalars['uuid']>
  /** 指标要求：验收检测 */
  requirementAcceptance?: Maybe<Scalars['String']>
  /** 指标要求：状态检测 */
  requirementState?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "inspection_report_item" */
export interface InspectionReportItemMaxOrderBy {
  /** 结论 */
  conclusion?: InputMaybe<OrderBy>
  /** 检测项名 */
  displayName?: InputMaybe<OrderBy>
  /** 字段id */
  id?: InputMaybe<OrderBy>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: InputMaybe<OrderBy>
  reportId?: InputMaybe<OrderBy>
  /** 指标要求：验收检测 */
  requirementAcceptance?: InputMaybe<OrderBy>
  /** 指标要求：状态检测 */
  requirementState?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface InspectionReportItemMinFields {
  /** 结论 */
  conclusion?: Maybe<Scalars['String']>
  /** 检测项名 */
  displayName?: Maybe<Scalars['String']>
  /** 字段id */
  id?: Maybe<Scalars['uuid']>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: Maybe<Scalars['String']>
  reportId?: Maybe<Scalars['uuid']>
  /** 指标要求：验收检测 */
  requirementAcceptance?: Maybe<Scalars['String']>
  /** 指标要求：状态检测 */
  requirementState?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "inspection_report_item" */
export interface InspectionReportItemMinOrderBy {
  /** 结论 */
  conclusion?: InputMaybe<OrderBy>
  /** 检测项名 */
  displayName?: InputMaybe<OrderBy>
  /** 字段id */
  id?: InputMaybe<OrderBy>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: InputMaybe<OrderBy>
  reportId?: InputMaybe<OrderBy>
  /** 指标要求：验收检测 */
  requirementAcceptance?: InputMaybe<OrderBy>
  /** 指标要求：状态检测 */
  requirementState?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "inspection_report_item" */
export interface InspectionReportItemMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<InspectionReportItem>
}

/** on_conflict condition type for table "inspection_report_item" */
export interface InspectionReportItemOnConflict {
  constraint: InspectionReportItemConstraint
  update_columns?: Array<InspectionReportItemUpdateColumn>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

/** Ordering options when selecting data from "inspection_report_item". */
export interface InspectionReportItemOrderBy {
  conclusion?: InputMaybe<OrderBy>
  condition?: InputMaybe<OrderBy>
  displayName?: InputMaybe<OrderBy>
  enum?: InputMaybe<InspectionItemEnumOrderBy>
  id?: InputMaybe<OrderBy>
  inputValues?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  report?: InputMaybe<InspectionReportOrderBy>
  reportId?: InputMaybe<OrderBy>
  requirementAcceptance?: InputMaybe<OrderBy>
  requirementState?: InputMaybe<OrderBy>
  result?: InputMaybe<OrderBy>
}

/** primary key columns input for table: inspection_report_item */
export interface InspectionReportItemPkColumnsInput {
  /** 字段id */
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface InspectionReportItemPrependInput {
  /** 检测条件 */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['jsonb']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "inspection_report_item" */
export enum InspectionReportItemSelectColumn {
  /** column name */
  CONCLUSION = 'conclusion',
  /** column name */
  CONDITION = 'condition',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  INPUTVALUES = 'inputValues',
  /** column name */
  NAME = 'name',
  /** column name */
  REPORTID = 'reportId',
  /** column name */
  REQUIREMENTACCEPTANCE = 'requirementAcceptance',
  /** column name */
  REQUIREMENTSTATE = 'requirementState',
  /** column name */
  RESULT = 'result',
}

/** input type for updating data in table "inspection_report_item" */
export interface InspectionReportItemSetInput {
  /** 结论 */
  conclusion?: InputMaybe<Scalars['String']>
  /** 检测条件 */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 检测项名 */
  displayName?: InputMaybe<Scalars['String']>
  /** 字段id */
  id?: InputMaybe<Scalars['uuid']>
  /** 输入的值，可能有多个，可能有多组 */
  inputValues?: InputMaybe<Scalars['jsonb']>
  /** 检测项名称，与 inspection_item_enum 内的对应 */
  name?: InputMaybe<Scalars['String']>
  reportId?: InputMaybe<Scalars['uuid']>
  /** 指标要求：验收检测 */
  requirementAcceptance?: InputMaybe<Scalars['String']>
  /** 指标要求：状态检测 */
  requirementState?: InputMaybe<Scalars['String']>
  /** 检测结果 */
  result?: InputMaybe<Scalars['jsonb']>
}

/** update columns of table "inspection_report_item" */
export enum InspectionReportItemUpdateColumn {
  /** column name */
  CONCLUSION = 'conclusion',
  /** column name */
  CONDITION = 'condition',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  INPUTVALUES = 'inputValues',
  /** column name */
  NAME = 'name',
  /** column name */
  REPORTID = 'reportId',
  /** column name */
  REQUIREMENTACCEPTANCE = 'requirementAcceptance',
  /** column name */
  REQUIREMENTSTATE = 'requirementState',
  /** column name */
  RESULT = 'result',
}

/** aggregate max on columns */
export interface InspectionReportMaxFields {
  /** 创建时间 */
  createAt?: Maybe<Scalars['timestamptz']>
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造厂商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 主键 */
  id?: Maybe<Scalars['uuid']>
  /** 检测依据 */
  inspectionBasis?: Maybe<Scalars['String']>
  /** 检测日期 */
  inspectionDate?: Maybe<Scalars['timestamptz']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "inspection_report" */
export interface InspectionReportMaxOrderBy {
  /** 创建时间 */
  createAt?: InputMaybe<OrderBy>
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
  /** 设备编号 */
  equipmentCode?: InputMaybe<OrderBy>
  /** 制造厂商 */
  equipmentManufacturer?: InputMaybe<OrderBy>
  /** 设备型号 */
  equipmentModel?: InputMaybe<OrderBy>
  /** 设备名称 */
  equipmentName?: InputMaybe<OrderBy>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<OrderBy>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  /** 主键 */
  id?: InputMaybe<OrderBy>
  /** 检测依据 */
  inspectionBasis?: InputMaybe<OrderBy>
  /** 检测日期 */
  inspectionDate?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface InspectionReportMinFields {
  /** 创建时间 */
  createAt?: Maybe<Scalars['timestamptz']>
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: Maybe<Scalars['String']>
  /** 制造厂商 */
  equipmentManufacturer?: Maybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: Maybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: Maybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: Maybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** 主键 */
  id?: Maybe<Scalars['uuid']>
  /** 检测依据 */
  inspectionBasis?: Maybe<Scalars['String']>
  /** 检测日期 */
  inspectionDate?: Maybe<Scalars['timestamptz']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "inspection_report" */
export interface InspectionReportMinOrderBy {
  /** 创建时间 */
  createAt?: InputMaybe<OrderBy>
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
  /** 设备编号 */
  equipmentCode?: InputMaybe<OrderBy>
  /** 制造厂商 */
  equipmentManufacturer?: InputMaybe<OrderBy>
  /** 设备型号 */
  equipmentModel?: InputMaybe<OrderBy>
  /** 设备名称 */
  equipmentName?: InputMaybe<OrderBy>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<OrderBy>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  /** 主键 */
  id?: InputMaybe<OrderBy>
  /** 检测依据 */
  inspectionBasis?: InputMaybe<OrderBy>
  /** 检测日期 */
  inspectionDate?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "inspection_report" */
export interface InspectionReportMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<InspectionReport>
}

/** input type for inserting object relation for remote table "inspection_report" */
export interface InspectionReportObjRelInsertInput {
  data: InspectionReportInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** on_conflict condition type for table "inspection_report" */
export interface InspectionReportOnConflict {
  constraint: InspectionReportConstraint
  update_columns?: Array<InspectionReportUpdateColumn>
  where?: InputMaybe<InspectionReportBoolExp>
}

/** Ordering options when selecting data from "inspection_report". */
export interface InspectionReportOrderBy {
  createAt?: InputMaybe<OrderBy>
  creator?: InputMaybe<UserOrderBy>
  creatorId?: InputMaybe<OrderBy>
  equipmentCode?: InputMaybe<OrderBy>
  equipmentManufacturer?: InputMaybe<OrderBy>
  equipmentModel?: InputMaybe<OrderBy>
  equipmentName?: InputMaybe<OrderBy>
  equipmentRequester?: InputMaybe<OrderBy>
  equipmentSampleId?: InputMaybe<OrderBy>
  equipmentSite?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspectionAddress?: InputMaybe<OrderBy>
  inspectionBasis?: InputMaybe<OrderBy>
  inspectionDate?: InputMaybe<OrderBy>
  inspectionInstrument?: InputMaybe<OrderBy>
  inspectionItem?: InputMaybe<OrderBy>
  items_aggregate?: InputMaybe<InspectionReportItemAggregateOrderBy>
  serialNumber?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: inspection_report */
export interface InspectionReportPkColumnsInput {
  /** 主键 */
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface InspectionReportPrependInput {
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "inspection_report" */
export enum InspectionReportSelectColumn {
  /** column name */
  CREATEAT = 'createAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  EQUIPMENTCODE = 'equipmentCode',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONADDRESS = 'inspectionAddress',
  /** column name */
  INSPECTIONBASIS = 'inspectionBasis',
  /** column name */
  INSPECTIONDATE = 'inspectionDate',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  INSPECTIONITEM = 'inspectionItem',
  /** column name */
  SERIALNUMBER = 'serialNumber',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** input type for updating data in table "inspection_report" */
export interface InspectionReportSetInput {
  /** 创建时间 */
  createAt?: InputMaybe<Scalars['timestamptz']>
  /** 创建者id */
  creatorId?: InputMaybe<Scalars['Int']>
  /** 设备编号 */
  equipmentCode?: InputMaybe<Scalars['String']>
  /** 制造厂商 */
  equipmentManufacturer?: InputMaybe<Scalars['String']>
  /** 设备型号 */
  equipmentModel?: InputMaybe<Scalars['String']>
  /** 设备名称 */
  equipmentName?: InputMaybe<Scalars['String']>
  /** 委托单位 */
  equipmentRequester?: InputMaybe<Scalars['String']>
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  /** 主键 */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测依据 */
  inspectionBasis?: InputMaybe<Scalars['String']>
  /** 检测日期 */
  inspectionDate?: InputMaybe<Scalars['timestamptz']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export interface InspectionReportStddevFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "inspection_report" */
export interface InspectionReportStddevOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface InspectionReportStddevPopFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "inspection_report" */
export interface InspectionReportStddevPopOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface InspectionReportStddevSampFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "inspection_report" */
export interface InspectionReportStddevSampOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface InspectionReportSumFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "inspection_report" */
export interface InspectionReportSumOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** update columns of table "inspection_report" */
export enum InspectionReportUpdateColumn {
  /** column name */
  CREATEAT = 'createAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  EQUIPMENTCODE = 'equipmentCode',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONADDRESS = 'inspectionAddress',
  /** column name */
  INSPECTIONBASIS = 'inspectionBasis',
  /** column name */
  INSPECTIONDATE = 'inspectionDate',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  INSPECTIONITEM = 'inspectionItem',
  /** column name */
  SERIALNUMBER = 'serialNumber',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** aggregate var_pop on columns */
export interface InspectionReportVarPopFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "inspection_report" */
export interface InspectionReportVarPopOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface InspectionReportVarSampFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "inspection_report" */
export interface InspectionReportVarSampOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface InspectionReportVarianceFields {
  /** 创建者id */
  creatorId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "inspection_report" */
export interface InspectionReportVarianceOrderBy {
  /** 创建者id */
  creatorId?: InputMaybe<OrderBy>
}

export interface JsonbCastExp {
  String?: InputMaybe<StringComparisonExp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface JsonbComparisonExp {
  _cast?: InputMaybe<JsonbCastExp>
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** 省 - 城市 */
export interface MetaAreaCnCity {
  code: Scalars['Int']
  /** An array relationship */
  counties: Array<MetaAreaCnCounty>
  /** An aggregate relationship */
  counties_aggregate: MetaAreaCnCountyAggregate
  name: Scalars['String']
  /** An object relationship */
  province?: Maybe<MetaAreaCnProvince>
  provinceCode: Scalars['Int']
}

/** 省 - 城市 */
export interface MetaAreaCnCityCountiesArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

/** 省 - 城市 */
export interface MetaAreaCnCityCountiesAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

/** aggregated selection of "meta.area_cn_city" */
export interface MetaAreaCnCityAggregate {
  aggregate?: Maybe<MetaAreaCnCityAggregateFields>
  nodes: Array<MetaAreaCnCity>
}

/** aggregate fields of "meta.area_cn_city" */
export interface MetaAreaCnCityAggregateFields {
  avg?: Maybe<MetaAreaCnCityAvgFields>
  count: Scalars['Int']
  max?: Maybe<MetaAreaCnCityMaxFields>
  min?: Maybe<MetaAreaCnCityMinFields>
  stddev?: Maybe<MetaAreaCnCityStddevFields>
  stddev_pop?: Maybe<MetaAreaCnCityStddevPopFields>
  stddev_samp?: Maybe<MetaAreaCnCityStddevSampFields>
  sum?: Maybe<MetaAreaCnCitySumFields>
  var_pop?: Maybe<MetaAreaCnCityVarPopFields>
  var_samp?: Maybe<MetaAreaCnCityVarSampFields>
  variance?: Maybe<MetaAreaCnCityVarianceFields>
}

/** aggregate fields of "meta.area_cn_city" */
export interface MetaAreaCnCityAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "meta.area_cn_city" */
export interface MetaAreaCnCityAggregateOrderBy {
  avg?: InputMaybe<MetaAreaCnCityAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MetaAreaCnCityMaxOrderBy>
  min?: InputMaybe<MetaAreaCnCityMinOrderBy>
  stddev?: InputMaybe<MetaAreaCnCityStddevOrderBy>
  stddev_pop?: InputMaybe<MetaAreaCnCityStddevPopOrderBy>
  stddev_samp?: InputMaybe<MetaAreaCnCityStddevSampOrderBy>
  sum?: InputMaybe<MetaAreaCnCitySumOrderBy>
  var_pop?: InputMaybe<MetaAreaCnCityVarPopOrderBy>
  var_samp?: InputMaybe<MetaAreaCnCityVarSampOrderBy>
  variance?: InputMaybe<MetaAreaCnCityVarianceOrderBy>
}

/** input type for inserting array relation for remote table "meta.area_cn_city" */
export interface MetaAreaCnCityArrRelInsertInput {
  data: Array<MetaAreaCnCityInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnCityOnConflict>
}

/** aggregate avg on columns */
export interface MetaAreaCnCityAvgFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityAvgOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "meta.area_cn_city". All fields are combined with a logical 'AND'. */
export interface MetaAreaCnCityBoolExp {
  _and?: InputMaybe<Array<MetaAreaCnCityBoolExp>>
  _not?: InputMaybe<MetaAreaCnCityBoolExp>
  _or?: InputMaybe<Array<MetaAreaCnCityBoolExp>>
  code?: InputMaybe<IntComparisonExp>
  counties?: InputMaybe<MetaAreaCnCountyBoolExp>
  name?: InputMaybe<StringComparisonExp>
  province?: InputMaybe<MetaAreaCnProvinceBoolExp>
  provinceCode?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "meta.area_cn_city" */
export enum MetaAreaCnCityConstraint {
  /** unique or primary key constraint */
  AREA_CN_CITY_PKEY = 'area_cn_city_pkey',
}

/** input type for incrementing numeric columns in table "meta.area_cn_city" */
export interface MetaAreaCnCityIncInput {
  code?: InputMaybe<Scalars['Int']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "meta.area_cn_city" */
export interface MetaAreaCnCityInsertInput {
  code?: InputMaybe<Scalars['Int']>
  counties?: InputMaybe<MetaAreaCnCountyArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
  province?: InputMaybe<MetaAreaCnProvinceObjRelInsertInput>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export interface MetaAreaCnCityMaxFields {
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityMaxOrderBy {
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface MetaAreaCnCityMinFields {
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityMinOrderBy {
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "meta.area_cn_city" */
export interface MetaAreaCnCityMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<MetaAreaCnCity>
}

/** input type for inserting object relation for remote table "meta.area_cn_city" */
export interface MetaAreaCnCityObjRelInsertInput {
  data: MetaAreaCnCityInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnCityOnConflict>
}

/** on_conflict condition type for table "meta.area_cn_city" */
export interface MetaAreaCnCityOnConflict {
  constraint: MetaAreaCnCityConstraint
  update_columns?: Array<MetaAreaCnCityUpdateColumn>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

/** Ordering options when selecting data from "meta.area_cn_city". */
export interface MetaAreaCnCityOrderBy {
  code?: InputMaybe<OrderBy>
  counties_aggregate?: InputMaybe<MetaAreaCnCountyAggregateOrderBy>
  name?: InputMaybe<OrderBy>
  province?: InputMaybe<MetaAreaCnProvinceOrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** primary key columns input for table: meta_area_cn_city */
export interface MetaAreaCnCityPkColumnsInput {
  code: Scalars['Int']
}

/** select columns of table "meta.area_cn_city" */
export enum MetaAreaCnCitySelectColumn {
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** input type for updating data in table "meta.area_cn_city" */
export interface MetaAreaCnCitySetInput {
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface MetaAreaCnCityStddevFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityStddevOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface MetaAreaCnCityStddevPopFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityStddevPopOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface MetaAreaCnCityStddevSampFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityStddevSampOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface MetaAreaCnCitySumFields {
  code?: Maybe<Scalars['Int']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCitySumOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** update columns of table "meta.area_cn_city" */
export enum MetaAreaCnCityUpdateColumn {
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** aggregate var_pop on columns */
export interface MetaAreaCnCityVarPopFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityVarPopOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface MetaAreaCnCityVarSampFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityVarSampOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface MetaAreaCnCityVarianceFields {
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "meta.area_cn_city" */
export interface MetaAreaCnCityVarianceOrderBy {
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** 行政区划 - 中国 - 县级 */
export interface MetaAreaCnCounty {
  /** An object relationship */
  city?: Maybe<MetaAreaCnCity>
  cityCode: Scalars['Int']
  code: Scalars['Int']
  name: Scalars['String']
  /** An object relationship */
  province?: Maybe<MetaAreaCnProvince>
  provinceCode: Scalars['Int']
  /** An array relationship */
  towns: Array<MetaAreaCnTown>
  /** An aggregate relationship */
  towns_aggregate: MetaAreaCnTownAggregate
}

/** 行政区划 - 中国 - 县级 */
export interface MetaAreaCnCountyTownsArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

/** 行政区划 - 中国 - 县级 */
export interface MetaAreaCnCountyTownsAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

/** aggregated selection of "meta.area_cn_county" */
export interface MetaAreaCnCountyAggregate {
  aggregate?: Maybe<MetaAreaCnCountyAggregateFields>
  nodes: Array<MetaAreaCnCounty>
}

/** aggregate fields of "meta.area_cn_county" */
export interface MetaAreaCnCountyAggregateFields {
  avg?: Maybe<MetaAreaCnCountyAvgFields>
  count: Scalars['Int']
  max?: Maybe<MetaAreaCnCountyMaxFields>
  min?: Maybe<MetaAreaCnCountyMinFields>
  stddev?: Maybe<MetaAreaCnCountyStddevFields>
  stddev_pop?: Maybe<MetaAreaCnCountyStddevPopFields>
  stddev_samp?: Maybe<MetaAreaCnCountyStddevSampFields>
  sum?: Maybe<MetaAreaCnCountySumFields>
  var_pop?: Maybe<MetaAreaCnCountyVarPopFields>
  var_samp?: Maybe<MetaAreaCnCountyVarSampFields>
  variance?: Maybe<MetaAreaCnCountyVarianceFields>
}

/** aggregate fields of "meta.area_cn_county" */
export interface MetaAreaCnCountyAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "meta.area_cn_county" */
export interface MetaAreaCnCountyAggregateOrderBy {
  avg?: InputMaybe<MetaAreaCnCountyAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MetaAreaCnCountyMaxOrderBy>
  min?: InputMaybe<MetaAreaCnCountyMinOrderBy>
  stddev?: InputMaybe<MetaAreaCnCountyStddevOrderBy>
  stddev_pop?: InputMaybe<MetaAreaCnCountyStddevPopOrderBy>
  stddev_samp?: InputMaybe<MetaAreaCnCountyStddevSampOrderBy>
  sum?: InputMaybe<MetaAreaCnCountySumOrderBy>
  var_pop?: InputMaybe<MetaAreaCnCountyVarPopOrderBy>
  var_samp?: InputMaybe<MetaAreaCnCountyVarSampOrderBy>
  variance?: InputMaybe<MetaAreaCnCountyVarianceOrderBy>
}

/** input type for inserting array relation for remote table "meta.area_cn_county" */
export interface MetaAreaCnCountyArrRelInsertInput {
  data: Array<MetaAreaCnCountyInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnCountyOnConflict>
}

/** aggregate avg on columns */
export interface MetaAreaCnCountyAvgFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyAvgOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "meta.area_cn_county". All fields are combined with a logical 'AND'. */
export interface MetaAreaCnCountyBoolExp {
  _and?: InputMaybe<Array<MetaAreaCnCountyBoolExp>>
  _not?: InputMaybe<MetaAreaCnCountyBoolExp>
  _or?: InputMaybe<Array<MetaAreaCnCountyBoolExp>>
  city?: InputMaybe<MetaAreaCnCityBoolExp>
  cityCode?: InputMaybe<IntComparisonExp>
  code?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  province?: InputMaybe<MetaAreaCnProvinceBoolExp>
  provinceCode?: InputMaybe<IntComparisonExp>
  towns?: InputMaybe<MetaAreaCnTownBoolExp>
}

/** unique or primary key constraints on table "meta.area_cn_county" */
export enum MetaAreaCnCountyConstraint {
  /** unique or primary key constraint */
  AREA_STREET_DISTRICT_PKEY = 'area_street_district_pkey',
}

/** input type for incrementing numeric columns in table "meta.area_cn_county" */
export interface MetaAreaCnCountyIncInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "meta.area_cn_county" */
export interface MetaAreaCnCountyInsertInput {
  city?: InputMaybe<MetaAreaCnCityObjRelInsertInput>
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  province?: InputMaybe<MetaAreaCnProvinceObjRelInsertInput>
  provinceCode?: InputMaybe<Scalars['Int']>
  towns?: InputMaybe<MetaAreaCnTownArrRelInsertInput>
}

/** aggregate max on columns */
export interface MetaAreaCnCountyMaxFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyMaxOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface MetaAreaCnCountyMinFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyMinOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "meta.area_cn_county" */
export interface MetaAreaCnCountyMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<MetaAreaCnCounty>
}

/** input type for inserting object relation for remote table "meta.area_cn_county" */
export interface MetaAreaCnCountyObjRelInsertInput {
  data: MetaAreaCnCountyInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnCountyOnConflict>
}

/** on_conflict condition type for table "meta.area_cn_county" */
export interface MetaAreaCnCountyOnConflict {
  constraint: MetaAreaCnCountyConstraint
  update_columns?: Array<MetaAreaCnCountyUpdateColumn>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

/** Ordering options when selecting data from "meta.area_cn_county". */
export interface MetaAreaCnCountyOrderBy {
  city?: InputMaybe<MetaAreaCnCityOrderBy>
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  province?: InputMaybe<MetaAreaCnProvinceOrderBy>
  provinceCode?: InputMaybe<OrderBy>
  towns_aggregate?: InputMaybe<MetaAreaCnTownAggregateOrderBy>
}

/** primary key columns input for table: meta_area_cn_county */
export interface MetaAreaCnCountyPkColumnsInput {
  code: Scalars['Int']
}

/** select columns of table "meta.area_cn_county" */
export enum MetaAreaCnCountySelectColumn {
  /** column name */
  CITYCODE = 'cityCode',
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** input type for updating data in table "meta.area_cn_county" */
export interface MetaAreaCnCountySetInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface MetaAreaCnCountyStddevFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyStddevOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface MetaAreaCnCountyStddevPopFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyStddevPopOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface MetaAreaCnCountyStddevSampFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyStddevSampOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface MetaAreaCnCountySumFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountySumOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** update columns of table "meta.area_cn_county" */
export enum MetaAreaCnCountyUpdateColumn {
  /** column name */
  CITYCODE = 'cityCode',
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** aggregate var_pop on columns */
export interface MetaAreaCnCountyVarPopFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyVarPopOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface MetaAreaCnCountyVarSampFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyVarSampOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface MetaAreaCnCountyVarianceFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "meta.area_cn_county" */
export interface MetaAreaCnCountyVarianceOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** 行政区划 - 省级 */
export interface MetaAreaCnProvince {
  /** An array relationship */
  cities: Array<MetaAreaCnCity>
  /** An aggregate relationship */
  cities_aggregate: MetaAreaCnCityAggregate
  code: Scalars['Int']
  name: Scalars['String']
}

/** 行政区划 - 省级 */
export interface MetaAreaCnProvinceCitiesArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

/** 行政区划 - 省级 */
export interface MetaAreaCnProvinceCitiesAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

/** aggregated selection of "meta.area_cn_province" */
export interface MetaAreaCnProvinceAggregate {
  aggregate?: Maybe<MetaAreaCnProvinceAggregateFields>
  nodes: Array<MetaAreaCnProvince>
}

/** aggregate fields of "meta.area_cn_province" */
export interface MetaAreaCnProvinceAggregateFields {
  avg?: Maybe<MetaAreaCnProvinceAvgFields>
  count: Scalars['Int']
  max?: Maybe<MetaAreaCnProvinceMaxFields>
  min?: Maybe<MetaAreaCnProvinceMinFields>
  stddev?: Maybe<MetaAreaCnProvinceStddevFields>
  stddev_pop?: Maybe<MetaAreaCnProvinceStddevPopFields>
  stddev_samp?: Maybe<MetaAreaCnProvinceStddevSampFields>
  sum?: Maybe<MetaAreaCnProvinceSumFields>
  var_pop?: Maybe<MetaAreaCnProvinceVarPopFields>
  var_samp?: Maybe<MetaAreaCnProvinceVarSampFields>
  variance?: Maybe<MetaAreaCnProvinceVarianceFields>
}

/** aggregate fields of "meta.area_cn_province" */
export interface MetaAreaCnProvinceAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<MetaAreaCnProvinceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface MetaAreaCnProvinceAvgFields {
  code?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "meta.area_cn_province". All fields are combined with a logical 'AND'. */
export interface MetaAreaCnProvinceBoolExp {
  _and?: InputMaybe<Array<MetaAreaCnProvinceBoolExp>>
  _not?: InputMaybe<MetaAreaCnProvinceBoolExp>
  _or?: InputMaybe<Array<MetaAreaCnProvinceBoolExp>>
  cities?: InputMaybe<MetaAreaCnCityBoolExp>
  code?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "meta.area_cn_province" */
export enum MetaAreaCnProvinceConstraint {
  /** unique or primary key constraint */
  AREA_CN_PROVINCE_PKEY = 'area_cn_province_pkey',
}

/** input type for incrementing numeric columns in table "meta.area_cn_province" */
export interface MetaAreaCnProvinceIncInput {
  code?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "meta.area_cn_province" */
export interface MetaAreaCnProvinceInsertInput {
  cities?: InputMaybe<MetaAreaCnCityArrRelInsertInput>
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface MetaAreaCnProvinceMaxFields {
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface MetaAreaCnProvinceMinFields {
  code?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "meta.area_cn_province" */
export interface MetaAreaCnProvinceMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<MetaAreaCnProvince>
}

/** input type for inserting object relation for remote table "meta.area_cn_province" */
export interface MetaAreaCnProvinceObjRelInsertInput {
  data: MetaAreaCnProvinceInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnProvinceOnConflict>
}

/** on_conflict condition type for table "meta.area_cn_province" */
export interface MetaAreaCnProvinceOnConflict {
  constraint: MetaAreaCnProvinceConstraint
  update_columns?: Array<MetaAreaCnProvinceUpdateColumn>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
}

/** Ordering options when selecting data from "meta.area_cn_province". */
export interface MetaAreaCnProvinceOrderBy {
  cities_aggregate?: InputMaybe<MetaAreaCnCityAggregateOrderBy>
  code?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: meta_area_cn_province */
export interface MetaAreaCnProvincePkColumnsInput {
  code: Scalars['Int']
}

/** select columns of table "meta.area_cn_province" */
export enum MetaAreaCnProvinceSelectColumn {
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
}

/** input type for updating data in table "meta.area_cn_province" */
export interface MetaAreaCnProvinceSetInput {
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface MetaAreaCnProvinceStddevFields {
  code?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface MetaAreaCnProvinceStddevPopFields {
  code?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface MetaAreaCnProvinceStddevSampFields {
  code?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export interface MetaAreaCnProvinceSumFields {
  code?: Maybe<Scalars['Int']>
}

/** update columns of table "meta.area_cn_province" */
export enum MetaAreaCnProvinceUpdateColumn {
  /** column name */
  CODE = 'code',
  /** column name */
  NAME = 'name',
}

/** aggregate var_pop on columns */
export interface MetaAreaCnProvinceVarPopFields {
  code?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface MetaAreaCnProvinceVarSampFields {
  code?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface MetaAreaCnProvinceVarianceFields {
  code?: Maybe<Scalars['Float']>
}

/** 行政区划 - 中国 - 镇街 */
export interface MetaAreaCnTown {
  /** An object relationship */
  city?: Maybe<MetaAreaCnCity>
  cityCode: Scalars['Int']
  code: Scalars['Int']
  /** An object relationship */
  county?: Maybe<MetaAreaCnCounty>
  countyCode: Scalars['Int']
  name: Scalars['String']
  /** An object relationship */
  province?: Maybe<MetaAreaCnProvince>
  provinceCode?: Maybe<Scalars['Int']>
}

/** aggregated selection of "meta.area_cn_town" */
export interface MetaAreaCnTownAggregate {
  aggregate?: Maybe<MetaAreaCnTownAggregateFields>
  nodes: Array<MetaAreaCnTown>
}

/** aggregate fields of "meta.area_cn_town" */
export interface MetaAreaCnTownAggregateFields {
  avg?: Maybe<MetaAreaCnTownAvgFields>
  count: Scalars['Int']
  max?: Maybe<MetaAreaCnTownMaxFields>
  min?: Maybe<MetaAreaCnTownMinFields>
  stddev?: Maybe<MetaAreaCnTownStddevFields>
  stddev_pop?: Maybe<MetaAreaCnTownStddevPopFields>
  stddev_samp?: Maybe<MetaAreaCnTownStddevSampFields>
  sum?: Maybe<MetaAreaCnTownSumFields>
  var_pop?: Maybe<MetaAreaCnTownVarPopFields>
  var_samp?: Maybe<MetaAreaCnTownVarSampFields>
  variance?: Maybe<MetaAreaCnTownVarianceFields>
}

/** aggregate fields of "meta.area_cn_town" */
export interface MetaAreaCnTownAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "meta.area_cn_town" */
export interface MetaAreaCnTownAggregateOrderBy {
  avg?: InputMaybe<MetaAreaCnTownAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MetaAreaCnTownMaxOrderBy>
  min?: InputMaybe<MetaAreaCnTownMinOrderBy>
  stddev?: InputMaybe<MetaAreaCnTownStddevOrderBy>
  stddev_pop?: InputMaybe<MetaAreaCnTownStddevPopOrderBy>
  stddev_samp?: InputMaybe<MetaAreaCnTownStddevSampOrderBy>
  sum?: InputMaybe<MetaAreaCnTownSumOrderBy>
  var_pop?: InputMaybe<MetaAreaCnTownVarPopOrderBy>
  var_samp?: InputMaybe<MetaAreaCnTownVarSampOrderBy>
  variance?: InputMaybe<MetaAreaCnTownVarianceOrderBy>
}

/** input type for inserting array relation for remote table "meta.area_cn_town" */
export interface MetaAreaCnTownArrRelInsertInput {
  data: Array<MetaAreaCnTownInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<MetaAreaCnTownOnConflict>
}

/** aggregate avg on columns */
export interface MetaAreaCnTownAvgFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownAvgOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "meta.area_cn_town". All fields are combined with a logical 'AND'. */
export interface MetaAreaCnTownBoolExp {
  _and?: InputMaybe<Array<MetaAreaCnTownBoolExp>>
  _not?: InputMaybe<MetaAreaCnTownBoolExp>
  _or?: InputMaybe<Array<MetaAreaCnTownBoolExp>>
  city?: InputMaybe<MetaAreaCnCityBoolExp>
  cityCode?: InputMaybe<IntComparisonExp>
  code?: InputMaybe<IntComparisonExp>
  county?: InputMaybe<MetaAreaCnCountyBoolExp>
  countyCode?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  province?: InputMaybe<MetaAreaCnProvinceBoolExp>
  provinceCode?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "meta.area_cn_town" */
export enum MetaAreaCnTownConstraint {
  /** unique or primary key constraint */
  AREA_CN_TOWN_PKEY = 'area_cn_town_pkey',
}

/** input type for incrementing numeric columns in table "meta.area_cn_town" */
export interface MetaAreaCnTownIncInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  countyCode?: InputMaybe<Scalars['Int']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "meta.area_cn_town" */
export interface MetaAreaCnTownInsertInput {
  city?: InputMaybe<MetaAreaCnCityObjRelInsertInput>
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  county?: InputMaybe<MetaAreaCnCountyObjRelInsertInput>
  countyCode?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  province?: InputMaybe<MetaAreaCnProvinceObjRelInsertInput>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export interface MetaAreaCnTownMaxFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  countyCode?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownMaxOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface MetaAreaCnTownMinFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  countyCode?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownMinOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "meta.area_cn_town" */
export interface MetaAreaCnTownMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<MetaAreaCnTown>
}

/** on_conflict condition type for table "meta.area_cn_town" */
export interface MetaAreaCnTownOnConflict {
  constraint: MetaAreaCnTownConstraint
  update_columns?: Array<MetaAreaCnTownUpdateColumn>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

/** Ordering options when selecting data from "meta.area_cn_town". */
export interface MetaAreaCnTownOrderBy {
  city?: InputMaybe<MetaAreaCnCityOrderBy>
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  county?: InputMaybe<MetaAreaCnCountyOrderBy>
  countyCode?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  province?: InputMaybe<MetaAreaCnProvinceOrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** primary key columns input for table: meta_area_cn_town */
export interface MetaAreaCnTownPkColumnsInput {
  code: Scalars['Int']
}

/** select columns of table "meta.area_cn_town" */
export enum MetaAreaCnTownSelectColumn {
  /** column name */
  CITYCODE = 'cityCode',
  /** column name */
  CODE = 'code',
  /** column name */
  COUNTYCODE = 'countyCode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** input type for updating data in table "meta.area_cn_town" */
export interface MetaAreaCnTownSetInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  countyCode?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export interface MetaAreaCnTownStddevFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownStddevOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface MetaAreaCnTownStddevPopFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownStddevPopOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface MetaAreaCnTownStddevSampFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownStddevSampOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate sum on columns */
export interface MetaAreaCnTownSumFields {
  cityCode?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['Int']>
  countyCode?: Maybe<Scalars['Int']>
  provinceCode?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownSumOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** update columns of table "meta.area_cn_town" */
export enum MetaAreaCnTownUpdateColumn {
  /** column name */
  CITYCODE = 'cityCode',
  /** column name */
  CODE = 'code',
  /** column name */
  COUNTYCODE = 'countyCode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROVINCECODE = 'provinceCode',
}

/** aggregate var_pop on columns */
export interface MetaAreaCnTownVarPopFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownVarPopOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface MetaAreaCnTownVarSampFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownVarSampOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface MetaAreaCnTownVarianceFields {
  cityCode?: Maybe<Scalars['Float']>
  code?: Maybe<Scalars['Float']>
  countyCode?: Maybe<Scalars['Float']>
  provinceCode?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "meta.area_cn_town" */
export interface MetaAreaCnTownVarianceOrderBy {
  cityCode?: InputMaybe<OrderBy>
  code?: InputMaybe<OrderBy>
  countyCode?: InputMaybe<OrderBy>
  provinceCode?: InputMaybe<OrderBy>
}

/** mutation root */
export interface MutationRoot {
  /** delete data from the table: "clients" */
  delete_clients?: Maybe<ClientsMutationResponse>
  /** delete single row from the table: "clients" */
  delete_clients_by_pk?: Maybe<Clients>
  /** delete data from the table: "device" */
  delete_device?: Maybe<DeviceMutationResponse>
  /** delete single row from the table: "device" */
  delete_device_by_pk?: Maybe<Device>
  /** delete data from the table: "equipment_enum" */
  delete_equipment_enum?: Maybe<EquipmentEnumMutationResponse>
  /** delete single row from the table: "equipment_enum" */
  delete_equipment_enum_by_pk?: Maybe<EquipmentEnum>
  /** delete data from the table: "global_const" */
  delete_global_const?: Maybe<GlobalConstMutationResponse>
  /** delete single row from the table: "global_const" */
  delete_global_const_by_pk?: Maybe<GlobalConst>
  /** delete data from the table: "inspection_item_enum" */
  delete_inspection_item_enum?: Maybe<InspectionItemEnumMutationResponse>
  /** delete single row from the table: "inspection_item_enum" */
  delete_inspection_item_enum_by_pk?: Maybe<InspectionItemEnum>
  delete_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** delete single row from the table: "inspection_report" */
  delete_inspection_report_by_pk?: Maybe<InspectionReport>
  /** delete data from the table: "inspection_report_item" */
  delete_inspection_report_item?: Maybe<InspectionReportItemMutationResponse>
  /** delete single row from the table: "inspection_report_item" */
  delete_inspection_report_item_by_pk?: Maybe<InspectionReportItem>
  /** delete data from the table: "meta.area_cn_city" */
  delete_meta_area_cn_city?: Maybe<MetaAreaCnCityMutationResponse>
  /** delete single row from the table: "meta.area_cn_city" */
  delete_meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** delete data from the table: "meta.area_cn_county" */
  delete_meta_area_cn_county?: Maybe<MetaAreaCnCountyMutationResponse>
  /** delete single row from the table: "meta.area_cn_county" */
  delete_meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** delete data from the table: "meta.area_cn_province" */
  delete_meta_area_cn_province?: Maybe<MetaAreaCnProvinceMutationResponse>
  /** delete single row from the table: "meta.area_cn_province" */
  delete_meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** delete data from the table: "meta.area_cn_town" */
  delete_meta_area_cn_town?: Maybe<MetaAreaCnTownMutationResponse>
  /** delete single row from the table: "meta.area_cn_town" */
  delete_meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** delete data from the table: "report_file" */
  delete_report_file?: Maybe<ReportFileMutationResponse>
  /** delete single row from the table: "report_file" */
  delete_report_file_by_pk?: Maybe<ReportFile>
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>
  /** delete data from the table: "user_view" */
  delete_user_view?: Maybe<UserViewMutationResponse>
  /** insert data into the table: "clients" */
  insert_clients?: Maybe<ClientsMutationResponse>
  /** insert a single row into the table: "clients" */
  insert_clients_one?: Maybe<Clients>
  /** insert data into the table: "device" */
  insert_device?: Maybe<DeviceMutationResponse>
  /** insert a single row into the table: "device" */
  insert_device_one?: Maybe<Device>
  /** insert data into the table: "equipment_enum" */
  insert_equipment_enum?: Maybe<EquipmentEnumMutationResponse>
  /** insert a single row into the table: "equipment_enum" */
  insert_equipment_enum_one?: Maybe<EquipmentEnum>
  /** insert data into the table: "global_const" */
  insert_global_const?: Maybe<GlobalConstMutationResponse>
  /** insert a single row into the table: "global_const" */
  insert_global_const_one?: Maybe<GlobalConst>
  /** insert data into the table: "inspection_item_enum" */
  insert_inspection_item_enum?: Maybe<InspectionItemEnumMutationResponse>
  /** insert a single row into the table: "inspection_item_enum" */
  insert_inspection_item_enum_one?: Maybe<InspectionItemEnum>
  insert_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** insert data into the table: "inspection_report_item" */
  insert_inspection_report_item?: Maybe<InspectionReportItemMutationResponse>
  /** insert a single row into the table: "inspection_report_item" */
  insert_inspection_report_item_one?: Maybe<InspectionReportItem>
  /** insert a single row into the table: "inspection_report" */
  insert_inspection_report_one?: Maybe<InspectionReport>
  /** insert data into the table: "meta.area_cn_city" */
  insert_meta_area_cn_city?: Maybe<MetaAreaCnCityMutationResponse>
  /** insert a single row into the table: "meta.area_cn_city" */
  insert_meta_area_cn_city_one?: Maybe<MetaAreaCnCity>
  /** insert data into the table: "meta.area_cn_county" */
  insert_meta_area_cn_county?: Maybe<MetaAreaCnCountyMutationResponse>
  /** insert a single row into the table: "meta.area_cn_county" */
  insert_meta_area_cn_county_one?: Maybe<MetaAreaCnCounty>
  /** insert data into the table: "meta.area_cn_province" */
  insert_meta_area_cn_province?: Maybe<MetaAreaCnProvinceMutationResponse>
  /** insert a single row into the table: "meta.area_cn_province" */
  insert_meta_area_cn_province_one?: Maybe<MetaAreaCnProvince>
  /** insert data into the table: "meta.area_cn_town" */
  insert_meta_area_cn_town?: Maybe<MetaAreaCnTownMutationResponse>
  /** insert a single row into the table: "meta.area_cn_town" */
  insert_meta_area_cn_town_one?: Maybe<MetaAreaCnTown>
  /** insert data into the table: "report_file" */
  insert_report_file?: Maybe<ReportFileMutationResponse>
  /** insert a single row into the table: "report_file" */
  insert_report_file_one?: Maybe<ReportFile>
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>
  /** insert data into the table: "user_view" */
  insert_user_view?: Maybe<UserViewMutationResponse>
  /** insert a single row into the table: "user_view" */
  insert_user_view_one?: Maybe<UserView>
  /** update data of the table: "clients" */
  update_clients?: Maybe<ClientsMutationResponse>
  /** update single row of the table: "clients" */
  update_clients_by_pk?: Maybe<Clients>
  /** update data of the table: "device" */
  update_device?: Maybe<DeviceMutationResponse>
  /** update single row of the table: "device" */
  update_device_by_pk?: Maybe<Device>
  /** update data of the table: "equipment_enum" */
  update_equipment_enum?: Maybe<EquipmentEnumMutationResponse>
  /** update single row of the table: "equipment_enum" */
  update_equipment_enum_by_pk?: Maybe<EquipmentEnum>
  /** update data of the table: "global_const" */
  update_global_const?: Maybe<GlobalConstMutationResponse>
  /** update single row of the table: "global_const" */
  update_global_const_by_pk?: Maybe<GlobalConst>
  /** update data of the table: "inspection_item_enum" */
  update_inspection_item_enum?: Maybe<InspectionItemEnumMutationResponse>
  /** update single row of the table: "inspection_item_enum" */
  update_inspection_item_enum_by_pk?: Maybe<InspectionItemEnum>
  update_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** update single row of the table: "inspection_report" */
  update_inspection_report_by_pk?: Maybe<InspectionReport>
  /** update data of the table: "inspection_report_item" */
  update_inspection_report_item?: Maybe<InspectionReportItemMutationResponse>
  /** update single row of the table: "inspection_report_item" */
  update_inspection_report_item_by_pk?: Maybe<InspectionReportItem>
  /** update data of the table: "meta.area_cn_city" */
  update_meta_area_cn_city?: Maybe<MetaAreaCnCityMutationResponse>
  /** update single row of the table: "meta.area_cn_city" */
  update_meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** update data of the table: "meta.area_cn_county" */
  update_meta_area_cn_county?: Maybe<MetaAreaCnCountyMutationResponse>
  /** update single row of the table: "meta.area_cn_county" */
  update_meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** update data of the table: "meta.area_cn_province" */
  update_meta_area_cn_province?: Maybe<MetaAreaCnProvinceMutationResponse>
  /** update single row of the table: "meta.area_cn_province" */
  update_meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** update data of the table: "meta.area_cn_town" */
  update_meta_area_cn_town?: Maybe<MetaAreaCnTownMutationResponse>
  /** update single row of the table: "meta.area_cn_town" */
  update_meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** update data of the table: "report_file" */
  update_report_file?: Maybe<ReportFileMutationResponse>
  /** update single row of the table: "report_file" */
  update_report_file_by_pk?: Maybe<ReportFile>
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
  /** update data of the table: "user_view" */
  update_user_view?: Maybe<UserViewMutationResponse>
}

/** mutation root */
export interface MutationRootDeleteClientsArgs {
  where: ClientsBoolExp
}

/** mutation root */
export interface MutationRootDeleteClientsByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteDeviceArgs {
  where: DeviceBoolExp
}

/** mutation root */
export interface MutationRootDeleteDeviceByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteEquipmentEnumArgs {
  where: EquipmentEnumBoolExp
}

/** mutation root */
export interface MutationRootDeleteEquipmentEnumByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteGlobalConstArgs {
  where: GlobalConstBoolExp
}

/** mutation root */
export interface MutationRootDeleteGlobalConstByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteInspectionItemEnumArgs {
  where: InspectionItemEnumBoolExp
}

/** mutation root */
export interface MutationRootDeleteInspectionItemEnumByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteInspectionReportArgs {
  where: InspectionReportBoolExp
}

/** mutation root */
export interface MutationRootDeleteInspectionReportByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteInspectionReportItemArgs {
  where: InspectionReportItemBoolExp
}

/** mutation root */
export interface MutationRootDeleteInspectionReportItemByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnCityArgs {
  where: MetaAreaCnCityBoolExp
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnCityByPkArgs {
  code: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnCountyArgs {
  where: MetaAreaCnCountyBoolExp
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnCountyByPkArgs {
  code: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnProvinceArgs {
  where: MetaAreaCnProvinceBoolExp
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnProvinceByPkArgs {
  code: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnTownArgs {
  where: MetaAreaCnTownBoolExp
}

/** mutation root */
export interface MutationRootDeleteMetaAreaCnTownByPkArgs {
  code: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteReportFileArgs {
  where: ReportFileBoolExp
}

/** mutation root */
export interface MutationRootDeleteReportFileByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteUserArgs {
  where: UserBoolExp
}

/** mutation root */
export interface MutationRootDeleteUserByPkArgs {
  id: Scalars['Int']
}

/** mutation root */
export interface MutationRootDeleteUserViewArgs {
  where: UserViewBoolExp
}

/** mutation root */
export interface MutationRootInsertClientsArgs {
  objects: Array<ClientsInsertInput>
  on_conflict?: InputMaybe<ClientsOnConflict>
}

/** mutation root */
export interface MutationRootInsertClientsOneArgs {
  object: ClientsInsertInput
  on_conflict?: InputMaybe<ClientsOnConflict>
}

/** mutation root */
export interface MutationRootInsertDeviceArgs {
  objects: Array<DeviceInsertInput>
  on_conflict?: InputMaybe<DeviceOnConflict>
}

/** mutation root */
export interface MutationRootInsertDeviceOneArgs {
  object: DeviceInsertInput
  on_conflict?: InputMaybe<DeviceOnConflict>
}

/** mutation root */
export interface MutationRootInsertEquipmentEnumArgs {
  objects: Array<EquipmentEnumInsertInput>
  on_conflict?: InputMaybe<EquipmentEnumOnConflict>
}

/** mutation root */
export interface MutationRootInsertEquipmentEnumOneArgs {
  object: EquipmentEnumInsertInput
  on_conflict?: InputMaybe<EquipmentEnumOnConflict>
}

/** mutation root */
export interface MutationRootInsertGlobalConstArgs {
  objects: Array<GlobalConstInsertInput>
  on_conflict?: InputMaybe<GlobalConstOnConflict>
}

/** mutation root */
export interface MutationRootInsertGlobalConstOneArgs {
  object: GlobalConstInsertInput
  on_conflict?: InputMaybe<GlobalConstOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionItemEnumArgs {
  objects: Array<InspectionItemEnumInsertInput>
  on_conflict?: InputMaybe<InspectionItemEnumOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionItemEnumOneArgs {
  object: InspectionItemEnumInsertInput
  on_conflict?: InputMaybe<InspectionItemEnumOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportArgs {
  objects: Array<InspectionReportInsertInput>
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportItemArgs {
  objects: Array<InspectionReportItemInsertInput>
  on_conflict?: InputMaybe<InspectionReportItemOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportItemOneArgs {
  object: InspectionReportItemInsertInput
  on_conflict?: InputMaybe<InspectionReportItemOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportOneArgs {
  object: InspectionReportInsertInput
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnCityArgs {
  objects: Array<MetaAreaCnCityInsertInput>
  on_conflict?: InputMaybe<MetaAreaCnCityOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnCityOneArgs {
  object: MetaAreaCnCityInsertInput
  on_conflict?: InputMaybe<MetaAreaCnCityOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnCountyArgs {
  objects: Array<MetaAreaCnCountyInsertInput>
  on_conflict?: InputMaybe<MetaAreaCnCountyOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnCountyOneArgs {
  object: MetaAreaCnCountyInsertInput
  on_conflict?: InputMaybe<MetaAreaCnCountyOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnProvinceArgs {
  objects: Array<MetaAreaCnProvinceInsertInput>
  on_conflict?: InputMaybe<MetaAreaCnProvinceOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnProvinceOneArgs {
  object: MetaAreaCnProvinceInsertInput
  on_conflict?: InputMaybe<MetaAreaCnProvinceOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnTownArgs {
  objects: Array<MetaAreaCnTownInsertInput>
  on_conflict?: InputMaybe<MetaAreaCnTownOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAreaCnTownOneArgs {
  object: MetaAreaCnTownInsertInput
  on_conflict?: InputMaybe<MetaAreaCnTownOnConflict>
}

/** mutation root */
export interface MutationRootInsertReportFileArgs {
  objects: Array<ReportFileInsertInput>
  on_conflict?: InputMaybe<ReportFileOnConflict>
}

/** mutation root */
export interface MutationRootInsertReportFileOneArgs {
  object: ReportFileInsertInput
  on_conflict?: InputMaybe<ReportFileOnConflict>
}

/** mutation root */
export interface MutationRootInsertUserArgs {
  objects: Array<UserInsertInput>
  on_conflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export interface MutationRootInsertUserOneArgs {
  object: UserInsertInput
  on_conflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export interface MutationRootInsertUserViewArgs {
  objects: Array<UserViewInsertInput>
}

/** mutation root */
export interface MutationRootInsertUserViewOneArgs {
  object: UserViewInsertInput
}

/** mutation root */
export interface MutationRootUpdateClientsArgs {
  _append?: InputMaybe<ClientsAppendInput>
  _delete_at_path?: InputMaybe<ClientsDeleteAtPathInput>
  _delete_elem?: InputMaybe<ClientsDeleteElemInput>
  _delete_key?: InputMaybe<ClientsDeleteKeyInput>
  _prepend?: InputMaybe<ClientsPrependInput>
  _set?: InputMaybe<ClientsSetInput>
  where: ClientsBoolExp
}

/** mutation root */
export interface MutationRootUpdateClientsByPkArgs {
  _append?: InputMaybe<ClientsAppendInput>
  _delete_at_path?: InputMaybe<ClientsDeleteAtPathInput>
  _delete_elem?: InputMaybe<ClientsDeleteElemInput>
  _delete_key?: InputMaybe<ClientsDeleteKeyInput>
  _prepend?: InputMaybe<ClientsPrependInput>
  _set?: InputMaybe<ClientsSetInput>
  pk_columns: ClientsPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateDeviceArgs {
  _append?: InputMaybe<DeviceAppendInput>
  _delete_at_path?: InputMaybe<DeviceDeleteAtPathInput>
  _delete_elem?: InputMaybe<DeviceDeleteElemInput>
  _delete_key?: InputMaybe<DeviceDeleteKeyInput>
  _inc?: InputMaybe<DeviceIncInput>
  _prepend?: InputMaybe<DevicePrependInput>
  _set?: InputMaybe<DeviceSetInput>
  where: DeviceBoolExp
}

/** mutation root */
export interface MutationRootUpdateDeviceByPkArgs {
  _append?: InputMaybe<DeviceAppendInput>
  _delete_at_path?: InputMaybe<DeviceDeleteAtPathInput>
  _delete_elem?: InputMaybe<DeviceDeleteElemInput>
  _delete_key?: InputMaybe<DeviceDeleteKeyInput>
  _inc?: InputMaybe<DeviceIncInput>
  _prepend?: InputMaybe<DevicePrependInput>
  _set?: InputMaybe<DeviceSetInput>
  pk_columns: DevicePkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateEquipmentEnumArgs {
  _set?: InputMaybe<EquipmentEnumSetInput>
  where: EquipmentEnumBoolExp
}

/** mutation root */
export interface MutationRootUpdateEquipmentEnumByPkArgs {
  _set?: InputMaybe<EquipmentEnumSetInput>
  pk_columns: EquipmentEnumPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateGlobalConstArgs {
  _inc?: InputMaybe<GlobalConstIncInput>
  _set?: InputMaybe<GlobalConstSetInput>
  where: GlobalConstBoolExp
}

/** mutation root */
export interface MutationRootUpdateGlobalConstByPkArgs {
  _inc?: InputMaybe<GlobalConstIncInput>
  _set?: InputMaybe<GlobalConstSetInput>
  pk_columns: GlobalConstPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateInspectionItemEnumArgs {
  _append?: InputMaybe<InspectionItemEnumAppendInput>
  _delete_at_path?: InputMaybe<InspectionItemEnumDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionItemEnumDeleteElemInput>
  _delete_key?: InputMaybe<InspectionItemEnumDeleteKeyInput>
  _inc?: InputMaybe<InspectionItemEnumIncInput>
  _prepend?: InputMaybe<InspectionItemEnumPrependInput>
  _set?: InputMaybe<InspectionItemEnumSetInput>
  where: InspectionItemEnumBoolExp
}

/** mutation root */
export interface MutationRootUpdateInspectionItemEnumByPkArgs {
  _append?: InputMaybe<InspectionItemEnumAppendInput>
  _delete_at_path?: InputMaybe<InspectionItemEnumDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionItemEnumDeleteElemInput>
  _delete_key?: InputMaybe<InspectionItemEnumDeleteKeyInput>
  _inc?: InputMaybe<InspectionItemEnumIncInput>
  _prepend?: InputMaybe<InspectionItemEnumPrependInput>
  _set?: InputMaybe<InspectionItemEnumSetInput>
  pk_columns: InspectionItemEnumPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateInspectionReportArgs {
  _append?: InputMaybe<InspectionReportAppendInput>
  _delete_at_path?: InputMaybe<InspectionReportDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionReportDeleteElemInput>
  _delete_key?: InputMaybe<InspectionReportDeleteKeyInput>
  _inc?: InputMaybe<InspectionReportIncInput>
  _prepend?: InputMaybe<InspectionReportPrependInput>
  _set?: InputMaybe<InspectionReportSetInput>
  where: InspectionReportBoolExp
}

/** mutation root */
export interface MutationRootUpdateInspectionReportByPkArgs {
  _append?: InputMaybe<InspectionReportAppendInput>
  _delete_at_path?: InputMaybe<InspectionReportDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionReportDeleteElemInput>
  _delete_key?: InputMaybe<InspectionReportDeleteKeyInput>
  _inc?: InputMaybe<InspectionReportIncInput>
  _prepend?: InputMaybe<InspectionReportPrependInput>
  _set?: InputMaybe<InspectionReportSetInput>
  pk_columns: InspectionReportPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateInspectionReportItemArgs {
  _append?: InputMaybe<InspectionReportItemAppendInput>
  _delete_at_path?: InputMaybe<InspectionReportItemDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionReportItemDeleteElemInput>
  _delete_key?: InputMaybe<InspectionReportItemDeleteKeyInput>
  _prepend?: InputMaybe<InspectionReportItemPrependInput>
  _set?: InputMaybe<InspectionReportItemSetInput>
  where: InspectionReportItemBoolExp
}

/** mutation root */
export interface MutationRootUpdateInspectionReportItemByPkArgs {
  _append?: InputMaybe<InspectionReportItemAppendInput>
  _delete_at_path?: InputMaybe<InspectionReportItemDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionReportItemDeleteElemInput>
  _delete_key?: InputMaybe<InspectionReportItemDeleteKeyInput>
  _prepend?: InputMaybe<InspectionReportItemPrependInput>
  _set?: InputMaybe<InspectionReportItemSetInput>
  pk_columns: InspectionReportItemPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnCityArgs {
  _inc?: InputMaybe<MetaAreaCnCityIncInput>
  _set?: InputMaybe<MetaAreaCnCitySetInput>
  where: MetaAreaCnCityBoolExp
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnCityByPkArgs {
  _inc?: InputMaybe<MetaAreaCnCityIncInput>
  _set?: InputMaybe<MetaAreaCnCitySetInput>
  pk_columns: MetaAreaCnCityPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnCountyArgs {
  _inc?: InputMaybe<MetaAreaCnCountyIncInput>
  _set?: InputMaybe<MetaAreaCnCountySetInput>
  where: MetaAreaCnCountyBoolExp
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnCountyByPkArgs {
  _inc?: InputMaybe<MetaAreaCnCountyIncInput>
  _set?: InputMaybe<MetaAreaCnCountySetInput>
  pk_columns: MetaAreaCnCountyPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnProvinceArgs {
  _inc?: InputMaybe<MetaAreaCnProvinceIncInput>
  _set?: InputMaybe<MetaAreaCnProvinceSetInput>
  where: MetaAreaCnProvinceBoolExp
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnProvinceByPkArgs {
  _inc?: InputMaybe<MetaAreaCnProvinceIncInput>
  _set?: InputMaybe<MetaAreaCnProvinceSetInput>
  pk_columns: MetaAreaCnProvincePkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnTownArgs {
  _inc?: InputMaybe<MetaAreaCnTownIncInput>
  _set?: InputMaybe<MetaAreaCnTownSetInput>
  where: MetaAreaCnTownBoolExp
}

/** mutation root */
export interface MutationRootUpdateMetaAreaCnTownByPkArgs {
  _inc?: InputMaybe<MetaAreaCnTownIncInput>
  _set?: InputMaybe<MetaAreaCnTownSetInput>
  pk_columns: MetaAreaCnTownPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateReportFileArgs {
  _append?: InputMaybe<ReportFileAppendInput>
  _delete_at_path?: InputMaybe<ReportFileDeleteAtPathInput>
  _delete_elem?: InputMaybe<ReportFileDeleteElemInput>
  _delete_key?: InputMaybe<ReportFileDeleteKeyInput>
  _prepend?: InputMaybe<ReportFilePrependInput>
  _set?: InputMaybe<ReportFileSetInput>
  where: ReportFileBoolExp
}

/** mutation root */
export interface MutationRootUpdateReportFileByPkArgs {
  _append?: InputMaybe<ReportFileAppendInput>
  _delete_at_path?: InputMaybe<ReportFileDeleteAtPathInput>
  _delete_elem?: InputMaybe<ReportFileDeleteElemInput>
  _delete_key?: InputMaybe<ReportFileDeleteKeyInput>
  _prepend?: InputMaybe<ReportFilePrependInput>
  _set?: InputMaybe<ReportFileSetInput>
  pk_columns: ReportFilePkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateUserArgs {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** mutation root */
export interface MutationRootUpdateUserByPkArgs {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  pk_columns: UserPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateUserViewArgs {
  _inc?: InputMaybe<UserViewIncInput>
  _set?: InputMaybe<UserViewSetInput>
  where: UserViewBoolExp
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last',
}

export interface QueryRoot {
  /** fetch data from the table: "clients" */
  clients: Array<Clients>
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: ClientsAggregate
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>
  /** fetch data from the table: "device" */
  device: Array<Device>
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>
  /** fetch data from the table: "equipment_enum" */
  equipment_enum: Array<EquipmentEnum>
  /** fetch aggregated fields from the table: "equipment_enum" */
  equipment_enum_aggregate: EquipmentEnumAggregate
  /** fetch data from the table: "equipment_enum" using primary key columns */
  equipment_enum_by_pk?: Maybe<EquipmentEnum>
  /** fetch data from the table: "global_const" */
  global_const: Array<GlobalConst>
  /** fetch aggregated fields from the table: "global_const" */
  global_const_aggregate: GlobalConstAggregate
  /** fetch data from the table: "global_const" using primary key columns */
  global_const_by_pk?: Maybe<GlobalConst>
  /** fetch data from the table: "inspection_item_enum" */
  inspection_item_enum: Array<InspectionItemEnum>
  /** fetch aggregated fields from the table: "inspection_item_enum" */
  inspection_item_enum_aggregate: InspectionItemEnumAggregate
  /** fetch data from the table: "inspection_item_enum" using primary key columns */
  inspection_item_enum_by_pk?: Maybe<InspectionItemEnum>
  /** fetch data from the table: "inspection_report" */
  inspection_report: Array<InspectionReport>
  /** fetch aggregated fields from the table: "inspection_report" */
  inspection_report_aggregate: InspectionReportAggregate
  /** fetch data from the table: "inspection_report" using primary key columns */
  inspection_report_by_pk?: Maybe<InspectionReport>
  /** fetch data from the table: "inspection_report_item" */
  inspection_report_item: Array<InspectionReportItem>
  inspection_report_item_aggregate: InspectionReportItemAggregate
  /** fetch data from the table: "inspection_report_item" using primary key columns */
  inspection_report_item_by_pk?: Maybe<InspectionReportItem>
  /** fetch data from the table: "meta.area_cn_city" */
  meta_area_cn_city: Array<MetaAreaCnCity>
  /** fetch aggregated fields from the table: "meta.area_cn_city" */
  meta_area_cn_city_aggregate: MetaAreaCnCityAggregate
  /** fetch data from the table: "meta.area_cn_city" using primary key columns */
  meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** fetch data from the table: "meta.area_cn_county" */
  meta_area_cn_county: Array<MetaAreaCnCounty>
  /** fetch aggregated fields from the table: "meta.area_cn_county" */
  meta_area_cn_county_aggregate: MetaAreaCnCountyAggregate
  /** fetch data from the table: "meta.area_cn_county" using primary key columns */
  meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** fetch data from the table: "meta.area_cn_province" */
  meta_area_cn_province: Array<MetaAreaCnProvince>
  /** fetch aggregated fields from the table: "meta.area_cn_province" */
  meta_area_cn_province_aggregate: MetaAreaCnProvinceAggregate
  /** fetch data from the table: "meta.area_cn_province" using primary key columns */
  meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** fetch data from the table: "meta.area_cn_town" */
  meta_area_cn_town: Array<MetaAreaCnTown>
  /** fetch aggregated fields from the table: "meta.area_cn_town" */
  meta_area_cn_town_aggregate: MetaAreaCnTownAggregate
  /** fetch data from the table: "meta.area_cn_town" using primary key columns */
  meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** fetch data from the table: "report_file" */
  report_file: Array<ReportFile>
  /** fetch aggregated fields from the table: "report_file" */
  report_file_aggregate: ReportFileAggregate
  /** fetch data from the table: "report_file" using primary key columns */
  report_file_by_pk?: Maybe<ReportFile>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "user_view" */
  user_view: Array<UserView>
  /** fetch aggregated fields from the table: "user_view" */
  user_view_aggregate: UserViewAggregate
}

export interface QueryRootClientsArgs {
  distinct_on?: InputMaybe<Array<ClientsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ClientsOrderBy>>
  where?: InputMaybe<ClientsBoolExp>
}

export interface QueryRootClientsAggregateArgs {
  distinct_on?: InputMaybe<Array<ClientsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ClientsOrderBy>>
  where?: InputMaybe<ClientsBoolExp>
}

export interface QueryRootClientsByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootDeviceArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export interface QueryRootDeviceAggregateArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export interface QueryRootDeviceByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootEquipmentEnumArgs {
  distinct_on?: InputMaybe<Array<EquipmentEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentEnumOrderBy>>
  where?: InputMaybe<EquipmentEnumBoolExp>
}

export interface QueryRootEquipmentEnumAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentEnumOrderBy>>
  where?: InputMaybe<EquipmentEnumBoolExp>
}

export interface QueryRootEquipmentEnumByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootGlobalConstArgs {
  distinct_on?: InputMaybe<Array<GlobalConstSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<GlobalConstOrderBy>>
  where?: InputMaybe<GlobalConstBoolExp>
}

export interface QueryRootGlobalConstAggregateArgs {
  distinct_on?: InputMaybe<Array<GlobalConstSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<GlobalConstOrderBy>>
  where?: InputMaybe<GlobalConstBoolExp>
}

export interface QueryRootGlobalConstByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootInspectionItemEnumArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

export interface QueryRootInspectionItemEnumAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

export interface QueryRootInspectionItemEnumByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootInspectionReportArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

export interface QueryRootInspectionReportAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

export interface QueryRootInspectionReportByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootInspectionReportItemArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

export interface QueryRootInspectionReportItemAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

export interface QueryRootInspectionReportItemByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootMetaAreaCnCityArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

export interface QueryRootMetaAreaCnCityAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

export interface QueryRootMetaAreaCnCityByPkArgs {
  code: Scalars['Int']
}

export interface QueryRootMetaAreaCnCountyArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

export interface QueryRootMetaAreaCnCountyAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

export interface QueryRootMetaAreaCnCountyByPkArgs {
  code: Scalars['Int']
}

export interface QueryRootMetaAreaCnProvinceArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnProvinceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnProvinceOrderBy>>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
}

export interface QueryRootMetaAreaCnProvinceAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnProvinceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnProvinceOrderBy>>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
}

export interface QueryRootMetaAreaCnProvinceByPkArgs {
  code: Scalars['Int']
}

export interface QueryRootMetaAreaCnTownArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

export interface QueryRootMetaAreaCnTownAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

export interface QueryRootMetaAreaCnTownByPkArgs {
  code: Scalars['Int']
}

export interface QueryRootReportFileArgs {
  distinct_on?: InputMaybe<Array<ReportFileSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportFileOrderBy>>
  where?: InputMaybe<ReportFileBoolExp>
}

export interface QueryRootReportFileAggregateArgs {
  distinct_on?: InputMaybe<Array<ReportFileSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportFileOrderBy>>
  where?: InputMaybe<ReportFileBoolExp>
}

export interface QueryRootReportFileByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootUserArgs {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export interface QueryRootUserAggregateArgs {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export interface QueryRootUserByPkArgs {
  id: Scalars['Int']
}

export interface QueryRootUserViewArgs {
  distinct_on?: InputMaybe<Array<UserViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserViewOrderBy>>
  where?: InputMaybe<UserViewBoolExp>
}

export interface QueryRootUserViewAggregateArgs {
  distinct_on?: InputMaybe<Array<UserViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserViewOrderBy>>
  where?: InputMaybe<UserViewBoolExp>
}

/** columns and relationships of "report_file" */
export interface ReportFile {
  createTime: Scalars['timestamp']
  file?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  params: Scalars['jsonb']
  reportNo?: Maybe<Scalars['String']>
  updateTime: Scalars['timestamp']
}

/** columns and relationships of "report_file" */
export interface ReportFileParamsArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "report_file" */
export interface ReportFileAggregate {
  aggregate?: Maybe<ReportFileAggregateFields>
  nodes: Array<ReportFile>
}

/** aggregate fields of "report_file" */
export interface ReportFileAggregateFields {
  count: Scalars['Int']
  max?: Maybe<ReportFileMaxFields>
  min?: Maybe<ReportFileMinFields>
}

/** aggregate fields of "report_file" */
export interface ReportFileAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<ReportFileSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface ReportFileAppendInput {
  params?: InputMaybe<Scalars['jsonb']>
}

/** Boolean expression to filter rows from the table "report_file". All fields are combined with a logical 'AND'. */
export interface ReportFileBoolExp {
  _and?: InputMaybe<Array<ReportFileBoolExp>>
  _not?: InputMaybe<ReportFileBoolExp>
  _or?: InputMaybe<Array<ReportFileBoolExp>>
  createTime?: InputMaybe<TimestampComparisonExp>
  file?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  params?: InputMaybe<JsonbComparisonExp>
  reportNo?: InputMaybe<StringComparisonExp>
  updateTime?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "report_file" */
export enum ReportFileConstraint {
  /** unique or primary key constraint */
  REPORT_NO_UINDEX = 'report_no_uindex',
  /** unique or primary key constraint */
  REPORT_PKEY = 'report_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface ReportFileDeleteAtPathInput {
  params?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface ReportFileDeleteElemInput {
  params?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface ReportFileDeleteKeyInput {
  params?: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "report_file" */
export interface ReportFileInsertInput {
  createTime?: InputMaybe<Scalars['timestamp']>
  file?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  params?: InputMaybe<Scalars['jsonb']>
  reportNo?: InputMaybe<Scalars['String']>
  updateTime?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export interface ReportFileMaxFields {
  createTime?: Maybe<Scalars['timestamp']>
  file?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  reportNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export interface ReportFileMinFields {
  createTime?: Maybe<Scalars['timestamp']>
  file?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  reportNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "report_file" */
export interface ReportFileMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<ReportFile>
}

/** on_conflict condition type for table "report_file" */
export interface ReportFileOnConflict {
  constraint: ReportFileConstraint
  update_columns?: Array<ReportFileUpdateColumn>
  where?: InputMaybe<ReportFileBoolExp>
}

/** Ordering options when selecting data from "report_file". */
export interface ReportFileOrderBy {
  createTime?: InputMaybe<OrderBy>
  file?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  params?: InputMaybe<OrderBy>
  reportNo?: InputMaybe<OrderBy>
  updateTime?: InputMaybe<OrderBy>
}

/** primary key columns input for table: report_file */
export interface ReportFilePkColumnsInput {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface ReportFilePrependInput {
  params?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "report_file" */
export enum ReportFileSelectColumn {
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  FILE = 'file',
  /** column name */
  ID = 'id',
  /** column name */
  PARAMS = 'params',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  UPDATETIME = 'updateTime',
}

/** input type for updating data in table "report_file" */
export interface ReportFileSetInput {
  createTime?: InputMaybe<Scalars['timestamp']>
  file?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  params?: InputMaybe<Scalars['jsonb']>
  reportNo?: InputMaybe<Scalars['String']>
  updateTime?: InputMaybe<Scalars['timestamp']>
}

/** update columns of table "report_file" */
export enum ReportFileUpdateColumn {
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  FILE = 'file',
  /** column name */
  ID = 'id',
  /** column name */
  PARAMS = 'params',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  UPDATETIME = 'updateTime',
}

/** Boolean expression to compare columns of type "role". All fields are combined with logical 'AND'. */
export interface RoleComparisonExp {
  _eq?: InputMaybe<Scalars['role']>
  _gt?: InputMaybe<Scalars['role']>
  _gte?: InputMaybe<Scalars['role']>
  _in?: InputMaybe<Array<Scalars['role']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['role']>
  _lte?: InputMaybe<Scalars['role']>
  _neq?: InputMaybe<Scalars['role']>
  _nin?: InputMaybe<Array<Scalars['role']>>
}

export interface SubscriptionRoot {
  /** fetch data from the table: "clients" */
  clients: Array<Clients>
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: ClientsAggregate
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>
  /** fetch data from the table: "device" */
  device: Array<Device>
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>
  /** fetch data from the table: "equipment_enum" */
  equipment_enum: Array<EquipmentEnum>
  /** fetch aggregated fields from the table: "equipment_enum" */
  equipment_enum_aggregate: EquipmentEnumAggregate
  /** fetch data from the table: "equipment_enum" using primary key columns */
  equipment_enum_by_pk?: Maybe<EquipmentEnum>
  /** fetch data from the table: "global_const" */
  global_const: Array<GlobalConst>
  /** fetch aggregated fields from the table: "global_const" */
  global_const_aggregate: GlobalConstAggregate
  /** fetch data from the table: "global_const" using primary key columns */
  global_const_by_pk?: Maybe<GlobalConst>
  /** fetch data from the table: "inspection_item_enum" */
  inspection_item_enum: Array<InspectionItemEnum>
  /** fetch aggregated fields from the table: "inspection_item_enum" */
  inspection_item_enum_aggregate: InspectionItemEnumAggregate
  /** fetch data from the table: "inspection_item_enum" using primary key columns */
  inspection_item_enum_by_pk?: Maybe<InspectionItemEnum>
  /** fetch data from the table: "inspection_report" */
  inspection_report: Array<InspectionReport>
  /** fetch aggregated fields from the table: "inspection_report" */
  inspection_report_aggregate: InspectionReportAggregate
  /** fetch data from the table: "inspection_report" using primary key columns */
  inspection_report_by_pk?: Maybe<InspectionReport>
  /** fetch data from the table: "inspection_report_item" */
  inspection_report_item: Array<InspectionReportItem>
  inspection_report_item_aggregate: InspectionReportItemAggregate
  /** fetch data from the table: "inspection_report_item" using primary key columns */
  inspection_report_item_by_pk?: Maybe<InspectionReportItem>
  /** fetch data from the table: "meta.area_cn_city" */
  meta_area_cn_city: Array<MetaAreaCnCity>
  /** fetch aggregated fields from the table: "meta.area_cn_city" */
  meta_area_cn_city_aggregate: MetaAreaCnCityAggregate
  /** fetch data from the table: "meta.area_cn_city" using primary key columns */
  meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** fetch data from the table: "meta.area_cn_county" */
  meta_area_cn_county: Array<MetaAreaCnCounty>
  /** fetch aggregated fields from the table: "meta.area_cn_county" */
  meta_area_cn_county_aggregate: MetaAreaCnCountyAggregate
  /** fetch data from the table: "meta.area_cn_county" using primary key columns */
  meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** fetch data from the table: "meta.area_cn_province" */
  meta_area_cn_province: Array<MetaAreaCnProvince>
  /** fetch aggregated fields from the table: "meta.area_cn_province" */
  meta_area_cn_province_aggregate: MetaAreaCnProvinceAggregate
  /** fetch data from the table: "meta.area_cn_province" using primary key columns */
  meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** fetch data from the table: "meta.area_cn_town" */
  meta_area_cn_town: Array<MetaAreaCnTown>
  /** fetch aggregated fields from the table: "meta.area_cn_town" */
  meta_area_cn_town_aggregate: MetaAreaCnTownAggregate
  /** fetch data from the table: "meta.area_cn_town" using primary key columns */
  meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** fetch data from the table: "report_file" */
  report_file: Array<ReportFile>
  /** fetch aggregated fields from the table: "report_file" */
  report_file_aggregate: ReportFileAggregate
  /** fetch data from the table: "report_file" using primary key columns */
  report_file_by_pk?: Maybe<ReportFile>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "user_view" */
  user_view: Array<UserView>
  /** fetch aggregated fields from the table: "user_view" */
  user_view_aggregate: UserViewAggregate
}

export interface SubscriptionRootClientsArgs {
  distinct_on?: InputMaybe<Array<ClientsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ClientsOrderBy>>
  where?: InputMaybe<ClientsBoolExp>
}

export interface SubscriptionRootClientsAggregateArgs {
  distinct_on?: InputMaybe<Array<ClientsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ClientsOrderBy>>
  where?: InputMaybe<ClientsBoolExp>
}

export interface SubscriptionRootClientsByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootDeviceArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export interface SubscriptionRootDeviceAggregateArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export interface SubscriptionRootDeviceByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootEquipmentEnumArgs {
  distinct_on?: InputMaybe<Array<EquipmentEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentEnumOrderBy>>
  where?: InputMaybe<EquipmentEnumBoolExp>
}

export interface SubscriptionRootEquipmentEnumAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentEnumOrderBy>>
  where?: InputMaybe<EquipmentEnumBoolExp>
}

export interface SubscriptionRootEquipmentEnumByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootGlobalConstArgs {
  distinct_on?: InputMaybe<Array<GlobalConstSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<GlobalConstOrderBy>>
  where?: InputMaybe<GlobalConstBoolExp>
}

export interface SubscriptionRootGlobalConstAggregateArgs {
  distinct_on?: InputMaybe<Array<GlobalConstSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<GlobalConstOrderBy>>
  where?: InputMaybe<GlobalConstBoolExp>
}

export interface SubscriptionRootGlobalConstByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootInspectionItemEnumArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

export interface SubscriptionRootInspectionItemEnumAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionItemEnumSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionItemEnumOrderBy>>
  where?: InputMaybe<InspectionItemEnumBoolExp>
}

export interface SubscriptionRootInspectionItemEnumByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootInspectionReportArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

export interface SubscriptionRootInspectionReportAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

export interface SubscriptionRootInspectionReportByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootInspectionReportItemArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

export interface SubscriptionRootInspectionReportItemAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportItemOrderBy>>
  where?: InputMaybe<InspectionReportItemBoolExp>
}

export interface SubscriptionRootInspectionReportItemByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootMetaAreaCnCityArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

export interface SubscriptionRootMetaAreaCnCityAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCitySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCityOrderBy>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
}

export interface SubscriptionRootMetaAreaCnCityByPkArgs {
  code: Scalars['Int']
}

export interface SubscriptionRootMetaAreaCnCountyArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

export interface SubscriptionRootMetaAreaCnCountyAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnCountySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnCountyOrderBy>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
}

export interface SubscriptionRootMetaAreaCnCountyByPkArgs {
  code: Scalars['Int']
}

export interface SubscriptionRootMetaAreaCnProvinceArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnProvinceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnProvinceOrderBy>>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
}

export interface SubscriptionRootMetaAreaCnProvinceAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnProvinceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnProvinceOrderBy>>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
}

export interface SubscriptionRootMetaAreaCnProvinceByPkArgs {
  code: Scalars['Int']
}

export interface SubscriptionRootMetaAreaCnTownArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

export interface SubscriptionRootMetaAreaCnTownAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAreaCnTownSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAreaCnTownOrderBy>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

export interface SubscriptionRootMetaAreaCnTownByPkArgs {
  code: Scalars['Int']
}

export interface SubscriptionRootReportFileArgs {
  distinct_on?: InputMaybe<Array<ReportFileSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportFileOrderBy>>
  where?: InputMaybe<ReportFileBoolExp>
}

export interface SubscriptionRootReportFileAggregateArgs {
  distinct_on?: InputMaybe<Array<ReportFileSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportFileOrderBy>>
  where?: InputMaybe<ReportFileBoolExp>
}

export interface SubscriptionRootReportFileByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootUserArgs {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export interface SubscriptionRootUserAggregateArgs {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export interface SubscriptionRootUserByPkArgs {
  id: Scalars['Int']
}

export interface SubscriptionRootUserViewArgs {
  distinct_on?: InputMaybe<Array<UserViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserViewOrderBy>>
  where?: InputMaybe<UserViewBoolExp>
}

export interface SubscriptionRootUserViewAggregateArgs {
  distinct_on?: InputMaybe<Array<UserViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserViewOrderBy>>
  where?: InputMaybe<UserViewBoolExp>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface TimestampComparisonExp {
  _eq?: InputMaybe<Scalars['timestamp']>
  _gt?: InputMaybe<Scalars['timestamp']>
  _gte?: InputMaybe<Scalars['timestamp']>
  _in?: InputMaybe<Array<Scalars['timestamp']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamp']>
  _lte?: InputMaybe<Scalars['timestamp']>
  _neq?: InputMaybe<Scalars['timestamp']>
  _nin?: InputMaybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export interface User {
  avatar?: Maybe<Scalars['String']>
  /** An array relationship */
  devices: Array<Device>
  /** An aggregate relationship */
  devices_aggregate: DeviceAggregate
  displayname?: Maybe<Scalars['String']>
  id: Scalars['Int']
  /** An array relationship */
  inspection_reports: Array<InspectionReport>
  /** An aggregate relationship */
  inspection_reports_aggregate: InspectionReportAggregate
  password: Scalars['String']
  role: Scalars['role']
  username: Scalars['String']
}

/** columns and relationships of "user" */
export interface UserDevicesArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

/** columns and relationships of "user" */
export interface UserDevicesAggregateArgs {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

/** columns and relationships of "user" */
export interface UserInspectionReportsArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

/** columns and relationships of "user" */
export interface UserInspectionReportsAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionReportOrderBy>>
  where?: InputMaybe<InspectionReportBoolExp>
}

/** aggregated selection of "user" */
export interface UserAggregate {
  aggregate?: Maybe<UserAggregateFields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export interface UserAggregateFields {
  avg?: Maybe<UserAvgFields>
  count: Scalars['Int']
  max?: Maybe<UserMaxFields>
  min?: Maybe<UserMinFields>
  stddev?: Maybe<UserStddevFields>
  stddev_pop?: Maybe<UserStddevPopFields>
  stddev_samp?: Maybe<UserStddevSampFields>
  sum?: Maybe<UserSumFields>
  var_pop?: Maybe<UserVarPopFields>
  var_samp?: Maybe<UserVarSampFields>
  variance?: Maybe<UserVarianceFields>
}

/** aggregate fields of "user" */
export interface UserAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UserSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface UserAvgFields {
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface UserBoolExp {
  _and?: InputMaybe<Array<UserBoolExp>>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<Array<UserBoolExp>>
  avatar?: InputMaybe<StringComparisonExp>
  devices?: InputMaybe<DeviceBoolExp>
  displayname?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  inspection_reports?: InputMaybe<InspectionReportBoolExp>
  password?: InputMaybe<StringComparisonExp>
  role?: InputMaybe<RoleComparisonExp>
  username?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  USER_PKEY = 'user_pkey',
  /** unique or primary key constraint */
  USER_USERNAME_KEY = 'user_username_key',
  /** unique or primary key constraint */
  USER_USERNAME_UINDEX = 'user_username_uindex',
}

/** input type for incrementing numeric columns in table "user" */
export interface UserIncInput {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export interface UserInsertInput {
  avatar?: InputMaybe<Scalars['String']>
  devices?: InputMaybe<DeviceArrRelInsertInput>
  displayname?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  inspection_reports?: InputMaybe<InspectionReportArrRelInsertInput>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface UserMaxFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  password?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface UserMinFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  password?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user" */
export interface UserMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export interface UserObjRelInsertInput {
  data: UserInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<UserOnConflict>
}

/** on_conflict condition type for table "user" */
export interface UserOnConflict {
  constraint: UserConstraint
  update_columns?: Array<UserUpdateColumn>
  where?: InputMaybe<UserBoolExp>
}

/** Ordering options when selecting data from "user". */
export interface UserOrderBy {
  avatar?: InputMaybe<OrderBy>
  devices_aggregate?: InputMaybe<DeviceAggregateOrderBy>
  displayname?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspection_reports_aggregate?: InputMaybe<InspectionReportAggregateOrderBy>
  password?: InputMaybe<OrderBy>
  role?: InputMaybe<OrderBy>
  username?: InputMaybe<OrderBy>
}

/** primary key columns input for table: user */
export interface UserPkColumnsInput {
  id: Scalars['Int']
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  AVATAR = 'avatar',
  /** column name */
  DISPLAYNAME = 'displayname',
  /** column name */
  ID = 'id',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  ROLE = 'role',
  /** column name */
  USERNAME = 'username',
}

/** input type for updating data in table "user" */
export interface UserSetInput {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface UserStddevFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface UserStddevPopFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface UserStddevSampFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export interface UserSumFields {
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  AVATAR = 'avatar',
  /** column name */
  DISPLAYNAME = 'displayname',
  /** column name */
  ID = 'id',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  ROLE = 'role',
  /** column name */
  USERNAME = 'username',
}

/** aggregate var_pop on columns */
export interface UserVarPopFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface UserVarSampFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface UserVarianceFields {
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "user_view" */
export interface UserView {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** aggregated selection of "user_view" */
export interface UserViewAggregate {
  aggregate?: Maybe<UserViewAggregateFields>
  nodes: Array<UserView>
}

/** aggregate fields of "user_view" */
export interface UserViewAggregateFields {
  avg?: Maybe<UserViewAvgFields>
  count: Scalars['Int']
  max?: Maybe<UserViewMaxFields>
  min?: Maybe<UserViewMinFields>
  stddev?: Maybe<UserViewStddevFields>
  stddev_pop?: Maybe<UserViewStddevPopFields>
  stddev_samp?: Maybe<UserViewStddevSampFields>
  sum?: Maybe<UserViewSumFields>
  var_pop?: Maybe<UserViewVarPopFields>
  var_samp?: Maybe<UserViewVarSampFields>
  variance?: Maybe<UserViewVarianceFields>
}

/** aggregate fields of "user_view" */
export interface UserViewAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UserViewSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface UserViewAvgFields {
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user_view". All fields are combined with a logical 'AND'. */
export interface UserViewBoolExp {
  _and?: InputMaybe<Array<UserViewBoolExp>>
  _not?: InputMaybe<UserViewBoolExp>
  _or?: InputMaybe<Array<UserViewBoolExp>>
  avatar?: InputMaybe<StringComparisonExp>
  displayname?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  role?: InputMaybe<RoleComparisonExp>
  username?: InputMaybe<StringComparisonExp>
}

/** input type for incrementing numeric columns in table "user_view" */
export interface UserViewIncInput {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user_view" */
export interface UserViewInsertInput {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface UserViewMaxFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface UserViewMinFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user_view" */
export interface UserViewMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<UserView>
}

/** Ordering options when selecting data from "user_view". */
export interface UserViewOrderBy {
  avatar?: InputMaybe<OrderBy>
  displayname?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  role?: InputMaybe<OrderBy>
  username?: InputMaybe<OrderBy>
}

/** select columns of table "user_view" */
export enum UserViewSelectColumn {
  /** column name */
  AVATAR = 'avatar',
  /** column name */
  DISPLAYNAME = 'displayname',
  /** column name */
  ID = 'id',
  /** column name */
  ROLE = 'role',
  /** column name */
  USERNAME = 'username',
}

/** input type for updating data in table "user_view" */
export interface UserViewSetInput {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface UserViewStddevFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface UserViewStddevPopFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface UserViewStddevSampFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export interface UserViewSumFields {
  id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export interface UserViewVarPopFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface UserViewVarSampFields {
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface UserViewVarianceFields {
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export const namedOperations = {
  Query: {
    ClientsDetailList: 'ClientsDetailList',
    ClientsById: 'ClientsById',
    DeviceList: 'DeviceList',
    DeviceById: 'DeviceById',
    GlobalConstList: 'GlobalConstList',
    EquipmentEnumList: 'EquipmentEnumList',
    InspectionItemEnumList: 'InspectionItemEnumList',
    InspectionReportList: 'InspectionReportList',
    InspectionReportById: 'InspectionReportById',
    ProvinceList: 'ProvinceList',
    CityList: 'CityList',
    CountyList: 'CountyList',
    TownList: 'TownList',
    ProvinceListSearch: 'ProvinceListSearch',
    CityListSearch: 'CityListSearch',
    CountyListSearch: 'CountyListSearch',
    TownListSearch: 'TownListSearch',
    CurrentUser: 'CurrentUser',
    UserList: 'UserList',
  },
  Mutation: {
    CreateClients: 'CreateClients',
    UpdateClientsById: 'UpdateClientsById',
    DeleteClientsById: 'DeleteClientsById',
    DeleteClientsBulk: 'DeleteClientsBulk',
    CreateDevice: 'CreateDevice',
    UpdateDeviceById: 'UpdateDeviceById',
    DeleteDeviceById: 'DeleteDeviceById',
    DeleteDeviceBulk: 'DeleteDeviceBulk',
    CreateGlobalConst: 'CreateGlobalConst',
    UpdateGlobalConstById: 'UpdateGlobalConstById',
    DeleteGlobalConst: 'DeleteGlobalConst',
    CreateEquipmentEnum: 'CreateEquipmentEnum',
    UpdateEquipmentEnumById: 'UpdateEquipmentEnumById',
    DeleteEquipmentEnum: 'DeleteEquipmentEnum',
    CreateInspectionItemEnum: 'CreateInspectionItemEnum',
    UpdateInspectionItemEnumById: 'UpdateInspectionItemEnumById',
    DeleteInspectionItemEnum: 'DeleteInspectionItemEnum',
    CreateInspectionReport: 'CreateInspectionReport',
    UpdateInspectionReportById: 'UpdateInspectionReportById',
    DeleteInspectionReportById: 'DeleteInspectionReportById',
    updateUserPassword: 'updateUserPassword',
    AdminCreateAccount: 'AdminCreateAccount',
    AdminUpdateAccountById: 'AdminUpdateAccountById',
    AdminDeleteAccountById: 'AdminDeleteAccountById',
  },
  Fragment: {
    GlobalConst: 'GlobalConst',
    EquipmentEnum: 'EquipmentEnum',
    InspectionItemEnumFragment: 'InspectionItemEnumFragment',
    InspectionItem: 'InspectionItem',
    InspectionReportHeader: 'InspectionReportHeader',
    InspectionReport: 'InspectionReport',
    UserInfo: 'UserInfo',
    UserView: 'UserView',
    ClientsDetail: 'ClientsDetail',
    DeviceDetail: 'DeviceDetail',
  },
}
