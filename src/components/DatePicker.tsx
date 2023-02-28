import tw from 'twrnc'
import { View, Text } from "react-native"
import Colors from "../Colors"
import { isSameDay, isSameMonth, isToday } from "date-fns"
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SwipeCalendar from "./SwipeCalendar/SwipeCalendar"

const LABELS = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"]

const Header = () =>
{
  return (
    <View style={tw`flex-row bg-[${ Colors.grey[5] }] justify-between items-center`}>
      <View style={tw`flex-row`}>
        <Text style={tw`text-[${ Colors.white }] text-base font-bold bg-[${ Colors.grey[5] }] pl-3`}>2023年2月</Text>
        <MaterialIcon style={tw``} name="chevron-right" size={24} color={Colors.red} />
      </View>
      {/* <Text style={tw`text-[${Colors.red}] text-base font-bold bg-[${Colors.grey[5]}]`}>{`< >`}</Text> */}
      <View style={tw`flex-row`}>
        {/* <IconButton Icon={MaterialIcon} name="chevron-left" />
        <IconButton Icon={MaterialIcon} name="chevron-right" backgroundColor={Colors.grey[5]}/> */}
        <MaterialIcon style={tw``} name="chevron-left" size={32} color={Colors.red} />
        <MaterialIcon style={tw``} name="chevron-right" size={32} color={Colors.red} />
      </View>
    </View>
  )
}

const DayLabel = () =>
{
  return (
    <View style={tw`flex-row bg-[${ Colors.grey[5] }]`}>
      {
        LABELS.map((label, i) => (
          <Text
            style={tw`flex-1 text-xs text-center text-[${ Colors.text.secondary }]`}
            key={label}
          >
            {label}
          </Text>
        ))
      }
    </View>
  )
}

const Month = ({ weeks, firstDayOfMonth }: { weeks: Date[][], firstDayOfMonth: Date }) =>
{
  return (
    <View style={tw``}>
      {
        weeks.map((week, i) => (
          <Week
            key={`event-row-${ i }`}
            days={week}
            firstDayOfMonth={firstDayOfMonth}
          />
        ))
      }
    </View>
  )
}

const Week = ({ days, firstDayOfMonth }: { days: Date[], firstDayOfMonth: Date }) =>
{
  return (
    <View style={tw`flex flex-row my-1`}>
      {
        days.map((day, i) =>
        {
          if (isSameMonth(firstDayOfMonth, day))
          {
            return (
              <Day
                key={`day-${ i }`}
                day={day}
                isToday={isToday(day)}
              />
            )
          } else
          {
            return <View style={tw`flex-1`} key={`day-${ i }`}></View>
          }
        })
      }
    </View>
  )
}

const Day = ({ day, isToday }: { day: Date, isToday: Boolean }) =>
{
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw`rounded-full w-10 h-10 justify-center ${ isToday ? `bg-[${ Colors.red }] font-bold` : '' }`}>
        <Text style={tw`text-center text-[${ Colors.white }] text-base`}>{day.getDate()}</Text>
      </View>
    </View>
  )
}

const DatePciker = () =>
{
  return (
    <View style={tw`flex-col`}>
      <Header />
      <DayLabel />
        <SwipeCalendar
          MonthComponent={Month} 
          minDate={new Date(2000, 1, 1)}
          maxDate={new Date(2025, 12, 31)}
        />
    </View>
  )
}

export default DatePciker