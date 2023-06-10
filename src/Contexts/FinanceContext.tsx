import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import CATEGORIES, { Categories, SubCategories } from '../categories';
import { evaluate, isNumber, isOperand, KeyPadInput, trimmable } from '../utils/CalculatorUtils';

export type Operator = '+' | '-' | '*' | '/'

export const FinanceContext = createContext({
  
})

interface FinanceProviderProps {
  children: ReactElement
}

export const FinanceProvider = ({children}:FinanceProviderProps) => {
  const [transactions, setTransactions] = useState([])
  
  return (
    <FinanceContext.Provider
      value={{
      }}
    >
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)
