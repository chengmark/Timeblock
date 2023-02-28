import { MotiProps } from "moti"
import { MotiPressable } from "moti/interactions"
import { ReactElement, useState, useMemo, ComponentType } from "react"
import { ColorValue } from "react-native"
import { IconProps } from "react-native-vector-icons/Icon"
import tw from 'twrnc'
import Colors from "../Colors"

interface IconButtonProps extends Pick<MotiProps, "animate" | "transition">{
  Icon:ComponentType<IconProps>
  name:string
  className?:string
  size?:number
  color?:ColorValue | undefined
  onPress?:()=>void
  backgroundColor?:string
  activeColor?:string
}

interface NonPressableIconProps extends Omit<IconProps, "onPress">{
  Icon:ComponentType<IconProps>
}

const NonPressableIcon = ({Icon, ...otherProps}:NonPressableIconProps ) => <Icon {...otherProps}/>


const IconButton = ({Icon, name, className, size=24, color, backgroundColor, activeColor, onPress}:IconButtonProps) => {
  
  return (
    <MotiPressable
      onPress={()=>onPress?.()}
      style={tw`p-1 rounded ${className || ''}`}
      animate={useMemo(
        () => ({ pressed }) => {
          'worklet'
          return {
            backgroundColor: pressed ? (activeColor || Colors.button.active) : (backgroundColor || Colors.button.bg) ,
            opacity: 1, 
          }
        },[]
      )}
      transition={{
        type:'timing',
        duration: 100
      }}
    >
      <NonPressableIcon name={name} size={size} color={color} Icon={Icon}/>
    </MotiPressable>
  )
}

export default IconButton