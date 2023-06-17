import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import mockTransactions from '../Mock/mockTransactions';
import { listenTransactions } from '../Service/TransactionService';
import { Transaction } from '../Types/Transaction';

const DEFAULT_STATES = {
  transactions: [] as Transaction[],
  setTransactions: (transaction: any) => {},
  isLoading: true,
  setIsLoading: (isLoading: boolean) => {}
}

export const FinanceContext = createContext(DEFAULT_STATES)

export const FinanceProvider = ({children}:{ children: ReactElement }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([...DEFAULT_STATES.transactions])
  const [isLoading, setIsLoading] = useState(DEFAULT_STATES.isLoading)

  useEffect(() => {
    const unsubscribe = listenTransactions((transactions: Transaction[]) => {
      if(isLoading) setIsLoading(false)
      console.log('setting transactions', transactions.length)
      setTransactions([...transactions])
    })
    return () => unsubscribe()
  }, [])

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)
