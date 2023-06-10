import { ComponentType } from 'react';
import { ColorValue, StyleProp, ViewProps } from 'react-native';
import { IconProps as RNIconProps } from "react-native-vector-icons/Icon"
import tw from 'twrnc'
import { isLayoutArray, isTRBL, isYX, Layout, LayoutXY } from '../styleUtils';

export interface IconProps {
  Component: ComponentType<Omit<RNIconProps, 'onPress' | 'onPressIn' | 'onPressOut'>>
  name: string
  size?:number
  color?:ColorValue
  LRFlip?:boolean // Left-Right Flip
  TBFlip?:boolean // Top-Bottom Flip
  m?: Layout
  mx?: LayoutXY
  my?: LayoutXY
  style?: StyleProp<ViewProps>
}

const Icon = ({Component, name, size, color, LRFlip, TBFlip, m='0',  mx='0', my='0', style}:IconProps) => (
  <Component
    name={name}
    size={size}
    color={color}
    style={[
      LRFlip ? {transform: [{scaleX: -1}]} : {},
      TBFlip ? {transform: [{scaleY: -1}]} : {},
      m && isYX(m) ? tw`mx-${m[0]} my-${m[1]}`: tw``,
      m && isTRBL(m) ? tw`mt-${m[0]} mr-${m[1]} mb-${m[2]} ml-${m[3]}`: tw``,
      m && !isLayoutArray(m) ? tw`m-${m}`: tw``,
      tw`mx-${mx}`,
      tw`my-${my}`,
      style
    ]}
  />
)

export default Icon;