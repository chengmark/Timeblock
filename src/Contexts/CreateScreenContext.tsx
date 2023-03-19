import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { createContext, ReactElement, Ref, RefObject, useContext, useRef, useState } from "react"
import Colors, { LabelColors } from "../Colors"
import { TagSelectModalImperativeAPI } from "../Components/CreateScreen/TagSelectModal"
import { CalendarItem } from "../Types/CalendarItemTypes"

const DEFAULT_ITEM_INPUT:CalendarItem = {
  id: "",
  title: "",
  description: "",
  location: "",
  startDate: new Date(),
  endDate: new Date(),
  dueDate: new Date(),
  color: "blue",
  repeatMode: "NO_REPEAT",
}

const CreateScreenContext = createContext({
  active: false,
  setActive: (active:boolean) => {},
  color: "blue" as LabelColors,
  setColor: (color: LabelColors) => {},
  itemInput: DEFAULT_ITEM_INPUT,
  setItemInput: (item: CalendarItem) => {},
  inputType: "event" as "event" | "task",
  setInputType: (type: "event" | "task") => {},
  submitInput: () => {},
  tagSelectModalRef: null as RefObject<TagSelectModalImperativeAPI> | null,
  repeatModeSelectModalRef: null as RefObject<BottomSheetModal> | null
})

export const CreateScreenProvider = ({children}:{children: ReactElement}) => {
  const [active, setActive] = useState<boolean>(false)
  const [color, setColor] = useState<LabelColors>("blue") //TODO: rename
  const [itemInput, setItemInput] = useState<CalendarItem>(DEFAULT_ITEM_INPUT)
  const [inputType, setInputType] = useState<"event" | "task">("event")
  const tagSelectModalRef = useRef<TagSelectModalImperativeAPI>(null)
  const repeatModeSelectModalRef = useRef<BottomSheetModal>(null)
  
  const submitInput = () => {
    console.log(itemInput)
  }

  return (
    <CreateScreenContext.Provider value={{
        active,
        setActive,
        color,
        setColor,
        itemInput,
        setItemInput,
        inputType,
        setInputType,
        submitInput,
        tagSelectModalRef,
        repeatModeSelectModalRef
      }}
    >
      {children}
    </CreateScreenContext.Provider>
  )
}

export const  useCreateScreenContext = () => useContext(CreateScreenContext)