import { Dispatch, useState } from 'react'
import { useBoolean, useUpdateEffect } from 'ahooks'

import { request } from '@common/request'

export const useRenderDevice = (): [
  Dispatch<any>,
  {
    loading: boolean
    data: any
  }
] => {
  const [param, setParam] = useState({} as any)

  const [result, setResult] = useState(null)

  const [loading, { setTrue, setFalse }] = useBoolean(false)

  useUpdateEffect(() => {
    const render = async () => {
      setTrue()
      const { data } = await request({
        url: '/api/render?template=1',
        method: 'POST',
        data: param,
      })

      setResult(data)
      setFalse()
    }
    render()
  }, [param])

  return [
    setParam,
    {
      loading,
      data: result,
    },
  ]
}
