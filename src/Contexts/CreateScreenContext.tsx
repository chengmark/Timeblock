import { createContext, ReactElement, useContext, useState } from "react"
import Colors, { LabelColors } from "../Colors"
import { CalendarItem } from "../Types/CalendarItemTypes"

const CreateScreenContext = createContext({
  active: false,
  setActive: (active:boolean) => {},
  color: "blue" as LabelColors,
  currentType: "event" as "event" | "task",
  setCurrentType: (type: "event" | "task") => {}
})

export const CreateScreenProvider = ({children}:{children: ReactElement}) => {
  const [active, setActive] = useState<boolean>(false)
  const [color, setColor] = useState<LabelColors>("green")
  const [currentType, setCurrentType] = useState<"event" | "task">("event")
  

  return (
    <CreateScreenContext.Provider value={{
        active,
        setActive,
        color,
        currentType,
        setCurrentType
      }}
    >
      {children}
    </CreateScreenContext.Provider>
  )
}

export const  useCreateScreenContext = () => useContext(CreateScreenContext)