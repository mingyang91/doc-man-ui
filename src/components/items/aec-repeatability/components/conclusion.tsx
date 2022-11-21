import { BaseConclusion } from '../../components/conclusion'
import { getAECRepeatabilityConclusion } from '../utils'

export interface AECRepeatabilityConclusionProps {
  name: string
}

export const AECRepeatabilityConclusion = ({
  name,
}: AECRepeatabilityConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getAECRepeatabilityConclusion}
    />
  )
}
