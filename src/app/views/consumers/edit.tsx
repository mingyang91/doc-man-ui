import { omit } from 'lodash-es'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useClientsByIdQuery,
  useUpdateClientsByIdMutation,
} from 'm/clients/index.generated'
import { UUIDV4 } from 'm/presets'

import { ConsumerForm, FnSubmitClient } from './components/consumer-form'
import { ConsumerFormData } from './components/consumer-form/utils'

const TITLE = `委托单位 - 编辑`

const PageConsumerEdit = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const { data } = useClientsByIdQuery({
    id,
  })

  const { mutate, isLoading } = useUpdateClientsByIdMutation({
    onSuccess() {
      pushSuccessMessage(`更新委托单位成功`)
    },
    onError(error) {
      pushErrorMessage(`更新委托单位失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useCallback<FnSubmitClient>(
    async (values, helpers) => {
      mutate({
        id,
        data: omit(values, ['id', 'createdAt', 'updatedAt']),
      })
    },
    [id, mutate]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <ConsumerForm
        isEdit
        data={(data?.detail as unknown as ConsumerFormData) || undefined}
        isLoading={isLoading}
        submitForm={onSubmit}
      />
    </Page>
  )
}

export default PageConsumerEdit
