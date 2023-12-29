import { generatePath, useNavigate } from 'react-router-dom'
import { ChangeEvent, useCallback, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { omit } from 'lodash-es'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useCreateInspectionReportMutation,
  useInspectionReportListQuery,
} from 'm/inspection-report/index.generated'

import { FnSubmitInspectionReport } from './components/inspection-form/utils'
import { InspectionStep } from './components/steps'

import i18n from 'strings/i18n'

const TITLE = `${i18n.t('设备检验检测')} - ${i18n.t('新增')}`

const PageInspectionCreate = () => {
  const navigate = useNavigate()
  const { activeRouteConfig } = useMenuAndRoutes()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const { refetch } = useInspectionReportListQuery()

  const { mutate } = useCreateInspectionReportMutation({
    onSuccess() {
      pushSuccessMessage(`成功`)
    },
    onError(error) {
      pushErrorMessage(`失败: ${(error as Error).message}`)
    },
  })

  const onContinueChange = useMemoizedFn<
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >((_, checked) => setShouldContinue(checked))

  const submitForm = useCallback<FnSubmitInspectionReport>(
    async (values, formApi) => {
      const insertValue = omit(values, ['creator'])

      insertValue.creatorId = values.creator?.id

      mutate(
        {
          data: insertValue,
        },
        {
          onSuccess: async data => {
            if (shouldContinue) {
              formApi.reset()
            } else {
              await refetch()
              navigate(
                generatePath(ROUTES.equipmentDetail, { id: data.returning?.id })
              )
            }
          },
        }
      )
    },
    [mutate, navigate, refetch, shouldContinue]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <InspectionStep submitForm={submitForm} />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={shouldContinue} onChange={onContinueChange} />
          }
          label={i18n.t('创建后继续')}
        />
      </FormGroup>
    </Page>
  )
}

export default PageInspectionCreate
