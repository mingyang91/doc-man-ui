import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useCreateInspectionTypesMutation,
  useEquipmentTypesByIdQuery,
} from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'

import {
  InspectionEnumForm,
  InspectionEnumFormFn,
} from './components/inspection-type-form'
import { initialInspectionTypeEnumFormData } from './components/inspection-type-form/utils'
import { EditAlert } from './components/alert'

const TITLE = '设备类型 - 检测类型 - 详情'

const PageInspectionItemEnumDetail = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id = '' }: { id?: UUIDV4 } = useParams()

  const navigate = useNavigate()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const onContinueChange = useMemoizedFn<
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >((_, checked) => setShouldContinue(checked))

  const initialValue = initialInspectionTypeEnumFormData()

  const { mutate, isLoading } = useCreateInspectionTypesMutation({
    onSuccess() {
      pushSuccessMessage(`创建检测类型成功`)
    },
    onError(error) {
      pushErrorMessage(`创建检测类型失败: ${(error as Error).message}`)
    },
  })

  const { refetch: refetchEquipmentType } = useEquipmentTypesByIdQuery({
    id,
  })

  const onSubmit = useCallback<InspectionEnumFormFn>(
    async (values, formApi) => {
      values.equipmentTypeId = id

      mutate(
        {
          input: values,
        },
        {
          onSuccess: data => {
            refetchEquipmentType()
            if (shouldContinue) {
              formApi.reset()
            } else {
              navigate(
                generatePath(ROUTES.equipmentInspectionTypeDetail, {
                  id: data.data?.id,
                })
              )
            }
          },
        }
      )
    },
    [id, mutate, navigate, refetchEquipmentType, shouldContinue]
  )

  const breadcrumbs = useMemo(() => {
    if (activeRouteConfig.breadcrumbs?.length) {
      const breadcrumbs = [...activeRouteConfig.breadcrumbs]
      breadcrumbs[2].href = generatePath(ROUTES.equipmentTypeDetail, { id })
      return breadcrumbs
    }
    return []
  }, [activeRouteConfig.breadcrumbs, id])

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs heading={TITLE} links={breadcrumbs} />
      <EditAlert />
      <InspectionEnumForm
        isLoading={isLoading}
        equipmentTypeId={id}
        initialValue={initialValue}
        onSubmit={onSubmit}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={shouldContinue} onChange={onContinueChange} />
          }
          label="创建后继续"
        />
      </FormGroup>
    </Page>
  )
}

export default PageInspectionItemEnumDetail
