import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

export interface CardHeaderProps extends BoxProps {
  variant?: 'default' | 'panel'
}

export const CardHeader = ({ variant, children, ...rest }: CardHeaderProps) => {
  const styles = useStyleConfig('CardHeader', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}
