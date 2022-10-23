import { useModal } from 'ctx/modal'

import { EquipmentSearch, EquipmentSearchProps } from '../components/search'

export const useSearchModal = ({ onSelect }: EquipmentSearchProps) => {
  const [show, hide] = useModal<EquipmentSearchProps>(EquipmentSearch, [], {
    props: {
      onSelect(value) {
        onSelect?.(value)
        hide()
      },
    },
  })

  return [show, hide]
}
