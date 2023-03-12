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
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated"
import { DEFAULT_ANIMATION_CONFIG } from "../Components/InfiniteSwiper/default"
import { defaultPageInterpolator } from "../Components/InfiniteSwiper/types"

const minIndex = -Infinity
const maxIndex = Infinity

const Pages = ({pageAnim}:{pageAnim: Animated.SharedValue<number>;}) =>
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
        pageAnim={pageAnim}
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

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      console.log("swiper onBegin ");
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((evt) => {
      console.log("swiper onUpdate ", {directionChecked: directionChecked.value, isVertical: isVertical.value});
      // check if the user is scrolling horizontally or vertically
      if(!directionChecked.value){
        const deltaX = Math.abs(startX.value - evt.translationX);
        const deltaY = Math.abs(startY.value - evt.translationY);
        isVertical.value = deltaY > deltaX
      }
      directionChecked.value = true;
      // if the user is scrolling horizontally, update the translateX value
      if(!isVertical.value){
        const rawVal = startX.value + evt.translationX;
        const page = -rawVal / pageWidth.value;
        if (page >= minIndex && page <= maxIndex) {
          translateX.value = rawVal;
        }  
      }
      // if the user is scrolling vertically, update the translateY value
      if(isVertical.value){
        const rawVal = startY.value + evt.translationY;
        translateY.value = rawVal;
      }
    })
    .onEnd((evt) => {
      // if the user is scrolling horizontally, snap to the nearest page
      if(!isVertical.value){
        const isFling = Math.abs(evt.velocityX) > 500;
        let velocityModifier = isFling ? pageWidth.value / 2 : 0;
        if (evt.velocityX < 0) velocityModifier *= -1;
        let page = -1 * Math.round((translateX.value + velocityModifier) / pageWidth.value);
        if (page < minIndex) page = minIndex;
        if (page > maxIndex) page = maxIndex;
        translateX.value = withSpring(-page * pageWidth.value, DEFAULT_ANIMATION_CONFIG);  
      }
      // if the user is scrolling vertically, reset the translateY value
      if(isVertical.value){
        translateY.value = evt.translationY;
      }
      directionChecked.value = false; // reset the direction check
    })

  const pageAnimInternal = useSharedValue(0);
  const pageAnim = pageAnimInternal;

  useDerivedValue(() => {
    if (pageWidth.value)
      pageAnim.value = (translateX.value / pageWidth.value) * -1
  }, [pageAnim, translateX]);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
      ],
    };
  }, [translateY]);

  return (
    <CalendarProvider>
      <GestureDetector
        gesture={Gesture.Simultaneous(panGesture)}
      >
        <Animated.View
          // bounces={false}
          onLayout={({ nativeEvent }) => {
              pageWidth.value = nativeEvent.layout.width
            }
          }
          style={[animStyle]}
        >
          <Header />
          <DayLabels />
          <Divider />
          <Pages pageAnim={pageAnim}/>
        </Animated.View>
      </GestureDetector>
    </CalendarProvider>
  )

}

export default TestScreen