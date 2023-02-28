import
{
  addDays,
  addMonths,
  eachDayOfInterval,
  eachWeekOfInterval,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
} from "date-fns";
import React, { memo, useMemo } from "react";
import { View, Text } from "react-native";
import { useCalendarContext } from "../../hooks/useCalendar";
import Colors from "../../Colors"
import tw, { useDeviceContext } from 'twrnc'
import EventRow from "./EventRow";

const MonthPage = React.memo(({ firstDayOfMonth }: { firstDayOfMonth: Date }) =>
{
  const weeks = useMemo(
    () => {
      const lastDate = lastDayOfMonth(firstDayOfMonth)
      const weekStarts = eachWeekOfInterval({ start: firstDayOfMonth, end: lastDate })
      return weekStarts.map((week) => eachDayOfInterval({ start: week, end: addDays(week, 6) }))
    },
    [firstDayOfMonth]
  );

  useDeviceContext(tw)
  
  return (
    <View style={tw`h-[500px] w-full flex flex-col flex-1 bg-[${ Colors.bg.primary }]`}>
      <View style={tw`flex grow flex-col bg-[${ Colors.bg.primary }]`}>
        <View style={tw`flex flex-row mb-3`}>
          {
            weeks[0].map((day)=>{
              if(!isSameMonth(firstDayOfMonth, day))
                return (<View style={tw`flex-1`} key={day.toISOString()}/>)
              else if(isSameDay(firstDayOfMonth, day))
                return (
                  <Text style={tw`text-xl text-[${Colors.red}] font-bold`} key={day.toISOString()}>
                    {`${firstDayOfMonth.getMonth()+1}月`}
                  </Text>
                )
              else
                return (<View style={tw`flex-1`} key={day.toISOString()}/>)
            })
          }
        </View>
        {
          weeks.map((week, i) => (
            <EventRow
              key={`event-row-${ i }`}
              days={week}
              firstDayOfMonth={firstDayOfMonth}
            />
          ))
        }
      </View>
    </View>
  );
});

export default memo(MonthPage)