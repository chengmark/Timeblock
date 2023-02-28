import React, { createContext, ForwardedRef, RefObject, useContext, useRef } from "react";
import { VirtualizedSwiperImperativeApi } from "../components/VirtualizedSwiper/VirtualizedSwiper";
import { CalendarImperativeApi, OnDateSelect, PageComponentType, WeekDayIndex } from "../types/CalendarTypes";


export const CalendarContext = createContext({
  pagerRef: undefined as RefObject<VirtualizedSwiperImperativeApi> | undefined,
  referenceDate: new Date(), // This represents the month at "Page 0" of the infinite pager. All other months are an offset of this month.
  selectedDate: null as Date | null | undefined,
  onDateSelect: (() => {}) as OnDateSelect,
  weekStartsOn: 0 as WeekDayIndex,
  PageComponent: undefined as PageComponentType | undefined
});