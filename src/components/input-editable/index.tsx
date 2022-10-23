import { useBoolean, useMemoizedFn } from 'ahooks'
import {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Wrapper,
  WrapperProps,
} from './components/styled'

interface InputComponentProps
  extends Omit<WrapperProps, 'onChange' | 'onInput' | 'onBlur' | 'onFocus'> {
  value?: string
  onChange?: (value: string) => void
  onInput?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export interface InputEditableProps extends InputComponentProps {
  value?: string
  multiline?: boolean
  onStateChange?: (state: boolean) => void
}

export const InputEditable = forwardRef(
  (
    {
      value: valueProps,
      multiline = false,
      onChange,
      onInput,
      onBlur,
      onFocus,
      onStateChange,
      ...rest
    }: InputEditableProps,
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    const [value, setValue] = useState(valueProps || '')
    const [focus, setFocus] = useBoolean(false)

    const Component = useMemo(
      () => (multiline ? StyledTextarea : StyledInput),
      [multiline]
    )

    const labelStyle = useMemo<CSSProperties>(() => {
      return focus ? { visibility: 'hidden' } : { visibility: 'visible' }
    }, [focus])

    const handleFocus = useMemoizedFn((e: FocusEvent<HTMLInputElement>) => {
      setFocus.setTrue()
      onFocus?.(e)
    })

    const handleBlur = useMemoizedFn((e: FocusEvent<HTMLInputElement>) => {
      setFocus.setFalse()
      onBlur?.(e)
    })

    const handleInput = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setValue(value)
      onInput?.(value, e)
    })

    useEffect(() => {
      if (!focus && value !== valueProps) {
        onChange?.(value)
      }
    }, [focus, onChange, value, valueProps])

    return (
      <Wrapper ref={ref} {...rest}>
        <Component
          type="text"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
        />
        <StyledLabel style={labelStyle}>{value}</StyledLabel>
      </Wrapper>
    )
  }
)
