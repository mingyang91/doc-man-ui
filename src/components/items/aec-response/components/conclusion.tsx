import { BaseConclusion } from '../../components/conclusion'
import { getAECResponseConclusion } from '../utils'

export interface AECResponseConclusionProps {
  name: string
}

export const AECResponseConclusion = ({ name }: AECResponseConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getAECResponseConclusion}
    />
  )
}
