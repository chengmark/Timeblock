import { parseISO } from "date-fns"
import { CalendarEvent, CalendarItem, CalendarTask } from "../Types/CalendarItemTypes"


export const isSameDay = (calendarItem:CalendarItem, date:Date) => {
  let task = calendarItem as CalendarTask
  let event = calendarItem as CalendarEvent
  if(task.dueDate) {
    
    const d = parseISO(task.dueDate)
    return d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
  }else if(event.startDate && event.endDate){
    const d = parseISO(event.startDate)
    return d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
  }
}

export const compareCalendarItems = (a: CalendarItem, b: CalendarItem) => {
  const taskA = a as CalendarTask
  const taskB = b as CalendarTask
  const eventA = a as CalendarEvent
  const eventB = b as CalendarEvent
  const dateA = taskA.dueDate ? new Date(taskA.dueDate) : new Date(eventA.startDate)
  const dateB = taskB.dueDate ? new Date(taskB.dueDate) : new Date(eventB.startDate)
  return dateA.getTime() - dateB.getTime()
}

// input number, return an array of strings where first element is the integer part and second element is the decimal part
// the decimal part should be 2 digits long
export const formatAmount = (amount: number):string[] => {
  const integer = Math.floor(amount)
  const decimal = Math.round((amount - integer) * 100)
  return [integer.toString(), decimal.toString().padStart(2, '0')]
}