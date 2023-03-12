import { MotiText, MotiView } from 'moti'
import { MotiPressable } from 'moti/interactions'
import { useDebugValue, useEffect, useRef, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import tw from 'twrnc'
import Colors, { transparent } from '../Colors'

interface TogglerProps
{
  options: [string, string]
  activeColor: { bg: string, text: string }
  inactiveColor: { bg: string, text: string }
  onPress?: [()=>void, ()=>void]
}

interface ToggleItmeProps
{
  text: string
  active: boolean
  activeColor: { bg: string, text: string }
  inactiveColor: { bg: string, text: string }
  index: number
  onPress: () => void
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const ToggleItem = ({ text, active, activeColor, inactiveColor, index, onPress }: ToggleItmeProps) =>
{
  const progress = useSharedValue(0)
  // remember the 2 colors should have the same channel length, [RGBA, RGB] is not allowed
  const wrapperAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 0.5, 1], [activeColor.bg, inactiveColor.bg]),
    borderColor: interpolateColor(progress.value, [0, 1], [activeColor.text, inactiveColor.text])
  }))

  const textAnimStyle = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [activeColor.text, inactiveColor.text])
  }))

  useEffect(() => {
    progress.value = withTiming(active ? 0 : 1, {duration: 200});
  }, [active])

  return (
    <AnimatedPressable
      style={[
        tw`flex-1 border-[0.5px] py-1`,
        index === 0 ? tw`rounded-l-[10px]` : tw`rounded-r-[10px]`,
        wrapperAnimStyle
      ]}
      onPress={onPress}
    >
      <Animated.Text
        style={[
          tw`text-center font-bold`,
          textAnimStyle
        ]}
      >
        {text}
      </Animated.Text>
    </AnimatedPressable>
  )
}

const Toggler = ({ options, activeColor, inactiveColor, onPress }: TogglerProps) =>
{
  const [active, setActive] = useState<string>(options[0])

  return (
    <View style={tw`flex-row mt-6 items-center`}>
      <ToggleItem
        index={0}
        text={options[0]}
        active={active == options[0]}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        onPress={() => {
          onPress && onPress[0]();
          console.log(`set active to ${options[0]}`);setActive(options[0])
        }}
      />
      <ToggleItem
        index={1}
        text={options[1]}
        active={active == options[1]}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        onPress={() => {
          onPress && onPress[1]();
          console.log(`set active to ${options[1]}`);setActive(options[1])
        }}
      />
    </View>
  )
}

export default Toggler