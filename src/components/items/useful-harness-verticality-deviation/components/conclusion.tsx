import { BaseConclusion } from '../../components/conclusion'
import { getUHVDConclusion } from '../utils'

export interface UHVDConclusionProps {
  name: string
}

export const UHVDConclusion = ({ name }: UHVDConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getUHVDConclusion}
    />
  )
}
