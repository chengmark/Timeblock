import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import mockTransactions from '../Mock/mockTransactions';
import { listenBudgets } from '../Service/BudgetService';
import { listenTransactions } from '../Service/TransactionService';
import { DisplayInterval } from '../Types/Finance';
import { Budget, Transaction } from '../Types/Transaction';

const DEFAULT_STATES = {
  transactions: [] as Transaction[],
  setTransactions: (transaction: any) => {},
  isLoading: true,
  setIsLoading: (isLoading: boolean) => {},
  getBalance: () => 0,
  selectedDisplayInterval: DisplayInterval.DAILY,
  setSelectedDisplayInterval: (displayInterval: DisplayInterval) => {},
  budgets: [] as Budget[],
  setBudgets: (budgets: Budget[]) => {},

}

export const FinanceContext = createContext(DEFAULT_STATES)

export const FinanceProvider = ({children}:{ children: ReactElement }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([...DEFAULT_STATES.transactions])
  const [isLoading, setIsLoading] = useState(DEFAULT_STATES.isLoading)
  const [selectedDisplayInterval, setSelectedDisplayInterval] = useState<DisplayInterval>(DisplayInterval.DAILY)
  const [budgets, setBudgets] = useState<Budget[]>([])

  useEffect(() => {
    const unsubTransaction = listenTransactions((transactions: Transaction[]) => {
      if(isLoading) setIsLoading(false)
      console.log('setting transactions', transactions.length)
      setTransactions([...transactions])
    })

    const unsubscribeBudget = listenBudgets((budgets: Budget[]) => {
      console.log('setting budgets', budgets.length)
      setBudgets([...budgets])
    })

    return () => {
      unsubTransaction()
      unsubscribeBudget()
    }
  }, [])

  const getBalance = () => transactions.reduce((acc, cur) => cur.category === 'income' ? acc + cur.amount : acc - cur.amount, 0)

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        isLoading,
        setIsLoading,
        getBalance,
        selectedDisplayInterval,
        setSelectedDisplayInterval,
        budgets,
        setBudgets
      }}
    >
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)
