import { addMonths } from "date-fns"
import { useRef, useState } from "react"
import { Dimensions, ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import tw from "twrnc"
import Colors from "../../Colors"
import Layout from "../../Layout"
import Divider from "../Divider"
import InfiniteSwiper from "../InfiniteSwiper"
import { CalendarProvider, useCalendarContext } from "./context"
import DayLabels from "./DayLabel"
import Header from "./Header"
import Page from "./Page"

const {header, dayLabels, footer} = Layout.calendarScreen
const screenHeight = Dimensions.get('window').height

const Pages = () => {
  const {setCurPageDate, referenceDate} = useCalendarContext()
  const insets = useSafeAreaInsets()
  const swiperHeight = screenHeight - header - dayLabels - footer - insets.bottom - insets.top

  return (
    <View style={tw``}>
      <InfiniteSwiper
        PageComponent={Page}
        onPageChange={(index) => setCurPageDate(addMonths(referenceDate, index))}
        pageBuffer={1}
        minIndex={-Infinity}
        maxIndex={Infinity}
        height={swiperHeight}
      />
    </View>
  )
}

const Calendar = () => {
  
  return (
    <CalendarProvider>
      <View style={tw``}>
        <Header />
        <DayLabels />
        <Divider />
        <Pages />
        <Divider />
      </View>
    </CalendarProvider>
  )
}

export default Calendar