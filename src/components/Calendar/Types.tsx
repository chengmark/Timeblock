import { LabelColor } from "../../Colors";


export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  color: LabelColor;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  color: LabelColor;
}

export type CalendarItem = Task | Event;

