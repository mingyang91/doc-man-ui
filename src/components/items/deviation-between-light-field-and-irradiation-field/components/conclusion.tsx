import { BaseConclusion } from '../../components/conclusion'
import { getDBLFAIFConclusion } from '../utils'

export interface DBLFAIFConclusionProps {
  name: string
}

export const DBLFAIFConclusion = ({ name }: DBLFAIFConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getDBLFAIFConclusion}
    />
  )
}
