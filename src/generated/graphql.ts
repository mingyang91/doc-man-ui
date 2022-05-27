import { gql } from '@apollo/client'
import { UUID } from 'short-uuid'
import * as Apollo from '@apollo/client'

import { PipeVoltage } from '@models/devices/pipe-voltage'
import { RadiationOutput } from '@models/devices/radiation-output'

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
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: UUID
  String: string
  Boolean: boolean
  Int: number
  Float: number
  json: unknown
  jsonb: unknown
  role: unknown
  timestamp: unknown
  uuid: UUID
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
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
export type StringComparisonExp = {
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

/** columns and relationships of "device" */
export interface Device {
  AECC2CConsistency?: Maybe<Scalars['jsonb']>
  AECRepeatability?: Maybe<Scalars['jsonb']>
  AECResponse?: Maybe<Scalars['jsonb']>
  UsefulHarnessHalfValue?: Maybe<Scalars['jsonb']>
  accordingTo?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  checkDate?: Maybe<Scalars['timestamp']>
  createTime: Scalars['timestamp']
  ddi?: Maybe<Scalars['json']>
  deviceNo?: Maybe<Scalars['String']>
  equipment?: Maybe<Scalars['String']>
  exposureTimeOffset?: Maybe<Scalars['jsonb']>
  falseShadows?: Maybe<Scalars['jsonb']>
  highContrastResolution?: Maybe<Scalars['jsonb']>
  id: Scalars['uuid']
  reportId?: Maybe<Scalars['uuid']>
  item?: Maybe<Scalars['String']>
  lightFieldOffset?: Maybe<Scalars['jsonb']>
  lowContrastResolution?: Maybe<Scalars['jsonb']>
  modelNo?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerid?: Maybe<Scalars['Int']>
  pipeVoltage?: Maybe<PipeVoltage>
  place?: Maybe<Scalars['String']>
  radiationOutput?: Maybe<RadiationOutput>
  rangingError?: Maybe<Scalars['jsonb']>
  requester?: Maybe<Scalars['String']>
  responseUniformity?: Maybe<Scalars['jsonb']>
  sampleNo?: Maybe<Scalars['String']>
  stp?: Maybe<Scalars['jsonb']>
  updateTime: Scalars['timestamp']
  usefulHarnessVerticalityOffset?: Maybe<Scalars['jsonb']>
  vendor?: Maybe<Scalars['String']>
  reportNo?: Maybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceAecc2CConsistencyArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceAecRepeatabilityArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceAecResponseArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceUsefulHarnessHalfValueArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceDdiArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceExposureTimeOffsetArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceFalseShadowsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceHighContrastResolutionArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceLightFieldOffsetArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceLowContrastResolutionArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DevicePipeVoltageArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceRadiationOutputArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceRangingErrorArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceResponseUniformityArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceStpArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "device" */
export type DeviceUsefulHarnessVerticalityOffsetArgs = {
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
export type DeviceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DeviceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type DeviceAppendInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>
  AECRepeatability?: InputMaybe<Scalars['jsonb']>
  AECResponse?: InputMaybe<Scalars['jsonb']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>
  falseShadows?: InputMaybe<Scalars['jsonb']>
  highContrastResolution?: InputMaybe<Scalars['jsonb']>
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>
  pipeVoltage?: InputMaybe<PipeVoltage>
  radiationOutput?: InputMaybe<RadiationOutput>
  rangingError?: InputMaybe<Scalars['jsonb']>
  responseUniformity?: InputMaybe<Scalars['jsonb']>
  stp?: InputMaybe<Scalars['jsonb']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>
}

/** aggregate avg on columns */
export interface DeviceAvgFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type DeviceBoolExp = {
  AECC2CConsistency?: InputMaybe<JsonbComparisonExp>
  AECRepeatability?: InputMaybe<JsonbComparisonExp>
  AECResponse?: InputMaybe<JsonbComparisonExp>
  UsefulHarnessHalfValue?: InputMaybe<JsonbComparisonExp>
  _and?: InputMaybe<Array<DeviceBoolExp>>
  _not?: InputMaybe<DeviceBoolExp>
  _or?: InputMaybe<Array<DeviceBoolExp>>
  accordingTo?: InputMaybe<StringComparisonExp>
  address?: InputMaybe<StringComparisonExp>
  checkDate?: InputMaybe<TimestampComparisonExp>
  createTime?: InputMaybe<TimestampComparisonExp>
  ddi?: InputMaybe<JsonComparisonExp>
  deviceNo?: InputMaybe<StringComparisonExp>
  equipment?: InputMaybe<StringComparisonExp>
  exposureTimeOffset?: InputMaybe<JsonbComparisonExp>
  falseShadows?: InputMaybe<JsonbComparisonExp>
  highContrastResolution?: InputMaybe<JsonbComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  item?: InputMaybe<StringComparisonExp>
  lightFieldOffset?: InputMaybe<JsonbComparisonExp>
  lowContrastResolution?: InputMaybe<JsonbComparisonExp>
  modelNo?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  ownerid?: InputMaybe<IntComparisonExp>
  pipeVoltage?: InputMaybe<JsonbComparisonExp>
  place?: InputMaybe<StringComparisonExp>
  radiationOutput?: InputMaybe<JsonbComparisonExp>
  rangingError?: InputMaybe<JsonbComparisonExp>
  requester?: InputMaybe<StringComparisonExp>
  responseUniformity?: InputMaybe<JsonbComparisonExp>
  sampleNo?: InputMaybe<StringComparisonExp>
  stp?: InputMaybe<JsonbComparisonExp>
  updateTime?: InputMaybe<TimestampComparisonExp>
  usefulHarnessVerticalityOffset?: InputMaybe<JsonbComparisonExp>
  vendor?: InputMaybe<StringComparisonExp>
  reportNo?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "device" */
export enum DeviceConstraint {
  /** unique or primary key constraint */
  DEVICE_PKEY = 'device_pkey',
  /** unique or primary key constraint */
  DEVICE_REQUESTER_ADDRESS_NAME_MODELNO_DEVICENO_KEY = 'device_requester_address_name_modelNo_deviceNo_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DeviceDeleteAtPathInput = {
  AECC2CConsistency?: InputMaybe<Array<Scalars['String']>>
  AECRepeatability?: InputMaybe<Array<Scalars['String']>>
  AECResponse?: InputMaybe<Array<Scalars['String']>>
  UsefulHarnessHalfValue?: InputMaybe<Array<Scalars['String']>>
  exposureTimeOffset?: InputMaybe<Array<Scalars['String']>>
  falseShadows?: InputMaybe<Array<Scalars['String']>>
  highContrastResolution?: InputMaybe<Array<Scalars['String']>>
  lightFieldOffset?: InputMaybe<Array<Scalars['String']>>
  lowContrastResolution?: InputMaybe<Array<Scalars['String']>>
  pipeVoltage?: InputMaybe<Array<Scalars['String']>>
  radiationOutput?: InputMaybe<Array<Scalars['String']>>
  rangingError?: InputMaybe<Array<Scalars['String']>>
  responseUniformity?: InputMaybe<Array<Scalars['String']>>
  stp?: InputMaybe<Array<Scalars['String']>>
  usefulHarnessVerticalityOffset?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DeviceDeleteElemInput = {
  AECC2CConsistency?: InputMaybe<Scalars['Int']>
  AECRepeatability?: InputMaybe<Scalars['Int']>
  AECResponse?: InputMaybe<Scalars['Int']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['Int']>
  exposureTimeOffset?: InputMaybe<Scalars['Int']>
  falseShadows?: InputMaybe<Scalars['Int']>
  highContrastResolution?: InputMaybe<Scalars['Int']>
  lightFieldOffset?: InputMaybe<Scalars['Int']>
  lowContrastResolution?: InputMaybe<Scalars['Int']>
  pipeVoltage?: InputMaybe<Scalars['Int']>
  radiationOutput?: InputMaybe<Scalars['Int']>
  rangingError?: InputMaybe<Scalars['Int']>
  responseUniformity?: InputMaybe<Scalars['Int']>
  stp?: InputMaybe<Scalars['Int']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DeviceDeleteKeyInput = {
  AECC2CConsistency?: InputMaybe<Scalars['String']>
  AECRepeatability?: InputMaybe<Scalars['String']>
  AECResponse?: InputMaybe<Scalars['String']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['String']>
  exposureTimeOffset?: InputMaybe<Scalars['String']>
  falseShadows?: InputMaybe<Scalars['String']>
  highContrastResolution?: InputMaybe<Scalars['String']>
  lightFieldOffset?: InputMaybe<Scalars['String']>
  lowContrastResolution?: InputMaybe<Scalars['String']>
  pipeVoltage?: InputMaybe<Scalars['String']>
  radiationOutput?: InputMaybe<Scalars['String']>
  rangingError?: InputMaybe<Scalars['String']>
  responseUniformity?: InputMaybe<Scalars['String']>
  stp?: InputMaybe<Scalars['String']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "device" */
export type DeviceIncInput = {
  ownerid?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "device" */
export type DeviceInsertInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>
  AECRepeatability?: InputMaybe<Scalars['jsonb']>
  AECResponse?: InputMaybe<Scalars['jsonb']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>
  accordingTo?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  checkDate?: InputMaybe<Scalars['timestamp']>
  createTime?: InputMaybe<Scalars['timestamp']>
  ddi?: InputMaybe<Scalars['json']>
  deviceNo?: InputMaybe<Scalars['String']>
  equipment?: InputMaybe<Scalars['String']>
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>
  falseShadows?: InputMaybe<Scalars['jsonb']>
  highContrastResolution?: InputMaybe<Scalars['jsonb']>
  id?: InputMaybe<Scalars['uuid']>
  item?: InputMaybe<Scalars['String']>
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>
  modelNo?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  ownerid?: InputMaybe<Scalars['Int']>
  pipeVoltage?: InputMaybe<PipeVoltage>
  place?: InputMaybe<Scalars['String']>
  radiationOutput?: InputMaybe<RadiationOutput>
  rangingError?: InputMaybe<Scalars['jsonb']>
  requester?: InputMaybe<Scalars['String']>
  responseUniformity?: InputMaybe<Scalars['jsonb']>
  sampleNo?: InputMaybe<Scalars['String']>
  stp?: InputMaybe<Scalars['jsonb']>
  updateTime?: InputMaybe<Scalars['timestamp']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>
  vendor?: InputMaybe<Scalars['String']>
  reportNo?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface DeviceMaxFields {
  accordingTo?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  checkDate?: Maybe<Scalars['timestamp']>
  createTime?: Maybe<Scalars['timestamp']>
  deviceNo?: Maybe<Scalars['String']>
  equipment?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  item?: Maybe<Scalars['String']>
  modelNo?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerid?: Maybe<Scalars['Int']>
  place?: Maybe<Scalars['String']>
  requester?: Maybe<Scalars['String']>
  sampleNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
  vendor?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface DeviceMinFields {
  accordingTo?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  checkDate?: Maybe<Scalars['timestamp']>
  createTime?: Maybe<Scalars['timestamp']>
  deviceNo?: Maybe<Scalars['String']>
  equipment?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  item?: Maybe<Scalars['String']>
  modelNo?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerid?: Maybe<Scalars['Int']>
  place?: Maybe<Scalars['String']>
  requester?: Maybe<Scalars['String']>
  sampleNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
  vendor?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "device" */
export interface DeviceMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Device>
}

/** on_conflict condition type for table "device" */
export type DeviceOnConflict = {
  constraint: DeviceConstraint
  update_columns?: Array<DeviceUpdateColumn>
  where?: InputMaybe<DeviceBoolExp>
}

/** Ordering options when selecting data from "device". */
export type DeviceOrderBy = {
  AECC2CConsistency?: InputMaybe<OrderBy>
  AECRepeatability?: InputMaybe<OrderBy>
  AECResponse?: InputMaybe<OrderBy>
  UsefulHarnessHalfValue?: InputMaybe<OrderBy>
  accordingTo?: InputMaybe<OrderBy>
  address?: InputMaybe<OrderBy>
  checkDate?: InputMaybe<OrderBy>
  createTime?: InputMaybe<OrderBy>
  ddi?: InputMaybe<OrderBy>
  deviceNo?: InputMaybe<OrderBy>
  equipment?: InputMaybe<OrderBy>
  exposureTimeOffset?: InputMaybe<OrderBy>
  falseShadows?: InputMaybe<OrderBy>
  highContrastResolution?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  item?: InputMaybe<OrderBy>
  lightFieldOffset?: InputMaybe<OrderBy>
  lowContrastResolution?: InputMaybe<OrderBy>
  modelNo?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ownerid?: InputMaybe<OrderBy>
  pipeVoltage?: InputMaybe<OrderBy>
  place?: InputMaybe<OrderBy>
  radiationOutput?: InputMaybe<OrderBy>
  rangingError?: InputMaybe<OrderBy>
  requester?: InputMaybe<OrderBy>
  responseUniformity?: InputMaybe<OrderBy>
  sampleNo?: InputMaybe<OrderBy>
  stp?: InputMaybe<OrderBy>
  updateTime?: InputMaybe<OrderBy>
  usefulHarnessVerticalityOffset?: InputMaybe<OrderBy>
  vendor?: InputMaybe<OrderBy>
  reportNo?: InputMaybe<OrderBy>
}

/** primary key columns input for table: device */
export type DevicePkColumnsInput = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DevicePrependInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>
  AECRepeatability?: InputMaybe<Scalars['jsonb']>
  AECResponse?: InputMaybe<Scalars['jsonb']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>
  falseShadows?: InputMaybe<Scalars['jsonb']>
  highContrastResolution?: InputMaybe<Scalars['jsonb']>
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>
  pipeVoltage?: InputMaybe<PipeVoltage>
  radiationOutput?: InputMaybe<RadiationOutput>
  rangingError?: InputMaybe<Scalars['jsonb']>
  responseUniformity?: InputMaybe<Scalars['jsonb']>
  stp?: InputMaybe<Scalars['jsonb']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "device" */
export enum DeviceSelectColumn {
  /** column name */
  AECC2CCONSISTENCY = 'AECC2CConsistency',
  /** column name */
  AECREPEATABILITY = 'AECRepeatability',
  /** column name */
  AECRESPONSE = 'AECResponse',
  /** column name */
  USEFULHARNESSHALFVALUE = 'UsefulHarnessHalfValue',
  /** column name */
  ACCORDINGTO = 'accordingTo',
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CHECKDATE = 'checkDate',
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  DDI = 'ddi',
  /** column name */
  DEVICENO = 'deviceNo',
  /** column name */
  EQUIPMENT = 'equipment',
  /** column name */
  EXPOSURETIMEOFFSET = 'exposureTimeOffset',
  /** column name */
  FALSESHADOWS = 'falseShadows',
  /** column name */
  HIGHCONTRASTRESOLUTION = 'highContrastResolution',
  /** column name */
  ID = 'id',
  /** column name */
  ITEM = 'item',
  /** column name */
  LIGHTFIELDOFFSET = 'lightFieldOffset',
  /** column name */
  LOWCONTRASTRESOLUTION = 'lowContrastResolution',
  /** column name */
  MODELNO = 'modelNo',
  /** column name */
  NAME = 'name',
  /** column name */
  OWNERID = 'ownerid',
  /** column name */
  PIPEVOLTAGE = 'pipeVoltage',
  /** column name */
  PLACE = 'place',
  /** column name */
  RADIATIONOUTPUT = 'radiationOutput',
  /** column name */
  RANGINGERROR = 'rangingError',
  /** column name */
  REQUESTER = 'requester',
  /** column name */
  RESPONSEUNIFORMITY = 'responseUniformity',
  /** column name */
  SAMPLENO = 'sampleNo',
  /** column name */
  STP = 'stp',
  /** column name */
  UPDATETIME = 'updateTime',
  /** column name */
  USEFULHARNESSVERTICALITYOFFSET = 'usefulHarnessVerticalityOffset',
  /** column name */
  VENDOR = 'vendor',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  REPORTID = 'reportId',
}

/** input type for updating data in table "device" */
export type DeviceSetInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>
  AECRepeatability?: InputMaybe<Scalars['jsonb']>
  AECResponse?: InputMaybe<Scalars['jsonb']>
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>
  accordingTo?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  checkDate?: InputMaybe<Scalars['timestamp']>
  createTime?: InputMaybe<Scalars['timestamp']>
  ddi?: InputMaybe<Scalars['json']>
  deviceNo?: InputMaybe<Scalars['String']>
  equipment?: InputMaybe<Scalars['String']>
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>
  falseShadows?: InputMaybe<Scalars['jsonb']>
  highContrastResolution?: InputMaybe<Scalars['jsonb']>
  id?: InputMaybe<Scalars['uuid']>
  reportId?: InputMaybe<Scalars['uuid']>
  item?: InputMaybe<Scalars['String']>
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>
  modelNo?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  ownerid?: InputMaybe<Scalars['Int']>
  pipeVoltage?: InputMaybe<PipeVoltage>
  place?: InputMaybe<Scalars['String']>
  radiationOutput?: InputMaybe<RadiationOutput>
  rangingError?: InputMaybe<Scalars['jsonb']>
  requester?: InputMaybe<Scalars['String']>
  responseUniformity?: InputMaybe<Scalars['jsonb']>
  sampleNo?: InputMaybe<Scalars['String']>
  stp?: InputMaybe<Scalars['jsonb']>
  updateTime?: InputMaybe<Scalars['timestamp']>
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>
  vendor?: InputMaybe<Scalars['String']>
  reportNo?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface DeviceStddevFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface DeviceStddevPopFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface DeviceStddevSampFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export interface DeviceSumFields {
  ownerid?: Maybe<Scalars['Int']>
}

/** update columns of table "device" */
export enum DeviceUpdateColumn {
  /** column name */
  AECC2CCONSISTENCY = 'AECC2CConsistency',
  /** column name */
  AECREPEATABILITY = 'AECRepeatability',
  /** column name */
  AECRESPONSE = 'AECResponse',
  /** column name */
  USEFULHARNESSHALFVALUE = 'UsefulHarnessHalfValue',
  /** column name */
  ACCORDINGTO = 'accordingTo',
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CHECKDATE = 'checkDate',
  /** column name */
  CREATETIME = 'createTime',
  /** column name */
  DDI = 'ddi',
  /** column name */
  DEVICENO = 'deviceNo',
  /** column name */
  EQUIPMENT = 'equipment',
  /** column name */
  EXPOSURETIMEOFFSET = 'exposureTimeOffset',
  /** column name */
  FALSESHADOWS = 'falseShadows',
  /** column name */
  HIGHCONTRASTRESOLUTION = 'highContrastResolution',
  /** column name */
  ID = 'id',
  /** column name */
  ITEM = 'item',
  /** column name */
  LIGHTFIELDOFFSET = 'lightFieldOffset',
  /** column name */
  LOWCONTRASTRESOLUTION = 'lowContrastResolution',
  /** column name */
  MODELNO = 'modelNo',
  /** column name */
  NAME = 'name',
  /** column name */
  OWNERID = 'ownerid',
  /** column name */
  PIPEVOLTAGE = 'pipeVoltage',
  /** column name */
  PLACE = 'place',
  /** column name */
  RADIATIONOUTPUT = 'radiationOutput',
  /** column name */
  RANGINGERROR = 'rangingError',
  /** column name */
  REQUESTER = 'requester',
  /** column name */
  RESPONSEUNIFORMITY = 'responseUniformity',
  /** column name */
  SAMPLENO = 'sampleNo',
  /** column name */
  STP = 'stp',
  /** column name */
  UPDATETIME = 'updateTime',
  /** column name */
  USEFULHARNESSVERTICALITYOFFSET = 'usefulHarnessVerticalityOffset',
  /** column name */
  VENDOR = 'vendor',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  REPORTID = 'reportId',
}

/** aggregate var_pop on columns */
export interface DeviceVarPopFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface DeviceVarSampFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface DeviceVarianceFields {
  ownerid?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
  _eq?: InputMaybe<Scalars['json']>
  _gt?: InputMaybe<Scalars['json']>
  _gte?: InputMaybe<Scalars['json']>
  _in?: InputMaybe<Array<Scalars['json']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['json']>
  _lte?: InputMaybe<Scalars['json']>
  _neq?: InputMaybe<Scalars['json']>
  _nin?: InputMaybe<Array<Scalars['json']>>
}

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
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

/** mutation root */
export interface MutationRoot {
  /** delete data from the table: "device" */
  delete_device?: Maybe<DeviceMutationResponse>
  /** delete single row from the table: "device" */
  delete_device_by_pk?: Maybe<Device>
  /** delete data from the table: "report" */
  delete_report?: Maybe<ReportMutationResponse>
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>
  /** delete data from the table: "test_item" */
  delete_test_item?: Maybe<TestItemMutationResponse>
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>
  /** insert data into the table: "device" */
  insert_device?: Maybe<DeviceMutationResponse>
  /** insert a single row into the table: "device" */
  insert_device_one?: Maybe<Device>
  /** insert data into the table: "report" */
  insert_report?: Maybe<ReportMutationResponse>
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>
  /** insert data into the table: "test_item" */
  insert_test_item?: Maybe<TestItemMutationResponse>
  /** insert a single row into the table: "test_item" */
  insert_test_item_one?: Maybe<TestItem>
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>
  /** update data of the table: "device" */
  update_device?: Maybe<DeviceMutationResponse>
  /** update single row of the table: "device" */
  update_device_by_pk?: Maybe<Device>
  /** update data of the table: "report" */
  update_report?: Maybe<ReportMutationResponse>
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>
  /** update data of the table: "test_item" */
  update_test_item?: Maybe<TestItemMutationResponse>
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
}

/** mutation root */
export type MutationRootDeleteDeviceArgs = {
  where: DeviceBoolExp
}

/** mutation root */
export type MutationRootDeleteDeviceByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type MutationRootDeleteReportArgs = {
  where: ReportBoolExp
}

/** mutation root */
export type MutationRootDeleteReportByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type MutationRootDeleteTestItemArgs = {
  where: TestItemBoolExp
}

/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp
}

/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type MutationRootInsertDeviceArgs = {
  objects: Array<DeviceInsertInput>
  on_conflict?: InputMaybe<DeviceOnConflict>
}

/** mutation root */
export type MutationRootInsertDeviceOneArgs = {
  object: DeviceInsertInput
  on_conflict?: InputMaybe<DeviceOnConflict>
}

/** mutation root */
export type MutationRootInsertReportArgs = {
  objects: Array<ReportInsertInput>
  on_conflict?: InputMaybe<ReportOnConflict>
}

/** mutation root */
export type MutationRootInsertReportOneArgs = {
  object: ReportInsertInput
  on_conflict?: InputMaybe<ReportOnConflict>
}

/** mutation root */
export type MutationRootInsertTestItemArgs = {
  objects: Array<TestItemInsertInput>
}

/** mutation root */
export type MutationRootInsertTestItemOneArgs = {
  object: TestItemInsertInput
}

/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>
  on_conflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput
  on_conflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type MutationRootUpdateDeviceArgs = {
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
export type MutationRootUpdateDeviceByPkArgs = {
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
export type MutationRootUpdateReportArgs = {
  _append?: InputMaybe<ReportAppendInput>
  _delete_at_path?: InputMaybe<ReportDeleteAtPathInput>
  _delete_elem?: InputMaybe<ReportDeleteElemInput>
  _delete_key?: InputMaybe<ReportDeleteKeyInput>
  _prepend?: InputMaybe<ReportPrependInput>
  _set?: InputMaybe<ReportSetInput>
  where: ReportBoolExp
}

/** mutation root */
export type MutationRootUpdateReportByPkArgs = {
  _append?: InputMaybe<ReportAppendInput>
  _delete_at_path?: InputMaybe<ReportDeleteAtPathInput>
  _delete_elem?: InputMaybe<ReportDeleteElemInput>
  _delete_key?: InputMaybe<ReportDeleteKeyInput>
  _prepend?: InputMaybe<ReportPrependInput>
  _set?: InputMaybe<ReportSetInput>
  pk_columns: ReportPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateTestItemArgs = {
  _set?: InputMaybe<TestItemSetInput>
  where: TestItemBoolExp
}

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  pk_columns: UserPkColumnsInput
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
  /** fetch data from the table: "device" */
  device: Array<Device>
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>
  /** fetch data from the table: "report" */
  report: Array<Report>
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: ReportAggregate
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>
  /** fetch data from the table: "test_item" */
  test_item: Array<TestItem>
  /** fetch aggregated fields from the table: "test_item" */
  test_item_aggregate: TestItemAggregate
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

export type QueryRootDeviceArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export type QueryRootDeviceAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export type QueryRootDeviceByPkArgs = {
  id: Scalars['uuid']
}

export type QueryRootReportArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportOrderBy>>
  where?: InputMaybe<ReportBoolExp>
}

export type QueryRootReportAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportOrderBy>>
  where?: InputMaybe<ReportBoolExp>
}

export type QueryRootReportByPkArgs = {
  id: Scalars['uuid']
}

export type QueryRootTestItemArgs = {
  distinct_on?: InputMaybe<Array<TestItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TestItemOrderBy>>
  where?: InputMaybe<TestItemBoolExp>
}

export type QueryRootTestItemAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TestItemOrderBy>>
  where?: InputMaybe<TestItemBoolExp>
}

export type QueryRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type QueryRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type QueryRootUserByPkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "report" */
export interface Report {
  createTime: Scalars['timestamp']
  file?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  params: Scalars['jsonb']
  reportNo?: Maybe<Scalars['String']>
  updateTime: Scalars['timestamp']
}

/** columns and relationships of "report" */
export type ReportParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "report" */
export interface ReportAggregate {
  aggregate?: Maybe<ReportAggregateFields>
  nodes: Array<Report>
}

/** aggregate fields of "report" */
export interface ReportAggregateFields {
  count: Scalars['Int']
  max?: Maybe<ReportMaxFields>
  min?: Maybe<ReportMinFields>
}

/** aggregate fields of "report" */
export type ReportAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ReportSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type ReportAppendInput = {
  params?: InputMaybe<Scalars['jsonb']>
}

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type ReportBoolExp = {
  _and?: InputMaybe<Array<ReportBoolExp>>
  _not?: InputMaybe<ReportBoolExp>
  _or?: InputMaybe<Array<ReportBoolExp>>
  createTime?: InputMaybe<TimestampComparisonExp>
  file?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  params?: InputMaybe<JsonbComparisonExp>
  reportNo?: InputMaybe<StringComparisonExp>
  updateTime?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "report" */
export enum ReportConstraint {
  /** unique or primary key constraint */
  REPORT_NO_UINDEX = 'report_no_uindex',
  /** unique or primary key constraint */
  REPORT_PKEY = 'report_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ReportDeleteAtPathInput = {
  params?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ReportDeleteElemInput = {
  params?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ReportDeleteKeyInput = {
  params?: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "report" */
export type ReportInsertInput = {
  createTime?: InputMaybe<Scalars['timestamp']>
  file?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  params?: InputMaybe<Scalars['jsonb']>
  reportNo?: InputMaybe<Scalars['String']>
  updateTime?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export interface ReportMaxFields {
  createTime?: Maybe<Scalars['timestamp']>
  file?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  reportNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export interface ReportMinFields {
  createTime?: Maybe<Scalars['timestamp']>
  file?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  reportNo?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "report" */
export interface ReportMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Report>
}

/** on_conflict condition type for table "report" */
export type ReportOnConflict = {
  constraint: ReportConstraint
  update_columns?: Array<ReportUpdateColumn>
  where?: InputMaybe<ReportBoolExp>
}

/** Ordering options when selecting data from "report". */
export type ReportOrderBy = {
  createTime?: InputMaybe<OrderBy>
  file?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  params?: InputMaybe<OrderBy>
  reportNo?: InputMaybe<OrderBy>
  updateTime?: InputMaybe<OrderBy>
}

/** primary key columns input for table: report */
export type ReportPkColumnsInput = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ReportPrependInput = {
  params?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "report" */
export enum ReportSelectColumn {
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

/** input type for updating data in table "report" */
export type ReportSetInput = {
  createTime?: InputMaybe<Scalars['timestamp']>
  file?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  params?: InputMaybe<Scalars['jsonb']>
  reportNo?: InputMaybe<Scalars['String']>
  updateTime?: InputMaybe<Scalars['timestamp']>
}

/** update columns of table "report" */
export enum ReportUpdateColumn {
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
export type RoleComparisonExp = {
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
  /** fetch data from the table: "device" */
  device: Array<Device>
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>
  /** fetch data from the table: "report" */
  report: Array<Report>
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: ReportAggregate
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>
  /** fetch data from the table: "test_item" */
  test_item: Array<TestItem>
  /** fetch aggregated fields from the table: "test_item" */
  test_item_aggregate: TestItemAggregate
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

export type SubscriptionRootDeviceArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export type SubscriptionRootDeviceAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DeviceOrderBy>>
  where?: InputMaybe<DeviceBoolExp>
}

export type SubscriptionRootDeviceByPkArgs = {
  id: Scalars['uuid']
}

export type SubscriptionRootReportArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportOrderBy>>
  where?: InputMaybe<ReportBoolExp>
}

export type SubscriptionRootReportAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ReportOrderBy>>
  where?: InputMaybe<ReportBoolExp>
}

export type SubscriptionRootReportByPkArgs = {
  id: Scalars['uuid']
}

export type SubscriptionRootTestItemArgs = {
  distinct_on?: InputMaybe<Array<TestItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TestItemOrderBy>>
  where?: InputMaybe<TestItemBoolExp>
}

export type SubscriptionRootTestItemAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestItemSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TestItemOrderBy>>
  where?: InputMaybe<TestItemBoolExp>
}

export type SubscriptionRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type SubscriptionRootUserByPkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "test_item" */
export interface TestItem {
  conditionDefaultValue?: Maybe<Scalars['String']>
  conditionFactor?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  requireAcceptance?: Maybe<Scalars['String']>
  requireState?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['String']>
}

/** aggregated selection of "test_item" */
export interface TestItemAggregate {
  aggregate?: Maybe<TestItemAggregateFields>
  nodes: Array<TestItem>
}

/** aggregate fields of "test_item" */
export interface TestItemAggregateFields {
  count: Scalars['Int']
  max?: Maybe<TestItemMaxFields>
  min?: Maybe<TestItemMinFields>
}

/** aggregate fields of "test_item" */
export type TestItemAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TestItemSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "test_item". All fields are combined with a logical 'AND'. */
export type TestItemBoolExp = {
  _and?: InputMaybe<Array<TestItemBoolExp>>
  _not?: InputMaybe<TestItemBoolExp>
  _or?: InputMaybe<Array<TestItemBoolExp>>
  conditionDefaultValue?: InputMaybe<StringComparisonExp>
  conditionFactor?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  requireAcceptance?: InputMaybe<StringComparisonExp>
  requireState?: InputMaybe<StringComparisonExp>
  result?: InputMaybe<StringComparisonExp>
}

/** input type for inserting data into table "test_item" */
export type TestItemInsertInput = {
  conditionDefaultValue?: InputMaybe<Scalars['String']>
  conditionFactor?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  requireAcceptance?: InputMaybe<Scalars['String']>
  requireState?: InputMaybe<Scalars['String']>
  result?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface TestItemMaxFields {
  conditionDefaultValue?: Maybe<Scalars['String']>
  conditionFactor?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  requireAcceptance?: Maybe<Scalars['String']>
  requireState?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface TestItemMinFields {
  conditionDefaultValue?: Maybe<Scalars['String']>
  conditionFactor?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  requireAcceptance?: Maybe<Scalars['String']>
  requireState?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "test_item" */
export interface TestItemMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<TestItem>
}

/** Ordering options when selecting data from "test_item". */
export type TestItemOrderBy = {
  conditionDefaultValue?: InputMaybe<OrderBy>
  conditionFactor?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  requireAcceptance?: InputMaybe<OrderBy>
  requireState?: InputMaybe<OrderBy>
  result?: InputMaybe<OrderBy>
}

/** select columns of table "test_item" */
export enum TestItemSelectColumn {
  /** column name */
  CONDITIONDEFAULTVALUE = 'conditionDefaultValue',
  /** column name */
  CONDITIONFACTOR = 'conditionFactor',
  /** column name */
  NAME = 'name',
  /** column name */
  REQUIREACCEPTANCE = 'requireAcceptance',
  /** column name */
  REQUIRESTATE = 'requireState',
  /** column name */
  RESULT = 'result',
}

/** input type for updating data in table "test_item" */
export type TestItemSetInput = {
  conditionDefaultValue?: InputMaybe<Scalars['String']>
  conditionFactor?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  requireAcceptance?: InputMaybe<Scalars['String']>
  requireState?: InputMaybe<Scalars['String']>
  result?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
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

/** columns and relationships of "user" */
export interface User {
  avatar?: Maybe<Scalars['String']>
  displayname?: Maybe<Scalars['String']>
  id: Scalars['Int']
  password: Scalars['String']
  role: Scalars['role']
  username: Scalars['String']
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
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface UserAvgFields {
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<Array<UserBoolExp>>
  avatar?: InputMaybe<StringComparisonExp>
  displayname?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
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
export type UserIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  avatar?: InputMaybe<Scalars['String']>
  displayname?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
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

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint
  update_columns?: Array<UserUpdateColumn>
  where?: InputMaybe<UserBoolExp>
}

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  avatar?: InputMaybe<OrderBy>
  displayname?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  password?: InputMaybe<OrderBy>
  role?: InputMaybe<OrderBy>
  username?: InputMaybe<OrderBy>
}

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
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
export type UserSetInput = {
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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
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
    devices: 'devices',
    deviceById: 'deviceById',
  },
  Mutation: {
    insertDevice: 'insertDevice',
    updateDevice: 'updateDevice',
  },
  Fragment: {
    headerDeviceFields: 'headerDeviceFields',
    appendDeviceFields: 'appendDeviceFields',
  },
}
export type HeaderDeviceFieldsFragment = {
  id: Maybe<Scalars['uuid']>
  reportId?: Maybe<Scalars['uuid']>
  accordingTo?: Maybe<string>
  address?: Maybe<string>
  createTime: unknown
  deviceNo?: Maybe<string>
  equipment?: Maybe<string>
  item?: Maybe<string>
  modelNo?: Maybe<string>
  name?: Maybe<string>
  place?: Maybe<string>
  requester?: Maybe<string>
  sampleNo?: Maybe<string>
  updateTime: unknown
  vendor?: Maybe<string>
}

export type AppendDeviceFieldsFragment = {
  AECC2CConsistency?: unknown | null
  AECRepeatability?: unknown | null
  AECResponse?: unknown | null
  exposureTimeOffset?: unknown | null
  UsefulHarnessHalfValue?: unknown | null
  falseShadows?: unknown | null
  highContrastResolution?: unknown | null
  lightFieldOffset?: unknown | null
  lowContrastResolution?: unknown | null
  pipeVoltage?: PipeVoltage | null
  radiationOutput?: RadiationOutput | null
  rangingError?: unknown | null
  responseUniformity?: unknown | null
  stp?: unknown | null
  usefulHarnessVerticalityOffset?: unknown | null
}

export type DevicesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}>

export type DevicesQuery = {
  device: Array<{
    id: Scalars['ID']
    reportId: Scalars['ID']
    reportNo: string | null
    accordingTo?: string | null
    address?: string | null
    createTime: unknown
    deviceNo?: string | null
    equipment?: string | null
    item?: string | null
    modelNo?: string | null
    name?: string | null
    place?: string | null
    requester?: string | null
    sampleNo?: string | null
    updateTime: unknown
    vendor?: string | null
  }>
}

export type DeviceByIdQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type DeviceByIdQuery = {
  device_by_pk?: {
    id: unknown
    reportId: Scalars['ID']
    reportNo: string | null
    accordingTo?: string | null
    address?: string | null
    createTime: unknown
    deviceNo?: string | null
    equipment?: string | null
    item?: string | null
    modelNo?: string | null
    name?: string | null
    place?: string | null
    requester?: string | null
    sampleNo?: string | null
    updateTime: unknown
    vendor?: string | null
    AECC2CConsistency?: unknown | null
    AECRepeatability?: unknown | null
    AECResponse?: unknown | null
    exposureTimeOffset?: unknown | null
    UsefulHarnessHalfValue?: unknown | null
    falseShadows?: unknown | null
    highContrastResolution?: unknown | null
    lightFieldOffset?: unknown | null
    lowContrastResolution?: unknown | null
    pipeVoltage?: PipeVoltage | null
    radiationOutput?: RadiationOutput | null
    rangingError?: unknown | null
    responseUniformity?: unknown | null
    stp?: unknown | null
    usefulHarnessVerticalityOffset?: unknown | null
  } | null
}

export type InsertDeviceMutationVariables = Exact<{
  input: DeviceInsertInput
}>

export type InsertDeviceMutation = {
  insert_device_one?: {
    id: unknown
    reportId: Scalars['uuid']
    reportNo: string | null
    accordingTo?: string | null
    address?: string | null
    createTime: unknown
    deviceNo?: string | null
    equipment?: string | null
    item?: string | null
    modelNo?: string | null
    name?: string | null
    place?: string | null
    requester?: string | null
    sampleNo?: string | null
    updateTime: unknown
    vendor?: string | null
    AECC2CConsistency?: unknown | null
    AECRepeatability?: unknown | null
    AECResponse?: unknown | null
    exposureTimeOffset?: unknown | null
    UsefulHarnessHalfValue?: unknown | null
    falseShadows?: unknown | null
    highContrastResolution?: unknown | null
    lightFieldOffset?: unknown | null
    lowContrastResolution?: unknown | null
    pipeVoltage?: PipeVoltage | null
    radiationOutput?: RadiationOutput | null
    rangingError?: unknown | null
    responseUniformity?: unknown | null
    stp?: unknown | null
    usefulHarnessVerticalityOffset?: unknown | null
  } | null
}

export type UpdateDeviceMutationVariables = Exact<{
  id: Scalars['ID']
  input?: InputMaybe<DeviceSetInput>
}>

export type UpdateDeviceMutation = {
  update_device_by_pk?: {
    id: Scalars['ID']
    reportId: Scalars['ID']
    reportNo: string | null
    accordingTo?: string | null
    address?: string | null
    createTime: unknown
    deviceNo?: string | null
    equipment?: string | null
    item?: string | null
    modelNo?: string | null
    name?: string | null
    place?: string | null
    requester?: string | null
    sampleNo?: string | null
    updateTime: unknown
    vendor?: string | null
    AECC2CConsistency?: unknown | null
    AECRepeatability?: unknown | null
    AECResponse?: unknown | null
    exposureTimeOffset?: unknown | null
    UsefulHarnessHalfValue?: unknown | null
    falseShadows?: unknown | null
    highContrastResolution?: unknown | null
    lightFieldOffset?: unknown | null
    lowContrastResolution?: unknown | null
    pipeVoltage?: PipeVoltage | null
    radiationOutput?: RadiationOutput | null
    rangingError?: unknown | null
    responseUniformity?: unknown | null
    stp?: unknown | null
    usefulHarnessVerticalityOffset?: unknown | null
  } | null
}

export const HeaderDeviceFieldsFragmentDoc = gql`
  fragment headerDeviceFields on device {
    id
    reportId
    reportNo
    accordingTo
    address
    createTime
    deviceNo
    equipment
    item
    modelNo
    name
    place
    requester
    sampleNo
    updateTime
    vendor
  }
`
export const AppendDeviceFieldsFragmentDoc = gql`
  fragment appendDeviceFields on device {
    AECC2CConsistency
    AECRepeatability
    AECResponse
    exposureTimeOffset
    UsefulHarnessHalfValue
    falseShadows
    highContrastResolution
    lightFieldOffset
    lowContrastResolution
    pipeVoltage
    radiationOutput
    rangingError
    responseUniformity
    stp
    usefulHarnessVerticalityOffset
  }
`
export const DevicesDocument = gql`
  query devices($offset: Int, $limit: Int = 10) {
    device(offset: $offset) {
      ...headerDeviceFields
    }
  }
  ${HeaderDeviceFieldsFragmentDoc}
`

/**
 * __useDevicesQuery__
 *
 * To run a query within a React component, call `useDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useDevicesQuery(
  baseOptions?: Apollo.QueryHookOptions<DevicesQuery, DevicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DevicesQuery, DevicesQueryVariables>(
    DevicesDocument,
    options
  )
}
export function useDevicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DevicesQuery, DevicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DevicesQuery, DevicesQueryVariables>(
    DevicesDocument,
    options
  )
}
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>
export type DevicesQueryResult = Apollo.QueryResult<
  DevicesQuery,
  DevicesQueryVariables
>
export const DeviceByIdDocument = gql`
  query deviceById($id: uuid!) {
    device_by_pk(id: $id) {
      ...headerDeviceFields
      ...appendDeviceFields
    }
  }
  ${HeaderDeviceFieldsFragmentDoc}
  ${AppendDeviceFieldsFragmentDoc}
`

/**
 * __useDeviceByIdQuery__
 *
 * To run a query within a React component, call `useDeviceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeviceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeviceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeviceByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    DeviceByIdQuery,
    DeviceByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DeviceByIdQuery, DeviceByIdQueryVariables>(
    DeviceByIdDocument,
    options
  )
}
export function useDeviceByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DeviceByIdQuery,
    DeviceByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DeviceByIdQuery, DeviceByIdQueryVariables>(
    DeviceByIdDocument,
    options
  )
}
export type DeviceByIdQueryHookResult = ReturnType<typeof useDeviceByIdQuery>
export type DeviceByIdLazyQueryHookResult = ReturnType<
  typeof useDeviceByIdLazyQuery
>
export type DeviceByIdQueryResult = Apollo.QueryResult<
  DeviceByIdQuery,
  DeviceByIdQueryVariables
>
export const InsertDeviceDocument = gql`
  mutation insertDevice($input: device_insert_input!) {
    insert_device_one(object: $input) {
      ...headerDeviceFields
      ...appendDeviceFields
    }
  }
  ${HeaderDeviceFieldsFragmentDoc}
  ${AppendDeviceFieldsFragmentDoc}
`
export type InsertDeviceMutationFn = Apollo.MutationFunction<
  InsertDeviceMutation,
  InsertDeviceMutationVariables
>

/**
 * __useInsertDeviceMutation__
 *
 * To run a mutation, you first call `useInsertDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDeviceMutation, { data, loading, error }] = useInsertDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertDeviceMutation,
    InsertDeviceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertDeviceMutation,
    InsertDeviceMutationVariables
  >(InsertDeviceDocument, options)
}
export type InsertDeviceMutationHookResult = ReturnType<
  typeof useInsertDeviceMutation
>
export type InsertDeviceMutationResult =
  Apollo.MutationResult<InsertDeviceMutation>
export type InsertDeviceMutationOptions = Apollo.BaseMutationOptions<
  InsertDeviceMutation,
  InsertDeviceMutationVariables
>
export const UpdateDeviceDocument = gql`
  mutation updateDevice($id: uuid!, $input: device_set_input) {
    update_device_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...headerDeviceFields
      ...appendDeviceFields
    }
  }
  ${HeaderDeviceFieldsFragmentDoc}
  ${AppendDeviceFieldsFragmentDoc}
`
export type UpdateDeviceMutationFn = Apollo.MutationFunction<
  UpdateDeviceMutation,
  UpdateDeviceMutationVariables
>

/**
 * __useUpdateDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceMutation, { data, loading, error }] = useUpdateDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDeviceMutation,
    UpdateDeviceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateDeviceMutation,
    UpdateDeviceMutationVariables
  >(UpdateDeviceDocument, options)
}
export type UpdateDeviceMutationHookResult = ReturnType<
  typeof useUpdateDeviceMutation
>
export type UpdateDeviceMutationResult =
  Apollo.MutationResult<UpdateDeviceMutation>
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<
  UpdateDeviceMutation,
  UpdateDeviceMutationVariables
>
