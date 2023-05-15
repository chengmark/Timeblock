import { createContext, ReactElement, useContext, useEffect, useState } from 'react';

export const FinanceContext = createContext({})

interface FinanceProviderProps {
  children: ReactElement
}

export const FinanceProvider = ({children}:FinanceProviderProps) => {
  

  return (
    <FinanceContext.Provider value={{}}
    >
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)