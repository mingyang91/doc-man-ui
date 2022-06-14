import {
  Stack,
  Tooltip,
  IconButton,
  Typography,
  TextField,
} from '@mui/material'
import {
  RiFileWordFill,
  RiEditFill,
  RiCheckLine,
  RiCloseFill,
} from 'react-icons/ri'
import { useCallback, useState, FormEventHandler, memo } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { isNil } from 'lodash-es'
import { useBoolean } from 'ahooks'

import { ROUTES } from '@/app/routes'

import { useDeviceDetail } from '../index'

const DeviceReportNo = memo(() => {
  const { reportNo } = useDeviceDetail()

  const isReportNil = !isNil(reportNo)

  const [inputReportNo, setInputReportNo] = useState(reportNo || '')

  const [isEdit, { setTrue, setFalse }] = useBoolean(!isReportNil)

  const onInput = useCallback<FormEventHandler<HTMLInputElement>>(e => {
    setInputReportNo(e.currentTarget.value)
  }, [])

  const onUpdate = useCallback(() => {
    setFalse()
  }, [setFalse])

  const innerChildren =
    isReportNil || isEdit ? (
      <>
        <TextField
          type="text"
          size="small"
          variant="standard"
          placeholder="报告编号未设定"
          value={inputReportNo}
          onInput={onInput}
        />
        <Tooltip title="取消">
          <IconButton aria-label="取消" onClick={setFalse}>
            <RiCloseFill />
          </IconButton>
        </Tooltip>
        <Tooltip title="确定" onClick={onUpdate}>
          <IconButton aria-label="确定">
            <RiCheckLine />
          </IconButton>
        </Tooltip>
      </>
    ) : (
      <>
        <Typography variant="body1">报告编号: {reportNo || ' - '}</Typography>
        <Tooltip title="编辑">
          <IconButton aria-label="编辑" onClick={setTrue}>
            <RiEditFill />
          </IconButton>
        </Tooltip>
      </>
    )

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ alignSelf: 'flex-end' }}
    >
      {innerChildren}
    </Stack>
  )
})

export const DetailToolbar = () => {
  const navigate = useNavigate()

  const value = useDeviceDetail()

  const handleEdit = useCallback(() => {
    navigate(generatePath(ROUTES.deviceEdit, { id: value.id }))
  }, [navigate, value.id])

  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        sx={{ mb: 5 }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Tooltip title="编辑">
            <IconButton aria-label="编辑" onClick={handleEdit}>
              <RiEditFill />
            </IconButton>
          </Tooltip>
          <Tooltip title="生成Word格式报告">
            <IconButton aria-label="生成Word格式报告" onClick={handleEdit}>
              <RiFileWordFill />
            </IconButton>
          </Tooltip>
        </Stack>
        <DeviceReportNo />
      </Stack>
    </>
  )
}
