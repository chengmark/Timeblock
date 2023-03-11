import { addDays, addMonths, eachDayOfInterval, eachWeekOfInterval, lastDayOfMonth } from "date-fns";
import { memo, useMemo } from "react";
import Month from "./Month";

const Page = memo(({index}:{index:number}) => {
  const REF_DATE = new Date()
  const WEEK_STARTS_ON = 0
  
  const firstDayOfMonth = useMemo(
    () => addMonths(REF_DATE, index),
    [REF_DATE, index]
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
          weekStartsOn: WEEK_STARTS_ON,
        }
      ),
    [firstDayOfMonth, lastDayOfMo, WEEK_STARTS_ON]
  );

  const weeks = useMemo(
    () =>
      weekStarts.map((week) => {
        return eachDayOfInterval({ start: week, end: addDays(week, 6) });
      }),
    [weekStarts]
  );

  return (
    <Month weeks={weeks} firstDayOfMonth={firstDayOfMonth} />
  )
})

export default Page