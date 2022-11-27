import { BaseConclusion } from '../../components/conclusion'
import { getUHHVLConclusion } from '../utils'

export interface UHHVLConclusionProps {
  name: string
}

export const UHHVLConclusion = ({ name }: UHHVLConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getUHHVLConclusion}
    />
  )
}
