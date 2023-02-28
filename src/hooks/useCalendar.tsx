import { useContext } from "react";
import { CalendarContext  } from "../contexts/CalendarContext";

export const useCalendarContext = () => useContext(CalendarContext)
