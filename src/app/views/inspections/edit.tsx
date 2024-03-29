import { useParams } from 'react-router-dom'
import { omit } from 'lodash-es'
import { useCallback, useMemo } from 'react'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import { UUIDV4 } from 'm/presets'
import {
  useUpdateInspectionReportByIdMutation,
  useInspectionReportByIdQuery,
} from 'm/inspection-report/index.generated'

import { InspectionForm } from './components/inspection-form'
import {
  FnSubmitInspectionReport,
  InspectionReportFormData,
} from './components/inspection-form/utils'

import i18n from 'strings/i18n'

const TITLE = `${i18n.t('设备检验检测')} - 编辑`

const PageInspectionEdit = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const { data, isLoading: isQueryLoading } = useInspectionReportByIdQuery({
    id,
  })

  const { mutate, isLoading: isMutationLoading } =
    useUpdateInspectionReportByIdMutation({
      onSuccess() {
        pushSuccessMessage(`成功`)
      },
      onError(error) {
        pushErrorMessage(`失败: ${(error as Error).message}`)
      },
    })

  const isLoading = useMemo(
    () => isQueryLoading || isMutationLoading,
    [isQueryLoading, isMutationLoading]
  )

  const submitForm = useCallback<FnSubmitInspectionReport>(
    async (values, formApi) => {
      const updateValue = omit(values, ['creator', 'id'])

      updateValue.creatorId = values.creator?.id

      mutate({
        id,
        data: updateValue,
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
      <InspectionForm
        isLoading={isLoading}
        data={
          (data?.detail as InspectionReportFormData | undefined) || undefined
        }
        isEdit
        submitForm={submitForm}
      />
    </Page>
  )
}

export default PageInspectionEdit
