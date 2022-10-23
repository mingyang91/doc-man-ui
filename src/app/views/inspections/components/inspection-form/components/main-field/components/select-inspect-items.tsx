import { Button, MenuItem, MenuList, Paper, Popover } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import { memo, MouseEvent } from 'react'
import { useFieldArray } from 'react-final-form-arrays'
import { MdAddCircle } from 'react-icons/md'

import Iconify from 'd/components/iconify'

import { InspectionReportItem } from 'm/presets'

/**
 * 选择可用的检测项目，每添加一条，就会从列表中移除
 */

export type SelectInspectItemsProps = {
  options: InspectionReportItem[]
}

export const SelectInspectItems = memo(
  ({ options }: SelectInspectItemsProps) => {
    const popupState = usePopupState({
      variant: 'popover',
      popupId: 'data-inspection-item-add',
    })

    const { fields } = useFieldArray<InspectionReportItem>('items')

    const onCheck = useMemoizedFn(
      (e: MouseEvent<HTMLLIElement>, value: InspectionReportItem) => {
        fields.push(value)
        popupState.setOpen(false)
      }
    )

    return (
      <>
        <Button
          startIcon={<Iconify icon={MdAddCircle} />}
          {...bindTrigger(popupState)}
        >
          添加可选的检测项
        </Button>
        <Popover {...bindPopover(popupState)}>
          <Paper>
            <MenuList>
              {options.map(option => (
                <MenuItem key={option.name} onClick={e => onCheck(e, option)}>
                  {option.name || option.displayName}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </Popover>
      </>
    )
  }
)
