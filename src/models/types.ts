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
  /** unique or primary key constraint on columns "id" */
  CLIENTS_ID_KEY = 'clients_id_key',
  /** unique or primary key constraint on columns "name" */
  CLIENTS_NAME_KEY = 'clients_name_key',
  /** unique or primary key constraint on columns "id" */
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

/** Streaming cursor of the table "clients" */
export interface ClientsStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ClientsStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface ClientsStreamCursorValueInput {
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

export interface ClientsUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ClientsAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ClientsDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ClientsDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ClientsDeleteKeyInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ClientsPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClientsSetInput>
  where: ClientsBoolExp
}

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC',
}

/** columns and relationships of "equipment" */
export interface Equipment {
  /** 检测地址 */
  address: Scalars['jsonb']
  /** An object relationship */
  client?: Maybe<Clients>
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  /** An object relationship */
  equipmentType?: Maybe<EquipmentTypes>
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 设备ID */
  id: Scalars['uuid']
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "equipment" */
export interface EquipmentAddressArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "equipment" */
export interface EquipmentAggregate {
  aggregate?: Maybe<EquipmentAggregateFields>
  nodes: Array<Equipment>
}

/** aggregate fields of "equipment" */
export interface EquipmentAggregateFields {
  avg?: Maybe<EquipmentAvgFields>
  count: Scalars['Int']
  max?: Maybe<EquipmentMaxFields>
  min?: Maybe<EquipmentMinFields>
  stddev?: Maybe<EquipmentStddevFields>
  stddev_pop?: Maybe<EquipmentStddevPopFields>
  stddev_samp?: Maybe<EquipmentStddevSampFields>
  sum?: Maybe<EquipmentSumFields>
  var_pop?: Maybe<EquipmentVarPopFields>
  var_samp?: Maybe<EquipmentVarSampFields>
  variance?: Maybe<EquipmentVarianceFields>
}

/** aggregate fields of "equipment" */
export interface EquipmentAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<EquipmentSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "equipment" */
export interface EquipmentAggregateOrderBy {
  avg?: InputMaybe<EquipmentAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<EquipmentMaxOrderBy>
  min?: InputMaybe<EquipmentMinOrderBy>
  stddev?: InputMaybe<EquipmentStddevOrderBy>
  stddev_pop?: InputMaybe<EquipmentStddevPopOrderBy>
  stddev_samp?: InputMaybe<EquipmentStddevSampOrderBy>
  sum?: InputMaybe<EquipmentSumOrderBy>
  var_pop?: InputMaybe<EquipmentVarPopOrderBy>
  var_samp?: InputMaybe<EquipmentVarSampOrderBy>
  variance?: InputMaybe<EquipmentVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface EquipmentAppendInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "equipment" */
export interface EquipmentArrRelInsertInput {
  data: Array<EquipmentInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<EquipmentOnConflict>
}

/** aggregate avg on columns */
export interface EquipmentAvgFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "equipment" */
export interface EquipmentAvgOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "equipment". All fields are combined with a logical 'AND'. */
export interface EquipmentBoolExp {
  _and?: InputMaybe<Array<EquipmentBoolExp>>
  _not?: InputMaybe<EquipmentBoolExp>
  _or?: InputMaybe<Array<EquipmentBoolExp>>
  address?: InputMaybe<JsonbComparisonExp>
  client?: InputMaybe<ClientsBoolExp>
  clientId?: InputMaybe<UuidComparisonExp>
  comment?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  createrId?: InputMaybe<IntComparisonExp>
  creator?: InputMaybe<UserBoolExp>
  equipmentCode?: InputMaybe<StringComparisonExp>
  equipmentManufacturer?: InputMaybe<StringComparisonExp>
  equipmentModel?: InputMaybe<StringComparisonExp>
  equipmentName?: InputMaybe<StringComparisonExp>
  equipmentSampleId?: InputMaybe<StringComparisonExp>
  equipmentSite?: InputMaybe<StringComparisonExp>
  equipmentType?: InputMaybe<EquipmentTypesBoolExp>
  equipmentTypeId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspectionInstrument?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "equipment" */
export enum EquipmentConstraint {
  /** unique or primary key constraint on columns "id" */
  DEVICE_PKEY = 'device_pkey',
  /** unique or primary key constraint on columns "id" */
  EQUIPMENT_ID_KEY = 'equipment_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface EquipmentDeleteAtPathInput {
  /** 检测地址 */
  address?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface EquipmentDeleteElemInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface EquipmentDeleteKeyInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "equipment" */
export interface EquipmentIncInput {
  /** 创建者id */
  createrId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "equipment" */
export interface EquipmentInsertInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
  client?: InputMaybe<ClientsObjRelInsertInput>
  /** 委托单位Id */
  clientId?: InputMaybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  equipmentType?: InputMaybe<EquipmentTypesObjRelInsertInput>
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 设备ID */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export interface EquipmentMaxFields {
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 设备ID */
  id?: Maybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "equipment" */
export interface EquipmentMaxOrderBy {
  /** 委托单位Id */
  clientId?: InputMaybe<OrderBy>
  /** 备注信息 */
  comment?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
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
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  equipmentTypeId?: InputMaybe<OrderBy>
  /** 设备ID */
  id?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface EquipmentMinFields {
  /** 委托单位Id */
  clientId?: Maybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: Maybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: Maybe<Scalars['String']>
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 设备ID */
  id?: Maybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "equipment" */
export interface EquipmentMinOrderBy {
  /** 委托单位Id */
  clientId?: InputMaybe<OrderBy>
  /** 备注信息 */
  comment?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
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
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<OrderBy>
  /** 设备场所 */
  equipmentSite?: InputMaybe<OrderBy>
  equipmentTypeId?: InputMaybe<OrderBy>
  /** 设备ID */
  id?: InputMaybe<OrderBy>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "equipment" */
export interface EquipmentMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Equipment>
}

/** on_conflict condition type for table "equipment" */
export interface EquipmentOnConflict {
  constraint: EquipmentConstraint
  update_columns?: Array<EquipmentUpdateColumn>
  where?: InputMaybe<EquipmentBoolExp>
}

/** Ordering options when selecting data from "equipment". */
export interface EquipmentOrderBy {
  address?: InputMaybe<OrderBy>
  client?: InputMaybe<ClientsOrderBy>
  clientId?: InputMaybe<OrderBy>
  comment?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  createrId?: InputMaybe<OrderBy>
  creator?: InputMaybe<UserOrderBy>
  equipmentCode?: InputMaybe<OrderBy>
  equipmentManufacturer?: InputMaybe<OrderBy>
  equipmentModel?: InputMaybe<OrderBy>
  equipmentName?: InputMaybe<OrderBy>
  equipmentSampleId?: InputMaybe<OrderBy>
  equipmentSite?: InputMaybe<OrderBy>
  equipmentType?: InputMaybe<EquipmentTypesOrderBy>
  equipmentTypeId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspectionInstrument?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: equipment */
export interface EquipmentPkColumnsInput {
  /** 设备ID */
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface EquipmentPrependInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "equipment" */
export enum EquipmentSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CLIENTID = 'clientId',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATEDAT = 'createdAt',
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
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  EQUIPMENTTYPEID = 'equipmentTypeId',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** input type for updating data in table "equipment" */
export interface EquipmentSetInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
  /** 委托单位Id */
  clientId?: InputMaybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 设备ID */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export interface EquipmentStddevFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "equipment" */
export interface EquipmentStddevOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface EquipmentStddevPopFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "equipment" */
export interface EquipmentStddevPopOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface EquipmentStddevSampFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "equipment" */
export interface EquipmentStddevSampOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "equipment" */
export interface EquipmentStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: EquipmentStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface EquipmentStreamCursorValueInput {
  /** 检测地址 */
  address?: InputMaybe<Scalars['jsonb']>
  /** 委托单位Id */
  clientId?: InputMaybe<Scalars['uuid']>
  /** 备注信息 */
  comment?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
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
  /** 样品标识 */
  equipmentSampleId?: InputMaybe<Scalars['String']>
  /** 设备场所 */
  equipmentSite?: InputMaybe<Scalars['String']>
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 设备ID */
  id?: InputMaybe<Scalars['uuid']>
  /** 检测仪器 */
  inspectionInstrument?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export interface EquipmentSumFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "equipment" */
export interface EquipmentSumOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** 设备种类举例 */
export interface EquipmentTypes {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  /** An array relationship */
  inspectionItems: Array<InspectionTypes>
  /** An aggregate relationship */
  inspectionItems_aggregate: InspectionTypesAggregate
  name: Scalars['String']
}

/** 设备种类举例 */
export interface EquipmentTypesInspectionItemsArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

/** 设备种类举例 */
export interface EquipmentTypesInspectionItemsAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

/** aggregated selection of "equipment_types" */
export interface EquipmentTypesAggregate {
  aggregate?: Maybe<EquipmentTypesAggregateFields>
  nodes: Array<EquipmentTypes>
}

/** aggregate fields of "equipment_types" */
export interface EquipmentTypesAggregateFields {
  count: Scalars['Int']
  max?: Maybe<EquipmentTypesMaxFields>
  min?: Maybe<EquipmentTypesMinFields>
}

/** aggregate fields of "equipment_types" */
export interface EquipmentTypesAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<EquipmentTypesSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "equipment_types". All fields are combined with a logical 'AND'. */
export interface EquipmentTypesBoolExp {
  _and?: InputMaybe<Array<EquipmentTypesBoolExp>>
  _not?: InputMaybe<EquipmentTypesBoolExp>
  _or?: InputMaybe<Array<EquipmentTypesBoolExp>>
  comment?: InputMaybe<StringComparisonExp>
  displayName?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspectionItems?: InputMaybe<InspectionTypesBoolExp>
  name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "equipment_types" */
export enum EquipmentTypesConstraint {
  /** unique or primary key constraint on columns "name" */
  EQUIPMENT_ENUM_NAME_KEY = 'equipment_enum_name_key',
  /** unique or primary key constraint on columns "id" */
  EQUIPMENT_ENUM_PKEY = 'equipment_enum_pkey',
}

/** input type for inserting data into table "equipment_types" */
export interface EquipmentTypesInsertInput {
  comment?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  inspectionItems?: InputMaybe<InspectionTypesArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface EquipmentTypesMaxFields {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface EquipmentTypesMinFields {
  comment?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "equipment_types" */
export interface EquipmentTypesMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<EquipmentTypes>
}

/** input type for inserting object relation for remote table "equipment_types" */
export interface EquipmentTypesObjRelInsertInput {
  data: EquipmentTypesInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<EquipmentTypesOnConflict>
}

/** on_conflict condition type for table "equipment_types" */
export interface EquipmentTypesOnConflict {
  constraint: EquipmentTypesConstraint
  update_columns?: Array<EquipmentTypesUpdateColumn>
  where?: InputMaybe<EquipmentTypesBoolExp>
}

/** Ordering options when selecting data from "equipment_types". */
export interface EquipmentTypesOrderBy {
  comment?: InputMaybe<OrderBy>
  displayName?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspectionItems_aggregate?: InputMaybe<InspectionTypesAggregateOrderBy>
  name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: equipment_types */
export interface EquipmentTypesPkColumnsInput {
  id: Scalars['uuid']
}

/** select columns of table "equipment_types" */
export enum EquipmentTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
}

/** input type for updating data in table "equipment_types" */
export interface EquipmentTypesSetInput {
  comment?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "equipment_types" */
export interface EquipmentTypesStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: EquipmentTypesStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface EquipmentTypesStreamCursorValueInput {
  comment?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "equipment_types" */
export enum EquipmentTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
}

export interface EquipmentTypesUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EquipmentTypesSetInput>
  where: EquipmentTypesBoolExp
}

/** update columns of table "equipment" */
export enum EquipmentUpdateColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CLIENTID = 'clientId',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATEDAT = 'createdAt',
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
  EQUIPMENTSAMPLEID = 'equipmentSampleId',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  EQUIPMENTTYPEID = 'equipmentTypeId',
  /** column name */
  ID = 'id',
  /** column name */
  INSPECTIONINSTRUMENT = 'inspectionInstrument',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

export interface EquipmentUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<EquipmentAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<EquipmentDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<EquipmentDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<EquipmentDeleteKeyInput>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EquipmentIncInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<EquipmentPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EquipmentSetInput>
  where: EquipmentBoolExp
}

/** aggregate var_pop on columns */
export interface EquipmentVarPopFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "equipment" */
export interface EquipmentVarPopOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface EquipmentVarSampFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "equipment" */
export interface EquipmentVarSampOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface EquipmentVarianceFields {
  /** 创建者id */
  createrId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "equipment" */
export interface EquipmentVarianceOrderBy {
  /** 创建者id */
  createrId?: InputMaybe<OrderBy>
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType: Scalars['jsonb']
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
  /** 检测项，数据结构是 inspection_report_enum[] */
  items: Scalars['jsonb']
  /** 序列号 */
  serialNumber?: Maybe<Scalars['jsonb']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** 设备检验检测报告 */
export interface InspectionReportEquipmentTypeArgs {
  path?: InputMaybe<Scalars['String']>
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
  path?: InputMaybe<Scalars['String']>
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['jsonb']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['jsonb']>
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
  equipmentType?: InputMaybe<JsonbComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  inspectionAddress?: InputMaybe<JsonbComparisonExp>
  inspectionBasis?: InputMaybe<StringComparisonExp>
  inspectionDate?: InputMaybe<TimestamptzComparisonExp>
  inspectionInstrument?: InputMaybe<StringComparisonExp>
  inspectionItem?: InputMaybe<JsonbComparisonExp>
  items?: InputMaybe<JsonbComparisonExp>
  serialNumber?: InputMaybe<JsonbComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "inspection_report" */
export enum InspectionReportConstraint {
  /** unique or primary key constraint on columns "id" */
  EQUIPMENT_INSPECTION_REPORTS_ID_KEY = 'equipment_inspection_reports_id_key',
  /** unique or primary key constraint on columns "id" */
  EQUIPMENT_INSPECTION_REPORTS_PKEY = 'equipment_inspection_reports_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface InspectionReportDeleteAtPathInput {
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Array<Scalars['String']>>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Array<Scalars['String']>>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Array<Scalars['String']>>
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Array<Scalars['String']>>
  /** 序列号 */
  serialNumber?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface InspectionReportDeleteElemInput {
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['Int']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['Int']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['Int']>
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['Int']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface InspectionReportDeleteKeyInput {
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['String']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['String']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['String']>
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['String']>
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['jsonb']>
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
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['jsonb']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
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
  equipmentType?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  inspectionAddress?: InputMaybe<OrderBy>
  inspectionBasis?: InputMaybe<OrderBy>
  inspectionDate?: InputMaybe<OrderBy>
  inspectionInstrument?: InputMaybe<OrderBy>
  inspectionItem?: InputMaybe<OrderBy>
  items?: InputMaybe<OrderBy>
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['jsonb']>
  /** 检测地址 */
  inspectionAddress?: InputMaybe<Scalars['jsonb']>
  /** 检测类型 */
  inspectionItem?: InputMaybe<Scalars['jsonb']>
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['jsonb']>
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
  EQUIPMENTTYPE = 'equipmentType',
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
  ITEMS = 'items',
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['jsonb']>
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
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['jsonb']>
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

/** Streaming cursor of the table "inspection_report" */
export interface InspectionReportStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: InspectionReportStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface InspectionReportStreamCursorValueInput {
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
  /** 设备类型，此项用于决定哪些检测项是可用的 */
  equipmentType?: InputMaybe<Scalars['jsonb']>
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
  /** 检测项，数据结构是 inspection_report_enum[] */
  items?: InputMaybe<Scalars['jsonb']>
  /** 序列号 */
  serialNumber?: InputMaybe<Scalars['jsonb']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
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
  EQUIPMENTTYPE = 'equipmentType',
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
  ITEMS = 'items',
  /** column name */
  SERIALNUMBER = 'serialNumber',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

export interface InspectionReportUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<InspectionReportAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<InspectionReportDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<InspectionReportDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<InspectionReportDeleteKeyInput>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<InspectionReportIncInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<InspectionReportPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<InspectionReportSetInput>
  where: InspectionReportBoolExp
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

/** 检测项目枚举 */
export interface InspectionTypes {
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  condition: Scalars['jsonb']
  /** 常量列表 */
  consts: Scalars['jsonb']
  /** 初始数据 */
  data?: Maybe<Scalars['jsonb']>
  /** 检测项目名 */
  displayName: Scalars['String']
  /** An object relationship */
  equipment?: Maybe<EquipmentTypes>
  /** 对应哪个设备 */
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  index: Scalars['Int']
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name: Scalars['String']
  /** 指标要求 */
  requirement: Scalars['jsonb']
}

/** 检测项目枚举 */
export interface InspectionTypesConditionArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 检测项目枚举 */
export interface InspectionTypesConstsArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 检测项目枚举 */
export interface InspectionTypesDataArgs {
  path?: InputMaybe<Scalars['String']>
}

/** 检测项目枚举 */
export interface InspectionTypesRequirementArgs {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "inspection_types" */
export interface InspectionTypesAggregate {
  aggregate?: Maybe<InspectionTypesAggregateFields>
  nodes: Array<InspectionTypes>
}

/** aggregate fields of "inspection_types" */
export interface InspectionTypesAggregateFields {
  avg?: Maybe<InspectionTypesAvgFields>
  count: Scalars['Int']
  max?: Maybe<InspectionTypesMaxFields>
  min?: Maybe<InspectionTypesMinFields>
  stddev?: Maybe<InspectionTypesStddevFields>
  stddev_pop?: Maybe<InspectionTypesStddevPopFields>
  stddev_samp?: Maybe<InspectionTypesStddevSampFields>
  sum?: Maybe<InspectionTypesSumFields>
  var_pop?: Maybe<InspectionTypesVarPopFields>
  var_samp?: Maybe<InspectionTypesVarSampFields>
  variance?: Maybe<InspectionTypesVarianceFields>
}

/** aggregate fields of "inspection_types" */
export interface InspectionTypesAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<InspectionTypesSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "inspection_types" */
export interface InspectionTypesAggregateOrderBy {
  avg?: InputMaybe<InspectionTypesAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<InspectionTypesMaxOrderBy>
  min?: InputMaybe<InspectionTypesMinOrderBy>
  stddev?: InputMaybe<InspectionTypesStddevOrderBy>
  stddev_pop?: InputMaybe<InspectionTypesStddevPopOrderBy>
  stddev_samp?: InputMaybe<InspectionTypesStddevSampOrderBy>
  sum?: InputMaybe<InspectionTypesSumOrderBy>
  var_pop?: InputMaybe<InspectionTypesVarPopOrderBy>
  var_samp?: InputMaybe<InspectionTypesVarSampOrderBy>
  variance?: InputMaybe<InspectionTypesVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface InspectionTypesAppendInput {
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['jsonb']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['jsonb']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "inspection_types" */
export interface InspectionTypesArrRelInsertInput {
  data: Array<InspectionTypesInsertInput>
  /** upsert condition */
  on_conflict?: InputMaybe<InspectionTypesOnConflict>
}

/** aggregate avg on columns */
export interface InspectionTypesAvgFields {
  index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "inspection_types" */
export interface InspectionTypesAvgOrderBy {
  index?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "inspection_types". All fields are combined with a logical 'AND'. */
export interface InspectionTypesBoolExp {
  _and?: InputMaybe<Array<InspectionTypesBoolExp>>
  _not?: InputMaybe<InspectionTypesBoolExp>
  _or?: InputMaybe<Array<InspectionTypesBoolExp>>
  comment?: InputMaybe<StringComparisonExp>
  condition?: InputMaybe<JsonbComparisonExp>
  consts?: InputMaybe<JsonbComparisonExp>
  data?: InputMaybe<JsonbComparisonExp>
  displayName?: InputMaybe<StringComparisonExp>
  equipment?: InputMaybe<EquipmentTypesBoolExp>
  equipmentTypeId?: InputMaybe<UuidComparisonExp>
  formula?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  index?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  requirement?: InputMaybe<JsonbComparisonExp>
}

/** unique or primary key constraints on table "inspection_types" */
export enum InspectionTypesConstraint {
  /** unique or primary key constraint on columns "name" */
  INSPECTION_ITEM_ENUM_NAME_KEY1 = 'inspection_item_enum_name_key1',
  /** unique or primary key constraint on columns "id" */
  INSPECTION_ITEM_ENUM_PKEY = 'inspection_item_enum_pkey',
  /** unique or primary key constraint on columns "index" */
  INSPECTION_TYPES_INDEX_KEY = 'inspection_types_index_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface InspectionTypesDeleteAtPathInput {
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Array<Scalars['String']>>
  /** 常量列表 */
  consts?: InputMaybe<Array<Scalars['String']>>
  /** 初始数据 */
  data?: InputMaybe<Array<Scalars['String']>>
  /** 指标要求 */
  requirement?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface InspectionTypesDeleteElemInput {
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['Int']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['Int']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['Int']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface InspectionTypesDeleteKeyInput {
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['String']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['String']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['String']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "inspection_types" */
export interface InspectionTypesIncInput {
  index?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "inspection_types" */
export interface InspectionTypesInsertInput {
  /** 检测项目备注 */
  comment?: InputMaybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['jsonb']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['jsonb']>
  /** 检测项目名 */
  displayName?: InputMaybe<Scalars['String']>
  equipment?: InputMaybe<EquipmentTypesObjRelInsertInput>
  /** 对应哪个设备 */
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 公式 */
  formula?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  index?: InputMaybe<Scalars['Int']>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: InputMaybe<Scalars['String']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export interface InspectionTypesMaxFields {
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: Maybe<Scalars['String']>
  /** 对应哪个设备 */
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  index?: Maybe<Scalars['Int']>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "inspection_types" */
export interface InspectionTypesMaxOrderBy {
  /** 检测项目备注 */
  comment?: InputMaybe<OrderBy>
  /** 检测项目名 */
  displayName?: InputMaybe<OrderBy>
  /** 对应哪个设备 */
  equipmentTypeId?: InputMaybe<OrderBy>
  /** 公式 */
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  index?: InputMaybe<OrderBy>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export interface InspectionTypesMinFields {
  /** 检测项目备注 */
  comment?: Maybe<Scalars['String']>
  /** 检测项目名 */
  displayName?: Maybe<Scalars['String']>
  /** 对应哪个设备 */
  equipmentTypeId?: Maybe<Scalars['uuid']>
  /** 公式 */
  formula?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  index?: Maybe<Scalars['Int']>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "inspection_types" */
export interface InspectionTypesMinOrderBy {
  /** 检测项目备注 */
  comment?: InputMaybe<OrderBy>
  /** 检测项目名 */
  displayName?: InputMaybe<OrderBy>
  /** 对应哪个设备 */
  equipmentTypeId?: InputMaybe<OrderBy>
  /** 公式 */
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  index?: InputMaybe<OrderBy>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "inspection_types" */
export interface InspectionTypesMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<InspectionTypes>
}

/** on_conflict condition type for table "inspection_types" */
export interface InspectionTypesOnConflict {
  constraint: InspectionTypesConstraint
  update_columns?: Array<InspectionTypesUpdateColumn>
  where?: InputMaybe<InspectionTypesBoolExp>
}

/** Ordering options when selecting data from "inspection_types". */
export interface InspectionTypesOrderBy {
  comment?: InputMaybe<OrderBy>
  condition?: InputMaybe<OrderBy>
  consts?: InputMaybe<OrderBy>
  data?: InputMaybe<OrderBy>
  displayName?: InputMaybe<OrderBy>
  equipment?: InputMaybe<EquipmentTypesOrderBy>
  equipmentTypeId?: InputMaybe<OrderBy>
  formula?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  index?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  requirement?: InputMaybe<OrderBy>
}

/** primary key columns input for table: inspection_types */
export interface InspectionTypesPkColumnsInput {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface InspectionTypesPrependInput {
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['jsonb']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['jsonb']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "inspection_types" */
export enum InspectionTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CONDITION = 'condition',
  /** column name */
  CONSTS = 'consts',
  /** column name */
  DATA = 'data',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  EQUIPMENTTYPEID = 'equipmentTypeId',
  /** column name */
  FORMULA = 'formula',
  /** column name */
  ID = 'id',
  /** column name */
  INDEX = 'index',
  /** column name */
  NAME = 'name',
  /** column name */
  REQUIREMENT = 'requirement',
}

/** input type for updating data in table "inspection_types" */
export interface InspectionTypesSetInput {
  /** 检测项目备注 */
  comment?: InputMaybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['jsonb']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['jsonb']>
  /** 检测项目名 */
  displayName?: InputMaybe<Scalars['String']>
  /** 对应哪个设备 */
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 公式 */
  formula?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  index?: InputMaybe<Scalars['Int']>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: InputMaybe<Scalars['String']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['jsonb']>
}

/** aggregate stddev on columns */
export interface InspectionTypesStddevFields {
  index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "inspection_types" */
export interface InspectionTypesStddevOrderBy {
  index?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export interface InspectionTypesStddevPopFields {
  index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "inspection_types" */
export interface InspectionTypesStddevPopOrderBy {
  index?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export interface InspectionTypesStddevSampFields {
  index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "inspection_types" */
export interface InspectionTypesStddevSampOrderBy {
  index?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "inspection_types" */
export interface InspectionTypesStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: InspectionTypesStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface InspectionTypesStreamCursorValueInput {
  /** 检测项目备注 */
  comment?: InputMaybe<Scalars['String']>
  /** 预设检测条件（加载因素、预设值） */
  condition?: InputMaybe<Scalars['jsonb']>
  /** 常量列表 */
  consts?: InputMaybe<Scalars['jsonb']>
  /** 初始数据 */
  data?: InputMaybe<Scalars['jsonb']>
  /** 检测项目名 */
  displayName?: InputMaybe<Scalars['String']>
  /** 对应哪个设备 */
  equipmentTypeId?: InputMaybe<Scalars['uuid']>
  /** 公式 */
  formula?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  index?: InputMaybe<Scalars['Int']>
  /** 检测项名称，用于与实际检测报告中的检测项对应 */
  name?: InputMaybe<Scalars['String']>
  /** 指标要求 */
  requirement?: InputMaybe<Scalars['jsonb']>
}

/** aggregate sum on columns */
export interface InspectionTypesSumFields {
  index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "inspection_types" */
export interface InspectionTypesSumOrderBy {
  index?: InputMaybe<OrderBy>
}

/** update columns of table "inspection_types" */
export enum InspectionTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CONDITION = 'condition',
  /** column name */
  CONSTS = 'consts',
  /** column name */
  DATA = 'data',
  /** column name */
  DISPLAYNAME = 'displayName',
  /** column name */
  EQUIPMENTTYPEID = 'equipmentTypeId',
  /** column name */
  FORMULA = 'formula',
  /** column name */
  ID = 'id',
  /** column name */
  INDEX = 'index',
  /** column name */
  NAME = 'name',
  /** column name */
  REQUIREMENT = 'requirement',
}

export interface InspectionTypesUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<InspectionTypesAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<InspectionTypesDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<InspectionTypesDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<InspectionTypesDeleteKeyInput>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<InspectionTypesIncInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<InspectionTypesPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<InspectionTypesSetInput>
  where: InspectionTypesBoolExp
}

/** aggregate var_pop on columns */
export interface InspectionTypesVarPopFields {
  index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "inspection_types" */
export interface InspectionTypesVarPopOrderBy {
  index?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export interface InspectionTypesVarSampFields {
  index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "inspection_types" */
export interface InspectionTypesVarSampOrderBy {
  index?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export interface InspectionTypesVarianceFields {
  index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "inspection_types" */
export interface InspectionTypesVarianceOrderBy {
  index?: InputMaybe<OrderBy>
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
  /** unique or primary key constraint on columns "code" */
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

/** primary key columns input for table: meta.area_cn_city */
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

/** Streaming cursor of the table "meta_area_cn_city" */
export interface MetaAreaCnCityStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: MetaAreaCnCityStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface MetaAreaCnCityStreamCursorValueInput {
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
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

export interface MetaAreaCnCityUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MetaAreaCnCityIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MetaAreaCnCitySetInput>
  where: MetaAreaCnCityBoolExp
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
  /** unique or primary key constraint on columns "code" */
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

/** primary key columns input for table: meta.area_cn_county */
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

/** Streaming cursor of the table "meta_area_cn_county" */
export interface MetaAreaCnCountyStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: MetaAreaCnCountyStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface MetaAreaCnCountyStreamCursorValueInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
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

export interface MetaAreaCnCountyUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MetaAreaCnCountyIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MetaAreaCnCountySetInput>
  where: MetaAreaCnCountyBoolExp
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
  /** unique or primary key constraint on columns "code" */
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

/** primary key columns input for table: meta.area_cn_province */
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

/** Streaming cursor of the table "meta_area_cn_province" */
export interface MetaAreaCnProvinceStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: MetaAreaCnProvinceStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface MetaAreaCnProvinceStreamCursorValueInput {
  code?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
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

export interface MetaAreaCnProvinceUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MetaAreaCnProvinceIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MetaAreaCnProvinceSetInput>
  where: MetaAreaCnProvinceBoolExp
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
  /** unique or primary key constraint on columns "code" */
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

/** primary key columns input for table: meta.area_cn_town */
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

/** Streaming cursor of the table "meta_area_cn_town" */
export interface MetaAreaCnTownStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: MetaAreaCnTownStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface MetaAreaCnTownStreamCursorValueInput {
  cityCode?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['Int']>
  countyCode?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  provinceCode?: InputMaybe<Scalars['Int']>
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

export interface MetaAreaCnTownUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MetaAreaCnTownIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MetaAreaCnTownSetInput>
  where: MetaAreaCnTownBoolExp
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

/** columns and relationships of "meta.avalar_list" */
export interface MetaAvalarList {
  id: Scalars['uuid']
  src: Scalars['String']
}

/** aggregated selection of "meta.avalar_list" */
export interface MetaAvalarListAggregate {
  aggregate?: Maybe<MetaAvalarListAggregateFields>
  nodes: Array<MetaAvalarList>
}

/** aggregate fields of "meta.avalar_list" */
export interface MetaAvalarListAggregateFields {
  count: Scalars['Int']
  max?: Maybe<MetaAvalarListMaxFields>
  min?: Maybe<MetaAvalarListMinFields>
}

/** aggregate fields of "meta.avalar_list" */
export interface MetaAvalarListAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<MetaAvalarListSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "meta.avalar_list". All fields are combined with a logical 'AND'. */
export interface MetaAvalarListBoolExp {
  _and?: InputMaybe<Array<MetaAvalarListBoolExp>>
  _not?: InputMaybe<MetaAvalarListBoolExp>
  _or?: InputMaybe<Array<MetaAvalarListBoolExp>>
  id?: InputMaybe<UuidComparisonExp>
  src?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "meta.avalar_list" */
export enum MetaAvalarListConstraint {
  /** unique or primary key constraint on columns "id" */
  AVALAR_LIST_PKEY = 'avalar_list_pkey',
  /** unique or primary key constraint on columns "src" */
  AVALAR_LIST_SRC_KEY = 'avalar_list_src_key',
}

/** input type for inserting data into table "meta.avalar_list" */
export interface MetaAvalarListInsertInput {
  id?: InputMaybe<Scalars['uuid']>
  src?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface MetaAvalarListMaxFields {
  id?: Maybe<Scalars['uuid']>
  src?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface MetaAvalarListMinFields {
  id?: Maybe<Scalars['uuid']>
  src?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "meta.avalar_list" */
export interface MetaAvalarListMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<MetaAvalarList>
}

/** on_conflict condition type for table "meta.avalar_list" */
export interface MetaAvalarListOnConflict {
  constraint: MetaAvalarListConstraint
  update_columns?: Array<MetaAvalarListUpdateColumn>
  where?: InputMaybe<MetaAvalarListBoolExp>
}

/** Ordering options when selecting data from "meta.avalar_list". */
export interface MetaAvalarListOrderBy {
  id?: InputMaybe<OrderBy>
  src?: InputMaybe<OrderBy>
}

/** primary key columns input for table: meta.avalar_list */
export interface MetaAvalarListPkColumnsInput {
  id: Scalars['uuid']
}

/** select columns of table "meta.avalar_list" */
export enum MetaAvalarListSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  SRC = 'src',
}

/** input type for updating data in table "meta.avalar_list" */
export interface MetaAvalarListSetInput {
  id?: InputMaybe<Scalars['uuid']>
  src?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "meta_avalar_list" */
export interface MetaAvalarListStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: MetaAvalarListStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface MetaAvalarListStreamCursorValueInput {
  id?: InputMaybe<Scalars['uuid']>
  src?: InputMaybe<Scalars['String']>
}

/** update columns of table "meta.avalar_list" */
export enum MetaAvalarListUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  SRC = 'src',
}

export interface MetaAvalarListUpdates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MetaAvalarListSetInput>
  where: MetaAvalarListBoolExp
}

/** mutation root */
export interface MutationRoot {
  /** delete data from the table: "clients" */
  delete_clients?: Maybe<ClientsMutationResponse>
  /** delete single row from the table: "clients" */
  delete_clients_by_pk?: Maybe<Clients>
  /** delete data from the table: "equipment" */
  delete_equipment?: Maybe<EquipmentMutationResponse>
  /** delete single row from the table: "equipment" */
  delete_equipment_by_pk?: Maybe<Equipment>
  /** delete data from the table: "equipment_types" */
  delete_equipment_types?: Maybe<EquipmentTypesMutationResponse>
  /** delete single row from the table: "equipment_types" */
  delete_equipment_types_by_pk?: Maybe<EquipmentTypes>
  delete_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** delete single row from the table: "inspection_report" */
  delete_inspection_report_by_pk?: Maybe<InspectionReport>
  /** delete data from the table: "inspection_types" */
  delete_inspection_types?: Maybe<InspectionTypesMutationResponse>
  /** delete single row from the table: "inspection_types" */
  delete_inspection_types_by_pk?: Maybe<InspectionTypes>
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
  /** delete data from the table: "meta.avalar_list" */
  delete_meta_avalar_list?: Maybe<MetaAvalarListMutationResponse>
  /** delete single row from the table: "meta.avalar_list" */
  delete_meta_avalar_list_by_pk?: Maybe<MetaAvalarList>
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
  /** insert data into the table: "equipment" */
  insert_equipment?: Maybe<EquipmentMutationResponse>
  /** insert a single row into the table: "equipment" */
  insert_equipment_one?: Maybe<Equipment>
  /** insert data into the table: "equipment_types" */
  insert_equipment_types?: Maybe<EquipmentTypesMutationResponse>
  /** insert a single row into the table: "equipment_types" */
  insert_equipment_types_one?: Maybe<EquipmentTypes>
  insert_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** insert a single row into the table: "inspection_report" */
  insert_inspection_report_one?: Maybe<InspectionReport>
  /** insert data into the table: "inspection_types" */
  insert_inspection_types?: Maybe<InspectionTypesMutationResponse>
  /** insert a single row into the table: "inspection_types" */
  insert_inspection_types_one?: Maybe<InspectionTypes>
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
  /** insert data into the table: "meta.avalar_list" */
  insert_meta_avalar_list?: Maybe<MetaAvalarListMutationResponse>
  /** insert a single row into the table: "meta.avalar_list" */
  insert_meta_avalar_list_one?: Maybe<MetaAvalarList>
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
  /** update multiples rows of table: "clients" */
  update_clients_many?: Maybe<Array<Maybe<ClientsMutationResponse>>>
  /** update data of the table: "equipment" */
  update_equipment?: Maybe<EquipmentMutationResponse>
  /** update single row of the table: "equipment" */
  update_equipment_by_pk?: Maybe<Equipment>
  /** update multiples rows of table: "equipment" */
  update_equipment_many?: Maybe<Array<Maybe<EquipmentMutationResponse>>>
  /** update data of the table: "equipment_types" */
  update_equipment_types?: Maybe<EquipmentTypesMutationResponse>
  /** update single row of the table: "equipment_types" */
  update_equipment_types_by_pk?: Maybe<EquipmentTypes>
  /** update multiples rows of table: "equipment_types" */
  update_equipment_types_many?: Maybe<
    Array<Maybe<EquipmentTypesMutationResponse>>
  >
  update_inspection_report?: Maybe<InspectionReportMutationResponse>
  /** update single row of the table: "inspection_report" */
  update_inspection_report_by_pk?: Maybe<InspectionReport>
  /** update multiples rows of table: "inspection_report" */
  update_inspection_report_many?: Maybe<
    Array<Maybe<InspectionReportMutationResponse>>
  >
  /** update data of the table: "inspection_types" */
  update_inspection_types?: Maybe<InspectionTypesMutationResponse>
  /** update single row of the table: "inspection_types" */
  update_inspection_types_by_pk?: Maybe<InspectionTypes>
  /** update multiples rows of table: "inspection_types" */
  update_inspection_types_many?: Maybe<
    Array<Maybe<InspectionTypesMutationResponse>>
  >
  /** update data of the table: "meta.area_cn_city" */
  update_meta_area_cn_city?: Maybe<MetaAreaCnCityMutationResponse>
  /** update single row of the table: "meta.area_cn_city" */
  update_meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** update multiples rows of table: "meta.area_cn_city" */
  update_meta_area_cn_city_many?: Maybe<
    Array<Maybe<MetaAreaCnCityMutationResponse>>
  >
  /** update data of the table: "meta.area_cn_county" */
  update_meta_area_cn_county?: Maybe<MetaAreaCnCountyMutationResponse>
  /** update single row of the table: "meta.area_cn_county" */
  update_meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** update multiples rows of table: "meta.area_cn_county" */
  update_meta_area_cn_county_many?: Maybe<
    Array<Maybe<MetaAreaCnCountyMutationResponse>>
  >
  /** update data of the table: "meta.area_cn_province" */
  update_meta_area_cn_province?: Maybe<MetaAreaCnProvinceMutationResponse>
  /** update single row of the table: "meta.area_cn_province" */
  update_meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** update multiples rows of table: "meta.area_cn_province" */
  update_meta_area_cn_province_many?: Maybe<
    Array<Maybe<MetaAreaCnProvinceMutationResponse>>
  >
  /** update data of the table: "meta.area_cn_town" */
  update_meta_area_cn_town?: Maybe<MetaAreaCnTownMutationResponse>
  /** update single row of the table: "meta.area_cn_town" */
  update_meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** update multiples rows of table: "meta.area_cn_town" */
  update_meta_area_cn_town_many?: Maybe<
    Array<Maybe<MetaAreaCnTownMutationResponse>>
  >
  /** update data of the table: "meta.avalar_list" */
  update_meta_avalar_list?: Maybe<MetaAvalarListMutationResponse>
  /** update single row of the table: "meta.avalar_list" */
  update_meta_avalar_list_by_pk?: Maybe<MetaAvalarList>
  /** update multiples rows of table: "meta.avalar_list" */
  update_meta_avalar_list_many?: Maybe<
    Array<Maybe<MetaAvalarListMutationResponse>>
  >
  /** update data of the table: "report_file" */
  update_report_file?: Maybe<ReportFileMutationResponse>
  /** update single row of the table: "report_file" */
  update_report_file_by_pk?: Maybe<ReportFile>
  /** update multiples rows of table: "report_file" */
  update_report_file_many?: Maybe<Array<Maybe<ReportFileMutationResponse>>>
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<UserMutationResponse>>>
  /** update data of the table: "user_view" */
  update_user_view?: Maybe<UserViewMutationResponse>
  /** update multiples rows of table: "user_view" */
  update_user_view_many?: Maybe<Array<Maybe<UserViewMutationResponse>>>
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
export interface MutationRootDeleteEquipmentArgs {
  where: EquipmentBoolExp
}

/** mutation root */
export interface MutationRootDeleteEquipmentByPkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface MutationRootDeleteEquipmentTypesArgs {
  where: EquipmentTypesBoolExp
}

/** mutation root */
export interface MutationRootDeleteEquipmentTypesByPkArgs {
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
export interface MutationRootDeleteInspectionTypesArgs {
  where: InspectionTypesBoolExp
}

/** mutation root */
export interface MutationRootDeleteInspectionTypesByPkArgs {
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
export interface MutationRootDeleteMetaAvalarListArgs {
  where: MetaAvalarListBoolExp
}

/** mutation root */
export interface MutationRootDeleteMetaAvalarListByPkArgs {
  id: Scalars['uuid']
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
export interface MutationRootInsertEquipmentArgs {
  objects: Array<EquipmentInsertInput>
  on_conflict?: InputMaybe<EquipmentOnConflict>
}

/** mutation root */
export interface MutationRootInsertEquipmentOneArgs {
  object: EquipmentInsertInput
  on_conflict?: InputMaybe<EquipmentOnConflict>
}

/** mutation root */
export interface MutationRootInsertEquipmentTypesArgs {
  objects: Array<EquipmentTypesInsertInput>
  on_conflict?: InputMaybe<EquipmentTypesOnConflict>
}

/** mutation root */
export interface MutationRootInsertEquipmentTypesOneArgs {
  object: EquipmentTypesInsertInput
  on_conflict?: InputMaybe<EquipmentTypesOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportArgs {
  objects: Array<InspectionReportInsertInput>
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionReportOneArgs {
  object: InspectionReportInsertInput
  on_conflict?: InputMaybe<InspectionReportOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionTypesArgs {
  objects: Array<InspectionTypesInsertInput>
  on_conflict?: InputMaybe<InspectionTypesOnConflict>
}

/** mutation root */
export interface MutationRootInsertInspectionTypesOneArgs {
  object: InspectionTypesInsertInput
  on_conflict?: InputMaybe<InspectionTypesOnConflict>
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
export interface MutationRootInsertMetaAvalarListArgs {
  objects: Array<MetaAvalarListInsertInput>
  on_conflict?: InputMaybe<MetaAvalarListOnConflict>
}

/** mutation root */
export interface MutationRootInsertMetaAvalarListOneArgs {
  object: MetaAvalarListInsertInput
  on_conflict?: InputMaybe<MetaAvalarListOnConflict>
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
export interface MutationRootUpdateClientsManyArgs {
  updates: Array<ClientsUpdates>
}

/** mutation root */
export interface MutationRootUpdateEquipmentArgs {
  _append?: InputMaybe<EquipmentAppendInput>
  _delete_at_path?: InputMaybe<EquipmentDeleteAtPathInput>
  _delete_elem?: InputMaybe<EquipmentDeleteElemInput>
  _delete_key?: InputMaybe<EquipmentDeleteKeyInput>
  _inc?: InputMaybe<EquipmentIncInput>
  _prepend?: InputMaybe<EquipmentPrependInput>
  _set?: InputMaybe<EquipmentSetInput>
  where: EquipmentBoolExp
}

/** mutation root */
export interface MutationRootUpdateEquipmentByPkArgs {
  _append?: InputMaybe<EquipmentAppendInput>
  _delete_at_path?: InputMaybe<EquipmentDeleteAtPathInput>
  _delete_elem?: InputMaybe<EquipmentDeleteElemInput>
  _delete_key?: InputMaybe<EquipmentDeleteKeyInput>
  _inc?: InputMaybe<EquipmentIncInput>
  _prepend?: InputMaybe<EquipmentPrependInput>
  _set?: InputMaybe<EquipmentSetInput>
  pk_columns: EquipmentPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateEquipmentManyArgs {
  updates: Array<EquipmentUpdates>
}

/** mutation root */
export interface MutationRootUpdateEquipmentTypesArgs {
  _set?: InputMaybe<EquipmentTypesSetInput>
  where: EquipmentTypesBoolExp
}

/** mutation root */
export interface MutationRootUpdateEquipmentTypesByPkArgs {
  _set?: InputMaybe<EquipmentTypesSetInput>
  pk_columns: EquipmentTypesPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateEquipmentTypesManyArgs {
  updates: Array<EquipmentTypesUpdates>
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
export interface MutationRootUpdateInspectionReportManyArgs {
  updates: Array<InspectionReportUpdates>
}

/** mutation root */
export interface MutationRootUpdateInspectionTypesArgs {
  _append?: InputMaybe<InspectionTypesAppendInput>
  _delete_at_path?: InputMaybe<InspectionTypesDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionTypesDeleteElemInput>
  _delete_key?: InputMaybe<InspectionTypesDeleteKeyInput>
  _inc?: InputMaybe<InspectionTypesIncInput>
  _prepend?: InputMaybe<InspectionTypesPrependInput>
  _set?: InputMaybe<InspectionTypesSetInput>
  where: InspectionTypesBoolExp
}

/** mutation root */
export interface MutationRootUpdateInspectionTypesByPkArgs {
  _append?: InputMaybe<InspectionTypesAppendInput>
  _delete_at_path?: InputMaybe<InspectionTypesDeleteAtPathInput>
  _delete_elem?: InputMaybe<InspectionTypesDeleteElemInput>
  _delete_key?: InputMaybe<InspectionTypesDeleteKeyInput>
  _inc?: InputMaybe<InspectionTypesIncInput>
  _prepend?: InputMaybe<InspectionTypesPrependInput>
  _set?: InputMaybe<InspectionTypesSetInput>
  pk_columns: InspectionTypesPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateInspectionTypesManyArgs {
  updates: Array<InspectionTypesUpdates>
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
export interface MutationRootUpdateMetaAreaCnCityManyArgs {
  updates: Array<MetaAreaCnCityUpdates>
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
export interface MutationRootUpdateMetaAreaCnCountyManyArgs {
  updates: Array<MetaAreaCnCountyUpdates>
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
export interface MutationRootUpdateMetaAreaCnProvinceManyArgs {
  updates: Array<MetaAreaCnProvinceUpdates>
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
export interface MutationRootUpdateMetaAreaCnTownManyArgs {
  updates: Array<MetaAreaCnTownUpdates>
}

/** mutation root */
export interface MutationRootUpdateMetaAvalarListArgs {
  _set?: InputMaybe<MetaAvalarListSetInput>
  where: MetaAvalarListBoolExp
}

/** mutation root */
export interface MutationRootUpdateMetaAvalarListByPkArgs {
  _set?: InputMaybe<MetaAvalarListSetInput>
  pk_columns: MetaAvalarListPkColumnsInput
}

/** mutation root */
export interface MutationRootUpdateMetaAvalarListManyArgs {
  updates: Array<MetaAvalarListUpdates>
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
export interface MutationRootUpdateReportFileManyArgs {
  updates: Array<ReportFileUpdates>
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
export interface MutationRootUpdateUserManyArgs {
  updates: Array<UserUpdates>
}

/** mutation root */
export interface MutationRootUpdateUserViewArgs {
  _inc?: InputMaybe<UserViewIncInput>
  _set?: InputMaybe<UserViewSetInput>
  where: UserViewBoolExp
}

/** mutation root */
export interface MutationRootUpdateUserViewManyArgs {
  updates: Array<UserViewUpdates>
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
  /** fetch data from the table: "equipment" */
  equipment: Array<Equipment>
  /** fetch aggregated fields from the table: "equipment" */
  equipment_aggregate: EquipmentAggregate
  /** fetch data from the table: "equipment" using primary key columns */
  equipment_by_pk?: Maybe<Equipment>
  /** fetch data from the table: "equipment_types" */
  equipment_types: Array<EquipmentTypes>
  /** fetch aggregated fields from the table: "equipment_types" */
  equipment_types_aggregate: EquipmentTypesAggregate
  /** fetch data from the table: "equipment_types" using primary key columns */
  equipment_types_by_pk?: Maybe<EquipmentTypes>
  /** fetch data from the table: "inspection_report" */
  inspection_report: Array<InspectionReport>
  /** fetch aggregated fields from the table: "inspection_report" */
  inspection_report_aggregate: InspectionReportAggregate
  /** fetch data from the table: "inspection_report" using primary key columns */
  inspection_report_by_pk?: Maybe<InspectionReport>
  /** fetch data from the table: "inspection_types" */
  inspection_types: Array<InspectionTypes>
  /** fetch aggregated fields from the table: "inspection_types" */
  inspection_types_aggregate: InspectionTypesAggregate
  /** fetch data from the table: "inspection_types" using primary key columns */
  inspection_types_by_pk?: Maybe<InspectionTypes>
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
  /** fetch data from the table: "meta.avalar_list" */
  meta_avalar_list: Array<MetaAvalarList>
  /** fetch aggregated fields from the table: "meta.avalar_list" */
  meta_avalar_list_aggregate: MetaAvalarListAggregate
  /** fetch data from the table: "meta.avalar_list" using primary key columns */
  meta_avalar_list_by_pk?: Maybe<MetaAvalarList>
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

export interface QueryRootEquipmentArgs {
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
}

export interface QueryRootEquipmentAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
}

export interface QueryRootEquipmentByPkArgs {
  id: Scalars['uuid']
}

export interface QueryRootEquipmentTypesArgs {
  distinct_on?: InputMaybe<Array<EquipmentTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentTypesOrderBy>>
  where?: InputMaybe<EquipmentTypesBoolExp>
}

export interface QueryRootEquipmentTypesAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentTypesOrderBy>>
  where?: InputMaybe<EquipmentTypesBoolExp>
}

export interface QueryRootEquipmentTypesByPkArgs {
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

export interface QueryRootInspectionTypesArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

export interface QueryRootInspectionTypesAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

export interface QueryRootInspectionTypesByPkArgs {
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

export interface QueryRootMetaAvalarListArgs {
  distinct_on?: InputMaybe<Array<MetaAvalarListSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAvalarListOrderBy>>
  where?: InputMaybe<MetaAvalarListBoolExp>
}

export interface QueryRootMetaAvalarListAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAvalarListSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAvalarListOrderBy>>
  where?: InputMaybe<MetaAvalarListBoolExp>
}

export interface QueryRootMetaAvalarListByPkArgs {
  id: Scalars['uuid']
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
  /** unique or primary key constraint on columns "reportNo" */
  REPORT_NO_UINDEX = 'report_no_uindex',
  /** unique or primary key constraint on columns "id" */
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

/** Streaming cursor of the table "report_file" */
export interface ReportFileStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: ReportFileStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface ReportFileStreamCursorValueInput {
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

export interface ReportFileUpdates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ReportFileAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ReportFileDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ReportFileDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ReportFileDeleteKeyInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ReportFilePrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ReportFileSetInput>
  where: ReportFileBoolExp
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
  /** fetch data from the table in a streaming manner : "clients" */
  clients_stream: Array<Clients>
  /** fetch data from the table: "equipment" */
  equipment: Array<Equipment>
  /** fetch aggregated fields from the table: "equipment" */
  equipment_aggregate: EquipmentAggregate
  /** fetch data from the table: "equipment" using primary key columns */
  equipment_by_pk?: Maybe<Equipment>
  /** fetch data from the table in a streaming manner : "equipment" */
  equipment_stream: Array<Equipment>
  /** fetch data from the table: "equipment_types" */
  equipment_types: Array<EquipmentTypes>
  /** fetch aggregated fields from the table: "equipment_types" */
  equipment_types_aggregate: EquipmentTypesAggregate
  /** fetch data from the table: "equipment_types" using primary key columns */
  equipment_types_by_pk?: Maybe<EquipmentTypes>
  /** fetch data from the table in a streaming manner : "equipment_types" */
  equipment_types_stream: Array<EquipmentTypes>
  /** fetch data from the table: "inspection_report" */
  inspection_report: Array<InspectionReport>
  /** fetch aggregated fields from the table: "inspection_report" */
  inspection_report_aggregate: InspectionReportAggregate
  /** fetch data from the table: "inspection_report" using primary key columns */
  inspection_report_by_pk?: Maybe<InspectionReport>
  /** fetch data from the table in a streaming manner : "inspection_report" */
  inspection_report_stream: Array<InspectionReport>
  /** fetch data from the table: "inspection_types" */
  inspection_types: Array<InspectionTypes>
  /** fetch aggregated fields from the table: "inspection_types" */
  inspection_types_aggregate: InspectionTypesAggregate
  /** fetch data from the table: "inspection_types" using primary key columns */
  inspection_types_by_pk?: Maybe<InspectionTypes>
  /** fetch data from the table in a streaming manner : "inspection_types" */
  inspection_types_stream: Array<InspectionTypes>
  /** fetch data from the table: "meta.area_cn_city" */
  meta_area_cn_city: Array<MetaAreaCnCity>
  /** fetch aggregated fields from the table: "meta.area_cn_city" */
  meta_area_cn_city_aggregate: MetaAreaCnCityAggregate
  /** fetch data from the table: "meta.area_cn_city" using primary key columns */
  meta_area_cn_city_by_pk?: Maybe<MetaAreaCnCity>
  /** fetch data from the table in a streaming manner : "meta.area_cn_city" */
  meta_area_cn_city_stream: Array<MetaAreaCnCity>
  /** fetch data from the table: "meta.area_cn_county" */
  meta_area_cn_county: Array<MetaAreaCnCounty>
  /** fetch aggregated fields from the table: "meta.area_cn_county" */
  meta_area_cn_county_aggregate: MetaAreaCnCountyAggregate
  /** fetch data from the table: "meta.area_cn_county" using primary key columns */
  meta_area_cn_county_by_pk?: Maybe<MetaAreaCnCounty>
  /** fetch data from the table in a streaming manner : "meta.area_cn_county" */
  meta_area_cn_county_stream: Array<MetaAreaCnCounty>
  /** fetch data from the table: "meta.area_cn_province" */
  meta_area_cn_province: Array<MetaAreaCnProvince>
  /** fetch aggregated fields from the table: "meta.area_cn_province" */
  meta_area_cn_province_aggregate: MetaAreaCnProvinceAggregate
  /** fetch data from the table: "meta.area_cn_province" using primary key columns */
  meta_area_cn_province_by_pk?: Maybe<MetaAreaCnProvince>
  /** fetch data from the table in a streaming manner : "meta.area_cn_province" */
  meta_area_cn_province_stream: Array<MetaAreaCnProvince>
  /** fetch data from the table: "meta.area_cn_town" */
  meta_area_cn_town: Array<MetaAreaCnTown>
  /** fetch aggregated fields from the table: "meta.area_cn_town" */
  meta_area_cn_town_aggregate: MetaAreaCnTownAggregate
  /** fetch data from the table: "meta.area_cn_town" using primary key columns */
  meta_area_cn_town_by_pk?: Maybe<MetaAreaCnTown>
  /** fetch data from the table in a streaming manner : "meta.area_cn_town" */
  meta_area_cn_town_stream: Array<MetaAreaCnTown>
  /** fetch data from the table: "meta.avalar_list" */
  meta_avalar_list: Array<MetaAvalarList>
  /** fetch aggregated fields from the table: "meta.avalar_list" */
  meta_avalar_list_aggregate: MetaAvalarListAggregate
  /** fetch data from the table: "meta.avalar_list" using primary key columns */
  meta_avalar_list_by_pk?: Maybe<MetaAvalarList>
  /** fetch data from the table in a streaming manner : "meta.avalar_list" */
  meta_avalar_list_stream: Array<MetaAvalarList>
  /** fetch data from the table: "report_file" */
  report_file: Array<ReportFile>
  /** fetch aggregated fields from the table: "report_file" */
  report_file_aggregate: ReportFileAggregate
  /** fetch data from the table: "report_file" using primary key columns */
  report_file_by_pk?: Maybe<ReportFile>
  /** fetch data from the table in a streaming manner : "report_file" */
  report_file_stream: Array<ReportFile>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table in a streaming manner : "user" */
  user_stream: Array<User>
  /** fetch data from the table: "user_view" */
  user_view: Array<UserView>
  /** fetch aggregated fields from the table: "user_view" */
  user_view_aggregate: UserViewAggregate
  /** fetch data from the table in a streaming manner : "user_view" */
  user_view_stream: Array<UserView>
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

export interface SubscriptionRootClientsStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ClientsStreamCursorInput>>
  where?: InputMaybe<ClientsBoolExp>
}

export interface SubscriptionRootEquipmentArgs {
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
}

export interface SubscriptionRootEquipmentAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
}

export interface SubscriptionRootEquipmentByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootEquipmentStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<EquipmentStreamCursorInput>>
  where?: InputMaybe<EquipmentBoolExp>
}

export interface SubscriptionRootEquipmentTypesArgs {
  distinct_on?: InputMaybe<Array<EquipmentTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentTypesOrderBy>>
  where?: InputMaybe<EquipmentTypesBoolExp>
}

export interface SubscriptionRootEquipmentTypesAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentTypesOrderBy>>
  where?: InputMaybe<EquipmentTypesBoolExp>
}

export interface SubscriptionRootEquipmentTypesByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootEquipmentTypesStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<EquipmentTypesStreamCursorInput>>
  where?: InputMaybe<EquipmentTypesBoolExp>
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

export interface SubscriptionRootInspectionReportStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<InspectionReportStreamCursorInput>>
  where?: InputMaybe<InspectionReportBoolExp>
}

export interface SubscriptionRootInspectionTypesArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

export interface SubscriptionRootInspectionTypesAggregateArgs {
  distinct_on?: InputMaybe<Array<InspectionTypesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<InspectionTypesOrderBy>>
  where?: InputMaybe<InspectionTypesBoolExp>
}

export interface SubscriptionRootInspectionTypesByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootInspectionTypesStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<InspectionTypesStreamCursorInput>>
  where?: InputMaybe<InspectionTypesBoolExp>
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

export interface SubscriptionRootMetaAreaCnCityStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<MetaAreaCnCityStreamCursorInput>>
  where?: InputMaybe<MetaAreaCnCityBoolExp>
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

export interface SubscriptionRootMetaAreaCnCountyStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<MetaAreaCnCountyStreamCursorInput>>
  where?: InputMaybe<MetaAreaCnCountyBoolExp>
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

export interface SubscriptionRootMetaAreaCnProvinceStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<MetaAreaCnProvinceStreamCursorInput>>
  where?: InputMaybe<MetaAreaCnProvinceBoolExp>
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

export interface SubscriptionRootMetaAreaCnTownStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<MetaAreaCnTownStreamCursorInput>>
  where?: InputMaybe<MetaAreaCnTownBoolExp>
}

export interface SubscriptionRootMetaAvalarListArgs {
  distinct_on?: InputMaybe<Array<MetaAvalarListSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAvalarListOrderBy>>
  where?: InputMaybe<MetaAvalarListBoolExp>
}

export interface SubscriptionRootMetaAvalarListAggregateArgs {
  distinct_on?: InputMaybe<Array<MetaAvalarListSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<MetaAvalarListOrderBy>>
  where?: InputMaybe<MetaAvalarListBoolExp>
}

export interface SubscriptionRootMetaAvalarListByPkArgs {
  id: Scalars['uuid']
}

export interface SubscriptionRootMetaAvalarListStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<MetaAvalarListStreamCursorInput>>
  where?: InputMaybe<MetaAvalarListBoolExp>
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

export interface SubscriptionRootReportFileStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ReportFileStreamCursorInput>>
  where?: InputMaybe<ReportFileBoolExp>
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

export interface SubscriptionRootUserStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<UserStreamCursorInput>>
  where?: InputMaybe<UserBoolExp>
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

export interface SubscriptionRootUserViewStreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<UserViewStreamCursorInput>>
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
  devices: Array<Equipment>
  /** An aggregate relationship */
  devices_aggregate: EquipmentAggregate
  displayname?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
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
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
}

/** columns and relationships of "user" */
export interface UserDevicesAggregateArgs {
  distinct_on?: InputMaybe<Array<EquipmentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<EquipmentOrderBy>>
  where?: InputMaybe<EquipmentBoolExp>
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
  devices?: InputMaybe<EquipmentBoolExp>
  displayname?: InputMaybe<StringComparisonExp>
  email?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  inspection_reports?: InputMaybe<InspectionReportBoolExp>
  password?: InputMaybe<StringComparisonExp>
  role?: InputMaybe<RoleComparisonExp>
  username?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "id" */
  USER_PKEY = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  USER_USERNAME_KEY = 'user_username_key',
  /** unique or primary key constraint on columns "username" */
  USER_USERNAME_UINDEX = 'user_username_uindex',
}

/** input type for incrementing numeric columns in table "user" */
export interface UserIncInput {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export interface UserInsertInput {
  avatar?: InputMaybe<Scalars['String']>
  devices?: InputMaybe<EquipmentArrRelInsertInput>
  displayname?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
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
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  password?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface UserMinFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
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
  devices_aggregate?: InputMaybe<EquipmentAggregateOrderBy>
  displayname?: InputMaybe<OrderBy>
  email?: InputMaybe<OrderBy>
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
  EMAIL = 'email',
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
  email?: InputMaybe<Scalars['String']>
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

/** Streaming cursor of the table "user" */
export interface UserStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UserStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface UserStreamCursorValueInput {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
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
  EMAIL = 'email',
  /** column name */
  ID = 'id',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  ROLE = 'role',
  /** column name */
  USERNAME = 'username',
}

export interface UserUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
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
  email?: Maybe<Scalars['String']>
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
  email?: InputMaybe<StringComparisonExp>
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
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface UserViewMaxFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<Scalars['role']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface UserViewMinFields {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
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
  email?: InputMaybe<OrderBy>
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
  EMAIL = 'email',
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
  email?: InputMaybe<Scalars['String']>
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

/** Streaming cursor of the table "user_view" */
export interface UserViewStreamCursorInput {
  /** Stream column input with initial value */
  initial_value: UserViewStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export interface UserViewStreamCursorValueInput {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<Scalars['role']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export interface UserViewSumFields {
  id?: Maybe<Scalars['Int']>
}

export interface UserViewUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserViewIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserViewSetInput>
  where: UserViewBoolExp
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
    ClientsSearchList: 'ClientsSearchList',
    ClientsById: 'ClientsById',
    InspectionTypesList: 'InspectionTypesList',
    InspectionTypesDetail: 'InspectionTypesDetail',
    InspectionTypesByEquipment: 'InspectionTypesByEquipment',
    EquipmentTypesList: 'EquipmentTypesList',
    EquipmentTypesById: 'EquipmentTypesById',
    EquipmentList: 'EquipmentList',
    EquipmentById: 'EquipmentById',
    FindEquipment: 'FindEquipment',
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
    CreateInspectionTypes: 'CreateInspectionTypes',
    UpdateInspectionTypesById: 'UpdateInspectionTypesById',
    DeleteInspectionTypes: 'DeleteInspectionTypes',
    CreateEquipmentTypes: 'CreateEquipmentTypes',
    UpdateEquipmentTypesById: 'UpdateEquipmentTypesById',
    DeleteEquipmentTypes: 'DeleteEquipmentTypes',
    CreateEquipment: 'CreateEquipment',
    UpdateEquipmentById: 'UpdateEquipmentById',
    DeleteEquipmentById: 'DeleteEquipmentById',
    DeleteEquipmentBulk: 'DeleteEquipmentBulk',
    CreateInspectionReport: 'CreateInspectionReport',
    UpdateInspectionReportById: 'UpdateInspectionReportById',
    DeleteInspectionReportById: 'DeleteInspectionReportById',
    updateUserPassword: 'updateUserPassword',
    AdminCreateAccount: 'AdminCreateAccount',
    AdminUpdateAccountById: 'AdminUpdateAccountById',
    AdminDeleteAccountById: 'AdminDeleteAccountById',
  },
  Fragment: {
    InspectionTypes: 'InspectionTypes',
    InspectionTypesHeader: 'InspectionTypesHeader',
    EquipmentTypes: 'EquipmentTypes',
    FindEquipmentResult: 'FindEquipmentResult',
    InspectionReportHeader: 'InspectionReportHeader',
    InspectionReport: 'InspectionReport',
    UserInfo: 'UserInfo',
    UserView: 'UserView',
    ClientsDetail: 'ClientsDetail',
    EquipmentDetail: 'EquipmentDetail',
  },
}
