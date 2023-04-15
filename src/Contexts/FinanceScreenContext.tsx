import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { createContext, ReactElement, RefObject, useContext, useEffect, useRef, useState } from "react"

const FinanceScreenContext = createContext({
  balance: 19000,
})

export const FinanceScreenProvider = ({children}:{children: ReactElement}) => {
  const [balance, setBalance] = useState<number>(19000)

  
  return (
    <FinanceScreenContext.Provider value={{
        balance,
      }}
    >
      {children}
    </FinanceScreenContext.Provider>
  )
}

export const  useFinanceScreenContext = () => useContext(FinanceScreenContext)