import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

export interface CardBodyProps extends BoxProps {
  variant?: 'default' | 'panel'
}

export const CardBody = ({ variant, children, ...rest }: CardBodyProps) => {
  const styles = useStyleConfig('CardBody', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}
