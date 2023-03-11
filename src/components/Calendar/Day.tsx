import { isSameMonth } from 'date-fns'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Colors from '../../Colors'
import { isSameDay } from '../utils'
import { useCalendarContext } from './context'

interface DayProps { 
  day: Date,
  isToday: Boolean
  firstDayOfMonth: Date
}

const Day = ({ day, isToday, firstDayOfMonth }:DayProps) =>
{
  const {calendarItems} = useCalendarContext()
  const itemsOfDay = calendarItems.filter(item => isSameDay(item, day))
  return (
    <View style={tw`flex-1 items-center flex-col`}>
      <View style={tw`rounded-full w-6 h-6 justify-center items-center ${ isToday ? `bg-red-500 font-bold` : '' }`}>
        <Text
          style={[
            tw`text-center text-sm text-[${isToday ? Colors.text.primary : isSameMonth(firstDayOfMonth, day) ? Colors.text.primary : Colors.text.secondary}]`,
            isToday && tw`font-bold`
          ]}
        >
          {day.getDate()}
        </Text>
      </View>
      {
        itemsOfDay.map(item => (
          <View
            key={item.id}
            style={tw`bg-[${Colors.label[item.color].bg}] rounded w-full p-1 h-[20px] mt-1`}
          >
            <Text
              style={tw`text-[${Colors.label[item.color].text}] text-[12px] flex-1 text-center`}
            >{item.title}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default Day