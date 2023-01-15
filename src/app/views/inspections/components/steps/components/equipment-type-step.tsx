import { Tooltip, Typography, Button, Stack, IconButton } from '@mui/material'
import { MdInfo } from 'react-icons/md'
import { useMemo, useState } from 'react'
import { useMemoizedFn } from 'ahooks'

import { EquipmentType, InspectionType } from 'm/presets'

import { StepItem } from './styled'

import { EquipmentTypeSelector } from '@@/equipmenttype-selector'
import { InspectionItemTypeSelector } from '@@/inspection-item-type-selector'

export interface EquipmentTypeStepProps {
  onNext: (equipmentType: EquipmentType, inspectionType: InspectionType) => void
}

export const EquipmentTypeStep = ({ onNext }: EquipmentTypeStepProps) => {
  const [equipmentTypeValue, setEquipmentTypeValue] = useState<
    EquipmentType | undefined
  >()

  const [inspectionTypeValue, setInspectionTypeValue] = useState<
    InspectionType | undefined
  >()

  const onInspectionTypeChange = useMemoizedFn((value: InspectionType) => {
    setInspectionTypeValue(value)
  })

  const onClickNext = useMemoizedFn(() => {
    if (equipmentTypeValue && inspectionTypeValue) {
      onNext(equipmentTypeValue, inspectionTypeValue)
    }
  })

  const nextDisabled = useMemo(
    () => !equipmentTypeValue?.id || !inspectionTypeValue?.type,
    [equipmentTypeValue, inspectionTypeValue]
  )

  const header = useMemo(
    () => (
      <>
        <Typography variant="h5" component="span">
          请选择设备类型
        </Typography>
        <Tooltip
          arrow
          placement="top"
          title={
            <>
              <p>为什么要选择设备类型？</p>
              <ul>
                <li>设备类型决定了该设备有哪些可用的检测项</li>
                <li>请注意，设备类型一旦选中，则不可再更改</li>
              </ul>
            </>
          }
        >
          <IconButton color="warning">
            <MdInfo />
          </IconButton>
        </Tooltip>
      </>
    ),
    []
  )

  const footer = useMemo(
    () => (
      <>
        <Button
          variant="contained"
          onClick={onClickNext}
          disabled={nextDisabled}
        >
          下一步
        </Button>
      </>
    ),
    [nextDisabled, onClickNext]
  )

  return (
    <StepItem header={header} footer={footer}>
      <Stack
        direction="column"
        spacing={3}
        alignItems="stretch"
        minWidth="360px"
      >
        <EquipmentTypeSelector
          label="设备类型"
          value={equipmentTypeValue}
          onChange={setEquipmentTypeValue}
        />
        <InspectionItemTypeSelector
          value={inspectionTypeValue}
          onChange={onInspectionTypeChange}
        />
      </Stack>
    </StepItem>
  )
}
