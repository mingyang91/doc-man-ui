import { Typography } from '@mui/material'
import { FieldRenderProps } from 'react-final-form'

import { HighlightSyntax } from 'd/components/highlight-syntax'

import { InspectionReportItem } from 'm/presets'

// 如果没有匹配到组件，用这个fallback，只提供显示，不提供编辑
export const DefaultItem = ({
  input: { value },
}: FieldRenderProps<InspectionReportItem>) => {
  return (
    <>
      <Typography variant="body1" component="section" flex="1">
        未知的检测项类型，数据如下
      </Typography>
      <HighlightSyntax code={JSON.stringify(value, null, 2)} />
    </>
  )
}
