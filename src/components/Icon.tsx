import { ComponentType } from 'react';
import { ColorValue } from 'react-native';
import { IconProps as RNIconProps } from "react-native-vector-icons/Icon"
import tw from 'twrnc'

export interface IconProps {
  Component: ComponentType<Omit<RNIconProps, 'onPress' | 'onPressIn' | 'onPressOut'>>
  name: string
  size?:number
  color?:ColorValue
  LRFlip?:boolean // Left-Right Flip
  TBFlip?:boolean // Top-Bottom Flip
  m?: number
  mx?: number
  my?: number
}

const Icon = ({Component, name, size, color, LRFlip, TBFlip, m=0,  mx=0, my=0}:IconProps) => (
  <Component
    name={name}
    size={size}
    color={color}
    style={[
      LRFlip ? {transform: [{scaleX: -1}]} : {},
      TBFlip ? {transform: [{scaleY: -1}]} : {},
      tw`m-${m}`,
      tw`mx-${mx}`,
      tw`my-${my}`,
    ]}
  />
)

export default Icon;