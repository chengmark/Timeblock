import { ComposedGesture, GestureType } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  WithSpringConfig,
} from "react-native-reanimated";
import { PageInterpolatorParams } from "../../types/VirtualizedSwiperTypes";

export type OnDateSelect =
  | undefined
  | ((date: Date, options: { isSelected: boolean }) => void);

export type DayComponentType = (props: {
  date: Date;
  isInDisplayedMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}) => JSX.Element | null;

export type WeekComponentType = (props: { days: Date[] }) => JSX.Element | null;

export type MonthComponentType = (props: {
  weeks: Date[][];
  firstDayOfMonth: Date;
}) => JSX.Element | null;

export type HeaderComponentType = (props: {
  startDate: Date;
  endDate: Date;
}) => JSX.Element | null;

export type DayLabelComponentType = (props: {
  date: Date;
}) => JSX.Element | null;

export type CalendarImperativeApi = {
  incrementPage: () => void;
  decrementPage: () => void;
  setPage: (date: Date) => void;
};

export type CalendarPageInterpolator = (
  params: CalendarPageInterpolatorParams
) => ReturnType<typeof useAnimatedStyle>;

export type CalendarProps = {
  selectedDate?: Date | null; // TODO: suppoort multiple selected dates (likely using a Set())
  onDateSelect?: OnDateSelect;
  onPageChange?: (date: Date) => void;
  currentDate?: Date;
  MonthComponent: MonthComponentType;
  pageBuffer?: number;
  minDate: Date;
  maxDate: Date;
  weekStartsOn?: WeekDayIndex;
};

export type DayWrapperProps = {
  isInDisplayedMonth: boolean;
  date: Date;
  dateFormatted: string;
};

export type CalendarPageInterpolatorParams = PageInterpolatorParams

export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type PageInterval = "day" | "week" | "month";
