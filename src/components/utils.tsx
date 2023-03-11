import { CalendarItem, Task, Event } from "./Calendar/Types"

export const isSameDay = (calendarItem:CalendarItem, date:Date) => {
  let task = calendarItem as Task
  let event = calendarItem as Event
  if(task.dueDate) 
    return task.dueDate.getDate() === date.getDate() && task.dueDate.getMonth() === date.getMonth() && task.dueDate.getFullYear() === date.getFullYear()
  else if(event.startDate && event.endDate) 
    return event.startDate.getDate() === date.getDate() && event.startDate.getMonth() === date.getMonth() && event.startDate.getFullYear() === date.getFullYear()
}