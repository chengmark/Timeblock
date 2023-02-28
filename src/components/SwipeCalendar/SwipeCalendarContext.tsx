import React, { useContext } from "react";
import { WeekDayIndex, MonthComponentType, OnDateSelect } from "./types";

export const SwipeCalendarContext = React.createContext({
  referenceDate: new Date(), // This represents the month at "Page 0" of the infinite pager. All other months are an offset of this month.
  selectedDate: null as Date | null | undefined,
  onDateSelect: (() => {}) as OnDateSelect,
  weekStartsOn: 0 as WeekDayIndex,
  MonthComponent: (() => null) as MonthComponentType,
});

export function useSwipeCalendarContext() {
  return useContext(SwipeCalendarContext);
}
