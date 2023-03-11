import { addMonths } from "date-fns"
import { useRef, useState } from "react"
import { ScrollView, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { useSharedValue } from "react-native-reanimated"
import tw from "twrnc"
import Colors from "../../Colors"
import Divider from "../Divider"
import InfiniteSwiper from "../InfiniteSwiper"
import { CalendarProvider, useCalendarContext } from "./context"
import DayLabels from "./DayLabel"
import Header from "./Header"
import Page from "./Page"

const Pages = () => {
  const {setCurPageDate, referenceDate} = useCalendarContext()

  return (
    <View style={tw`w-full`}>
      <InfiniteSwiper
        PageComponent={Page}
        onPageChange={(index) => setCurPageDate(addMonths(referenceDate, index))}
        pageBuffer={1}
        minIndex={-Infinity}
        maxIndex={Infinity}
        height={700}
      />
    </View>
  )
}

const Calendar = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const scrollViewRef = useRef<ScrollView>(null)

  const translateY = useSharedValue(0)
  const startY = useSharedValue(0)
  const isScrolling = useSharedValue(false)
  const isVertical = useSharedValue(false)

  // a pan gesture that detects whether it is scrolling vertically first
  // if no, then do nothing
  // if yes, , then assume the whole scrolling is vertical until it ends, and update the translateY value
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      
    })
    
  return (
    <CalendarProvider>
      <GestureDetector
        // gesture={}
      >
        <View style={tw`w-full flex-1 flex-col bg-[${ Colors.bg.primary }] rounded`}>
          <Header />
          <DayLabels />
          <Divider />
          <Pages />
        </View>
      </GestureDetector>
    </CalendarProvider>
  )
}

export default Calendar