import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import { memo } from 'react'
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

    const { fields: fieldsItem1 } =
      useFieldArray<InspectionReportItem>('items1')

    const { fields: fieldsItem2 } =
      useFieldArray<InspectionReportItem>('items2')

    const isChecked = useMemoizedFn((value: InspectionReportItem) => {
      return (
        fieldsItem1.value.some(item => item.name === value.name) ||
        fieldsItem2.value.some(item => item.name === value.name)
      )
    })

    const onCheckedCallback = useMemoizedFn((value: InspectionReportItem) => {
      if (value.type === '1') {
        fieldsItem1.push(value)
      } else {
        fieldsItem2.push(value)
      }
    })

    const onUncheckedCallback = useMemoizedFn((value: InspectionReportItem) => {
      if (value.type === '1') {
        fieldsItem1.remove(
          fieldsItem1.value.findIndex(item => item.name === value.name)
        )
      } else {
        fieldsItem2.remove(
          fieldsItem2.value.findIndex(item => item.name === value.name)
        )
      }
    })

    const onCheck = useMemoizedFn(
      (value: InspectionReportItem, checked: boolean) => {
        if (checked) {
          onCheckedCallback(value)
        } else {
          onUncheckedCallback(value)
        }
      }
    )

    return (
      <>
        <Button
          variant="contained"
          startIcon={<Iconify icon={MdAddCircle} />}
          {...bindTrigger(popupState)}
        >
          添加可选的检测项
        </Button>
        <Popover {...bindPopover(popupState)}>
          <Paper>
            <List>
              {options.map(option => (
                <ListItem key={option.name} disablePadding>
                  <ListItemButton dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={isChecked(option)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': '' }}
                        onChange={(_, checked) => onCheck(option, checked)}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={option.name}
                      primary={option.displayName || option.name}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Popover>
      </>
    )
  }
)
