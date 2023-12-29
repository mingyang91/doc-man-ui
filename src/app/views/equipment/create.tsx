import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { omit } from 'lodash-es'
import { ChangeEvent, useCallback, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import { useCreateEquipmentMutation } from 'm/equipment/index.generated'

import { DeviceForm, FnSubmitEquipment } from './components/equipment-form'

import i18n from 'strings/i18n'

const TITLE = `${i18n.t('设备')} - ${i18n.t('新增')}`

const PageInspectionCreate = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const navigate = useNavigate()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const { mutate, isLoading } = useCreateEquipmentMutation({
    onSuccess() {
      pushSuccessMessage(`成功`)
    },
    onError(error) {
      pushErrorMessage(`失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useCallback<FnSubmitEquipment>(
    async (values, formApi) => {
      const insertValue = omit(values, ['client', 'creator', 'equipmentType'])

      insertValue.clientId = values.client?.id
      insertValue.equipmentTypeId = values.equipmentType?.id

      mutate(
        {
          data: insertValue,
        },
        {
          onSuccess: data => {
            if (shouldContinue) {
              formApi.reset()
            } else {
              navigate(
                generatePath(ROUTES.equipmentDetail, { id: data.data?.id })
              )
            }
          },
        }
      )
    },
    [mutate, navigate, shouldContinue]
  )

  const onContinueChange = useMemoizedFn<
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >((_, checked) => setShouldContinue(checked))

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <DeviceForm isLoading={isLoading} submitForm={onSubmit} />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={shouldContinue} onChange={onContinueChange} />
          }
          label={i18n.t("创建后继续")}
        />
      </FormGroup>
    </Page>
  )
}

export default PageInspectionCreate
