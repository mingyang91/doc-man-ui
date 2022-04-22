export type User = {
  uid: string
  displayName: string
  email?: string
  avatar?: string
}

interface DomainData {
  id: string
  create_time: string
  update_time: string
}

export type DomainDeviceInput = {
  requester?: string // 委托单位
  address?: string // 检测地址
  reportNo?: string // 报告编号
  modelNo?: string // 设备型号
  deviceNo?: string // 设备编号
  vendor?: string // 制造厂商
  place?: string // 设备场所
  accordingTo?: string // 检测依据
  equipment?: string // 检测仪器
  name?: string // 设备名称
  sampleNo?: string // 样品标识
  item?: string // 检测项目
  owner?: User //创建者
}

export type DomainDevice = DomainDeviceInput & DomainData
