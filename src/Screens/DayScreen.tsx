
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Colors from '../Colors'
import { CalendarEvent, CalendarItem, CalendarTask } from '../Types/CalendarItemTypes'
import { RootStackParamList } from '../Types/NavigationTypes'

type DayScreenProps = NativeStackScreenProps<RootStackParamList, "Day">

// show 1 single time if the item is a task e.g., item.dueDate
// show 2 times if the item is an event e.g., item.startDate, item.endDate
const ItemRow = ({ item }: { item: CalendarItem }) =>
{
  // determine if the item is a task or an event using guard clauses
  let task = item as CalendarTask
  let event = item as CalendarEvent

  return (
    <View
      style={tw`flex-row mt-4`}
    >
      <View style={tw`flex-col justify-center items-center border-r-[${Colors.label[item.color].text}] border-r-2 p-1 h-[32px] w-[48px]`}>
        {
          task.dueDate && (
            <Text style={tw`text-[${Colors.text.primary}]`}>
              {format(new Date(task.dueDate), 'HH:mm')}
            </Text>
          )
        }
        {
          event.startDate && event.endDate && (
            <>
              <Text style={tw`text-[${Colors.text.primary}]`}>
                {format(new Date(event.startDate), 'HH:mm')}
              </Text>
              <Text style={tw`text-[${Colors.text.secondary}]`}>
                {format(new Date(event.endDate), 'HH:mm')}
              </Text>
            </>
          )
        }
      </View>
      <View style={tw`flex-row justify-center items-center p-1`}>
        <Text
          style={tw`text-[${Colors.text.primary}]`}
        >
          {item.title}
        </Text>
      </View>

    </View>
  )
}

const DayScreen = ({ route }: DayScreenProps) =>
{
  //what is fns format day of week code https://date-fns.org/v2.21.3/docs/format
  // get day of week index from route.params?.day 
  const dayOfWeek = new Date(route.params?.day || '').getDay()
  const dayOfWeekCode = ['日', '一', '二', '三', '四', '五', '六'][dayOfWeek]
  const formattedDate = format(new Date(route.params?.day || ''), `M月dd日 星期${ dayOfWeekCode }`);

  useEffect(() =>
  {
    console.log(route.params?.calendarItems)
    console.log(route.params?.day)
  }, [route.params?.calendarItems])
  return (
    <View style={tw`flex-col bg-[${ Colors.bg.primary }] h-full pt-4 px-4`}>
      <Text style={tw`text-[${ Colors.text.primary }] text-xl font-bold`}>
        {formattedDate}
      </Text>
      <View style={tw`flex-col`}>
        {
          route.params?.calendarItems.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))
        }
      </View>
    </View>
  )
}

export default DayScreen