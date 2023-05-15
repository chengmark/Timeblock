import React, { ReactElement } from 'react'
import { StyleProp, ViewProps, View, ViewStyle, Pressable } from 'react-native'
import tw from 'twrnc'

export interface BoxProps {
  p?: number | number[]
  px?: number
  py?: number
  m?: number | number[]
  mx?: number
  my?: number
  expand?: boolean
  rounded?: number | number[]
  bg?: string
  border?: [number, string]
  style?: StyleProp<ViewStyle>
}
// p-1 = 4px
// p-2.5 = 10px

const isLayoutArray = (value: number | number[]): value is number[] => Array.isArray(value)
const hasNElements = (value: any[], n: number) => value.length === n && value.every(element => !!element)
const is2Elements = (value: number | number[]): value is number[] => isLayoutArray(value) && value.length === 2
const is4Elements = (value: number | number[]): value is number[] => isLayoutArray(value) && value.length === 4
const isYX = is2Elements
const isTLBR = is4Elements
const isTLtoTR = is4Elements // [TL, BL, BR, TR]

export const boxStyle = ({p=0, px=0, py=0,  m=0, mx=0, my=0, expand=false, rounded=0, border=[0, ''], bg, style}: BoxProps):StyleProp<ViewStyle>[] => {
  return (([
    p && isYX(p) ? tw`px-${p[0]} py-${p[1]}`: tw``,
    p && isTLBR(p) ? tw`pt-${p[0]} pr-${p[1]} pb-${p[2]} pl-${p[3]}`: tw``,
    p && !isLayoutArray(p) ? tw`p-${p}`: tw``,
    px ? tw`px-${px}`: tw``,
    py ? tw`py-${py}`: tw``,
    m && isYX(m) ? tw`mx-${m[0]} my-${m[1]}`: tw``,
    m && isTLBR(m) ? tw`mt-${m[0]} mr-${m[1]} mb-${m[2]} ml-${m[3]}`: tw``,
    m && !isLayoutArray(m) ? tw`m-${m}`: tw``,
    mx ? tw`mx-${mx}`: tw``,
    my ? tw`my-${my}`: tw``,
    expand ? tw`flex-1`: tw``,
    rounded && !isLayoutArray(rounded) ? tw`rounded-${rounded}`: tw``,
    rounded && isTLtoTR(rounded) ? tw`rounded-tr-${rounded[0]} rounded-br-${rounded[1]} rounded-bl-${rounded[2]} rounded-tl-${rounded[3]}`: tw``, //TODO: logic for rounded corners
    bg ? tw`bg-[${bg}]`: tw``,
    border && hasNElements(border, 2) ? tw`border-${border[0]} border-[${border[1]}]`: tw``,
    tw`gap-[10px] flex`,
    style
  ]))
}

const Box = ({children, onPress, ...boxProps}: BoxProps & {children?: ReactElement | ReactElement[], onPress?: () => void}) => {
  if(onPress) return (
    <Pressable onPress={onPress} style={boxStyle(boxProps)}>
      { children }
    </Pressable>
  )

  return (
    <View style={boxStyle(boxProps)}>
      { children }
    </View>
  )
}


export default Box