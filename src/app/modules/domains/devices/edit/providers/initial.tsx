import { useMemo, createContext, ReactNode, useContext } from 'react'
import { ApolloError } from '@apollo/client'

import { useDeviceByIdQuery } from '@/generated/public'
import { Device, DeviceSetInput, InputMaybe } from '@/generated/types'
import { initDeviceInput } from '@/models/devices'

interface DeviceDetailContextValue {
  data: DeviceSetInput
  loading?: boolean
  error?: ApolloError
}

const DeviceDetailContext = createContext<DeviceDetailContextValue>({
  data: initDeviceInput(),
})

export interface DeviceWithIdProps {
  id: Required<Device['id']>
  children?: ReactNode
}

const DeviceWithId = ({ id, children }: InitialDeviceProviderProps) => {
  const { data, loading, error } = useDeviceByIdQuery({
    variables: {
      id: id as Device['id'],
    },
  })

  const value = useMemo(() => {
    const result = data?.device_by_pk || ({} as DeviceSetInput)

    return {
      data: result,
      error,
      loading,
    }
  }, [data?.device_by_pk, error, loading])

  return (
    <DeviceDetailContext.Provider value={value}>
      {children}
    </DeviceDetailContext.Provider>
  )
}

export interface InitialDeviceProviderProps {
  id?: InputMaybe<Device['id']>
  children?: ReactNode
}

export const InitialDeviceProvider = ({
  id,
  children,
}: InitialDeviceProviderProps) => {
  return id ? (
    <DeviceWithId id={id}>{children}</DeviceWithId>
  ) : (
    <DeviceDetailContext.Provider value={{ data: initDeviceInput() }}>
      {children}
    </DeviceDetailContext.Provider>
  )
}

export const useInitialDevice = () => useContext(DeviceDetailContext)