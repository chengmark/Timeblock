export type ScreenNames = "CreateScreen" | "MonthScreen" | "CalendarScreen"

type Screen = {
  id: number
  // any param to pass to a screen
}

export type RootStackParamList = {
  CreateScreen: undefined
  MonthScreen: undefined
  CalendarScreen: undefined
}