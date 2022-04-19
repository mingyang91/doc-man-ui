import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

export interface CardContainerProps extends BoxProps {
  variant?: 'default' | 'panel'
}

export const CardContainer = ({
  variant,
  children,
  ...rest
}: CardContainerProps) => {
  const styles = useStyleConfig('CardContainer', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}
