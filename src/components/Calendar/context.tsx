import { createContext, ReactElement, useContext, useState } from "react";
import { calendarItem } from "../../Mock/CalendarItems";
import { CalendarItem } from "../../Types/CalendarItemTypes";

export const CalendarContext = createContext({
  referenceDate: new Date(),
  selectedDate: null as Date | null | undefined,
  curPageDate: new Date(),
  setCurPageDate: (date:Date) => {},
  calendarItems: calendarItem
})

interface CalendarProviderProps {
  children: ReactElement
}

export const CalendarProvider = ({children}:CalendarProviderProps) => {
  const [referenceDate, setReferenceDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(null)
  const [curPageDate, setCurPageDate] = useState<Date>(new Date())
  const [calendarItems, setCalendarItems] = useState<CalendarItem[]>(calendarItem)
  

  return (
    <CalendarContext.Provider value={{
        referenceDate,
        selectedDate,
        curPageDate,
        setCurPageDate,
        calendarItems
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => useContext(CalendarContext)