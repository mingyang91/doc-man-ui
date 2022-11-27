import { BaseConclusion } from '../../components/conclusion'
import { getRORConclusion } from '../utils'

export interface RORConclusionProps {
  name: string
}

export const RORConclusion = ({ name }: RORConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getRORConclusion}
    />
  )
}
