import { useCallback } from 'react'

import { DomainDevice } from 'graphql/type'

export type DocumentListProps = {
  title?: string
  dataSource?: DomainDevice[]
}

export const DocumentList = ({ title, dataSource }: DocumentListProps) => {
  const onRemove = useCallback((uuid: string) => {
    console.log('删除', uuid)
  }, [])

  const onUpload = useCallback((uuid: string) => {
    console.log('上传附件', uuid)
  }, [])

  return <></>
}
