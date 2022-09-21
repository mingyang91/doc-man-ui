import { Box, Checkbox } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { ChangeEvent, forwardRef, memo, useMemo } from 'react'

import { Cell, CellProps, HeaderCell, HeaderCellProps } from './styled'
import { CheckedItems, OnCheckChange } from './type'

/*----- check cell -----*/

type OnItemCheckChange = (
  isChecked: boolean,
  value: string | number,
  newChecked: Set<string | number>
) => void

export interface CheckCellProps extends Omit<CellProps, 'onChange'> {
  checkedItems: Set<string | number>
  field: string
  onItemCheckChange?: OnItemCheckChange
  onCheckedChange?: OnCheckChange
}

export const CheckCell = memo(
  forwardRef<HTMLDivElement, CheckCellProps>(
    (
      {
        checkedItems,
        field,
        rowData,
        onItemCheckChange,
        onCheckedChange,
        ...restProps
      },
      ref
    ) => {
      const value = rowData[field]

      const isChecked = checkedItems.has(value)

      const handleChange = useMemoizedFn<
        (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
      >((_, checked) => {
        const newCheckedItems = produce(checkedItems, draft => {
          checked ? draft.add(value) : draft.delete(value)
        })
        onItemCheckChange?.(checked, value, newCheckedItems)
        onCheckedChange?.(newCheckedItems)
      })

      return (
        <Cell {...restProps} dataKey={field} ref={ref}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Checkbox checked={isChecked} onChange={handleChange} />
          </Box>
        </Cell>
      )
    }
  )
)

type OnAllCheckChange = (
  isAllChecked: boolean,
  AllData: (string | number)[]
) => void

export interface CheckHeaderCellProps
  extends Omit<HeaderCellProps, 'onChange' | 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  field: string
  checkedItems: CheckedItems
  onAllCheckChange?: OnAllCheckChange
  onCheckedChange?: OnCheckChange
}

export const CheckCellHeader = memo(
  forwardRef<HTMLDivElement, CheckHeaderCellProps>(
    (
      {
        data,
        field,
        checkedItems,
        onAllCheckChange,
        onCheckedChange,
        ...restProps
      },
      ref
    ) => {
      const AllData = useMemo(
        () => data.map(item => item[field] as string | number),
        [data, field]
      )

      const checkState = useMemo(() => {
        const isNotEmpty = AllData.length > 0
        const isAllChecked = isNotEmpty && AllData.length === checkedItems.size
        const isIndeterminate = !isAllChecked && checkedItems.size > 0

        return {
          isAllChecked,
          isIndeterminate,
        }
      }, [AllData.length, checkedItems.size])

      const handleChange = useMemoizedFn<
        (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
      >((_, checked) => {
        onAllCheckChange?.(checked, Array.from(AllData))
        onCheckedChange?.(
          checked ? new Set(AllData) : new Set<string | number>()
        )
      })

      return (
        <HeaderCell {...restProps} dataKey={field} ref={ref}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Checkbox
              checked={checkState.isAllChecked}
              indeterminate={checkState.isIndeterminate}
              onChange={handleChange}
            />
          </Box>
        </HeaderCell>
      )
    }
  )
)

/*----- editable cell  -----*/
// TODO: editable cell
