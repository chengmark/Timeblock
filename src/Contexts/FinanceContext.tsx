import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import mockTransactions from '../Mock/mockTransactions';
import { Expense, Transaction } from '../Types/Transaction';

export const FinanceContext = createContext({
  balance: 0,
  setBalance: (balance: number) => {},
  transactions: [] as Transaction[],
  setTransactions: (transactions: any[]) => {},
  isExpense: (transaction: Transaction): transaction is Expense => false,
  getTodayTotalExpense: () => 0 as number
})

interface FinanceProviderProps {
  children: ReactElement
}

export const FinanceProvider = ({children}:FinanceProviderProps) => {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)

  useEffect(() => {
    // update blance acording to transactions
    const balance = transactions.reduce((acc, cur) => acc + cur.amount, 0)
    setBalance(balance)
  }, [transactions])

  const isExpense = (transaction: Transaction): transaction is Expense => {
    const expenses = ['Entertainment', 'Food', 'Housing', 'Repayment', 'Tax', 'Transportation', 'Others'];
    return expenses.includes(transaction.category)
  }

  // get today total expense in minimal code
  const getTodayTotalExpense = () => {
    const today = new Date().toISOString().split('T')[0]
    const todayTotalExpense = transactions.filter(transaction => transaction.date === today && isExpense(transaction)).reduce((acc, cur) => acc + cur.amount, 0)
    return todayTotalExpense
  }

  return (
    <FinanceContext.Provider value={{
        balance,
        setBalance,
        transactions,
        setTransactions,
        isExpense,
        getTodayTotalExpense
      }}
    >
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinanceContext = () => useContext(FinanceContext)