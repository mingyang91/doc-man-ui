import {
  Alert,
  AlertTitle,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import { useCreateInspectionTypesMutation } from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'

import { InspectionForm, InspectionFormFn } from './components/inspection-form'
import { initialInspectionTypesFormData } from './components/inspection-form/utils'

const TITLE = '设备类型 - 检测类型 - 详情'

const PageInspectionTypeDetail = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id = '' }: { id?: UUIDV4 } = useParams()

  const navigate = useNavigate()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const onContinueChange = useMemoizedFn<
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >((_, checked) => setShouldContinue(checked))

  const initialValue = initialInspectionTypesFormData()

  const { mutate, isLoading } = useCreateInspectionTypesMutation({
    onSuccess() {
      pushSuccessMessage(`创建检测类型成功`)
    },
    onError(error) {
      pushErrorMessage(`创建检测类型失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useCallback<InspectionFormFn>(
    async (values, formApi) => {
      mutate(
        {
          input: values,
        },
        {
          onSuccess: data => {
            if (shouldContinue) {
              formApi.reset()
            } else {
              navigate(generatePath(ROUTES.equipmentDetail, { id: data.data?.id }))
            }
          },
        }
      )
    },
    [mutate, navigate, shouldContinue]
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
      <Alert severity="warning" sx={{ mb: 3 }}>
        <AlertTitle>非开发人员不要修改</AlertTitle>
        此功能不完善，数据修改需研发人员配合，否则可能导致系统崩溃。
      </Alert>
      <InspectionForm
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

export default PageInspectionTypeDetail
