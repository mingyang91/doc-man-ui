import { Typography } from '@mui/material'
import { useMemo } from 'react'

import { HighlightSyntax } from 'd/components/highlight-syntax'

import { isDevelopment } from 'com/const'

import { ItemComponentProps } from './type'

import i18n from 'strings/i18n'

type DefaultItemProps = ItemComponentProps<{}>

// 如果没有匹配到组件，用这个fallback，只提供显示，不提供编辑
export const DefaultItem = ({ item }: DefaultItemProps) => {
  const stringify = useMemo(() => {
    try {
      return JSON.stringify(item, null, 2)
    } catch (e) {
      isDevelopment && console.error(e)
      return ''
    }
  }, [item])

  return (
    <>
      <Typography variant="body1" component="section" flex="1">
        {i18n.t('未知的检测项目类型，数据如下')}
      </Typography>
      <HighlightSyntax code={stringify} />
    </>
  )
}
