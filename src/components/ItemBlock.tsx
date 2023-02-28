import { View, Text } from "react-native"
import { Event, Item, Task } from "../types/CalendarTypes"
import tw from 'twrnc'
import { transparent } from "../Colors"

interface ItemBlockProps {
  item: Item
}

interface EventBlockProps {
  event: Event
}

interface TaskBlockProps {
  task: Task
}

const TaskBlock = ({task}:TaskBlockProps) => {
  return (
    <View style={tw`m-2 p-1 rounded bg-[${transparent(0.15, task.color)}] flex-1`} key={task.title}>
      <Text style={tw`text-[${task.color}] font-bold`}>
        {task.title}
      </Text>
      <Text style={tw`text-[${task.color}]`}>
        {`${task.deadline.toLocaleTimeString()}`}
      </Text>
    </View>
  )
}

const EventBlock = ({event}:EventBlockProps) => {
  return (
    <View style={tw`m-2 p-1 rounded bg-[${transparent(0.15, event.color)}]`} key={event.title}>
      <Text style={tw`text-[${event.color}] font-bold`}>
        {event.title}
      </Text>
      <Text style={tw`text-[${event.color}]`}>
        {`${event.from.toLocaleTimeString()} - ${event.to.toLocaleTimeString()}`}
      </Text>
      <Text style={tw`text-[${event.color}]`}>
        {event.location}
      </Text>
    </View>
  )
}

const ItemBlock = ({item}:ItemBlockProps) => {
  const isEvent = (eventOrTask: Event | Task):eventOrTask is Event => !!(eventOrTask as Event).from
  if(isEvent(item)) return <EventBlock event={item}/>
  else return <TaskBlock task={item}/>
}

export default ItemBlock