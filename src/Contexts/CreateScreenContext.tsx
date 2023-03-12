import { createContext, ReactElement, useContext, useState } from "react"
import Colors, { LabelColors } from "../Colors"

const CreateScreenContext = createContext({
  active: false,
  setActive: (active:boolean) => {},
  color: "blue" as LabelColors,
})

export const CreateScreenProvider = ({children}:{children: ReactElement}) => {
  const [active, setActive] = useState<boolean>(false)
  const [color, setColor] = useState<LabelColors>("blue")
  

  return (
    <CreateScreenContext.Provider value={{
        active,
        setActive,
        color
      }}
    >
      {children}
    </CreateScreenContext.Provider>
  )
}

export const  useCreateScreenContext = () => useContext(CreateScreenContext)