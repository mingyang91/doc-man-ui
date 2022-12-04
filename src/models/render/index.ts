import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { request } from 'com/request'

import { ReportRender } from 'm/presets'

export const useRenderDevice = (
  options?: UseMutationOptions<string, unknown, ReportRender>
) => {
  return useMutation<string, unknown, ReportRender>(async param => {
    const { data } = await request({
      url: '/api/render?template=1',
      method: 'POST',
      data: param,
      responseType: 'blob',
    })

    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })

    const url = window.URL.createObjectURL(blob)
    return url
  }, options)
}
