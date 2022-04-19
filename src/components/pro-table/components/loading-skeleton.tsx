import { ReactNode } from 'react'
import { Skeleton, SkeletonProps, Stack } from '@chakra-ui/react'

export type LoadingSkeletonProps = {
  length?: number
  inlineProps?: SkeletonProps
}

export const LoadingSkeleton = ({
  length = 3,
  inlineProps = {
    height: '36px',
  },
}: LoadingSkeletonProps) => {
  const items: ReactNode[] = []

  for (let i = 0; i < length; i++) {
    items.push(<Skeleton key={`skeleton-${i}`} {...inlineProps} />)
  }

  return <Stack spacing="3">{items}</Stack>
}
