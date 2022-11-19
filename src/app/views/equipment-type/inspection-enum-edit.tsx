import { useCallback, useMemo } from 'react'
import { generatePath, useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useInspectionTypesDetailQuery,
  useUpdateInspectionTypesByIdMutation,
} from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'

import {
  InspectionEnumForm,
  InspectionEnumFormFn,
} from './components/equipment-type-form'
import { InspectionTypeEnumFormData } from './components/equipment-type-form/utils'
import { EditAlert } from './components/alert'

const TITLE = '设备类型 - 检测类型 - 详情'

const PageInspectionTypeDetail = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id = '', itemId = '' }: { id?: UUIDV4; itemId?: UUIDV4 } = useParams()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const {
    data,
    isLoading: isQueryLoading,
    refetch,
  } = useInspectionTypesDetailQuery(
    {
      id: itemId,
    },
    {
      enabled: !!itemId,
    }
  )

  const { mutate, isLoading: isMutationLoading } =
    useUpdateInspectionTypesByIdMutation({
      onSuccess() {
        console.log('onSuccess')
        pushSuccessMessage(`更新检测类型成功`)
        refetch()
      },
      onError(error) {
        pushErrorMessage(`更新检测类型失败: ${(error as Error).message}`)
      },
    })

  const onSubmit = useCallback<InspectionEnumFormFn>(
    async values => {
      console.log('values', values)
      mutate({
        id: itemId,
        object: values,
      })
    },
    [itemId, mutate]
  )

  const breadcrumbs = useMemo(() => {
    if (activeRouteConfig.breadcrumbs?.length) {
      const breadcrumbs = [...activeRouteConfig.breadcrumbs]
      breadcrumbs[2].href = generatePath(ROUTES.equipmentTypeDetail, { id })
      return breadcrumbs
    }
    return []
  }, [activeRouteConfig.breadcrumbs, id])

  const isLoading = isQueryLoading || isMutationLoading

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs heading={TITLE} links={breadcrumbs} />
      <EditAlert />
      <InspectionEnumForm
        isEdit
        isLoading={isLoading}
        equipmentTypeId={id}
        initialValue={(data?.data as InspectionTypeEnumFormData) || undefined}
        onSubmit={onSubmit}
      />
    </Page>
  )
}

export default PageInspectionTypeDetail
