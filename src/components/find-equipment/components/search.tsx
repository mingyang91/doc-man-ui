import { isEmpty } from 'lodash-es'
import { useMemo, useState } from 'react'

import { Modal } from 'd/components/modal'

import { ModalComponentBaseProps } from 'ctx/modal'

import { FindEquipmentQueryVariables } from 'm/equipment/index.generated'

import { useFindEquipment } from '../hooks/query'
import { FindEquipmentResult, FindEquipmentRow } from '../utils'
import { FindEquipmentForm } from './form'
import { SearchResult } from './result'

export interface EquipmentSearchProps {
  onSelect: (value: FindEquipmentRow) => void
}

interface FindEquipmentModalProps
  extends ModalComponentBaseProps,
    EquipmentSearchProps {}

export const EquipmentSearch = ({
  isOpen,
  onClose,
  onSelect,
}: FindEquipmentModalProps) => {
  const [queryVariables, setQueryVariables] =
    useState<FindEquipmentQueryVariables>({})

  const { data, isLoading, isFetching } = useFindEquipment(
    queryVariables,
    !isEmpty(queryVariables)
  )

  const result = useMemo(() => data?.data as FindEquipmentResult, [data?.data])

  return (
    <Modal
      maxWidth="xl"
      isOpen={isOpen}
      onClose={onClose}
      showActionBar={false}
    >
      <FindEquipmentForm onChange={setQueryVariables} />
      <SearchResult
        data={result || []}
        isLoading={isLoading && isFetching}
        onSelect={onSelect}
      />
    </Modal>
  )
}
