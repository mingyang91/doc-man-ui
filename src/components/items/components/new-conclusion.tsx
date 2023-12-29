import { useDeepCompareEffect } from 'ahooks'
import { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useField } from 'react-final-form'

import { Conclusions, conclusionMap } from 'm/common'
import {
  InspectionRequirement,
  InspectionRequirementChild,
  InspectionTypeEnum,
} from 'm/presets'

import { ConclusionSelect } from './conclusion-select'
import { StyledConclusion } from './styled'

import i18n from 'strings/i18n'

export interface NewConclusionProps<T> {
  name: string
  inspectionItem: InspectionTypeEnum
  data: T
  requirement: InspectionRequirement
  getConclusionMethod: (
    data: T,
    requirement: InspectionRequirementChild
  ) => Conclusions
}

export function NewConclusion<T>({
  name,
  inspectionItem: inputInspectionItem,
  data: inputData,
  requirement: inputRequirement,
  getConclusionMethod,
}: NewConclusionProps<T>) {
  const [interConclusion, setInterConclusion] = useState<Conclusions>(
    Conclusions.Unknown
  )

  const { input: conclusion } = useField<Conclusions>(`${name}.conclusions`, {
    initialValue: Conclusions.Unknown,
  })

  const isDifferent = interConclusion !== conclusion.value

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
        {i18n.t('结论')}：
      </Typography>
      {isDifferent && (
        <Stack direction="row" spacing={1}>
          <Button
            variant="text"
            onClick={() => conclusion.onChange(interConclusion)}
          >
            {i18n.t('使用建议')}
          </Button>
          <Typography variant="body2" className="suggest">
            {conclusionMap[interConclusion]}
          </Typography>
        </Stack>
      )}
      <ConclusionSelect
        value={conclusion.value}
        onChange={setInterConclusion}
      />
    </StyledConclusion>
  )
}
