import { ScrollView, View, Text, NativeSyntheticEvent, NativeScrollEvent, NativeTouchEvent } from "react-native"
import { CalendarProvider, useCalendarContext } from "../Components/Calendar/context"
import Page from "../Components/Calendar/Page"
import InfiniteSwiper from "../Components/InfiniteSwiper"
import tw, { useDeviceContext } from 'twrnc'
import { addMonths } from "date-fns"
import { useRef, useState } from "react"
import Header from "../Components/Calendar/Header"
import DayLabels from "../Components/Calendar/DayLabel"
import Divider from "../Components/Divider"
import Colors from "../Colors"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { useSharedValue, withSpring } from "react-native-reanimated"

const Pages = () =>
{
  const { setCurPageDate, referenceDate } = useCalendarContext()
  return (
    <View style={tw``}>
      <InfiniteSwiper
        PageComponent={Page}
        onPageChange={(index) => setCurPageDate(addMonths(referenceDate, index))}
        pageBuffer={1}
        minIndex={-Infinity}
        maxIndex={Infinity}
        height={900}
      />
      <View>
        <Text style={tw`text-[${ Colors.text.primary }]`}>{`TEST`}</Text>
      </View>
    </View>
  )
}

const TestScreen = () =>
{
  // const flatListRef = useRef<FlatList<Item> | null>(null);
  // const [directionChecked, setDirectionChecked] = useState<boolean>(false);
  const [swipeEnabled, setSwipeEnabled] = useState<boolean>(true);
  // const [start, setStart] = useState<{x:number, y: number}>({x: 0, y: 0})

  const directionChecked = useSharedValue(false)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const startX = useSharedValue(0)
  const startY = useSharedValue(0)
  const isVertical = useSharedValue(true)
  const pageWidth = useSharedValue(0)

  const verticalPanGesture = Gesture.Pan()
    .onBegin(() => {
      console.log("begin");
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((evt) => {
      console.log("update");
      // check if the user is scrolling horizontally or vertically
      if(!directionChecked.value){
        const deltaX = Math.abs(startX.value - evt.translationX);
        const deltaY = Math.abs(startY.value - evt.translationY);
        isVertical.value = deltaY > deltaX;
        console.log(isVertical.value);
      }
      // if the user is scrolling horizontally, do nothing
      if(!isVertical.value) return;
      // if the user is scrolling vertically, update the translateY value
      const rawVal = startY.value + evt.translationY;
      translateY.value = rawVal;
      console.log({translateY});
    })
    .onEnd((evt) => {
      translateX.value = evt.translationX;
      translateY.value = evt.translationY;
      directionChecked.value = false; // reset the direction check
    })



  return (
    <CalendarProvider>
      <GestureDetector
        gesture={Gesture.Simultaneous(verticalPanGesture)}
      >
        <Animated.ScrollView
          bounces={false}
          onLayout={({ nativeEvent }) => {
              pageWidth.value = nativeEvent.layout.width
            }
          }
        >
          <Header />
          <DayLabels />
          <Divider />
          <Pages />
        </Animated.ScrollView>
      </GestureDetector>
    </CalendarProvider>
  )

}

export default TestScreen