import { View, TextInput, Dimensions } from "react-native"
import Colors from "../Colors"

import tw from 'twrnc'
import { CreateScreenProvider, useCreateScreenContext } from "../Contexts/CreateScreenContext"
import Header from "../Components/CreateScreen/Header"
import TitleLocationSection from "../Components/CreateScreen/TitleLocationSection"
import DateTimeSection from "../Components/CreateScreen/DateTimeSection"
import TypeToggler from "../Components/CreateScreen/TypeToggler"
import DueDateSection from "../Components/CreateScreen/DueDateSection"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect } from "react"

//TODO: description section, color selection section
const TimeSection = () => {
  const {currentType} = useCreateScreenContext()
  
  const pageWidth = useSharedValue(Dimensions.get("window").width)
  const currentTypeValue = useSharedValue(0) // 0: event, 1: task

  const dateTimeAnimStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{translateX: interpolate(currentTypeValue.value, [0, 1], [0, -pageWidth.value])}]
    }
  })

  // if currentTypeValue is 0, then translateX is pageWidth, which means the view is out of the screen
  const dueDateAnimStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{translateX: interpolate(currentTypeValue.value, [0, 1], [pageWidth.value, 0])}]
    }
  })
  
  useEffect(() => {
    currentTypeValue.value = withTiming(currentType === "event" ? 0 : 1, {duration: 200})
  }, [currentType])

  return (
    <View style={tw`relative`}>
      <Animated.View style={[tw`absolute w-[100%]`, dateTimeAnimStyle, ]}>
        <DateTimeSection />
      </Animated.View>
      <Animated.View style={[tw`absolute w-[100%]`, dueDateAnimStyle]}>
        <DueDateSection />
      </Animated.View>
    </View>
  )
}

const CreateScreen = () =>
{
  return (
    <CreateScreenProvider>
      <View style={tw`bg-[${ Colors.bg.primary }] h-full pt-4 px-4`}>
        <Header />
        <TypeToggler />
        <TitleLocationSection />
        <TimeSection />
      </View>
    </CreateScreenProvider>
  )
}

export default CreateScreen