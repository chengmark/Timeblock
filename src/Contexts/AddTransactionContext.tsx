import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import CATEGORIES, { Categories, SubCategories } from "../categories";
import { evaluate, isNumber, isOperand, KeyPadInput, toDisplayString, trimmable } from "../utils/CalculatorUtils";
import { addTransaction as addToDB } from "../Service/TransactionService";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import CalculatorContextContextProvider, { useCalculatorContextContext } from "./CalculatorContext";

const DEFAULT_STATES = {
  amount: 0,
  setAmount: (amount: number) => {},
  date: new Date().toISOString(),
  setDate: (date: string) => {},
  selectedCategory: 'food' as Categories,
  setSelectedCategory: (category: Categories) => {},
  selectedSubCategory: 'lunch' as SubCategories,
  setSelectedSubCategory: (subCategory: SubCategories) => {},
  showSelectCategoryDialog: false,
  setShowSelectCategoryDialog: (showSelectCategoryDialog: boolean) => {},
  showCreateSubCategoryDialog: false,
  setShowCreateSubCategoryDialog: (showCreateSubCategoryDialog: boolean) => {},
  addTransaction: () => {},
}

const AddTransactionContext = createContext(DEFAULT_STATES)

const AddTransactionContextProvider = ({children}: { children: ReactNode }) => {
  const { inputStack } = useCalculatorContextContext()
  const [amount, setAmount] = useState(evaluate(inputStack))
  const [date, setDate] = useState(DEFAULT_STATES.date)
  const [selectedCategory, setSelectedCategory] = useState<Categories>(DEFAULT_STATES.selectedCategory)
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategories>(DEFAULT_STATES.selectedSubCategory)
  const [showSelectCategoryDialog, setShowSelectCategoryDialog] = useState(DEFAULT_STATES.showSelectCategoryDialog)
  const [showCreateSubCategoryDialog, setShowCreateSubCategoryDialog] = useState(DEFAULT_STATES.showCreateSubCategoryDialog)
  
  const nav = useNavigation()

  useEffect(() => {
    console.log(inputStack, toDisplayString(inputStack))
    setAmount(evaluate(inputStack))
  }, [inputStack])
  
  useEffect(() => {
    // auto select default subCategory when category change
    setSelectedSubCategory(CATEGORIES[selectedCategory].subCategories[0].title)
  }, [selectedCategory])

  const addTransaction = () => {
    addToDB({
      id: uuidv4(),
      amount,
      title: '',
      description: '',
      date,
      category: selectedCategory,
      subCategory: selectedSubCategory,
    })
    
    nav.goBack()
  }

  return (
    <AddTransactionContext.Provider
      value={{
        amount,
        setAmount,
        date,
        setDate,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        showSelectCategoryDialog,
        setShowSelectCategoryDialog,
        showCreateSubCategoryDialog,
        setShowCreateSubCategoryDialog,
        addTransaction
      }}
    >
        {children}
    </AddTransactionContext.Provider>
  )
}

export const useAddTransactionContext = () => useContext(AddTransactionContext)

export default AddTransactionContextProvider

