import { ComponentType, useState } from "react"
import { ColorValue, Pressable, StyleProp } from "react-native"
import { IconProps } from "react-native-vector-icons/Icon"

import tw from 'twrnc'

export interface IconButtonProps {
  Icon:ComponentType<IconProps>
  name:string
  size?:number
  color?:ColorValue | undefined
  onPress?:()=>void
  backgroundColor?:string
  activeColor?:string
  style?:StyleProp<any>
  flip?:boolean
}

// This is a workaround to make the Icon component non-pressable
interface NonPressableIconProps extends Omit<IconProps, "onPress">{
  Icon:ComponentType<IconProps>
}

export const NonPressableIcon = ({Icon, ...otherProps}:NonPressableIconProps ) => <Icon {...otherProps}/>

const IconButton = ({Icon, name, size=24, color, backgroundColor, activeColor, onPress, style, flip=false}:IconButtonProps) => {
  const [pressed, setPressed] = useState(false)

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPress={()=>{
        setPressed(false)
        onPress?.()
      }}
      style={[
        tw`p-1 rounded`,
        tw`bg-[${pressed ? (activeColor || "#00000000") : (backgroundColor || "#00000000")}]`,
        flip ? {transform: [{scaleX: -1}]} : {},
        style
      ]}
    >
      <NonPressableIcon name={name} size={size} color={color} Icon={Icon}/>
    </Pressable>
  )
}

export default IconButton