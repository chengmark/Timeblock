import { MemoExoticComponent, ReactElement } from "react";
import { PageProps } from "./VirtualizedSwiperTypes";

export type CalendarProps = {
  selectedDate?: Date | null
  onDateSelect?: OnDateSelect
  onPageChange?: (date: Date) => void
  // MonthComponent?: MonthComponentType;
  PageComponent:PageComponentType | MemoExoticComponent<PageComponentType>
  minDate: Date;
  maxDate: Date;
};

export type CalendarImperativeApi = {
  incrementPage: () => void;
  decrementPage: () => void;
  setPage: (date: Date) => void;
};

export type PageComponentType = (props: PageProps) => ReactElement | null;

export type OnDateSelect =
  | undefined
  | ((date: Date, options: { isSelected: boolean }) => void);

export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type RepeatMode = "NO_REPEAT" | "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "ANNUALLY" | "EVERY_WEEK" | "CUSTOM"

export interface Event {
  title: string
  location: string
  from: Date
  to: Date
  remarks: string
  repeatMode: RepeatMode
  color: string
}

export interface Task {
  title: string
  deadline: Date
  description: string
  repeatMode: RepeatMode
  color: string
}

export type Item = Task | Event

type PartialItem = Partial<Task> & Partial<Event>

export interface ItemInput extends PartialItem{
  type: "Task" | "Event"

}