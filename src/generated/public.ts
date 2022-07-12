/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from './types';
const defaultOptions = {} as const;
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
  testItem
  model
  sampleName
  deviceName
  place
  requester
  sampleNo
  updateTime
  checkDate
  vendor
}
    `;
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
    `;
export const DevicesDocument = gql`
    query devices($offset: Int, $limit: Int = 10) {
  device(offset: $offset) {
    ...headerDeviceFields
  }
}
    ${HeaderDeviceFieldsFragmentDoc}`;

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
export function useDevicesQuery(baseOptions?: Apollo.QueryHookOptions<Types.DevicesQuery, Types.DevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.DevicesQuery, Types.DevicesQueryVariables>(DevicesDocument, options);
      }
export function useDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.DevicesQuery, Types.DevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.DevicesQuery, Types.DevicesQueryVariables>(DevicesDocument, options);
        }
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>;
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>;
export type DevicesQueryResult = Apollo.QueryResult<Types.DevicesQuery, Types.DevicesQueryVariables>;
export const DeviceByIdDocument = gql`
    query deviceById($id: uuid!) {
  device_by_pk(id: $id) {
    ...headerDeviceFields
    ...appendDeviceFields
  }
}
    ${HeaderDeviceFieldsFragmentDoc}
${AppendDeviceFieldsFragmentDoc}`;

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
export function useDeviceByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.DeviceByIdQuery, Types.DeviceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.DeviceByIdQuery, Types.DeviceByIdQueryVariables>(DeviceByIdDocument, options);
      }
export function useDeviceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.DeviceByIdQuery, Types.DeviceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.DeviceByIdQuery, Types.DeviceByIdQueryVariables>(DeviceByIdDocument, options);
        }
export type DeviceByIdQueryHookResult = ReturnType<typeof useDeviceByIdQuery>;
export type DeviceByIdLazyQueryHookResult = ReturnType<typeof useDeviceByIdLazyQuery>;
export type DeviceByIdQueryResult = Apollo.QueryResult<Types.DeviceByIdQuery, Types.DeviceByIdQueryVariables>;
export const InsertDeviceDocument = gql`
    mutation insertDevice($input: device_insert_input!) {
  insert_device_one(object: $input) {
    ...headerDeviceFields
    ...appendDeviceFields
  }
}
    ${HeaderDeviceFieldsFragmentDoc}
${AppendDeviceFieldsFragmentDoc}`;
export type InsertDeviceMutationFn = Apollo.MutationFunction<Types.InsertDeviceMutation, Types.InsertDeviceMutationVariables>;

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
export function useInsertDeviceMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertDeviceMutation, Types.InsertDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.InsertDeviceMutation, Types.InsertDeviceMutationVariables>(InsertDeviceDocument, options);
      }
export type InsertDeviceMutationHookResult = ReturnType<typeof useInsertDeviceMutation>;
export type InsertDeviceMutationResult = Apollo.MutationResult<Types.InsertDeviceMutation>;
export type InsertDeviceMutationOptions = Apollo.BaseMutationOptions<Types.InsertDeviceMutation, Types.InsertDeviceMutationVariables>;
export const UpdateDeviceDocument = gql`
    mutation updateDevice($id: uuid!, $input: device_set_input) {
  update_device_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...headerDeviceFields
    ...appendDeviceFields
  }
}
    ${HeaderDeviceFieldsFragmentDoc}
${AppendDeviceFieldsFragmentDoc}`;
export type UpdateDeviceMutationFn = Apollo.MutationFunction<Types.UpdateDeviceMutation, Types.UpdateDeviceMutationVariables>;

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
export function useUpdateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateDeviceMutation, Types.UpdateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.UpdateDeviceMutation, Types.UpdateDeviceMutationVariables>(UpdateDeviceDocument, options);
      }
export type UpdateDeviceMutationHookResult = ReturnType<typeof useUpdateDeviceMutation>;
export type UpdateDeviceMutationResult = Apollo.MutationResult<Types.UpdateDeviceMutation>;
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<Types.UpdateDeviceMutation, Types.UpdateDeviceMutationVariables>;
export const DeleteDeviceDocument = gql`
    mutation deleteDevice($id: uuid!) {
  delete_device_by_pk(id: $id) {
    deviceName
  }
}
    `;
export type DeleteDeviceMutationFn = Apollo.MutationFunction<Types.DeleteDeviceMutation, Types.DeleteDeviceMutationVariables>;

/**
 * __useDeleteDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceMutation, { data, loading, error }] = useDeleteDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDeviceMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteDeviceMutation, Types.DeleteDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.DeleteDeviceMutation, Types.DeleteDeviceMutationVariables>(DeleteDeviceDocument, options);
      }
export type DeleteDeviceMutationHookResult = ReturnType<typeof useDeleteDeviceMutation>;
export type DeleteDeviceMutationResult = Apollo.MutationResult<Types.DeleteDeviceMutation>;
export type DeleteDeviceMutationOptions = Apollo.BaseMutationOptions<Types.DeleteDeviceMutation, Types.DeleteDeviceMutationVariables>;