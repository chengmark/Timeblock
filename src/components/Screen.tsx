import React from 'react';
import { ReactElement } from 'react';
import { Dimensions, View } from 'react-native';
import tw from 'twrnc';
import COLORS from '../Colors';
import FlexBox from './Base/FlexBox';
import Col from './Col';

interface ScreenProps {
  children: ReactElement | ReactElement[];
}

const screenHeight = Dimensions.get('window').height

const Screen = ({ children }: ScreenProps) => (
  <Col
    p={2}
    bg={COLORS.bg[100]}
    rounded={0}
    style={[
      tw`h-[${screenHeight - 128}px]`,
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
  </Col>
)

export default Screen;
