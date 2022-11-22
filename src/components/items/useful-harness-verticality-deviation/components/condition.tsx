import { TextField } from 'mui-rff'

export interface UHVDConditionProps {
  name: string
}

export const UHVDCondition = ({ name }: UHVDConditionProps) => {
  return (
    <>
      <TextField name={`${name}.condition.left`} />
      <TextField name={`${name}.condition.option`} />
      <TextField name={`${name}.condition.right`} />
    </>
  )
}
