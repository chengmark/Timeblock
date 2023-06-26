import React from 'react';
import { ReactElement } from 'react';
import { StyleProp, ViewProps, View, ViewStyle } from 'react-native';
import tw from 'twrnc'
import { isTRBL, isYX, Layout } from '../../styleUtils';
import Box, { BoxProps, BoxStyle, boxStyle } from './Box';

export type Justify = 'start' | 'end' | 'center' | 'between' | 'around'
export type Align = 'start' | 'end' | 'center'

export interface FlexBoxStyle extends BoxStyle
{
  col?: boolean
  justify?: Justify;
  align?: Align;
  style?: StyleProp<ViewStyle>
}

export const flexBoxStyle = ({ col = false, justify = 'start', align = 'start', style, ...otherProps }: FlexBoxStyle) =>
{
  return (([
    boxStyle({ ...otherProps }),
    col ? tw`flex-col` : tw`flex-row`,
    tw`justify-${ justify }`,
    tw`items-${ align }`,
    style
  ]))
}

export type FlexBoxProps = FlexBoxStyle & BoxProps & { children: ReactElement | ReactElement[]}

const FlexBox = ({ children, onPress, ...flexBoxProps }: FlexBoxProps) => (
  <Box onPress={onPress} style={flexBoxStyle(flexBoxProps)}> 
    {children}
  </Box>
)

export default FlexBox;