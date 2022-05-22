import dayjs, { locale, extend } from 'dayjs'
import zhCN from 'dayjs/locale/zh-cn'
import utc from 'dayjs/plugin/utc'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

locale(zhCN)
extend(relativeTime)
extend(advancedFormat)
extend(utc)
// ----------------------------------------------------------------------

export function fDate(date: Date | string | number) {
  return dayjs(date).format('YYYY-MM-DD')
}

export function fDateTime(date: Date | string | number) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

export function fTimestamp(date: Date | string | number) {
  return dayjs(date).unix()
}

export function fDateTimeSuffix(date: Date | string | number) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss a')
}

export function fToNow(date: Date | string | number) {
  return dayjs(date).toNow()
}

export function generateDateTime() {
  return dayjs().utc().toISOString()
}
