export type User = {
  uid: string
  displayName: string
  email?: string
  avatar?: string
}

export type DomainDevice = {
  uuid: string
  reportNo?: string // 报告编号
  accordingTo?: string // 检测依据
  address?: string // 检测地址
  create_time: string
  update_time: string
  deviceNo?: string // 设备编号
  equipment?: string // 检测仪器
  item?: string // 检测项目
  modelNo?: string // 设备型号
  name?: string // 设备名称
  place?: string // 设备场所
  requester?: string // 委托单位
  sampleNo?: string // 样品标识
  vendor?: string // 制造厂商
  owner?: User //创建者
}
