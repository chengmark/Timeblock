import { CalendarItem } from "./CalendarItemTypes"

export type ScreenNames = "Calendar" | "Scheduler" | "Create" | "Day" | "Finance" | "Tab"

export type RootStackParamList = {
  Calendar: undefined
  Scheduler: undefined
  Create:undefined
  Day:{calendarItems:CalendarItem[], day: string} | undefined
  Finance: undefined
  Tab: undefined
}

export interface SelectModalImperativeAPI {
  present: () => void
  dismiss: () => void
}