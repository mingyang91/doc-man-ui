import { BaseConclusion } from '../../components/conclusion'
import { getTVIDConclusion } from '../utils'

export interface TVIDConclusionProps {
  name: string
}

export const TVIDConclusion = ({ name }: TVIDConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getTVIDConclusion}
    />
  )
}
