

export type ScreenNames = "Home" | "Finance" | "Calendar" | "Day" | "Tab"

export interface RootTabParamList {
  Home: undefined,
  Finance: undefined,
  Calendar: undefined,
  // Day:{calendarItems:CalendarItem[], day: string} | undefined
}

export interface SelectModalImperativeAPI {
  present: () => void
  dismiss: () => void
}