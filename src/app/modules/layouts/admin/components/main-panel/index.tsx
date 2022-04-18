import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

interface MainPanelProps extends BoxProps {
  variant?: string
}

export const MainPanel = ({ variant, children, ...rest }: MainPanelProps) => {
  const styles = useStyleConfig('MainPanel', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export const PanelContent = ({
  variant,
  children,
  ...rest
}: MainPanelProps) => {
  const styles = useStyleConfig('PanelContent', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}
export const PanelContainer = ({
  variant,
  children,
  ...rest
}: MainPanelProps) => {
  const styles = useStyleConfig('PanelContainer', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}
