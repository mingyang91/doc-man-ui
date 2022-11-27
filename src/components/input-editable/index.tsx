import { useBoolean, useMemoizedFn } from 'ahooks'
import {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  FormEvent,
  FormEventHandler,
  ForwardedRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  ComponentInputProps,
  ComponentTextareaProps,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Wrapper,
  WrapperProps,
} from './components/styled'

interface InputComponentProps
  extends Omit<WrapperProps, 'onChange' | 'onInput' | 'onBlur' | 'onFocus'> {
  value?: string
  inputProps?: ComponentInputProps | ComponentTextareaProps
  onChange?: (value: string) => void
  onInput?: (
    value: string,
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
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
      inputProps,
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

    const handleFocus = useMemoizedFn(
      (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocus.setTrue()
        onFocus?.(e)
      }
    )

    const handleBlur = useMemoizedFn(
      (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocus.setFalse()
        onBlur?.(e)
      }
    )

    const handleInput = useMemoizedFn<
      FormEventHandler<HTMLTextAreaElement> & FormEventHandler<HTMLInputElement>
    >(e => {
      const { value } = e.target as HTMLInputElement
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(inputProps as any)}
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
