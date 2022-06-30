import { Dispatch, useState } from 'react'
import { useBoolean, useUpdateEffect } from 'ahooks'

import { request } from '@common/request'

export const useRenderDevice = (): [
  Dispatch<any>,
  {
    loading: boolean
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
        responseType: 'blob',
      })

      setFalse()
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      })

      const url = window.URL.createObjectURL(blob)
      window.open(url, '_blank')
    }
    render()
  }, [param])

  return [
    setParam,
    {
      loading,
    },
  ]
}
