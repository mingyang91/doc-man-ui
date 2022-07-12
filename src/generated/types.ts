/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  jsonb: any;
  role: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** 检测报告文件相关 */
export interface InspectionReportInfos {
  __typename?: 'Inspection_report_infos';
  InspectionDate: Scalars['timestamptz'];
  inspectionReportId: Scalars['uuid'];
  reportNo: Scalars['String'];
}

/** aggregated selection of "Inspection_report_infos" */
export interface InspectionReportInfosAggregate {
  __typename?: 'Inspection_report_infos_aggregate';
  aggregate?: Maybe<InspectionReportInfosAggregateFields>;
  nodes: Array<InspectionReportInfos>;
}

/** aggregate fields of "Inspection_report_infos" */
export interface InspectionReportInfosAggregateFields {
  __typename?: 'Inspection_report_infos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<InspectionReportInfosMaxFields>;
  min?: Maybe<InspectionReportInfosMinFields>;
}


/** aggregate fields of "Inspection_report_infos" */
export type InspectionReportInfosAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<InspectionReportInfosSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Inspection_report_infos". All fields are combined with a logical 'AND'. */
export type InspectionReportInfosBoolExp = {
  InspectionDate?: InputMaybe<TimestamptzComparisonExp>;
  _and?: InputMaybe<Array<InspectionReportInfosBoolExp>>;
  _not?: InputMaybe<InspectionReportInfosBoolExp>;
  _or?: InputMaybe<Array<InspectionReportInfosBoolExp>>;
  inspectionReportId?: InputMaybe<UuidComparisonExp>;
  reportNo?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "Inspection_report_infos" */
export enum InspectionReportInfosConstraint {
  /** unique or primary key constraint */
  INSPECTION_REPORT_INFOS_INSPECTIONREPORTID_KEY = 'Inspection_report_infos_inspectionReportId_key',
  /** unique or primary key constraint */
  INSPECTION_REPORT_INFOS_PKEY = 'Inspection_report_infos_pkey',
  /** unique or primary key constraint */
  INSPECTION_REPORT_INFOS_REPORTNO_KEY = 'Inspection_report_infos_reportNo_key'
}

/** input type for inserting data into table "Inspection_report_infos" */
export type InspectionReportInfosInsertInput = {
  InspectionDate?: InputMaybe<Scalars['timestamptz']>;
  inspectionReportId?: InputMaybe<Scalars['uuid']>;
  reportNo?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export interface InspectionReportInfosMaxFields {
  __typename?: 'Inspection_report_infos_max_fields';
  InspectionDate?: Maybe<Scalars['timestamptz']>;
  inspectionReportId?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface InspectionReportInfosMinFields {
  __typename?: 'Inspection_report_infos_min_fields';
  InspectionDate?: Maybe<Scalars['timestamptz']>;
  inspectionReportId?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "Inspection_report_infos" */
export interface InspectionReportInfosMutationResponse {
  __typename?: 'Inspection_report_infos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<InspectionReportInfos>;
}

/** on_conflict condition type for table "Inspection_report_infos" */
export type InspectionReportInfosOnConflict = {
  constraint: InspectionReportInfosConstraint;
  update_columns?: Array<InspectionReportInfosUpdateColumn>;
  where?: InputMaybe<InspectionReportInfosBoolExp>;
};

/** Ordering options when selecting data from "Inspection_report_infos". */
export type InspectionReportInfosOrderBy = {
  InspectionDate?: InputMaybe<OrderBy>;
  inspectionReportId?: InputMaybe<OrderBy>;
  reportNo?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: Inspection_report_infos */
export type InspectionReportInfosPkColumnsInput = {
  inspectionReportId: Scalars['uuid'];
};

/** select columns of table "Inspection_report_infos" */
export enum InspectionReportInfosSelectColumn {
  /** column name */
  INSPECTIONDATE = 'InspectionDate',
  /** column name */
  INSPECTIONREPORTID = 'inspectionReportId',
  /** column name */
  REPORTNO = 'reportNo'
}

/** input type for updating data in table "Inspection_report_infos" */
export type InspectionReportInfosSetInput = {
  InspectionDate?: InputMaybe<Scalars['timestamptz']>;
  inspectionReportId?: InputMaybe<Scalars['uuid']>;
  reportNo?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Inspection_report_infos" */
export enum InspectionReportInfosUpdateColumn {
  /** column name */
  INSPECTIONDATE = 'InspectionDate',
  /** column name */
  INSPECTIONREPORTID = 'inspectionReportId',
  /** column name */
  REPORTNO = 'reportNo'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "_onetoone.owner" */
export interface OnetooneOwner {
  __typename?: '_onetoone_owner';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  passport_info?: Maybe<OnetoonePassportInfo>;
  /** An array relationship */
  passport_infos: Array<OnetoonePassportInfo>;
  /** An aggregate relationship */
  passport_infos_aggregate: OnetoonePassportInfoAggregate;
}


/** columns and relationships of "_onetoone.owner" */
export type OnetooneOwnerPassportInfosArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};


/** columns and relationships of "_onetoone.owner" */
export type OnetooneOwnerPassportInfosAggregateArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};

/** aggregated selection of "_onetoone.owner" */
export interface OnetooneOwnerAggregate {
  __typename?: '_onetoone_owner_aggregate';
  aggregate?: Maybe<OnetooneOwnerAggregateFields>;
  nodes: Array<OnetooneOwner>;
}

/** aggregate fields of "_onetoone.owner" */
export interface OnetooneOwnerAggregateFields {
  __typename?: '_onetoone_owner_aggregate_fields';
  avg?: Maybe<OnetooneOwnerAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OnetooneOwnerMaxFields>;
  min?: Maybe<OnetooneOwnerMinFields>;
  stddev?: Maybe<OnetooneOwnerStddevFields>;
  stddev_pop?: Maybe<OnetooneOwnerStddevPopFields>;
  stddev_samp?: Maybe<OnetooneOwnerStddevSampFields>;
  sum?: Maybe<OnetooneOwnerSumFields>;
  var_pop?: Maybe<OnetooneOwnerVarPopFields>;
  var_samp?: Maybe<OnetooneOwnerVarSampFields>;
  variance?: Maybe<OnetooneOwnerVarianceFields>;
}


/** aggregate fields of "_onetoone.owner" */
export type OnetooneOwnerAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OnetooneOwnerSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export interface OnetooneOwnerAvgFields {
  __typename?: '_onetoone_owner_avg_fields';
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "_onetoone.owner". All fields are combined with a logical 'AND'. */
export type OnetooneOwnerBoolExp = {
  _and?: InputMaybe<Array<OnetooneOwnerBoolExp>>;
  _not?: InputMaybe<OnetooneOwnerBoolExp>;
  _or?: InputMaybe<Array<OnetooneOwnerBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  passport_info?: InputMaybe<OnetoonePassportInfoBoolExp>;
  passport_infos?: InputMaybe<OnetoonePassportInfoBoolExp>;
};

/** unique or primary key constraints on table "_onetoone.owner" */
export enum OnetooneOwnerConstraint {
  /** unique or primary key constraint */
  OWNER_PKEY = 'owner_pkey'
}

/** input type for incrementing numeric columns in table "_onetoone.owner" */
export type OnetooneOwnerIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_onetoone.owner" */
export type OnetooneOwnerInsertInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  passport_info?: InputMaybe<OnetoonePassportInfoObjRelInsertInput>;
  passport_infos?: InputMaybe<OnetoonePassportInfoArrRelInsertInput>;
};

/** aggregate max on columns */
export interface OnetooneOwnerMaxFields {
  __typename?: '_onetoone_owner_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface OnetooneOwnerMinFields {
  __typename?: '_onetoone_owner_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "_onetoone.owner" */
export interface OnetooneOwnerMutationResponse {
  __typename?: '_onetoone_owner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OnetooneOwner>;
}

/** input type for inserting object relation for remote table "_onetoone.owner" */
export type OnetooneOwnerObjRelInsertInput = {
  data: OnetooneOwnerInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OnetooneOwnerOnConflict>;
};

/** on_conflict condition type for table "_onetoone.owner" */
export type OnetooneOwnerOnConflict = {
  constraint: OnetooneOwnerConstraint;
  update_columns?: Array<OnetooneOwnerUpdateColumn>;
  where?: InputMaybe<OnetooneOwnerBoolExp>;
};

/** Ordering options when selecting data from "_onetoone.owner". */
export type OnetooneOwnerOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  passport_info?: InputMaybe<OnetoonePassportInfoOrderBy>;
  passport_infos_aggregate?: InputMaybe<OnetoonePassportInfoAggregateOrderBy>;
};

/** primary key columns input for table: _onetoone_owner */
export type OnetooneOwnerPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "_onetoone.owner" */
export enum OnetooneOwnerSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** input type for updating data in table "_onetoone.owner" */
export type OnetooneOwnerSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export interface OnetooneOwnerStddevFields {
  __typename?: '_onetoone_owner_stddev_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface OnetooneOwnerStddevPopFields {
  __typename?: '_onetoone_owner_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface OnetooneOwnerStddevSampFields {
  __typename?: '_onetoone_owner_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface OnetooneOwnerSumFields {
  __typename?: '_onetoone_owner_sum_fields';
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "_onetoone.owner" */
export enum OnetooneOwnerUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate var_pop on columns */
export interface OnetooneOwnerVarPopFields {
  __typename?: '_onetoone_owner_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface OnetooneOwnerVarSampFields {
  __typename?: '_onetoone_owner_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface OnetooneOwnerVarianceFields {
  __typename?: '_onetoone_owner_variance_fields';
  id?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "_onetoone.passport_info" */
export interface OnetoonePassportInfo {
  __typename?: '_onetoone_passport_info';
  id: Scalars['Int'];
  /** An object relationship */
  owner: OnetooneOwner;
  owner_id: Scalars['Int'];
  passport_number: Scalars['String'];
}

/** aggregated selection of "_onetoone.passport_info" */
export interface OnetoonePassportInfoAggregate {
  __typename?: '_onetoone_passport_info_aggregate';
  aggregate?: Maybe<OnetoonePassportInfoAggregateFields>;
  nodes: Array<OnetoonePassportInfo>;
}

/** aggregate fields of "_onetoone.passport_info" */
export interface OnetoonePassportInfoAggregateFields {
  __typename?: '_onetoone_passport_info_aggregate_fields';
  avg?: Maybe<OnetoonePassportInfoAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OnetoonePassportInfoMaxFields>;
  min?: Maybe<OnetoonePassportInfoMinFields>;
  stddev?: Maybe<OnetoonePassportInfoStddevFields>;
  stddev_pop?: Maybe<OnetoonePassportInfoStddevPopFields>;
  stddev_samp?: Maybe<OnetoonePassportInfoStddevSampFields>;
  sum?: Maybe<OnetoonePassportInfoSumFields>;
  var_pop?: Maybe<OnetoonePassportInfoVarPopFields>;
  var_samp?: Maybe<OnetoonePassportInfoVarSampFields>;
  variance?: Maybe<OnetoonePassportInfoVarianceFields>;
}


/** aggregate fields of "_onetoone.passport_info" */
export type OnetoonePassportInfoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_onetoone.passport_info" */
export type OnetoonePassportInfoAggregateOrderBy = {
  avg?: InputMaybe<OnetoonePassportInfoAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OnetoonePassportInfoMaxOrderBy>;
  min?: InputMaybe<OnetoonePassportInfoMinOrderBy>;
  stddev?: InputMaybe<OnetoonePassportInfoStddevOrderBy>;
  stddev_pop?: InputMaybe<OnetoonePassportInfoStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OnetoonePassportInfoStddevSampOrderBy>;
  sum?: InputMaybe<OnetoonePassportInfoSumOrderBy>;
  var_pop?: InputMaybe<OnetoonePassportInfoVarPopOrderBy>;
  var_samp?: InputMaybe<OnetoonePassportInfoVarSampOrderBy>;
  variance?: InputMaybe<OnetoonePassportInfoVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "_onetoone.passport_info" */
export type OnetoonePassportInfoArrRelInsertInput = {
  data: Array<OnetoonePassportInfoInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OnetoonePassportInfoOnConflict>;
};

/** aggregate avg on columns */
export interface OnetoonePassportInfoAvgFields {
  __typename?: '_onetoone_passport_info_avg_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "_onetoone.passport_info". All fields are combined with a logical 'AND'. */
export type OnetoonePassportInfoBoolExp = {
  _and?: InputMaybe<Array<OnetoonePassportInfoBoolExp>>;
  _not?: InputMaybe<OnetoonePassportInfoBoolExp>;
  _or?: InputMaybe<Array<OnetoonePassportInfoBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  owner?: InputMaybe<OnetooneOwnerBoolExp>;
  owner_id?: InputMaybe<IntComparisonExp>;
  passport_number?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "_onetoone.passport_info" */
export enum OnetoonePassportInfoConstraint {
  /** unique or primary key constraint */
  PASSPORT_INFO_PASSPORT_NUMBER_KEY = 'passport_info_passport_number_key',
  /** unique or primary key constraint */
  PASSPORT_INFO_PKEY = 'passport_info_pkey'
}

/** input type for incrementing numeric columns in table "_onetoone.passport_info" */
export type OnetoonePassportInfoIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_onetoone.passport_info" */
export type OnetoonePassportInfoInsertInput = {
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<OnetooneOwnerObjRelInsertInput>;
  owner_id?: InputMaybe<Scalars['Int']>;
  passport_number?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export interface OnetoonePassportInfoMaxFields {
  __typename?: '_onetoone_passport_info_max_fields';
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
  passport_number?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
  passport_number?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export interface OnetoonePassportInfoMinFields {
  __typename?: '_onetoone_passport_info_min_fields';
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
  passport_number?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
  passport_number?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "_onetoone.passport_info" */
export interface OnetoonePassportInfoMutationResponse {
  __typename?: '_onetoone_passport_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OnetoonePassportInfo>;
}

/** input type for inserting object relation for remote table "_onetoone.passport_info" */
export type OnetoonePassportInfoObjRelInsertInput = {
  data: OnetoonePassportInfoInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OnetoonePassportInfoOnConflict>;
};

/** on_conflict condition type for table "_onetoone.passport_info" */
export type OnetoonePassportInfoOnConflict = {
  constraint: OnetoonePassportInfoConstraint;
  update_columns?: Array<OnetoonePassportInfoUpdateColumn>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};

/** Ordering options when selecting data from "_onetoone.passport_info". */
export type OnetoonePassportInfoOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OnetooneOwnerOrderBy>;
  owner_id?: InputMaybe<OrderBy>;
  passport_number?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: _onetoone_passport_info */
export type OnetoonePassportInfoPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "_onetoone.passport_info" */
export enum OnetoonePassportInfoSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  OWNER_ID = 'owner_id',
  /** column name */
  PASSPORT_NUMBER = 'passport_number'
}

/** input type for updating data in table "_onetoone.passport_info" */
export type OnetoonePassportInfoSetInput = {
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['Int']>;
  passport_number?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export interface OnetoonePassportInfoStddevFields {
  __typename?: '_onetoone_passport_info_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export interface OnetoonePassportInfoStddevPopFields {
  __typename?: '_onetoone_passport_info_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export interface OnetoonePassportInfoStddevSampFields {
  __typename?: '_onetoone_passport_info_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export interface OnetoonePassportInfoSumFields {
  __typename?: '_onetoone_passport_info_sum_fields';
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** update columns of table "_onetoone.passport_info" */
export enum OnetoonePassportInfoUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  OWNER_ID = 'owner_id',
  /** column name */
  PASSPORT_NUMBER = 'passport_number'
}

/** aggregate var_pop on columns */
export interface OnetoonePassportInfoVarPopFields {
  __typename?: '_onetoone_passport_info_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export interface OnetoonePassportInfoVarSampFields {
  __typename?: '_onetoone_passport_info_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export interface OnetoonePassportInfoVarianceFields {
  __typename?: '_onetoone_passport_info_variance_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "_onetoone.passport_info" */
export type OnetoonePassportInfoVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  owner_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "device" */
export interface Device {
  __typename?: 'device';
  AECC2CConsistency?: Maybe<Scalars['jsonb']>;
  AECRepeatability?: Maybe<Scalars['jsonb']>;
  AECResponse?: Maybe<Scalars['jsonb']>;
  UsefulHarnessHalfValue?: Maybe<Scalars['jsonb']>;
  accordingTo?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['timestamp']>;
  createTime: Scalars['timestamp'];
  ddi?: Maybe<Scalars['json']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceNo?: Maybe<Scalars['String']>;
  equipment?: Maybe<Scalars['String']>;
  exposureTimeOffset?: Maybe<Scalars['jsonb']>;
  falseShadows?: Maybe<Scalars['jsonb']>;
  highContrastResolution?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  lightFieldOffset?: Maybe<Scalars['jsonb']>;
  lowContrastResolution?: Maybe<Scalars['jsonb']>;
  model?: Maybe<Scalars['String']>;
  ownerid?: Maybe<Scalars['Int']>;
  pipeVoltage?: Maybe<Scalars['jsonb']>;
  place?: Maybe<Scalars['String']>;
  radiationOutput?: Maybe<Scalars['jsonb']>;
  rangingError?: Maybe<Scalars['jsonb']>;
  reportId?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
  requester?: Maybe<Scalars['String']>;
  responseUniformity?: Maybe<Scalars['jsonb']>;
  sampleName?: Maybe<Scalars['String']>;
  sampleNo?: Maybe<Scalars['String']>;
  stp?: Maybe<Scalars['jsonb']>;
  testItem?: Maybe<Scalars['String']>;
  updateTime: Scalars['timestamp'];
  usefulHarnessVerticalityOffset?: Maybe<Scalars['jsonb']>;
  vendor?: Maybe<Scalars['String']>;
}


/** columns and relationships of "device" */
export type DeviceAecc2CConsistencyArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceAecRepeatabilityArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceAecResponseArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceUsefulHarnessHalfValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceDdiArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceExposureTimeOffsetArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceFalseShadowsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceHighContrastResolutionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceLightFieldOffsetArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceLowContrastResolutionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DevicePipeVoltageArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceRadiationOutputArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceRangingErrorArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceResponseUniformityArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceStpArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "device" */
export type DeviceUsefulHarnessVerticalityOffsetArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "device" */
export interface DeviceAggregate {
  __typename?: 'device_aggregate';
  aggregate?: Maybe<DeviceAggregateFields>;
  nodes: Array<Device>;
}

/** aggregate fields of "device" */
export interface DeviceAggregateFields {
  __typename?: 'device_aggregate_fields';
  avg?: Maybe<DeviceAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DeviceMaxFields>;
  min?: Maybe<DeviceMinFields>;
  stddev?: Maybe<DeviceStddevFields>;
  stddev_pop?: Maybe<DeviceStddevPopFields>;
  stddev_samp?: Maybe<DeviceStddevSampFields>;
  sum?: Maybe<DeviceSumFields>;
  var_pop?: Maybe<DeviceVarPopFields>;
  var_samp?: Maybe<DeviceVarSampFields>;
  variance?: Maybe<DeviceVarianceFields>;
}


/** aggregate fields of "device" */
export type DeviceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DeviceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DeviceAppendInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>;
  AECRepeatability?: InputMaybe<Scalars['jsonb']>;
  AECResponse?: InputMaybe<Scalars['jsonb']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>;
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>;
  falseShadows?: InputMaybe<Scalars['jsonb']>;
  highContrastResolution?: InputMaybe<Scalars['jsonb']>;
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>;
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>;
  pipeVoltage?: InputMaybe<Scalars['jsonb']>;
  radiationOutput?: InputMaybe<Scalars['jsonb']>;
  rangingError?: InputMaybe<Scalars['jsonb']>;
  responseUniformity?: InputMaybe<Scalars['jsonb']>;
  stp?: InputMaybe<Scalars['jsonb']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export interface DeviceAvgFields {
  __typename?: 'device_avg_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type DeviceBoolExp = {
  AECC2CConsistency?: InputMaybe<JsonbComparisonExp>;
  AECRepeatability?: InputMaybe<JsonbComparisonExp>;
  AECResponse?: InputMaybe<JsonbComparisonExp>;
  UsefulHarnessHalfValue?: InputMaybe<JsonbComparisonExp>;
  _and?: InputMaybe<Array<DeviceBoolExp>>;
  _not?: InputMaybe<DeviceBoolExp>;
  _or?: InputMaybe<Array<DeviceBoolExp>>;
  accordingTo?: InputMaybe<StringComparisonExp>;
  address?: InputMaybe<StringComparisonExp>;
  checkDate?: InputMaybe<TimestampComparisonExp>;
  createTime?: InputMaybe<TimestampComparisonExp>;
  ddi?: InputMaybe<JsonComparisonExp>;
  deviceName?: InputMaybe<StringComparisonExp>;
  deviceNo?: InputMaybe<StringComparisonExp>;
  equipment?: InputMaybe<StringComparisonExp>;
  exposureTimeOffset?: InputMaybe<JsonbComparisonExp>;
  falseShadows?: InputMaybe<JsonbComparisonExp>;
  highContrastResolution?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lightFieldOffset?: InputMaybe<JsonbComparisonExp>;
  lowContrastResolution?: InputMaybe<JsonbComparisonExp>;
  model?: InputMaybe<StringComparisonExp>;
  ownerid?: InputMaybe<IntComparisonExp>;
  pipeVoltage?: InputMaybe<JsonbComparisonExp>;
  place?: InputMaybe<StringComparisonExp>;
  radiationOutput?: InputMaybe<JsonbComparisonExp>;
  rangingError?: InputMaybe<JsonbComparisonExp>;
  reportId?: InputMaybe<UuidComparisonExp>;
  reportNo?: InputMaybe<StringComparisonExp>;
  requester?: InputMaybe<StringComparisonExp>;
  responseUniformity?: InputMaybe<JsonbComparisonExp>;
  sampleName?: InputMaybe<StringComparisonExp>;
  sampleNo?: InputMaybe<StringComparisonExp>;
  stp?: InputMaybe<JsonbComparisonExp>;
  testItem?: InputMaybe<StringComparisonExp>;
  updateTime?: InputMaybe<TimestampComparisonExp>;
  usefulHarnessVerticalityOffset?: InputMaybe<JsonbComparisonExp>;
  vendor?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "device" */
export enum DeviceConstraint {
  /** unique or primary key constraint */
  DEVICE_ID_KEY = 'device_id_key',
  /** unique or primary key constraint */
  DEVICE_PKEY = 'device_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DeviceDeleteAtPathInput = {
  AECC2CConsistency?: InputMaybe<Array<Scalars['String']>>;
  AECRepeatability?: InputMaybe<Array<Scalars['String']>>;
  AECResponse?: InputMaybe<Array<Scalars['String']>>;
  UsefulHarnessHalfValue?: InputMaybe<Array<Scalars['String']>>;
  exposureTimeOffset?: InputMaybe<Array<Scalars['String']>>;
  falseShadows?: InputMaybe<Array<Scalars['String']>>;
  highContrastResolution?: InputMaybe<Array<Scalars['String']>>;
  lightFieldOffset?: InputMaybe<Array<Scalars['String']>>;
  lowContrastResolution?: InputMaybe<Array<Scalars['String']>>;
  pipeVoltage?: InputMaybe<Array<Scalars['String']>>;
  radiationOutput?: InputMaybe<Array<Scalars['String']>>;
  rangingError?: InputMaybe<Array<Scalars['String']>>;
  responseUniformity?: InputMaybe<Array<Scalars['String']>>;
  stp?: InputMaybe<Array<Scalars['String']>>;
  usefulHarnessVerticalityOffset?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DeviceDeleteElemInput = {
  AECC2CConsistency?: InputMaybe<Scalars['Int']>;
  AECRepeatability?: InputMaybe<Scalars['Int']>;
  AECResponse?: InputMaybe<Scalars['Int']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['Int']>;
  exposureTimeOffset?: InputMaybe<Scalars['Int']>;
  falseShadows?: InputMaybe<Scalars['Int']>;
  highContrastResolution?: InputMaybe<Scalars['Int']>;
  lightFieldOffset?: InputMaybe<Scalars['Int']>;
  lowContrastResolution?: InputMaybe<Scalars['Int']>;
  pipeVoltage?: InputMaybe<Scalars['Int']>;
  radiationOutput?: InputMaybe<Scalars['Int']>;
  rangingError?: InputMaybe<Scalars['Int']>;
  responseUniformity?: InputMaybe<Scalars['Int']>;
  stp?: InputMaybe<Scalars['Int']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DeviceDeleteKeyInput = {
  AECC2CConsistency?: InputMaybe<Scalars['String']>;
  AECRepeatability?: InputMaybe<Scalars['String']>;
  AECResponse?: InputMaybe<Scalars['String']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['String']>;
  exposureTimeOffset?: InputMaybe<Scalars['String']>;
  falseShadows?: InputMaybe<Scalars['String']>;
  highContrastResolution?: InputMaybe<Scalars['String']>;
  lightFieldOffset?: InputMaybe<Scalars['String']>;
  lowContrastResolution?: InputMaybe<Scalars['String']>;
  pipeVoltage?: InputMaybe<Scalars['String']>;
  radiationOutput?: InputMaybe<Scalars['String']>;
  rangingError?: InputMaybe<Scalars['String']>;
  responseUniformity?: InputMaybe<Scalars['String']>;
  stp?: InputMaybe<Scalars['String']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "device" */
export type DeviceIncInput = {
  ownerid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "device" */
export type DeviceInsertInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>;
  AECRepeatability?: InputMaybe<Scalars['jsonb']>;
  AECResponse?: InputMaybe<Scalars['jsonb']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>;
  accordingTo?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  checkDate?: InputMaybe<Scalars['timestamp']>;
  createTime?: InputMaybe<Scalars['timestamp']>;
  ddi?: InputMaybe<Scalars['json']>;
  deviceName?: InputMaybe<Scalars['String']>;
  deviceNo?: InputMaybe<Scalars['String']>;
  equipment?: InputMaybe<Scalars['String']>;
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>;
  falseShadows?: InputMaybe<Scalars['jsonb']>;
  highContrastResolution?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>;
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>;
  model?: InputMaybe<Scalars['String']>;
  ownerid?: InputMaybe<Scalars['Int']>;
  pipeVoltage?: InputMaybe<Scalars['jsonb']>;
  place?: InputMaybe<Scalars['String']>;
  radiationOutput?: InputMaybe<Scalars['jsonb']>;
  rangingError?: InputMaybe<Scalars['jsonb']>;
  reportId?: InputMaybe<Scalars['uuid']>;
  reportNo?: InputMaybe<Scalars['String']>;
  requester?: InputMaybe<Scalars['String']>;
  responseUniformity?: InputMaybe<Scalars['jsonb']>;
  sampleName?: InputMaybe<Scalars['String']>;
  sampleNo?: InputMaybe<Scalars['String']>;
  stp?: InputMaybe<Scalars['jsonb']>;
  testItem?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['timestamp']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>;
  vendor?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export interface DeviceMaxFields {
  __typename?: 'device_max_fields';
  accordingTo?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['timestamp']>;
  createTime?: Maybe<Scalars['timestamp']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceNo?: Maybe<Scalars['String']>;
  equipment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Scalars['String']>;
  ownerid?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['String']>;
  reportId?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
  requester?: Maybe<Scalars['String']>;
  sampleName?: Maybe<Scalars['String']>;
  sampleNo?: Maybe<Scalars['String']>;
  testItem?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['timestamp']>;
  vendor?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface DeviceMinFields {
  __typename?: 'device_min_fields';
  accordingTo?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['timestamp']>;
  createTime?: Maybe<Scalars['timestamp']>;
  deviceName?: Maybe<Scalars['String']>;
  deviceNo?: Maybe<Scalars['String']>;
  equipment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Scalars['String']>;
  ownerid?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['String']>;
  reportId?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
  requester?: Maybe<Scalars['String']>;
  sampleName?: Maybe<Scalars['String']>;
  sampleNo?: Maybe<Scalars['String']>;
  testItem?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['timestamp']>;
  vendor?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "device" */
export interface DeviceMutationResponse {
  __typename?: 'device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Device>;
}

/** on_conflict condition type for table "device" */
export type DeviceOnConflict = {
  constraint: DeviceConstraint;
  update_columns?: Array<DeviceUpdateColumn>;
  where?: InputMaybe<DeviceBoolExp>;
};

/** Ordering options when selecting data from "device". */
export type DeviceOrderBy = {
  AECC2CConsistency?: InputMaybe<OrderBy>;
  AECRepeatability?: InputMaybe<OrderBy>;
  AECResponse?: InputMaybe<OrderBy>;
  UsefulHarnessHalfValue?: InputMaybe<OrderBy>;
  accordingTo?: InputMaybe<OrderBy>;
  address?: InputMaybe<OrderBy>;
  checkDate?: InputMaybe<OrderBy>;
  createTime?: InputMaybe<OrderBy>;
  ddi?: InputMaybe<OrderBy>;
  deviceName?: InputMaybe<OrderBy>;
  deviceNo?: InputMaybe<OrderBy>;
  equipment?: InputMaybe<OrderBy>;
  exposureTimeOffset?: InputMaybe<OrderBy>;
  falseShadows?: InputMaybe<OrderBy>;
  highContrastResolution?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lightFieldOffset?: InputMaybe<OrderBy>;
  lowContrastResolution?: InputMaybe<OrderBy>;
  model?: InputMaybe<OrderBy>;
  ownerid?: InputMaybe<OrderBy>;
  pipeVoltage?: InputMaybe<OrderBy>;
  place?: InputMaybe<OrderBy>;
  radiationOutput?: InputMaybe<OrderBy>;
  rangingError?: InputMaybe<OrderBy>;
  reportId?: InputMaybe<OrderBy>;
  reportNo?: InputMaybe<OrderBy>;
  requester?: InputMaybe<OrderBy>;
  responseUniformity?: InputMaybe<OrderBy>;
  sampleName?: InputMaybe<OrderBy>;
  sampleNo?: InputMaybe<OrderBy>;
  stp?: InputMaybe<OrderBy>;
  testItem?: InputMaybe<OrderBy>;
  updateTime?: InputMaybe<OrderBy>;
  usefulHarnessVerticalityOffset?: InputMaybe<OrderBy>;
  vendor?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: device */
export type DevicePkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DevicePrependInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>;
  AECRepeatability?: InputMaybe<Scalars['jsonb']>;
  AECResponse?: InputMaybe<Scalars['jsonb']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>;
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>;
  falseShadows?: InputMaybe<Scalars['jsonb']>;
  highContrastResolution?: InputMaybe<Scalars['jsonb']>;
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>;
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>;
  pipeVoltage?: InputMaybe<Scalars['jsonb']>;
  radiationOutput?: InputMaybe<Scalars['jsonb']>;
  rangingError?: InputMaybe<Scalars['jsonb']>;
  responseUniformity?: InputMaybe<Scalars['jsonb']>;
  stp?: InputMaybe<Scalars['jsonb']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>;
};

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
  DEVICENAME = 'deviceName',
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
  LIGHTFIELDOFFSET = 'lightFieldOffset',
  /** column name */
  LOWCONTRASTRESOLUTION = 'lowContrastResolution',
  /** column name */
  MODEL = 'model',
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
  REPORTID = 'reportId',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  REQUESTER = 'requester',
  /** column name */
  RESPONSEUNIFORMITY = 'responseUniformity',
  /** column name */
  SAMPLENAME = 'sampleName',
  /** column name */
  SAMPLENO = 'sampleNo',
  /** column name */
  STP = 'stp',
  /** column name */
  TESTITEM = 'testItem',
  /** column name */
  UPDATETIME = 'updateTime',
  /** column name */
  USEFULHARNESSVERTICALITYOFFSET = 'usefulHarnessVerticalityOffset',
  /** column name */
  VENDOR = 'vendor'
}

/** input type for updating data in table "device" */
export type DeviceSetInput = {
  AECC2CConsistency?: InputMaybe<Scalars['jsonb']>;
  AECRepeatability?: InputMaybe<Scalars['jsonb']>;
  AECResponse?: InputMaybe<Scalars['jsonb']>;
  UsefulHarnessHalfValue?: InputMaybe<Scalars['jsonb']>;
  accordingTo?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  checkDate?: InputMaybe<Scalars['timestamp']>;
  createTime?: InputMaybe<Scalars['timestamp']>;
  ddi?: InputMaybe<Scalars['json']>;
  deviceName?: InputMaybe<Scalars['String']>;
  deviceNo?: InputMaybe<Scalars['String']>;
  equipment?: InputMaybe<Scalars['String']>;
  exposureTimeOffset?: InputMaybe<Scalars['jsonb']>;
  falseShadows?: InputMaybe<Scalars['jsonb']>;
  highContrastResolution?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  lightFieldOffset?: InputMaybe<Scalars['jsonb']>;
  lowContrastResolution?: InputMaybe<Scalars['jsonb']>;
  model?: InputMaybe<Scalars['String']>;
  ownerid?: InputMaybe<Scalars['Int']>;
  pipeVoltage?: InputMaybe<Scalars['jsonb']>;
  place?: InputMaybe<Scalars['String']>;
  radiationOutput?: InputMaybe<Scalars['jsonb']>;
  rangingError?: InputMaybe<Scalars['jsonb']>;
  reportId?: InputMaybe<Scalars['uuid']>;
  reportNo?: InputMaybe<Scalars['String']>;
  requester?: InputMaybe<Scalars['String']>;
  responseUniformity?: InputMaybe<Scalars['jsonb']>;
  sampleName?: InputMaybe<Scalars['String']>;
  sampleNo?: InputMaybe<Scalars['String']>;
  stp?: InputMaybe<Scalars['jsonb']>;
  testItem?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['timestamp']>;
  usefulHarnessVerticalityOffset?: InputMaybe<Scalars['jsonb']>;
  vendor?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export interface DeviceStddevFields {
  __typename?: 'device_stddev_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface DeviceStddevPopFields {
  __typename?: 'device_stddev_pop_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface DeviceStddevSampFields {
  __typename?: 'device_stddev_samp_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface DeviceSumFields {
  __typename?: 'device_sum_fields';
  ownerid?: Maybe<Scalars['Int']>;
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
  DEVICENAME = 'deviceName',
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
  LIGHTFIELDOFFSET = 'lightFieldOffset',
  /** column name */
  LOWCONTRASTRESOLUTION = 'lowContrastResolution',
  /** column name */
  MODEL = 'model',
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
  REPORTID = 'reportId',
  /** column name */
  REPORTNO = 'reportNo',
  /** column name */
  REQUESTER = 'requester',
  /** column name */
  RESPONSEUNIFORMITY = 'responseUniformity',
  /** column name */
  SAMPLENAME = 'sampleName',
  /** column name */
  SAMPLENO = 'sampleNo',
  /** column name */
  STP = 'stp',
  /** column name */
  TESTITEM = 'testItem',
  /** column name */
  UPDATETIME = 'updateTime',
  /** column name */
  USEFULHARNESSVERTICALITYOFFSET = 'usefulHarnessVerticalityOffset',
  /** column name */
  VENDOR = 'vendor'
}

/** aggregate var_pop on columns */
export interface DeviceVarPopFields {
  __typename?: 'device_var_pop_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface DeviceVarSampFields {
  __typename?: 'device_var_samp_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface DeviceVarianceFields {
  __typename?: 'device_variance_fields';
  ownerid?: Maybe<Scalars['Float']>;
}

/** 设备检验检测报告 */
export interface EquipmentInspectionReports {
  __typename?: 'equipment_inspection_reports';
  InspectionBasis?: Maybe<Scalars['String']>;
  InspectionInstrument?: Maybe<Scalars['String']>;
  InspectionItems?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['timestamptz']>;
  equipmentInspectionAddress?: Maybe<Scalars['String']>;
  equipmentManufacturer?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  equipmentName?: Maybe<Scalars['String']>;
  equipmentRequester?: Maybe<Scalars['String']>;
  equipmentSampleNo?: Maybe<Scalars['String']>;
  equipmentSite?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  ownerId?: Maybe<Scalars['uuid']>;
  updateAt: Scalars['timestamptz'];
}

/** aggregated selection of "equipment_inspection_reports" */
export interface EquipmentInspectionReportsAggregate {
  __typename?: 'equipment_inspection_reports_aggregate';
  aggregate?: Maybe<EquipmentInspectionReportsAggregateFields>;
  nodes: Array<EquipmentInspectionReports>;
}

/** aggregate fields of "equipment_inspection_reports" */
export interface EquipmentInspectionReportsAggregateFields {
  __typename?: 'equipment_inspection_reports_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EquipmentInspectionReportsMaxFields>;
  min?: Maybe<EquipmentInspectionReportsMinFields>;
}


/** aggregate fields of "equipment_inspection_reports" */
export type EquipmentInspectionReportsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EquipmentInspectionReportsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "equipment_inspection_reports". All fields are combined with a logical 'AND'. */
export type EquipmentInspectionReportsBoolExp = {
  InspectionBasis?: InputMaybe<StringComparisonExp>;
  InspectionInstrument?: InputMaybe<StringComparisonExp>;
  InspectionItems?: InputMaybe<StringComparisonExp>;
  _and?: InputMaybe<Array<EquipmentInspectionReportsBoolExp>>;
  _not?: InputMaybe<EquipmentInspectionReportsBoolExp>;
  _or?: InputMaybe<Array<EquipmentInspectionReportsBoolExp>>;
  createAt?: InputMaybe<TimestamptzComparisonExp>;
  equipmentInspectionAddress?: InputMaybe<StringComparisonExp>;
  equipmentManufacturer?: InputMaybe<StringComparisonExp>;
  equipmentModel?: InputMaybe<StringComparisonExp>;
  equipmentName?: InputMaybe<StringComparisonExp>;
  equipmentRequester?: InputMaybe<StringComparisonExp>;
  equipmentSampleNo?: InputMaybe<StringComparisonExp>;
  equipmentSite?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  ownerId?: InputMaybe<UuidComparisonExp>;
  updateAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "equipment_inspection_reports" */
export enum EquipmentInspectionReportsConstraint {
  /** unique or primary key constraint */
  EQUIPMENT_INSPECTION_REPORTS_ID_KEY = 'equipment_inspection_reports_id_key',
  /** unique or primary key constraint */
  EQUIPMENT_INSPECTION_REPORTS_PKEY = 'equipment_inspection_reports_pkey'
}

/** input type for inserting data into table "equipment_inspection_reports" */
export type EquipmentInspectionReportsInsertInput = {
  InspectionBasis?: InputMaybe<Scalars['String']>;
  InspectionInstrument?: InputMaybe<Scalars['String']>;
  InspectionItems?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['timestamptz']>;
  equipmentInspectionAddress?: InputMaybe<Scalars['String']>;
  equipmentManufacturer?: InputMaybe<Scalars['String']>;
  equipmentModel?: InputMaybe<Scalars['String']>;
  equipmentName?: InputMaybe<Scalars['String']>;
  equipmentRequester?: InputMaybe<Scalars['String']>;
  equipmentSampleNo?: InputMaybe<Scalars['String']>;
  equipmentSite?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ownerId?: InputMaybe<Scalars['uuid']>;
  updateAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export interface EquipmentInspectionReportsMaxFields {
  __typename?: 'equipment_inspection_reports_max_fields';
  InspectionBasis?: Maybe<Scalars['String']>;
  InspectionInstrument?: Maybe<Scalars['String']>;
  InspectionItems?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['timestamptz']>;
  equipmentInspectionAddress?: Maybe<Scalars['String']>;
  equipmentManufacturer?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  equipmentName?: Maybe<Scalars['String']>;
  equipmentRequester?: Maybe<Scalars['String']>;
  equipmentSampleNo?: Maybe<Scalars['String']>;
  equipmentSite?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ownerId?: Maybe<Scalars['uuid']>;
  updateAt?: Maybe<Scalars['timestamptz']>;
}

/** aggregate min on columns */
export interface EquipmentInspectionReportsMinFields {
  __typename?: 'equipment_inspection_reports_min_fields';
  InspectionBasis?: Maybe<Scalars['String']>;
  InspectionInstrument?: Maybe<Scalars['String']>;
  InspectionItems?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['timestamptz']>;
  equipmentInspectionAddress?: Maybe<Scalars['String']>;
  equipmentManufacturer?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  equipmentName?: Maybe<Scalars['String']>;
  equipmentRequester?: Maybe<Scalars['String']>;
  equipmentSampleNo?: Maybe<Scalars['String']>;
  equipmentSite?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  ownerId?: Maybe<Scalars['uuid']>;
  updateAt?: Maybe<Scalars['timestamptz']>;
}

/** response of any mutation on the table "equipment_inspection_reports" */
export interface EquipmentInspectionReportsMutationResponse {
  __typename?: 'equipment_inspection_reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EquipmentInspectionReports>;
}

/** on_conflict condition type for table "equipment_inspection_reports" */
export type EquipmentInspectionReportsOnConflict = {
  constraint: EquipmentInspectionReportsConstraint;
  update_columns?: Array<EquipmentInspectionReportsUpdateColumn>;
  where?: InputMaybe<EquipmentInspectionReportsBoolExp>;
};

/** Ordering options when selecting data from "equipment_inspection_reports". */
export type EquipmentInspectionReportsOrderBy = {
  InspectionBasis?: InputMaybe<OrderBy>;
  InspectionInstrument?: InputMaybe<OrderBy>;
  InspectionItems?: InputMaybe<OrderBy>;
  createAt?: InputMaybe<OrderBy>;
  equipmentInspectionAddress?: InputMaybe<OrderBy>;
  equipmentManufacturer?: InputMaybe<OrderBy>;
  equipmentModel?: InputMaybe<OrderBy>;
  equipmentName?: InputMaybe<OrderBy>;
  equipmentRequester?: InputMaybe<OrderBy>;
  equipmentSampleNo?: InputMaybe<OrderBy>;
  equipmentSite?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ownerId?: InputMaybe<OrderBy>;
  updateAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: equipment_inspection_reports */
export type EquipmentInspectionReportsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "equipment_inspection_reports" */
export enum EquipmentInspectionReportsSelectColumn {
  /** column name */
  INSPECTIONBASIS = 'InspectionBasis',
  /** column name */
  INSPECTIONINSTRUMENT = 'InspectionInstrument',
  /** column name */
  INSPECTIONITEMS = 'InspectionItems',
  /** column name */
  CREATEAT = 'createAt',
  /** column name */
  EQUIPMENTINSPECTIONADDRESS = 'equipmentInspectionAddress',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLENO = 'equipmentSampleNo',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  OWNERID = 'ownerId',
  /** column name */
  UPDATEAT = 'updateAt'
}

/** input type for updating data in table "equipment_inspection_reports" */
export type EquipmentInspectionReportsSetInput = {
  InspectionBasis?: InputMaybe<Scalars['String']>;
  InspectionInstrument?: InputMaybe<Scalars['String']>;
  InspectionItems?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['timestamptz']>;
  equipmentInspectionAddress?: InputMaybe<Scalars['String']>;
  equipmentManufacturer?: InputMaybe<Scalars['String']>;
  equipmentModel?: InputMaybe<Scalars['String']>;
  equipmentName?: InputMaybe<Scalars['String']>;
  equipmentRequester?: InputMaybe<Scalars['String']>;
  equipmentSampleNo?: InputMaybe<Scalars['String']>;
  equipmentSite?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ownerId?: InputMaybe<Scalars['uuid']>;
  updateAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "equipment_inspection_reports" */
export enum EquipmentInspectionReportsUpdateColumn {
  /** column name */
  INSPECTIONBASIS = 'InspectionBasis',
  /** column name */
  INSPECTIONINSTRUMENT = 'InspectionInstrument',
  /** column name */
  INSPECTIONITEMS = 'InspectionItems',
  /** column name */
  CREATEAT = 'createAt',
  /** column name */
  EQUIPMENTINSPECTIONADDRESS = 'equipmentInspectionAddress',
  /** column name */
  EQUIPMENTMANUFACTURER = 'equipmentManufacturer',
  /** column name */
  EQUIPMENTMODEL = 'equipmentModel',
  /** column name */
  EQUIPMENTNAME = 'equipmentName',
  /** column name */
  EQUIPMENTREQUESTER = 'equipmentRequester',
  /** column name */
  EQUIPMENTSAMPLENO = 'equipmentSampleNo',
  /** column name */
  EQUIPMENTSITE = 'equipmentSite',
  /** column name */
  ID = 'id',
  /** column name */
  OWNERID = 'ownerId',
  /** column name */
  UPDATEAT = 'updateAt'
}

/** 检测项，全扔这里，不再JSON */
export interface InspectionItems {
  __typename?: 'inspection_items';
  /** 指标要求：验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>;
  /** 结论 */
  inspectionConclusion?: Maybe<Scalars['String']>;
  /** 检测条件 */
  inspectionCondition?: Maybe<Scalars['jsonb']>;
  /** 检测项名 */
  inspectionName: Scalars['String'];
  /** 关联报告id */
  inspectionReportId: Scalars['uuid'];
  /** 检测结果 */
  inspectionResult?: Maybe<Scalars['jsonb']>;
  /** 指标要求：状态检测 */
  stateRequire?: Maybe<Scalars['String']>;
}


/** 检测项，全扔这里，不再JSON */
export type InspectionItemsInspectionConditionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** 检测项，全扔这里，不再JSON */
export type InspectionItemsInspectionResultArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "inspection_items" */
export interface InspectionItemsAggregate {
  __typename?: 'inspection_items_aggregate';
  aggregate?: Maybe<InspectionItemsAggregateFields>;
  nodes: Array<InspectionItems>;
}

/** aggregate fields of "inspection_items" */
export interface InspectionItemsAggregateFields {
  __typename?: 'inspection_items_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<InspectionItemsMaxFields>;
  min?: Maybe<InspectionItemsMinFields>;
}


/** aggregate fields of "inspection_items" */
export type InspectionItemsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<InspectionItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type InspectionItemsAppendInput = {
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "inspection_items". All fields are combined with a logical 'AND'. */
export type InspectionItemsBoolExp = {
  _and?: InputMaybe<Array<InspectionItemsBoolExp>>;
  _not?: InputMaybe<InspectionItemsBoolExp>;
  _or?: InputMaybe<Array<InspectionItemsBoolExp>>;
  acceptanceRequire?: InputMaybe<StringComparisonExp>;
  inspectionConclusion?: InputMaybe<StringComparisonExp>;
  inspectionCondition?: InputMaybe<JsonbComparisonExp>;
  inspectionName?: InputMaybe<StringComparisonExp>;
  inspectionReportId?: InputMaybe<UuidComparisonExp>;
  inspectionResult?: InputMaybe<JsonbComparisonExp>;
  stateRequire?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "inspection_items" */
export enum InspectionItemsConstraint {
  /** unique or primary key constraint */
  INSPECTION_ITEMS_INSPECTIONREPORTID_INSPECTIONNAME_KEY = 'inspection_items_inspectionReportId_inspectionName_key',
  /** unique or primary key constraint */
  INSPECTION_ITEMS_PKEY = 'inspection_items_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type InspectionItemsDeleteAtPathInput = {
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Array<Scalars['String']>>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type InspectionItemsDeleteElemInput = {
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['Int']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type InspectionItemsDeleteKeyInput = {
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['String']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "inspection_items" */
export type InspectionItemsInsertInput = {
  /** 指标要求：验收检测 */
  acceptanceRequire?: InputMaybe<Scalars['String']>;
  /** 结论 */
  inspectionConclusion?: InputMaybe<Scalars['String']>;
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>;
  /** 检测项名 */
  inspectionName?: InputMaybe<Scalars['String']>;
  /** 关联报告id */
  inspectionReportId?: InputMaybe<Scalars['uuid']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['jsonb']>;
  /** 指标要求：状态检测 */
  stateRequire?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export interface InspectionItemsMaxFields {
  __typename?: 'inspection_items_max_fields';
  /** 指标要求：验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>;
  /** 结论 */
  inspectionConclusion?: Maybe<Scalars['String']>;
  /** 检测项名 */
  inspectionName?: Maybe<Scalars['String']>;
  /** 关联报告id */
  inspectionReportId?: Maybe<Scalars['uuid']>;
  /** 指标要求：状态检测 */
  stateRequire?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface InspectionItemsMinFields {
  __typename?: 'inspection_items_min_fields';
  /** 指标要求：验收检测 */
  acceptanceRequire?: Maybe<Scalars['String']>;
  /** 结论 */
  inspectionConclusion?: Maybe<Scalars['String']>;
  /** 检测项名 */
  inspectionName?: Maybe<Scalars['String']>;
  /** 关联报告id */
  inspectionReportId?: Maybe<Scalars['uuid']>;
  /** 指标要求：状态检测 */
  stateRequire?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "inspection_items" */
export interface InspectionItemsMutationResponse {
  __typename?: 'inspection_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<InspectionItems>;
}

/** on_conflict condition type for table "inspection_items" */
export type InspectionItemsOnConflict = {
  constraint: InspectionItemsConstraint;
  update_columns?: Array<InspectionItemsUpdateColumn>;
  where?: InputMaybe<InspectionItemsBoolExp>;
};

/** Ordering options when selecting data from "inspection_items". */
export type InspectionItemsOrderBy = {
  acceptanceRequire?: InputMaybe<OrderBy>;
  inspectionConclusion?: InputMaybe<OrderBy>;
  inspectionCondition?: InputMaybe<OrderBy>;
  inspectionName?: InputMaybe<OrderBy>;
  inspectionReportId?: InputMaybe<OrderBy>;
  inspectionResult?: InputMaybe<OrderBy>;
  stateRequire?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: inspection_items */
export type InspectionItemsPkColumnsInput = {
  /** 关联报告id */
  inspectionReportId: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type InspectionItemsPrependInput = {
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "inspection_items" */
export enum InspectionItemsSelectColumn {
  /** column name */
  ACCEPTANCEREQUIRE = 'acceptanceRequire',
  /** column name */
  INSPECTIONCONCLUSION = 'inspectionConclusion',
  /** column name */
  INSPECTIONCONDITION = 'inspectionCondition',
  /** column name */
  INSPECTIONNAME = 'inspectionName',
  /** column name */
  INSPECTIONREPORTID = 'inspectionReportId',
  /** column name */
  INSPECTIONRESULT = 'inspectionResult',
  /** column name */
  STATEREQUIRE = 'stateRequire'
}

/** input type for updating data in table "inspection_items" */
export type InspectionItemsSetInput = {
  /** 指标要求：验收检测 */
  acceptanceRequire?: InputMaybe<Scalars['String']>;
  /** 结论 */
  inspectionConclusion?: InputMaybe<Scalars['String']>;
  /** 检测条件 */
  inspectionCondition?: InputMaybe<Scalars['jsonb']>;
  /** 检测项名 */
  inspectionName?: InputMaybe<Scalars['String']>;
  /** 关联报告id */
  inspectionReportId?: InputMaybe<Scalars['uuid']>;
  /** 检测结果 */
  inspectionResult?: InputMaybe<Scalars['jsonb']>;
  /** 指标要求：状态检测 */
  stateRequire?: InputMaybe<Scalars['String']>;
};

/** update columns of table "inspection_items" */
export enum InspectionItemsUpdateColumn {
  /** column name */
  ACCEPTANCEREQUIRE = 'acceptanceRequire',
  /** column name */
  INSPECTIONCONCLUSION = 'inspectionConclusion',
  /** column name */
  INSPECTIONCONDITION = 'inspectionCondition',
  /** column name */
  INSPECTIONNAME = 'inspectionName',
  /** column name */
  INSPECTIONREPORTID = 'inspectionReportId',
  /** column name */
  INSPECTIONRESULT = 'inspectionResult',
  /** column name */
  STATEREQUIRE = 'stateRequire'
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root';
  delete_Inspection_report_infos?: Maybe<InspectionReportInfosMutationResponse>;
  /** delete single row from the table: "Inspection_report_infos" */
  delete_Inspection_report_infos_by_pk?: Maybe<InspectionReportInfos>;
  /** delete data from the table: "_onetoone.owner" */
  delete__onetoone_owner?: Maybe<OnetooneOwnerMutationResponse>;
  /** delete single row from the table: "_onetoone.owner" */
  delete__onetoone_owner_by_pk?: Maybe<OnetooneOwner>;
  /** delete data from the table: "_onetoone.passport_info" */
  delete__onetoone_passport_info?: Maybe<OnetoonePassportInfoMutationResponse>;
  /** delete single row from the table: "_onetoone.passport_info" */
  delete__onetoone_passport_info_by_pk?: Maybe<OnetoonePassportInfo>;
  /** delete data from the table: "device" */
  delete_device?: Maybe<DeviceMutationResponse>;
  /** delete single row from the table: "device" */
  delete_device_by_pk?: Maybe<Device>;
  delete_equipment_inspection_reports?: Maybe<EquipmentInspectionReportsMutationResponse>;
  /** delete single row from the table: "equipment_inspection_reports" */
  delete_equipment_inspection_reports_by_pk?: Maybe<EquipmentInspectionReports>;
  delete_inspection_items?: Maybe<InspectionItemsMutationResponse>;
  /** delete single row from the table: "inspection_items" */
  delete_inspection_items_by_pk?: Maybe<InspectionItems>;
  /** delete data from the table: "report" */
  delete_report?: Maybe<ReportMutationResponse>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  insert_Inspection_report_infos?: Maybe<InspectionReportInfosMutationResponse>;
  /** insert a single row into the table: "Inspection_report_infos" */
  insert_Inspection_report_infos_one?: Maybe<InspectionReportInfos>;
  /** insert data into the table: "_onetoone.owner" */
  insert__onetoone_owner?: Maybe<OnetooneOwnerMutationResponse>;
  /** insert a single row into the table: "_onetoone.owner" */
  insert__onetoone_owner_one?: Maybe<OnetooneOwner>;
  /** insert data into the table: "_onetoone.passport_info" */
  insert__onetoone_passport_info?: Maybe<OnetoonePassportInfoMutationResponse>;
  /** insert a single row into the table: "_onetoone.passport_info" */
  insert__onetoone_passport_info_one?: Maybe<OnetoonePassportInfo>;
  /** insert data into the table: "device" */
  insert_device?: Maybe<DeviceMutationResponse>;
  /** insert a single row into the table: "device" */
  insert_device_one?: Maybe<Device>;
  insert_equipment_inspection_reports?: Maybe<EquipmentInspectionReportsMutationResponse>;
  /** insert a single row into the table: "equipment_inspection_reports" */
  insert_equipment_inspection_reports_one?: Maybe<EquipmentInspectionReports>;
  /** insert data into the table: "inspection_items" */
  insert_inspection_items?: Maybe<InspectionItemsMutationResponse>;
  /** insert a single row into the table: "inspection_items" */
  insert_inspection_items_one?: Maybe<InspectionItems>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<ReportMutationResponse>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  update_Inspection_report_infos?: Maybe<InspectionReportInfosMutationResponse>;
  /** update single row of the table: "Inspection_report_infos" */
  update_Inspection_report_infos_by_pk?: Maybe<InspectionReportInfos>;
  /** update data of the table: "_onetoone.owner" */
  update__onetoone_owner?: Maybe<OnetooneOwnerMutationResponse>;
  /** update single row of the table: "_onetoone.owner" */
  update__onetoone_owner_by_pk?: Maybe<OnetooneOwner>;
  /** update data of the table: "_onetoone.passport_info" */
  update__onetoone_passport_info?: Maybe<OnetoonePassportInfoMutationResponse>;
  /** update single row of the table: "_onetoone.passport_info" */
  update__onetoone_passport_info_by_pk?: Maybe<OnetoonePassportInfo>;
  /** update data of the table: "device" */
  update_device?: Maybe<DeviceMutationResponse>;
  /** update single row of the table: "device" */
  update_device_by_pk?: Maybe<Device>;
  update_equipment_inspection_reports?: Maybe<EquipmentInspectionReportsMutationResponse>;
  /** update single row of the table: "equipment_inspection_reports" */
  update_equipment_inspection_reports_by_pk?: Maybe<EquipmentInspectionReports>;
  update_inspection_items?: Maybe<InspectionItemsMutationResponse>;
  /** update single row of the table: "inspection_items" */
  update_inspection_items_by_pk?: Maybe<InspectionItems>;
  /** update data of the table: "report" */
  update_report?: Maybe<ReportMutationResponse>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
}


/** mutation root */
export type MutationRootDeleteInspectionReportInfosArgs = {
  where: InspectionReportInfosBoolExp;
};


/** mutation root */
export type MutationRootDeleteInspectionReportInfosByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteOnetooneOwnerArgs = {
  where: OnetooneOwnerBoolExp;
};


/** mutation root */
export type MutationRootDeleteOnetooneOwnerByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteOnetoonePassportInfoArgs = {
  where: OnetoonePassportInfoBoolExp;
};


/** mutation root */
export type MutationRootDeleteOnetoonePassportInfoByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteDeviceArgs = {
  where: DeviceBoolExp;
};


/** mutation root */
export type MutationRootDeleteDeviceByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteEquipmentInspectionReportsArgs = {
  where: EquipmentInspectionReportsBoolExp;
};


/** mutation root */
export type MutationRootDeleteEquipmentInspectionReportsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteInspectionItemsArgs = {
  where: InspectionItemsBoolExp;
};


/** mutation root */
export type MutationRootDeleteInspectionItemsByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteReportArgs = {
  where: ReportBoolExp;
};


/** mutation root */
export type MutationRootDeleteReportByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertInspectionReportInfosArgs = {
  objects: Array<InspectionReportInfosInsertInput>;
  on_conflict?: InputMaybe<InspectionReportInfosOnConflict>;
};


/** mutation root */
export type MutationRootInsertInspectionReportInfosOneArgs = {
  object: InspectionReportInfosInsertInput;
  on_conflict?: InputMaybe<InspectionReportInfosOnConflict>;
};


/** mutation root */
export type MutationRootInsertOnetooneOwnerArgs = {
  objects: Array<OnetooneOwnerInsertInput>;
  on_conflict?: InputMaybe<OnetooneOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertOnetooneOwnerOneArgs = {
  object: OnetooneOwnerInsertInput;
  on_conflict?: InputMaybe<OnetooneOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertOnetoonePassportInfoArgs = {
  objects: Array<OnetoonePassportInfoInsertInput>;
  on_conflict?: InputMaybe<OnetoonePassportInfoOnConflict>;
};


/** mutation root */
export type MutationRootInsertOnetoonePassportInfoOneArgs = {
  object: OnetoonePassportInfoInsertInput;
  on_conflict?: InputMaybe<OnetoonePassportInfoOnConflict>;
};


/** mutation root */
export type MutationRootInsertDeviceArgs = {
  objects: Array<DeviceInsertInput>;
  on_conflict?: InputMaybe<DeviceOnConflict>;
};


/** mutation root */
export type MutationRootInsertDeviceOneArgs = {
  object: DeviceInsertInput;
  on_conflict?: InputMaybe<DeviceOnConflict>;
};


/** mutation root */
export type MutationRootInsertEquipmentInspectionReportsArgs = {
  objects: Array<EquipmentInspectionReportsInsertInput>;
  on_conflict?: InputMaybe<EquipmentInspectionReportsOnConflict>;
};


/** mutation root */
export type MutationRootInsertEquipmentInspectionReportsOneArgs = {
  object: EquipmentInspectionReportsInsertInput;
  on_conflict?: InputMaybe<EquipmentInspectionReportsOnConflict>;
};


/** mutation root */
export type MutationRootInsertInspectionItemsArgs = {
  objects: Array<InspectionItemsInsertInput>;
  on_conflict?: InputMaybe<InspectionItemsOnConflict>;
};


/** mutation root */
export type MutationRootInsertInspectionItemsOneArgs = {
  object: InspectionItemsInsertInput;
  on_conflict?: InputMaybe<InspectionItemsOnConflict>;
};


/** mutation root */
export type MutationRootInsertReportArgs = {
  objects: Array<ReportInsertInput>;
  on_conflict?: InputMaybe<ReportOnConflict>;
};


/** mutation root */
export type MutationRootInsertReportOneArgs = {
  object: ReportInsertInput;
  on_conflict?: InputMaybe<ReportOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootUpdateInspectionReportInfosArgs = {
  _set?: InputMaybe<InspectionReportInfosSetInput>;
  where: InspectionReportInfosBoolExp;
};


/** mutation root */
export type MutationRootUpdateInspectionReportInfosByPkArgs = {
  _set?: InputMaybe<InspectionReportInfosSetInput>;
  pk_columns: InspectionReportInfosPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOnetooneOwnerArgs = {
  _inc?: InputMaybe<OnetooneOwnerIncInput>;
  _set?: InputMaybe<OnetooneOwnerSetInput>;
  where: OnetooneOwnerBoolExp;
};


/** mutation root */
export type MutationRootUpdateOnetooneOwnerByPkArgs = {
  _inc?: InputMaybe<OnetooneOwnerIncInput>;
  _set?: InputMaybe<OnetooneOwnerSetInput>;
  pk_columns: OnetooneOwnerPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOnetoonePassportInfoArgs = {
  _inc?: InputMaybe<OnetoonePassportInfoIncInput>;
  _set?: InputMaybe<OnetoonePassportInfoSetInput>;
  where: OnetoonePassportInfoBoolExp;
};


/** mutation root */
export type MutationRootUpdateOnetoonePassportInfoByPkArgs = {
  _inc?: InputMaybe<OnetoonePassportInfoIncInput>;
  _set?: InputMaybe<OnetoonePassportInfoSetInput>;
  pk_columns: OnetoonePassportInfoPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDeviceArgs = {
  _append?: InputMaybe<DeviceAppendInput>;
  _delete_at_path?: InputMaybe<DeviceDeleteAtPathInput>;
  _delete_elem?: InputMaybe<DeviceDeleteElemInput>;
  _delete_key?: InputMaybe<DeviceDeleteKeyInput>;
  _inc?: InputMaybe<DeviceIncInput>;
  _prepend?: InputMaybe<DevicePrependInput>;
  _set?: InputMaybe<DeviceSetInput>;
  where: DeviceBoolExp;
};


/** mutation root */
export type MutationRootUpdateDeviceByPkArgs = {
  _append?: InputMaybe<DeviceAppendInput>;
  _delete_at_path?: InputMaybe<DeviceDeleteAtPathInput>;
  _delete_elem?: InputMaybe<DeviceDeleteElemInput>;
  _delete_key?: InputMaybe<DeviceDeleteKeyInput>;
  _inc?: InputMaybe<DeviceIncInput>;
  _prepend?: InputMaybe<DevicePrependInput>;
  _set?: InputMaybe<DeviceSetInput>;
  pk_columns: DevicePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEquipmentInspectionReportsArgs = {
  _set?: InputMaybe<EquipmentInspectionReportsSetInput>;
  where: EquipmentInspectionReportsBoolExp;
};


/** mutation root */
export type MutationRootUpdateEquipmentInspectionReportsByPkArgs = {
  _set?: InputMaybe<EquipmentInspectionReportsSetInput>;
  pk_columns: EquipmentInspectionReportsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateInspectionItemsArgs = {
  _append?: InputMaybe<InspectionItemsAppendInput>;
  _delete_at_path?: InputMaybe<InspectionItemsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<InspectionItemsDeleteElemInput>;
  _delete_key?: InputMaybe<InspectionItemsDeleteKeyInput>;
  _prepend?: InputMaybe<InspectionItemsPrependInput>;
  _set?: InputMaybe<InspectionItemsSetInput>;
  where: InspectionItemsBoolExp;
};


/** mutation root */
export type MutationRootUpdateInspectionItemsByPkArgs = {
  _append?: InputMaybe<InspectionItemsAppendInput>;
  _delete_at_path?: InputMaybe<InspectionItemsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<InspectionItemsDeleteElemInput>;
  _delete_key?: InputMaybe<InspectionItemsDeleteKeyInput>;
  _prepend?: InputMaybe<InspectionItemsPrependInput>;
  _set?: InputMaybe<InspectionItemsSetInput>;
  pk_columns: InspectionItemsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateReportArgs = {
  _append?: InputMaybe<ReportAppendInput>;
  _delete_at_path?: InputMaybe<ReportDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ReportDeleteElemInput>;
  _delete_key?: InputMaybe<ReportDeleteKeyInput>;
  _prepend?: InputMaybe<ReportPrependInput>;
  _set?: InputMaybe<ReportSetInput>;
  where: ReportBoolExp;
};


/** mutation root */
export type MutationRootUpdateReportByPkArgs = {
  _append?: InputMaybe<ReportAppendInput>;
  _delete_at_path?: InputMaybe<ReportDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ReportDeleteElemInput>;
  _delete_key?: InputMaybe<ReportDeleteKeyInput>;
  _prepend?: InputMaybe<ReportPrependInput>;
  _set?: InputMaybe<ReportSetInput>;
  pk_columns: ReportPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

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
  DESC_NULLS_LAST = 'desc_nulls_last'
}

export interface QueryRoot {
  __typename?: 'query_root';
  /** fetch data from the table: "Inspection_report_infos" */
  Inspection_report_infos: Array<InspectionReportInfos>;
  Inspection_report_infos_aggregate: InspectionReportInfosAggregate;
  /** fetch data from the table: "Inspection_report_infos" using primary key columns */
  Inspection_report_infos_by_pk?: Maybe<InspectionReportInfos>;
  /** fetch data from the table: "_onetoone.owner" */
  _onetoone_owner: Array<OnetooneOwner>;
  /** fetch aggregated fields from the table: "_onetoone.owner" */
  _onetoone_owner_aggregate: OnetooneOwnerAggregate;
  /** fetch data from the table: "_onetoone.owner" using primary key columns */
  _onetoone_owner_by_pk?: Maybe<OnetooneOwner>;
  /** fetch data from the table: "_onetoone.passport_info" */
  _onetoone_passport_info: Array<OnetoonePassportInfo>;
  /** fetch aggregated fields from the table: "_onetoone.passport_info" */
  _onetoone_passport_info_aggregate: OnetoonePassportInfoAggregate;
  /** fetch data from the table: "_onetoone.passport_info" using primary key columns */
  _onetoone_passport_info_by_pk?: Maybe<OnetoonePassportInfo>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "equipment_inspection_reports" */
  equipment_inspection_reports: Array<EquipmentInspectionReports>;
  /** fetch aggregated fields from the table: "equipment_inspection_reports" */
  equipment_inspection_reports_aggregate: EquipmentInspectionReportsAggregate;
  /** fetch data from the table: "equipment_inspection_reports" using primary key columns */
  equipment_inspection_reports_by_pk?: Maybe<EquipmentInspectionReports>;
  /** fetch data from the table: "inspection_items" */
  inspection_items: Array<InspectionItems>;
  inspection_items_aggregate: InspectionItemsAggregate;
  /** fetch data from the table: "inspection_items" using primary key columns */
  inspection_items_by_pk?: Maybe<InspectionItems>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: ReportAggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
}


export type QueryRootInspectionReportInfosArgs = {
  distinct_on?: InputMaybe<Array<InspectionReportInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionReportInfosOrderBy>>;
  where?: InputMaybe<InspectionReportInfosBoolExp>;
};


export type QueryRootInspectionReportInfosAggregateArgs = {
  distinct_on?: InputMaybe<Array<InspectionReportInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionReportInfosOrderBy>>;
  where?: InputMaybe<InspectionReportInfosBoolExp>;
};


export type QueryRootInspectionReportInfosByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


export type QueryRootOnetooneOwnerArgs = {
  distinct_on?: InputMaybe<Array<OnetooneOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetooneOwnerOrderBy>>;
  where?: InputMaybe<OnetooneOwnerBoolExp>;
};


export type QueryRootOnetooneOwnerAggregateArgs = {
  distinct_on?: InputMaybe<Array<OnetooneOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetooneOwnerOrderBy>>;
  where?: InputMaybe<OnetooneOwnerBoolExp>;
};


export type QueryRootOnetooneOwnerByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootOnetoonePassportInfoArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};


export type QueryRootOnetoonePassportInfoAggregateArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};


export type QueryRootOnetoonePassportInfoByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootDeviceArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type QueryRootDeviceAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type QueryRootDeviceByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootEquipmentInspectionReportsArgs = {
  distinct_on?: InputMaybe<Array<EquipmentInspectionReportsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EquipmentInspectionReportsOrderBy>>;
  where?: InputMaybe<EquipmentInspectionReportsBoolExp>;
};


export type QueryRootEquipmentInspectionReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EquipmentInspectionReportsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EquipmentInspectionReportsOrderBy>>;
  where?: InputMaybe<EquipmentInspectionReportsBoolExp>;
};


export type QueryRootEquipmentInspectionReportsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootInspectionItemsArgs = {
  distinct_on?: InputMaybe<Array<InspectionItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionItemsOrderBy>>;
  where?: InputMaybe<InspectionItemsBoolExp>;
};


export type QueryRootInspectionItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<InspectionItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionItemsOrderBy>>;
  where?: InputMaybe<InspectionItemsBoolExp>;
};


export type QueryRootInspectionItemsByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


export type QueryRootReportArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReportOrderBy>>;
  where?: InputMaybe<ReportBoolExp>;
};


export type QueryRootReportAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReportOrderBy>>;
  where?: InputMaybe<ReportBoolExp>;
};


export type QueryRootReportByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryRootUserByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "report" */
export interface Report {
  __typename?: 'report';
  createTime: Scalars['timestamp'];
  file?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  params: Scalars['jsonb'];
  reportNo?: Maybe<Scalars['String']>;
  updateTime: Scalars['timestamp'];
}


/** columns and relationships of "report" */
export type ReportParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "report" */
export interface ReportAggregate {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<ReportAggregateFields>;
  nodes: Array<Report>;
}

/** aggregate fields of "report" */
export interface ReportAggregateFields {
  __typename?: 'report_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ReportMaxFields>;
  min?: Maybe<ReportMinFields>;
}


/** aggregate fields of "report" */
export type ReportAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ReportSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ReportAppendInput = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type ReportBoolExp = {
  _and?: InputMaybe<Array<ReportBoolExp>>;
  _not?: InputMaybe<ReportBoolExp>;
  _or?: InputMaybe<Array<ReportBoolExp>>;
  createTime?: InputMaybe<TimestampComparisonExp>;
  file?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  params?: InputMaybe<JsonbComparisonExp>;
  reportNo?: InputMaybe<StringComparisonExp>;
  updateTime?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "report" */
export enum ReportConstraint {
  /** unique or primary key constraint */
  REPORT_NO_UINDEX = 'report_no_uindex',
  /** unique or primary key constraint */
  REPORT_PKEY = 'report_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ReportDeleteAtPathInput = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ReportDeleteElemInput = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ReportDeleteKeyInput = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "report" */
export type ReportInsertInput = {
  createTime?: InputMaybe<Scalars['timestamp']>;
  file?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  params?: InputMaybe<Scalars['jsonb']>;
  reportNo?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export interface ReportMaxFields {
  __typename?: 'report_max_fields';
  createTime?: Maybe<Scalars['timestamp']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['timestamp']>;
}

/** aggregate min on columns */
export interface ReportMinFields {
  __typename?: 'report_min_fields';
  createTime?: Maybe<Scalars['timestamp']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  reportNo?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['timestamp']>;
}

/** response of any mutation on the table "report" */
export interface ReportMutationResponse {
  __typename?: 'report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Report>;
}

/** on_conflict condition type for table "report" */
export type ReportOnConflict = {
  constraint: ReportConstraint;
  update_columns?: Array<ReportUpdateColumn>;
  where?: InputMaybe<ReportBoolExp>;
};

/** Ordering options when selecting data from "report". */
export type ReportOrderBy = {
  createTime?: InputMaybe<OrderBy>;
  file?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  params?: InputMaybe<OrderBy>;
  reportNo?: InputMaybe<OrderBy>;
  updateTime?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: report */
export type ReportPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ReportPrependInput = {
  params?: InputMaybe<Scalars['jsonb']>;
};

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
  UPDATETIME = 'updateTime'
}

/** input type for updating data in table "report" */
export type ReportSetInput = {
  createTime?: InputMaybe<Scalars['timestamp']>;
  file?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  params?: InputMaybe<Scalars['jsonb']>;
  reportNo?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['timestamp']>;
};

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
  UPDATETIME = 'updateTime'
}

/** Boolean expression to compare columns of type "role". All fields are combined with logical 'AND'. */
export type RoleComparisonExp = {
  _eq?: InputMaybe<Scalars['role']>;
  _gt?: InputMaybe<Scalars['role']>;
  _gte?: InputMaybe<Scalars['role']>;
  _in?: InputMaybe<Array<Scalars['role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['role']>;
  _lte?: InputMaybe<Scalars['role']>;
  _neq?: InputMaybe<Scalars['role']>;
  _nin?: InputMaybe<Array<Scalars['role']>>;
};

export interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Inspection_report_infos" */
  Inspection_report_infos: Array<InspectionReportInfos>;
  Inspection_report_infos_aggregate: InspectionReportInfosAggregate;
  /** fetch data from the table: "Inspection_report_infos" using primary key columns */
  Inspection_report_infos_by_pk?: Maybe<InspectionReportInfos>;
  /** fetch data from the table: "_onetoone.owner" */
  _onetoone_owner: Array<OnetooneOwner>;
  /** fetch aggregated fields from the table: "_onetoone.owner" */
  _onetoone_owner_aggregate: OnetooneOwnerAggregate;
  /** fetch data from the table: "_onetoone.owner" using primary key columns */
  _onetoone_owner_by_pk?: Maybe<OnetooneOwner>;
  /** fetch data from the table: "_onetoone.passport_info" */
  _onetoone_passport_info: Array<OnetoonePassportInfo>;
  /** fetch aggregated fields from the table: "_onetoone.passport_info" */
  _onetoone_passport_info_aggregate: OnetoonePassportInfoAggregate;
  /** fetch data from the table: "_onetoone.passport_info" using primary key columns */
  _onetoone_passport_info_by_pk?: Maybe<OnetoonePassportInfo>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: DeviceAggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "equipment_inspection_reports" */
  equipment_inspection_reports: Array<EquipmentInspectionReports>;
  /** fetch aggregated fields from the table: "equipment_inspection_reports" */
  equipment_inspection_reports_aggregate: EquipmentInspectionReportsAggregate;
  /** fetch data from the table: "equipment_inspection_reports" using primary key columns */
  equipment_inspection_reports_by_pk?: Maybe<EquipmentInspectionReports>;
  /** fetch data from the table: "inspection_items" */
  inspection_items: Array<InspectionItems>;
  inspection_items_aggregate: InspectionItemsAggregate;
  /** fetch data from the table: "inspection_items" using primary key columns */
  inspection_items_by_pk?: Maybe<InspectionItems>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: ReportAggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
}


export type SubscriptionRootInspectionReportInfosArgs = {
  distinct_on?: InputMaybe<Array<InspectionReportInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionReportInfosOrderBy>>;
  where?: InputMaybe<InspectionReportInfosBoolExp>;
};


export type SubscriptionRootInspectionReportInfosAggregateArgs = {
  distinct_on?: InputMaybe<Array<InspectionReportInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionReportInfosOrderBy>>;
  where?: InputMaybe<InspectionReportInfosBoolExp>;
};


export type SubscriptionRootInspectionReportInfosByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


export type SubscriptionRootOnetooneOwnerArgs = {
  distinct_on?: InputMaybe<Array<OnetooneOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetooneOwnerOrderBy>>;
  where?: InputMaybe<OnetooneOwnerBoolExp>;
};


export type SubscriptionRootOnetooneOwnerAggregateArgs = {
  distinct_on?: InputMaybe<Array<OnetooneOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetooneOwnerOrderBy>>;
  where?: InputMaybe<OnetooneOwnerBoolExp>;
};


export type SubscriptionRootOnetooneOwnerByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootOnetoonePassportInfoArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};


export type SubscriptionRootOnetoonePassportInfoAggregateArgs = {
  distinct_on?: InputMaybe<Array<OnetoonePassportInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OnetoonePassportInfoOrderBy>>;
  where?: InputMaybe<OnetoonePassportInfoBoolExp>;
};


export type SubscriptionRootOnetoonePassportInfoByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootDeviceArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type SubscriptionRootDeviceAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type SubscriptionRootDeviceByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootEquipmentInspectionReportsArgs = {
  distinct_on?: InputMaybe<Array<EquipmentInspectionReportsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EquipmentInspectionReportsOrderBy>>;
  where?: InputMaybe<EquipmentInspectionReportsBoolExp>;
};


export type SubscriptionRootEquipmentInspectionReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EquipmentInspectionReportsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EquipmentInspectionReportsOrderBy>>;
  where?: InputMaybe<EquipmentInspectionReportsBoolExp>;
};


export type SubscriptionRootEquipmentInspectionReportsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootInspectionItemsArgs = {
  distinct_on?: InputMaybe<Array<InspectionItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionItemsOrderBy>>;
  where?: InputMaybe<InspectionItemsBoolExp>;
};


export type SubscriptionRootInspectionItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<InspectionItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InspectionItemsOrderBy>>;
  where?: InputMaybe<InspectionItemsBoolExp>;
};


export type SubscriptionRootInspectionItemsByPkArgs = {
  inspectionReportId: Scalars['uuid'];
};


export type SubscriptionRootReportArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReportOrderBy>>;
  where?: InputMaybe<ReportBoolExp>;
};


export type SubscriptionRootReportAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReportSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReportOrderBy>>;
  where?: InputMaybe<ReportBoolExp>;
};


export type SubscriptionRootReportByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionRootUserByPkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export interface User {
  __typename?: 'user';
  avatar?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  password: Scalars['String'];
  role: Scalars['role'];
  username: Scalars['String'];
}

/** aggregated selection of "user" */
export interface UserAggregate {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
}

/** aggregate fields of "user" */
export interface UserAggregateFields {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<UserAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
  stddev?: Maybe<UserStddevFields>;
  stddev_pop?: Maybe<UserStddevPopFields>;
  stddev_samp?: Maybe<UserStddevSampFields>;
  sum?: Maybe<UserSumFields>;
  var_pop?: Maybe<UserVarPopFields>;
  var_samp?: Maybe<UserVarSampFields>;
  variance?: Maybe<UserVarianceFields>;
}


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export interface UserAvgFields {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  avatar?: InputMaybe<StringComparisonExp>;
  displayname?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<RoleComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  USER_PKEY = 'user_pkey',
  /** unique or primary key constraint */
  USER_USERNAME_KEY = 'user_username_key',
  /** unique or primary key constraint */
  USER_USERNAME_UINDEX = 'user_username_uindex'
}

/** input type for incrementing numeric columns in table "user" */
export type UserIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  avatar?: InputMaybe<Scalars['String']>;
  displayname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['role']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export interface UserMaxFields {
  __typename?: 'user_max_fields';
  avatar?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['role']>;
  username?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface UserMinFields {
  __typename?: 'user_min_fields';
  avatar?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['role']>;
  username?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "user" */
export interface UserMutationResponse {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
}

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  avatar?: InputMaybe<OrderBy>;
  displayname?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['Int'];
};

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
  USERNAME = 'username'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  avatar?: InputMaybe<Scalars['String']>;
  displayname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['role']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export interface UserStddevFields {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface UserStddevPopFields {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface UserStddevSampFields {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface UserSumFields {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
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
  USERNAME = 'username'
}

/** aggregate var_pop on columns */
export interface UserVarPopFields {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface UserVarSampFields {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface UserVarianceFields {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export const namedOperations = {
  Query: {
    devices: 'devices',
    deviceById: 'deviceById'
  },
  Mutation: {
    insertDevice: 'insertDevice',
    updateDevice: 'updateDevice',
    deleteDevice: 'deleteDevice'
  },
  Fragment: {
    headerDeviceFields: 'headerDeviceFields',
    appendDeviceFields: 'appendDeviceFields'
  }
}
export type HeaderDeviceFieldsFragment = { __typename?: 'device', id: any, reportId?: any | null, reportNo?: string | null, accordingTo?: string | null, address?: string | null, createTime: any, deviceNo?: string | null, equipment?: string | null, testItem?: string | null, model?: string | null, sampleName?: string | null, deviceName?: string | null, place?: string | null, requester?: string | null, sampleNo?: string | null, updateTime: any, checkDate?: any | null, vendor?: string | null };

export type AppendDeviceFieldsFragment = { __typename?: 'device', AECC2CConsistency?: any | null, AECRepeatability?: any | null, AECResponse?: any | null, exposureTimeOffset?: any | null, UsefulHarnessHalfValue?: any | null, falseShadows?: any | null, highContrastResolution?: any | null, lightFieldOffset?: any | null, lowContrastResolution?: any | null, pipeVoltage?: any | null, radiationOutput?: any | null, rangingError?: any | null, responseUniformity?: any | null, stp?: any | null, usefulHarnessVerticalityOffset?: any | null };

export type DevicesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type DevicesQuery = { __typename?: 'query_root', device: Array<{ __typename?: 'device', id: any, reportId?: any | null, reportNo?: string | null, accordingTo?: string | null, address?: string | null, createTime: any, deviceNo?: string | null, equipment?: string | null, testItem?: string | null, model?: string | null, sampleName?: string | null, deviceName?: string | null, place?: string | null, requester?: string | null, sampleNo?: string | null, updateTime: any, checkDate?: any | null, vendor?: string | null }> };

export type DeviceByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeviceByIdQuery = { __typename?: 'query_root', device_by_pk?: { __typename?: 'device', id: any, reportId?: any | null, reportNo?: string | null, accordingTo?: string | null, address?: string | null, createTime: any, deviceNo?: string | null, equipment?: string | null, testItem?: string | null, model?: string | null, sampleName?: string | null, deviceName?: string | null, place?: string | null, requester?: string | null, sampleNo?: string | null, updateTime: any, checkDate?: any | null, vendor?: string | null, AECC2CConsistency?: any | null, AECRepeatability?: any | null, AECResponse?: any | null, exposureTimeOffset?: any | null, UsefulHarnessHalfValue?: any | null, falseShadows?: any | null, highContrastResolution?: any | null, lightFieldOffset?: any | null, lowContrastResolution?: any | null, pipeVoltage?: any | null, radiationOutput?: any | null, rangingError?: any | null, responseUniformity?: any | null, stp?: any | null, usefulHarnessVerticalityOffset?: any | null } | null };

export type InsertDeviceMutationVariables = Exact<{
  input: DeviceInsertInput;
}>;


export type InsertDeviceMutation = { __typename?: 'mutation_root', insert_device_one?: { __typename?: 'device', id: any, reportId?: any | null, reportNo?: string | null, accordingTo?: string | null, address?: string | null, createTime: any, deviceNo?: string | null, equipment?: string | null, testItem?: string | null, model?: string | null, sampleName?: string | null, deviceName?: string | null, place?: string | null, requester?: string | null, sampleNo?: string | null, updateTime: any, checkDate?: any | null, vendor?: string | null, AECC2CConsistency?: any | null, AECRepeatability?: any | null, AECResponse?: any | null, exposureTimeOffset?: any | null, UsefulHarnessHalfValue?: any | null, falseShadows?: any | null, highContrastResolution?: any | null, lightFieldOffset?: any | null, lowContrastResolution?: any | null, pipeVoltage?: any | null, radiationOutput?: any | null, rangingError?: any | null, responseUniformity?: any | null, stp?: any | null, usefulHarnessVerticalityOffset?: any | null } | null };

export type UpdateDeviceMutationVariables = Exact<{
  id: Scalars['uuid'];
  input?: InputMaybe<DeviceSetInput>;
}>;


export type UpdateDeviceMutation = { __typename?: 'mutation_root', update_device_by_pk?: { __typename?: 'device', id: any, reportId?: any | null, reportNo?: string | null, accordingTo?: string | null, address?: string | null, createTime: any, deviceNo?: string | null, equipment?: string | null, testItem?: string | null, model?: string | null, sampleName?: string | null, deviceName?: string | null, place?: string | null, requester?: string | null, sampleNo?: string | null, updateTime: any, checkDate?: any | null, vendor?: string | null, AECC2CConsistency?: any | null, AECRepeatability?: any | null, AECResponse?: any | null, exposureTimeOffset?: any | null, UsefulHarnessHalfValue?: any | null, falseShadows?: any | null, highContrastResolution?: any | null, lightFieldOffset?: any | null, lowContrastResolution?: any | null, pipeVoltage?: any | null, radiationOutput?: any | null, rangingError?: any | null, responseUniformity?: any | null, stp?: any | null, usefulHarnessVerticalityOffset?: any | null } | null };

export type DeleteDeviceMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteDeviceMutation = { __typename?: 'mutation_root', delete_device_by_pk?: { __typename?: 'device', deviceName?: string | null } | null };
