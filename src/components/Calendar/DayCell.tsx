import { isSameDay } from "date-fns"
import { memo, useCallback, useEffect, useMemo, useRef } from "react"
import { Pressable, View, Text } from "react-native"
import Colors, { transparent } from "../../Colors"
import { useCalendarContext } from "../../hooks/useCalendar"
import { OnDateSelect } from "../../types/CalendarTypes"
import tw from 'twrnc'

interface DayCellProps
{
  date: Date
  isToday: boolean
  isInDisplayMonth: boolean
  isHoliday: boolean
}

const DayCell = ({ date, isToday, isInDisplayMonth, isHoliday }: DayCellProps) =>
{
  const { selectedDate, referenceDate, onDateSelect } = useCalendarContext()
  const onDateSelectRef = useRef(onDateSelect)
  onDateSelectRef.current = onDateSelect
  const onDateSelectCb: OnDateSelect = useCallback((date: Date, options: { isSelected: boolean }) =>
  {
    console.log("pressed")
    return onDateSelectRef.current?.(date, options)
  }, [])
  const dateRef = useRef(date)
  const memoDate = useMemo(() =>
  {
    if (isSameDay(dateRef.current, date))
    {
      return dateRef.current;
    } else
    {
      dateRef.current = date;
      return date;
    }
  }, [date]);
  const isSelected = useMemo(() =>
  {
    return !!selectedDate && isSameDay(memoDate, selectedDate);
  }, [memoDate, selectedDate]);

  if(!isInDisplayMonth)
    return (<View style={tw`flex-1`}/>)
  
  return (
    <View
      style={tw`flex-1 justify-start items-stretch bg-[${isSelected ? Colors.button.active : Colors.bg.primary}] border-t-solid border-t-[2px] border-t-[${Colors.bg.secondary}]`}
    >
      <Pressable
        onPress={() => onDateSelectCb(date, { isSelected })}
        style={tw`flex-1 items-center`}
      >
        <View
          style={tw`bg-[${ isToday ? Colors.red : isSelected ? Colors.button.active : Colors.bg.primary }] rounded-full w-6 h-6 justify-center`}
          // animate={{backgroundColor:isToday ? Colors.font.primary : isSelected ? Colors.button.active : Colors.bg.primary}}
          // transition={{...DEFAULT_TRANSITION}}
        >
          <Text style={tw`
            text-sm
            text-center
            text-[${ isToday ? Colors.font.primary : isHoliday ? Colors.font.secondary : Colors.font.primary }]
            ${ isToday || isSelected ? `font-bold` : ''}
          `}>{date.getDate()}</Text>
        </View>
        <View style={tw`rounded bg-[${transparent(0.2, Colors.event.green)}] w-full p-1 h-[20px]`}>
          <Text style={tw`text-[10px] text-[${Colors.event.green}] flex-1`}>Tutoring class</Text>
        </View>
        <View style={tw`rounded bg-[${transparent(0.2, Colors.event.blue)}] w-full p-1 h-[20px]`}>
          <Text style={tw`text-[10px] text-[${Colors.event.blue}] flex-1`}>GPAD1015</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default memo(DayCell)