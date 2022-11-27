import { BaseConclusion } from '../../components/conclusion'
import { getConsistencyAmongAECChambers } from '../utils'

export interface ConsistencyAmongAECChambersConclusionProps {
  name: string
}

export const ConsistencyAmongAECChambersConclusion = ({
  name,
}: ConsistencyAmongAECChambersConclusionProps) => {
  return (
    <BaseConclusion
      itemFieldName={name}
      getConclusionMethod={getConsistencyAmongAECChambers}
    />
  )
}
