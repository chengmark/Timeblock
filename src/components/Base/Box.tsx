import React, { ReactElement, ReactNode } from 'react'
import { StyleProp, ViewProps, View, ViewStyle, Pressable, ScrollView } from 'react-native'
import tw from 'twrnc'
import { hasNElements, isLayoutArray, isTRBL, isTLtoTR, isYX, Layout, LayoutXY } from '../../styleUtils'

export interface BoxStyle {
  p?: Layout
  px?: LayoutXY
  py?: LayoutXY
  m?: Layout
  mx?: LayoutXY
  my?: LayoutXY
  expand?: boolean
  rounded?: number | number[]
  bg?: string
  border?: [number, string]
  gap?: number
  style?: StyleProp<ViewStyle>
}
// p-1 = 4px
// p-2.5 = 10px

export const boxStyle = ({p=0, px=0, py=0,  m=0, mx=0, my=0, expand=false, rounded=0, border=[0, ''], bg, gap=0, style}: BoxStyle):StyleProp<ViewStyle>[] => {
  return (([
    p && isYX(p) ? tw`px-${p[0]} py-${p[1]}`: tw``,
    p && isTRBL(p) ? tw`pt-${p[0]} pr-${p[1]} pb-${p[2]} pl-${p[3]}`: tw``,
    p && !isLayoutArray(p) ? tw`p-${p}`: tw``,
    px ? tw`px-${px}`: tw``,
    py ? tw`py-${py}`: tw``,
    m && isYX(m) ? tw`mx-${m[0]} my-${m[1]}`: tw``,
    m && isTRBL(m) ? tw`mt-${m[0]} mr-${m[1]} mb-${m[2]} ml-${m[3]}`: tw``,
    m && !isLayoutArray(m) ? tw`m-${m}`: tw``,
    mx ? tw`mx-${mx}`: tw``,
    my ? tw`my-${my}`: tw``,
    expand ? tw`flex-1`: tw``,
    rounded && !isLayoutArray(rounded) ? tw`rounded-${rounded}`: tw``,
    rounded && isTLtoTR(rounded) ? tw`rounded-tr-${rounded[0]} rounded-br-${rounded[1]} rounded-bl-${rounded[2]} rounded-tl-${rounded[3]}`: tw``, //TODO: logic for rounded corners
    bg ? tw`bg-[${bg}]`: tw``,
    border && hasNElements(border, 2) ? tw`border-${border[0]} border-[${border[1]}]`: tw``, // width + color
    gap ? tw`gap-${gap}` : tw``,
    style
  ]))
}

export type BoxProps = BoxStyle & {children?: ReactNode | ReactNode[], onPress?: () => void}

const Box = ({children, onPress, ...BoxStyle}: BoxProps) => {
  if(onPress) return (
    <Pressable onPress={onPress} style={boxStyle(BoxStyle)}>
      { children }
    </Pressable>
  )

  return (
    <View style={boxStyle(BoxStyle)}>
      { children }
    </View>
  )
}


export default Box