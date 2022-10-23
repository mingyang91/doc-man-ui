import { createContext, CSSProperties, ReactNode, useContext } from 'react'

interface FieldContextValue {
  id?: string
  direction?: 'row' | 'column'
  align?: CSSProperties['textAlign']
  headerWidth?: CSSProperties['width']
}

const initialValue: FieldContextValue = {
  direction: 'row',
  align: 'right',
  headerWidth: '160px',
}

const FieldContext = createContext<FieldContextValue>(initialValue)

FieldContext.displayName = 'FieldContext'

export const useFieldContext = () =>
  useContext(FieldContext) as Required<FieldContextValue>

export interface FieldContextProps extends FieldContextValue {
  children?: ReactNode
}

export const FieldContextProvider = ({
  children,
  ...props
}: FieldContextProps) => (
  <FieldContext.Provider value={props}>{children}</FieldContext.Provider>
)
