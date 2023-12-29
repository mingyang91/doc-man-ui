import { useCreation } from 'ahooks'
import { omit } from 'lodash-es'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  EquipmentByIdQuery,
  useEquipmentByIdQuery,
  useUpdateEquipmentByIdMutation,
} from 'm/equipment/index.generated'
import { UUIDV4 } from 'm/presets'

import { DeviceForm, FnSubmitEquipment } from './components/equipment-form'

const TITLE = `设备 - 编辑`

const PageConsumerEdit = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const { data } = useEquipmentByIdQuery({
    id,
  })

  const { mutate, isLoading } = useUpdateEquipmentByIdMutation({
    onSuccess() {
      pushSuccessMessage(`成功`)
    },
    onError(error) {
      pushErrorMessage(`失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useCallback<FnSubmitEquipment>(
    async values => {
      const formData = omit(values, [
        'id',
        'creator',
        'client',
        'equipmentType',
        'createdAt',
        'updatedAt',
      ])

      formData.equipmentTypeId = values.equipmentType?.id

      mutate({
        id,
        data: formData,
      })
    },
    [id, mutate]
  )

  const input = useCreation(
    () =>
      data?.detail
        ? (omit(data?.detail, ['creater']) as Omit<
            EquipmentByIdQuery['detail'],
            'creater'
          >)
        : undefined,
    [data?.detail]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <DeviceForm
        isEdit
        data={input}
        isLoading={isLoading}
        submitForm={onSubmit}
      />
    </Page>
  )
}

export default PageConsumerEdit
