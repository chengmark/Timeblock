import { LabelColors } from "../Colors";

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  color: LabelColors;
  repeatMode: RepeatMode;
}

export interface CalendarTask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  color: LabelColors;
  repeatMode: RepeatMode;
}

export type CalendarItem = CalendarEvent | CalendarTask;

export type RepeatMode = "NO_REPEAT" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"