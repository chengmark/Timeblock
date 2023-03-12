export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  color: string;
}

export interface CalendarTask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  color: string;
}

export type CalendarItem = CalendarEvent | CalendarTask;