import { View, TextInput, Dimensions } from "react-native"
import Colors from "../Colors"

import tw from 'twrnc'
import { CreateScreenProvider, useCreateScreenContext } from "../Contexts/CreateScreenContext"
import Header from "../Components/CreateScreen/Header"
import TitleLocationSection from "../Components/CreateScreen/TitleLocationSection"
import DateTimeSection from "../Components/CreateScreen/DateTimeSection"
import TypeToggle from "../Components/CreateScreen/TypeToggle"
import DueDateSection from "../Components/CreateScreen/DueDateSection"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { FunctionComponent, ReactElement, useEffect, useRef } from "react"
import DescriptionSection from "../Components/CreateScreen/DescriptionSection"
import Layout from "../Layout"
import TagSection from "../Components/CreateScreen/TagSection"
import TagSelectModal from "../Components/CreateScreen/TagSelectModal"
import withProvider from "../Hoc/withProvider"
import RepeatSelectModal from "../Components/CreateScreen/RepeatModeSelectModal"

//TODO: description section, color selection section
const TimeSection = () => {
  const { inputType } = useCreateScreenContext()
  
  const pageWidth = useSharedValue(Dimensions.get("window").width)
  const inputTypeValue = useSharedValue(0) // 0: event, 1: task

  const dateTimeAnimStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{translateX: interpolate(inputTypeValue.value, [0, 1], [0, -pageWidth.value])}]
    }
  })

  // if inputTypeValue is 0, then translateX is pageWidth, which means the view is out of the screen
  const dueDateAnimStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{translateX: interpolate(inputTypeValue.value, [0, 1], [pageWidth.value, 0])}]
    }
  })

  const { field, fieldMarginY, sectionMarginTop } = Layout.createScreen
  const dateTimeFieldNo = 3
  const dateTimeHeight = (field + fieldMarginY * 2) * dateTimeFieldNo + 2 + sectionMarginTop// 2 is the divider height
  const dueDateFieldNo = 2
  const dueDateHeight = (field + fieldMarginY * 2) * dueDateFieldNo + 2 + sectionMarginTop// 2 is the divider height

  const sectionAnimStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      height: interpolate(inputTypeValue.value, [0, 1], [dateTimeHeight, dueDateHeight])
    }
  })
  
  useEffect(() => {
    inputTypeValue.value = withTiming(inputType === "event" ? 0 : 1, {duration: 200})
  }, [inputType])

  return (
    <Animated.View style={[tw``, sectionAnimStyle]}>
      <Animated.View style={[tw`relative w-[100%]`, dateTimeAnimStyle, ]}>
        <DateTimeSection />
      </Animated.View>
      <Animated.View style={[tw`absolute w-[100%]`, dueDateAnimStyle]}>
        <DueDateSection />
      </Animated.View>
    </Animated.View>
  )
}

const CreateScreen = () =>
{
  const {tagSelectModalRef, repeatModeSelectModalRef} = useCreateScreenContext()

  return (
    <View style={tw`flex-col bg-[${ Colors.bg.primary }] h-full pt-4 px-4`}>
      <Header />
      <TypeToggle />
      <TitleLocationSection />
      <TimeSection />
      <TagSection />
      <DescriptionSection />
      <TagSelectModal
        ref={tagSelectModalRef}
      />
      <RepeatSelectModal
        ref={repeatModeSelectModalRef}
      />
    </View>
  )
}

export default withProvider(CreateScreenProvider, CreateScreen)