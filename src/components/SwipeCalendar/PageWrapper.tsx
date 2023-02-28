import {
  addDays,
  addMonths,
  eachDayOfInterval,
  eachWeekOfInterval,
  lastDayOfMonth,
} from "date-fns";
import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSwipeCalendarContext } from "./SwipeCalendarContext";
import { MonthComponentType } from "./types";
import tw from 'twrnc'

const PageWrapper = memo(({ index }: { index: number }) => {
  const {
    referenceDate,
    weekStartsOn,
    MonthComponent
  } = useSwipeCalendarContext();
  const firstDayOfMonth = useMemo(
    () => addMonths(referenceDate, index),
    [referenceDate, index]
  );
  firstDayOfMonth.setDate(1);
  const lastDayOfMo = useMemo(
    () => lastDayOfMonth(firstDayOfMonth),
    [firstDayOfMonth]
  );
  const weekStarts = useMemo(
    () =>
      eachWeekOfInterval(
        {
          start: firstDayOfMonth,
          end: lastDayOfMo,
        },
        {
          weekStartsOn,
        }
      ),
    [firstDayOfMonth, lastDayOfMo, weekStartsOn]
  );

  const weeks = useMemo(
    () =>
      weekStarts.map((week) => {
        return eachDayOfInterval({ start: week, end: addDays(week, 6) });
      }),
    [weekStarts]
  );

  return (
    <View style={tw``}>
      <MonthComponent weeks={weeks} firstDayOfMonth={firstDayOfMonth} />
    </View>
  );
});

export default PageWrapper