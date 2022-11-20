import { Alert, Grid, Stack } from '@mui/material'
import { useMemo } from 'react'
import { Form } from 'react-final-form'
import { useMemoizedFn } from 'ahooks'
import { TextField } from 'mui-rff'
import { LoadingButton } from '@mui/lab'
import { useNavigate, generatePath } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useCreateEquipmentTypesMutation,
  CreateEquipmentTypesMutationVariables,
} from 'm/equipment-type/index.generated'

const TITLE = '设备类型 - 新增'

const PageEquipmentTypeCreate = () => {
  const navigate = useNavigate()
  const { activeRouteConfig } = useMenuAndRoutes()
  const { pushSuccessMessage, pushErrorMessage } = useMessage()

  const initialValues = useMemo<CreateEquipmentTypesMutationVariables>(
    () => ({
      name: '',
      displayName: '',
      comment: '',
    }),
    []
  )

  const { mutate, isLoading } = useCreateEquipmentTypesMutation({
    onSuccess() {
      pushSuccessMessage(`创建成功`)
    },
    onError(error) {
      pushErrorMessage(`创建失败: ${(error as Error).message}`)
    },
  })

  const onSubmit = useMemoizedFn(
    (value: CreateEquipmentTypesMutationVariables) => {
      mutate(value, {
        onSuccess(data, variables, context) {
          navigate(
            generatePath(ROUTES.equipmentTypeDetail, {
              id: data.insert_equipment_types_one?.id,
            })
          )
        },
      })
    }
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />

      <Form<CreateEquipmentTypesMutationVariables>
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ submitting, pristine, handleSubmit }) => (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField name="name" label="设备类型标识" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField name="displayName" label="设备名" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="comment" label="备注" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Alert variant="filled" color="info">
                设备类型创建之后，可以对该类型设备添加预设的检测项。
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Stack
                alignItems="flex-end"
                sx={{
                  mt: 3,
                  display: {
                    xs: 'flex',
                    lg: 'flex',
                    xl: 'none',
                  },
                }}
              >
                <LoadingButton
                  type="submit"
                  variant="contained"
                  disabled={submitting || pristine}
                  loading={submitting || isLoading}
                  onClick={handleSubmit}
                >
                  创建设备类型
                </LoadingButton>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Form>
    </Page>
  )
}

export default PageEquipmentTypeCreate
