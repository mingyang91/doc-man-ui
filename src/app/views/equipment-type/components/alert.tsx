import { Alert, AlertTitle, Typography, Link } from '@mui/material'

import i18n from 'strings/i18n'

export const EditAlert = () => (
  <Alert severity="warning" sx={{ mb: 3 }}>
    <AlertTitle>{i18n.t('非开发人员不要修改')}</AlertTitle>
    <Typography variant="body1">
      {i18n.t('此功能不完善，数据修改需研发人员配合，否则可能导致系统崩溃。')}
    </Typography>
    <Typography variant="body1">
      {i18n.t('判定规则代码参照了')}mongodb查询语法，具体使用了{' '}
      <Link target="_blank" href="https://www.npmjs.com/package/rule-judgment">
        {i18n.t('这个解析库')}
      </Link>
    </Typography>
  </Alert>
)
