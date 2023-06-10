import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import CATEGORIES, { Categories, SubCategories } from "../categories";
import { evaluate, isNumber, isOperand, KeyPadInput, trimmable } from "../utils/CalculatorUtils";

const DEFAULT_STATES = {
  inputStack: [] as KeyPadInput[],
  put: (input: KeyPadInput) => {},
  pop: () => {},
  equalTo: () => {},
  selectedCategory: 'food' as Categories,
  setSelectedCategory: (category: Categories) => {},
  selectedSubCategory: 'lunch' as SubCategories,
  setSelectedSubCategory: (subCategory: SubCategories) => {},
  showSelectCategoryDialog: false,
  setShowSelectCategoryDialog: (showSelectCategoryDialog: boolean) => {},
  showCreateSubCategoryDialog: false,
  setShowCreateSubCategoryDialog: (showCreateSubCategoryDialog: boolean) => {},
}

const AddTransactionContext = createContext(DEFAULT_STATES)

interface AddTransactionContextProviderProps {
  children: ReactNode
}

const AddTransactionContextProvider = ({children}: AddTransactionContextProviderProps) => {
  const [inputStack, setInputStack] = useState<KeyPadInput[]>(DEFAULT_STATES.inputStack)
  const [selectedCategory, setSelectedCategory] = useState<Categories>(DEFAULT_STATES.selectedCategory)
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategories>(DEFAULT_STATES.selectedSubCategory)
  const [showSelectCategoryDialog, setShowSelectCategoryDialog] = useState(false)
  const [showCreateSubCategoryDialog, setShowCreateSubCategoryDialog] = useState(false)

  useEffect(() => {
    console.log(showCreateSubCategoryDialog);
  }, [showCreateSubCategoryDialog])
  
  useEffect(() => {
    // auto select default subCategory when category change
    setSelectedSubCategory(CATEGORIES[selectedCategory].subCategories[0].title)
  }, [selectedCategory])

  const put = (input: KeyPadInput) => {
    console.log('put', input);
    const newStack = inputStack
    if(isOperand(input) && inputStack.length === 0) return
    if(isOperand(newStack.at(-1)) && isOperand(input)) newStack.pop() // input is operand and last input is operand, then remove the last operand
    console.log(trimmable(inputStack), isNumber(input), input)
    if(trimmable(inputStack) && isNumber(input)) newStack.pop() // if input stack has leading zero to trim, then remove the leading zero
    newStack.push(input)
    setInputStack([...newStack])
  }
  
  const pop = () => {
    const newStack = inputStack
    newStack.pop()
    setInputStack([...newStack])
  }

  const equalTo = () => {
    // convert a number to an array of digits
    if(inputStack.length === 0) return
    setInputStack([...evaluate(inputStack).toString()].map(Number))
  }

  return (
    <AddTransactionContext.Provider
      value={{
        inputStack,
        put,
        pop,
        equalTo,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        showSelectCategoryDialog,
        setShowSelectCategoryDialog,
        showCreateSubCategoryDialog,
        setShowCreateSubCategoryDialog
      }}
    >
      {children}
    </AddTransactionContext.Provider>
  )
}

export const useAddTransactionContext = () => useContext(AddTransactionContext)

export default AddTransactionContextProvider

