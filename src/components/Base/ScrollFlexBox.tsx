import React from 'react';
import { ReactElement } from 'react';
import { StyleProp, ViewProps, View } from 'react-native';
import tw from 'twrnc'
import { isTRBL, isYX, Layout } from '../../styleUtils';
import Box, { BoxProps, BoxStyle, boxStyle } from './Box';
import { flexBoxStyle, FlexBoxStyle } from './FlexBox';
import ScrollBox from './ScrollBox';

export type FlexBoxProps = FlexBoxStyle & BoxProps & { children: ReactElement | ReactElement[], gap?: number }

const ScrollFlexBox = ({ children, ...flexBoxProps }: FlexBoxProps) => (
  <ScrollBox style={flexBoxStyle(flexBoxProps)}>
    {children}
  </ScrollBox>
)

export default ScrollFlexBox;