import { LabelColors } from "../../Colors";


export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  color: LabelColors;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  color: LabelColors;
}

export type CalendarItem = Task | Event;

