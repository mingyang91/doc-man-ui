import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ChangeEvent, useCallback, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes/context'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import { useCreateClientsMutation } from 'm/clients/index.generated'

import { ConsumerForm, FnSubmitClient } from './components/consumer-form'

const TITLE = `委托单位 - 创建`

const PageConsumerCreate = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const navigate = useNavigate()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const [shouldContinue, setShouldContinue] = useState(false)

  const { mutate, isLoading } = useCreateClientsMutation({
    onSuccess() {
      pushSuccessMessage(`创建成功`)
    },
    onError(error) {
      pushErrorMessage(`创建失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useCallback<FnSubmitClient>(
    async (values, helpers) => {
      mutate(
        {
          data: values,
        },
        {
          onSuccess: data => {
            if (shouldContinue) {
              helpers.resetForm()
            } else {
              navigate(
                generatePath(ROUTES.consumerDetail, { id: data.data?.id })
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
      <ConsumerForm isLoading={isLoading} submitForm={onSubmit} />
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

export default PageConsumerCreate
