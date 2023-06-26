import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { evaluate, isNumber, isOperand, KeyPadInput, toDisplayString, trimmable } from "../utils/CalculatorUtils";
import 'react-native-get-random-values';

const DEFAULT_STATES = {
  inputStack: [] as KeyPadInput[],
  setInputStack: (inputStack: KeyPadInput[]) => {},
  put: (input: KeyPadInput) => {},
  pop: () => {},
  equalTo: () => {},
  clear: () => {},
}

const CalculatorContextContext = createContext(DEFAULT_STATES)

const CalculatorContextContextProvider = ({children}: { children: ReactNode }) => {
  const [inputStack, setInputStack] = useState<KeyPadInput[]>(DEFAULT_STATES.inputStack)
  const nav = useNavigation()

  useEffect(() => {
    console.log(inputStack, toDisplayString(inputStack))
    // setAmount(evaluate(inputStack))
  }, [inputStack])

  const put = (input: KeyPadInput) => {
    const newStack = inputStack
    if(isOperand(input) && inputStack.length === 0) return
    if(isOperand(newStack.at(-1)) && isOperand(input)) newStack.pop() // input is operand and last input is operand, then remove the last operand
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
    setInputStack([...evaluate(inputStack).toString()].map((x:string) => Number.isInteger(parseInt(x)) ? Number(x) : x as KeyPadInput))
  }

  const clear = () => {
    setInputStack([])
  }

  return (
    <CalculatorContextContext.Provider
      value={{
        inputStack,
        setInputStack,
        put,
        pop,
        equalTo,
        clear
      }}
    >
      {children}
    </CalculatorContextContext.Provider>
  )
}

export const useCalculatorContextContext = () => useContext(CalculatorContextContext)

export default CalculatorContextContextProvider

