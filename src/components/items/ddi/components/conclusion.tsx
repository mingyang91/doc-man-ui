import { BaseConclusion } from '../../components/conclusion'

export interface DdiConclusionProps {
  name: string
}

export const DdiConclusion = ({ name }: DdiConclusionProps) => {
  return <BaseConclusion itemFieldName={name} />
}
