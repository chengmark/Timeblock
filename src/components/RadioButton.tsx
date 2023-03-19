import { Pressable, StyleProp, View } from "react-native"
import tw from 'twrnc'

interface RadioButtonProps {
  active?:boolean
  color: string
  activeColor: string
  size: number
  style?:StyleProp<any>
  onPress?: () => {}
}

const RadioButton = ({active = false, color, activeColor, size, style, onPress}:RadioButtonProps) => {
  return (
    <Pressable
      style={[
        tw`flex justify-center items-center rounded-full border-[2px]`,
        tw`border-[${active ? activeColor : color}]`,
        tw`w-[${size}px] h-[${size}px]`,
        style,
      ]}
      onPress={()=>onPress?.()}
    >
      {
        active &&
        <View
        style={[
          tw`rounded-full`,
          tw`bg-[${activeColor}]`,
          tw`w-[${size*0.5}px] h-[${size*0.5}px]`
        ]}
      />
      }
    </Pressable>
  )
}

export default RadioButton