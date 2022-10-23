import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  autocompleteClasses,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteRenderOptionState,
  AutocompleteValue,
  Box,
  ClickAwayListener,
  InputBase,
  Popper,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { useDebounce, useMemoizedFn } from 'ahooks'
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  useMemo,
  useState,
} from 'react'

import { makeSearchWord } from 'u/search'

import { useClientsSearchListQuery } from 'm/clients/index.generated'

import { ConsumerSelectorOption, ConsumerSelectorValue } from '../type'
import { isInclude, isOptionEqualToValue } from '../utils'

import { LocationValue } from '@@/location-selector'
import { formatLocation } from '@@/location-selector/utils'

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}))

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: '100%',
  borderBottom: `1px solid ${
    theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
  }`,
  '& input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid ${
      theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
    }`,
    fontSize: 14,
    '&:focus': {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === 'light'
          ? 'rgba(3, 102, 214, 0.3)'
          : 'rgb(12, 45, 107)'
      }`,
      borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
    },
  },
}))

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent',
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}))

interface AutocompletePopperComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anchorEl?: any
  disablePortal?: boolean
  open: boolean
}

function AutocompletePopperComponent({
  disablePortal,
  anchorEl,
  open,
  ...other
}: AutocompletePopperComponentProps) {
  return <StyledAutocompletePopper {...other} />
}

export type DropdownProps = {
  value: ConsumerSelectorValue | null
  anchorEl: HTMLElement | null
  open: boolean
  onChange: (value: ConsumerSelectorValue | null) => void
  onClose: (e: SyntheticEvent<Element, Event>) => void
  onClickAway: (e: MouseEvent | TouchEvent) => void
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ value, anchorEl, open, onChange, onClose, onClickAway }, ref) => {
    const theme = useTheme()

    const [keyword, setKeyword] = useState('')

    const debouncedKeyword = useDebounce(keyword, { wait: 700 })

    const { data: searchResult, isLoading: isQueryLoading } =
      useClientsSearchListQuery(
        {
          keyword: makeSearchWord(debouncedKeyword),
        },
        {
          enabled: open,
        }
      )

    const isLoading = searchResult == undefined && isQueryLoading && open

    const handleClose = useMemoizedFn<
      (
        event: SyntheticEvent<Element, Event>,
        reason: AutocompleteCloseReason
      ) => void
    >((event, reason) => {
      if (reason === 'escape') {
        onClose?.(event)
      }
    })

    const handleSearch = useMemoizedFn<
      (
        event: SyntheticEvent,
        value: string,
        reason: AutocompleteInputChangeReason
      ) => void
    >((event, value, reason) => {
      if (reason === 'input') {
        setKeyword(value)
      }
    })

    const handleChange = useMemoizedFn<
      (
        event: SyntheticEvent,
        value: AutocompleteValue<ConsumerSelectorValue, false, false, false>,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<ConsumerSelectorValue>
      ) => void
    >((event, value, reason) => {
      if (
        event.type === 'keydown' &&
        (event as unknown as KeyboardEvent).key === 'Backspace' &&
        reason === 'removeOption'
      ) {
        return
      }
      onChange(value)
      onClose(event)
    })

    const renderOption = useMemoizedFn<
      (
        props: HTMLAttributes<HTMLLIElement>,
        option: ConsumerSelectorOption,
        state: AutocompleteRenderOptionState
      ) => ReactNode
    >((props, option, { selected }) => {
      const style = selected
        ? {
            fontWeight: theme.typography.fontWeightMedium,
            color: 'rgba(90, 90, 90, 0.5)',
          }
        : undefined

      return (
        <Box {...props} component="li" style={style}>
          <Stack direction="column" width="100%">
            <Typography variant="body1" color={theme.palette.text.primary}>
              {option.name}
            </Typography>
            <Typography variant="caption" color={theme.palette.text.secondary}>
              {formatLocation(option.address as LocationValue)}
            </Typography>
          </Stack>
        </Box>
      )
    })

    const options = useMemo<ConsumerSelectorOption[]>(() => {
      const options: ConsumerSelectorOption[] = []

      searchResult && options.push(...searchResult.list)
      if (value && value.id && options.length && !isInclude(value, options)) {
        options.push(value)
      }
      return options
    }, [searchResult, value])

    return (
      <StyledPopper
        anchorEl={anchorEl}
        ref={ref}
        open={open && anchorEl != null}
        placement="bottom-start"
        style={{ width: anchorEl?.clientWidth || 'auto' }}
      >
        <ClickAwayListener onClickAway={onClickAway}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
                }`,
                padding: '8px 10px',
                fontWeight: 600,
              }}
            >
              搜索以选择客户
            </Box>
            <Autocomplete<ConsumerSelectorValue>
              open
              onClose={handleClose}
              value={value}
              onChange={handleChange}
              disableCloseOnSelect
              PopperComponent={AutocompletePopperComponent}
              renderTags={() => null}
              noOptionsText="搜索结果为空"
              loading={isLoading}
              renderOption={renderOption}
              options={options}
              getOptionLabel={option => option?.name || ''}
              inputValue={keyword}
              onInputChange={handleSearch}
              isOptionEqualToValue={isOptionEqualToValue}
              renderInput={params => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  placeholder="输入客户名称进行精确搜索"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    )
  }
)
