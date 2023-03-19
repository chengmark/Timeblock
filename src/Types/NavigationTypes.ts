import { CalendarItem } from "./CalendarItemTypes"

export type ScreenNames = "Calendar" | "Scheduler" | "Create" | "Day"

export type RootStackParamList = {
  Calendar: undefined
  Scheduler:undefined
  Create:undefined
  Day:{calendarItems:CalendarItem[]} | undefined
}