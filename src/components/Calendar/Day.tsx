import { NavigationProp, useNavigation } from '@react-navigation/native'
import { isSameMonth } from 'date-fns'
import { View, Text, Pressable } from 'react-native'
import tw from 'twrnc'
import Colors from '../../Colors'
import { RootStackParamList } from '../../Types/NavigationTypes'
import { compareCalendarItems, isSameDay } from '../utils'
import { useCalendarContext } from './context'

interface DayProps
{
  day: Date,
  isToday: Boolean
  firstDayOfMonth: Date
}

const Day = ({ day, isToday, firstDayOfMonth }: DayProps) =>
{
  const { calendarItems } = useCalendarContext()
  const itemsOfDay = calendarItems.filter(item => isSameDay(item, day)).sort(compareCalendarItems)

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const handleOnPress = () =>
  {
    navigation.navigate("Day", {calendarItems: itemsOfDay, day: day.toISOString()})
  }
  return (
    <Pressable
      onPress={handleOnPress}
      style={tw`flex-1 items-center flex-col overflow-hidden`}
    >
      <View style={tw`rounded-full w-6 h-6 justify-center items-center ${ isToday ? `bg-red-500 font-bold` : '' }`}>
        <Text
          style={[
            tw`text-center text-sm text-[${ isToday ? Colors.text.primary : isSameMonth(firstDayOfMonth, day) ? Colors.text.primary : Colors.text.secondary }]`,
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
            style={tw`bg-[${ Colors.label[item.color].bg }] rounded w-full p-1 h-[20px] mt-1`}
          >
            <Text
              style={tw`text-[${ Colors.label[item.color].text }] text-[12px] flex-1 text-center`}
            >{item.title}</Text>
          </View>
        ))
      }
    </Pressable>
  )
}

export default Day