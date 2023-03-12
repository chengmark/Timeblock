import { addMonths } from "date-fns"
import { useRef, useState } from "react"
import { Dimensions, ScrollView, View } from "react-native"
import tw from "twrnc"
import Colors from "../../Colors"
import Layout from "../../Layout"
import Divider from "../Divider"
import InfiniteSwiper from "../InfiniteSwiper"
import { CalendarProvider, useCalendarContext } from "./context"
import DayLabels from "./DayLabel"
import Footer from "./Footer"
import Header from "./Header"
import Page from "./Page"

const {header, dayLabels, footer} = Layout.calendarScreen
const screenHeight = Dimensions.get('window').height
const swiperHeight = screenHeight - header - dayLabels - footer - Layout.statusbar

const Pages = () => {
  const {setCurPageDate, referenceDate} = useCalendarContext()

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
        <Footer />
      </View>
    </CalendarProvider>
  )
}

export default Calendar