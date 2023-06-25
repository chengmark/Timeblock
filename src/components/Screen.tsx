import React from 'react';
import { ReactElement } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, scrollTo, useSharedValue } from 'react-native-reanimated';
import tw from 'twrnc';
import COLORS from '../Colors';
import FlexBox, { FlexBoxProps } from './Base/FlexBox';
import ScrollFlexBox from './Base/ScrollFlexBox';
import Col from './Col';
import ScrollCol from './ScrollCol';

interface ScreenProps{
  children: ReactElement | ReactElement[];
}

const screenHeight = Dimensions.get('window').height

const Screen = ({ children }: ScreenProps) => {
  return (
    <ScrollCol
      p={2}
      bg={COLORS.bg[100]}
      rounded={0}
      style={[
        tw`min-h-[100%]`, // TODO adjust to screen height minus some offsets
      ]}
      gap={2.5}
    >
      {
        React.Children.map(children, (child) => (
          <FlexBox col>
            {child}
          </FlexBox>
        ))
      }
    </ScrollCol>
  )
}

export default Screen;
