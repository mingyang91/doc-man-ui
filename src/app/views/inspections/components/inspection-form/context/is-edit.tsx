import { createContext, useContext } from 'react'

const IsEditContext = createContext<boolean | undefined>(false)

export const IsEditProvider = IsEditContext.Provider

export const useIsEdit = () => useContext(IsEditContext)
