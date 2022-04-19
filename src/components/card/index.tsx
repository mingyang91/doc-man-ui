import { ReactNode, PropsWithChildren } from 'react'

import { CardContainer } from './components/card-container'
import { CardHeader } from './components/card-header'
import { CardBody } from './components/card-body'

export type CardProps = PropsWithChildren<{
  header?: ReactNode
}>

export const Card = ({ header, children }: CardProps) => {
  return (
    <CardContainer overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      {header && <CardHeader p="6px 0px 22px 0px">{header}</CardHeader>}
      <CardBody>{children}</CardBody>
    </CardContainer>
  )
}
