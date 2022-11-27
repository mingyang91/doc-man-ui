import { useState } from 'react'
import { useBoolean, useUpdateEffect } from 'ahooks'
import { isEmpty } from 'lodash-es'

import { request } from 'com/request'

import { ReportRender } from 'm/presets'

export const useRenderDevice = () => {
  const [param, setParam] = useState({} as ReportRender)

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
    if (!isEmpty(param)) {
      render()
    }
  }, [param])

  return [
    setParam,
    {
      loading,
    },
  ] as const
}
