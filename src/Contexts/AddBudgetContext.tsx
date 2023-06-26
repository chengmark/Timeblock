import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import CATEGORIES, { Categories, SubCategories } from "../categories";
import { evaluate, isNumber, isOperand, KeyPadInput, toInputStack, trimmable } from "../utils/CalculatorUtils";
import { useFinanceContext } from "./FinanceContext";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { Interval } from '../Types/Transaction'
import { getTransactions } from "../Service/TransactionService";
import { isSameDay, isSameMonth, isSameWeek } from "date-fns";
import { addBudget as addToDB, getBudgetByCategory, getBudgets } from "../Service/BudgetService";
import { useCalculatorContextContext } from "./CalculatorContext";

const DEFAULT_STATES = {
  addBudget: () => {},
  selectedCategory: 'food' as Categories,
  setSelectedCategory: (category: Categories) => {},
  showSelectCategoryDialog: false,
  setShowSelectCategoryDialog: (showSelectCategoryDialog: boolean) => {},
  selectedInterval: 'DAILY' as Interval,
  setSelectedInterval: (interval: Interval) => {},
  showSelectIntervalDialog: false,
  setShowSelectIntervalDialog: (showSelectIntervalDialog: boolean) => {},
  used: 0,
  setUsed: (used: number) => {}
}

const AddBudgetContext = createContext(DEFAULT_STATES)

const AddBudgetContextProvider = ({children}: { children: ReactNode }) => {
  const { inputStack, setInputStack } = useCalculatorContextContext()
  const [amount, setAmount] = useState(evaluate(inputStack))
  const [selectedCategory, setSelectedCategory] = useState<Categories>(DEFAULT_STATES.selectedCategory)
  const [showSelectCategoryDialog, setShowSelectCategoryDialog] = useState(DEFAULT_STATES.showSelectCategoryDialog)
  const [selectedInterval, setSelectedInterval] = useState(DEFAULT_STATES.selectedInterval)
  const [showSelectIntervalDialog, setShowSelectIntervalDialog] = useState(DEFAULT_STATES.showSelectIntervalDialog)
  const [used, setUsed] = useState(DEFAULT_STATES.used)

  const nav = useNavigation()

  useEffect(() => {
    setAmount(evaluate(inputStack))
  }, [inputStack])

  useEffect(() => {
    (async () => {
      const budget = await getBudgetByCategory(selectedCategory)
      if(Object.keys(budget).length === 0) return setInputStack([0])
      const selectedIntervalBudget = budget.amount[selectedInterval.toLowerCase() as keyof typeof budget.amount]
      setInputStack(toInputStack(selectedIntervalBudget))
    })()
  }, [selectedCategory, selectedInterval])

  const getUsedAmountByCategoryInterval = async (category: Categories, interval: Interval) => {
    const transactions = await getTransactions()
    const intervalChecker = {
      'DAILY': isSameDay,
      'WEEKLY': isSameWeek,
      'MONTHLY': isSameMonth,
    }
    const filtered = transactions.filter(transaction => transaction.category === category && intervalChecker[interval](new Date(transaction.date), new Date()))
    return filtered.reduce((acc, cur) => acc+cur.amount, 0)
  }

  useEffect(() => {
    (async () => {
      const used = await getUsedAmountByCategoryInterval(selectedCategory, selectedInterval)
      setUsed(used)
    })()
  }, [selectedCategory, selectedInterval])
  
  const getDaily = () => {
    if(selectedInterval === 'WEEKLY') return amount / 7
    if(selectedInterval === 'MONTHLY') return amount / 30
    return amount
  }

  const getWeekly = () => {
    if(selectedInterval === 'DAILY') return amount * 7
    if(selectedInterval === 'MONTHLY') return amount / 4
    return amount
  }

  const getMonthly = () => {
    if(selectedInterval === 'DAILY') return amount * 30
    if(selectedInterval === 'WEEKLY') return amount * 4
    return amount
  }

  const addBudget = () => {
    console.log('adding budget', selectedCategory, inputStack, evaluate(inputStack), getDaily(), getWeekly(), getMonthly())
    addToDB({
      id: selectedCategory,
      category: selectedCategory,
      amount: {
        daily: getDaily(),
        weekly: getWeekly(),
        monthly: getMonthly(),
      },
      date: new Date().toISOString()
    })
    nav.goBack()
  }

  return (
    <AddBudgetContext.Provider
      value={{
        addBudget,
        selectedCategory,
        setSelectedCategory,
        showSelectCategoryDialog,
        setShowSelectCategoryDialog,
        selectedInterval,
        setSelectedInterval,
        showSelectIntervalDialog,
        setShowSelectIntervalDialog,
        used,
        setUsed
      }}
    >
      {children}
    </AddBudgetContext.Provider>
  )
}

export const useAddBudgetContext = () => useContext(AddBudgetContext)

export default AddBudgetContextProvider

