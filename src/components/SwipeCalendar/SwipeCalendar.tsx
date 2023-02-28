import React, {
  useMemo,
  useRef,
  useEffect,
  useImperativeHandle,
  useCallback,
  forwardRef,
  memo,
} from "react";
import { VirtualizedSwiperImperativeApi } from "../../types/VirtualizedSwiperTypes";
import {
  CalendarImperativeApi,
  CalendarProps,
} from "./types";
import { SwipeCalendarContext } from "./SwipeCalendarContext";
import { addMonths, differenceInCalendarMonths, isSameMonth, startOfMonth } from "date-fns";
import VirtualizedSwiper from "../VirtualizedSwiper";
import PageWrapper from "./PageWrapper";

const SwipeCalendar = (
  {
    selectedDate,
    onDateSelect,
    onPageChange,
    currentDate,
    MonthComponent,
    pageBuffer = 1,
    minDate,
    maxDate,
    weekStartsOn = 0, // Sunday is default week start
  }: CalendarProps,
  ref: React.ForwardedRef<CalendarImperativeApi>
) => {
  const initialDateRef = useRef(currentDate || new Date());
  const pagerRef = useRef<VirtualizedSwiperImperativeApi>(null);
  const currentDateRef = useRef(currentDate);
  const currentPageRef = useRef(0);

  const minPageIndex = useMemo(() => differenceInCalendarMonths(initialDateRef.current, minDate) * -1, [minDate]);

  const maxPageIndex = useMemo(() => differenceInCalendarMonths(initialDateRef.current, maxDate) * -1, [maxDate]);

  const onPageChangeRef = useRef(onPageChange);
  onPageChangeRef.current = onPageChange;

  useImperativeHandle(
    ref,
    () => ({
      incrementPage: () => pagerRef.current?.incrementPage(),
      decrementPage: () => pagerRef.current?.decrementPage(),
      setPage: (date: Date) => pagerRef.current?.setPage(differenceInCalendarMonths(date, initialDateRef.current)),
    }),
    []
  );

  useEffect(() => {
    // Hard set the page if the passed-in currentDate changes and the calendar isn't already displaying that month.
    if (
      currentDate &&
      currentDateRef.current &&
      !isSameMonth(currentDate, currentDateRef.current)
    ) {
      const page = differenceInCalendarMonths(currentDate, initialDateRef.current);
      if (page === currentPageRef.current) return;
      pagerRef.current?.setPage(page);
    }

    currentDateRef.current = currentDate;
  }, [currentDate]);

  const _onPageChange = useCallback(
    (pg: number) => {
      currentPageRef.current = pg;
      const dateWithOffset = addMonths(initialDateRef.current, pg);
      onPageChangeRef.current?.(startOfMonth(dateWithOffset));
    },
    [weekStartsOn]
  );

  const providerValue = useMemo(
    () => ({
      referenceDate: initialDateRef.current,
      selectedDate,
      onDateSelect,
      weekStartsOn,
      MonthComponent
    }),
    [
      selectedDate,
      onDateSelect,
      weekStartsOn,
      MonthComponent
    ]
  );

  return (
    <SwipeCalendarContext.Provider value={providerValue}>
      <VirtualizedSwiper
        ref={pagerRef}
        PageComponent={PageWrapper}
        pageBuffer={pageBuffer}
        onPageChange={_onPageChange}
        minIndex={minPageIndex}
        maxIndex={maxPageIndex}
      />
    </SwipeCalendarContext.Provider>
  );
}

export default memo(forwardRef(SwipeCalendar));