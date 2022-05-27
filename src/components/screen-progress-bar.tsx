import { Portal, Box, LinearProgress, LinearProgressProps } from '@mui/material'
import { useState, useCallback, PropsWithChildren } from 'react'
import { useBoolean } from 'ahooks'
import extend from 'dayjs'
import { useImmer } from 'use-immer'

import { createContainer } from '@utils/create-container'

const ProgressBarContainer = createContainer(
  function useProgressBarContainer() {
    const [isShow, { setTrue, setFalse }] = useBoolean(false)

    const [progressProps, setProgressProps] = useImmer<LinearProgressProps>({
      color: 'info',
      variant: 'determinate',
    })

    const startProgress = useCallback(
      (props: LinearProgressProps) => {
        setProgressProps(() => props)
        setTrue()
      },
      [setProgressProps, setTrue]
    )

    const updateProgressValue = useCallback(
      (value: number) => {
        setProgressProps(draft => {
          draft.value = value
        })
      },
      [setProgressProps]
    )

    const useProgressProps = useCallback(
      () => ({
        isShow,
        progressProps,
      }),
      [isShow, progressProps]
    )

    return {
      startProgress,
      updateProgressValue,
      stopProgress: setFalse,
      progressProps,
      useProgressProps,
    }
  }
)

export const ScreenProgressBarProvider = ProgressBarContainer.Provider

export const useScreenProgressBar = ProgressBarContainer.useContainer

export const ScreenProgressBar = () => {
  const { useProgressProps } = useScreenProgressBar()
  const { isShow, progressProps } = useProgressProps()
  return isShow ? (
    <Portal>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 99999,
        }}
      >
        <LinearProgress {...progressProps} />
      </Box>
    </Portal>
  ) : null
}

export const ScreenProgressBarContainer = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <ScreenProgressBarProvider>
      {children}
      <ScreenProgressBar />
    </ScreenProgressBarProvider>
  )
}
