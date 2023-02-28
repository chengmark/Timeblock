import { isSameDay, isSameMonth } from "date-fns"
import { View } from "react-native"
// import { useCanlendarContext } from "../hooks/useCalendar"
// import CalendarDate from "../types/CalendarDate"
import tw from 'twrnc'
import { useCalendarContext } from "../../hooks/useCalendar"
import { memo } from "react"
import DayCell from "./DayCell"

interface EventRowProps {
  days:Date[]
  firstDayOfMonth: Date
}

const NewEventRow = ({days, firstDayOfMonth}:EventRowProps) => {
  const TOTAL_ROWS = 3
  const {selectedDate, referenceDate, onDateSelect} = useCalendarContext()

  return (
    <View style={tw`flex flex-row relative grow items-stretch`} >
        {
          days.map((day)=>(
            <DayCell
              date={day}
              isToday={isSameDay(referenceDate, day)}
              isInDisplayMonth={isSameMonth(firstDayOfMonth, day)}
              isHoliday={day.getDay() == 0 || day.getDay() == 6}
              key={day.toISOString()}
            />
          ))
        }
    </View>
  )
}

export default memo(NewEventRow)