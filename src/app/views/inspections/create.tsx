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

import { useCreateInspectionReportMutation } from 'm/inspection-report/index.generated'

import { InspectionForm } from './components/inspection-form'
import { FnSubmitInspectionReport } from './components/inspection-form/utils'

const TITLE = `检验检测报告 - 创建`

const PageInspectionCreate = () => {
  const navigate = useNavigate()
  const { activeRouteConfig } = useMenuAndRoutes()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const { mutate, isLoading } = useCreateInspectionReportMutation({
    onSuccess() {
      pushSuccessMessage(`创建成功`)
    },
    onError(error) {
      pushErrorMessage(`创建失败: ${(error as Error).message}`)
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
          onSuccess: data => {
            if (shouldContinue) {
              formApi.reset()
            } else {
              navigate(
                generatePath(ROUTES.equipmentDetail, { id: data.returning?.id })
              )
            }
          },
        }
      )
    },
    [mutate, navigate, shouldContinue]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <InspectionForm isLoading={isLoading} submitForm={submitForm} />
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

export default PageInspectionCreate
