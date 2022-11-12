import { useField } from 'react-final-form'
import { useUpdateEffect } from 'ahooks'
import { useMemo, useState } from 'react'
import { Button, Stack, Tooltip, Typography } from '@mui/material'

import { Conclusions, conclusionMap } from 'm/common'
import { InspectionRequirement, InspectionTypeEnum } from 'm/presets'

import { ConclusionSelect } from './conclusion-select'
import { StyledConclusion } from './styled'

export interface BaseConclusionProps {
  itemFieldName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getConclusionMethod: (data: any, requirement: any) => Conclusions
}

export const BaseConclusion = ({
  itemFieldName,
  getConclusionMethod,
}: BaseConclusionProps) => {
  const { input: inputConclusion } = useField<Conclusions>(
    `${itemFieldName}.conclusions`
  )
  const { input: inputInspectionItem } =
    useField<InspectionTypeEnum>('inspectionItem')
  const { input: inputData } = useField(`${itemFieldName}.data`)
  const { input: inputRequirement } = useField<InspectionRequirement>(
    `${itemFieldName}.requirement`
  )

  const [interConclusion, setInterConclusion] = useState<Conclusions>(
    inputConclusion.value
  )

  const isDifferent = useMemo(
    () => interConclusion !== inputConclusion.value,
    [interConclusion, inputConclusion.value]
  )

  const onChange = () => {
    inputConclusion.onChange(interConclusion)
  }

  useUpdateEffect(() => {
    if (
      inputInspectionItem.value === InspectionTypeEnum.None ||
      inputInspectionItem.value === InspectionTypeEnum.Other
    ) {
      setInterConclusion(Conclusions.Unknown)
    }

    const requirement =
      inputInspectionItem.value === InspectionTypeEnum.State
        ? inputRequirement.value.state
        : inputRequirement.value.acceptance
    setInterConclusion(getConclusionMethod(inputData.value, requirement))
  }, [
    inputData.value,
    inputInspectionItem.value,
    inputRequirement.value,
    setInterConclusion,
    getConclusionMethod,
  ])

  return (
    <StyledConclusion>
      {isDifferent && (
        <Stack direction="row" spacing={1}>
          <Button variant="text" onClick={onChange}>
            使用建议
          </Button>
          <Typography variant="body2" className="suggest">
            {conclusionMap[interConclusion]}
          </Typography>
        </Stack>
      )}
      <ConclusionSelect {...inputConclusion} />
    </StyledConclusion>
  )
}
