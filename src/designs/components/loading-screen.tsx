import { m } from 'framer-motion'
// @mui
import { Box } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

//
import Logo from './logo'

// ----------------------------------------------------------------------

const RootStyle = styled('div')<{
  isFullScreen?: boolean
  height?: string
}>(({ theme, isFullScreen, height = '100%' }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height,
  position: isFullScreen ? 'fixed' : 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

function LoadingContent() {
  return (
    <>
      <m.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo disabledLink isCollapse sx={{ width: 64, height: 64 }} />
      </m.div>

      <Box
        component={m.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50px',
          position: 'absolute',
          border: theme =>
            `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />

      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '60px',
          position: 'absolute',
          border: theme =>
            `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </>
  )
}

export default function LoadingScreen() {
  return (
    <RootStyle isFullScreen>
      <LoadingContent />
    </RootStyle>
  )
}

export const Loading = ({ height }: { height?: string }) => {
  return (
    <RootStyle isFullScreen={false} height={height}>
      <LoadingContent />
    </RootStyle>
  )
}
