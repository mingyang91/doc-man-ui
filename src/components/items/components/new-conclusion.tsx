import { useDeepCompareEffect } from 'ahooks'
import { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'

import { Conclusions, conclusionMap } from 'm/common'
import {
  InspectionRequirement,
  InspectionRequirementChild,
  InspectionTypeEnum,
} from 'm/presets'

import { ConclusionSelect } from './conclusion-select'
import { StyledConclusion } from './styled'

export interface NewConclusionProps<T> {
  conclusions: Conclusions
  inspectionItem: InspectionTypeEnum
  data: T
  requirement: InspectionRequirement
  getConclusionMethod: (
    data: T,
    requirement: InspectionRequirementChild
  ) => Conclusions
}

export function NewConclusion<T>({
  conclusions: inputConclusion,
  inspectionItem: inputInspectionItem,
  data: inputData,
  requirement: inputRequirement,
  getConclusionMethod,
}: NewConclusionProps<T>) {
  const [interConclusion, setInterConclusion] =
    useState<Conclusions>(inputConclusion)

  const isDifferent = interConclusion !== inputConclusion

  const onChange = () => {
    // TODO: need refactory
    console.error('need refactory')
    // inputConclusion.onChange(interConclusion)
  }

  useDeepCompareEffect(() => {
    if (
      inputInspectionItem === InspectionTypeEnum.None ||
      inputInspectionItem === InspectionTypeEnum.Other
    ) {
      setInterConclusion(Conclusions.Unknown)
    }

    const requirement =
      inputInspectionItem === InspectionTypeEnum.State
        ? inputRequirement.state
        : inputRequirement.acceptance
    setInterConclusion(getConclusionMethod(inputData, requirement))
  }, [
    inputData,
    inputInspectionItem,
    inputRequirement,
    setInterConclusion,
    getConclusionMethod,
  ])

  return (
    <StyledConclusion>
      <Typography variant="body1" className="typo">
        结论：
      </Typography>
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
      <ConclusionSelect value={inputConclusion} />
    </StyledConclusion>
  )
}
