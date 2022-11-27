import { Alert, AlertTitle, Typography, Link } from '@mui/material'

export const EditAlert = () => (
  <Alert severity="warning" sx={{ mb: 3 }}>
    <AlertTitle>非开发人员不要修改</AlertTitle>
    <Typography variant="body1">
      此功能不完善，数据修改需研发人员配合，否则可能导致系统崩溃。
    </Typography>
    <Typography variant="body1">
      判定规则代码参照了 mongodb 查询语法，具体使用了{' '}
      <Link target="_blank" href="https://www.npmjs.com/package/rule-judgment">
        这个解析库
      </Link>
    </Typography>
  </Alert>
)
