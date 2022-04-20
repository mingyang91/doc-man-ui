import { useState } from 'react'

import { useQueryDevice } from 'graphql/query-device'

export const Documents = () => {
  const { useDeviceList } = useQueryDevice()

  return <>Documents</>
}
