import { ReactElement } from 'react';
import { View } from 'react-native'

import tw from 'twrnc';
import FlexBox, { FlexBoxStyle, flexBoxStyle } from './Base/FlexBox';
import ScrollFlexBox from './Base/ScrollFlexBox';

interface RowProps extends Omit<FlexBoxStyle, 'col'> {
  children: ReactElement | ReactElement[];
  expand?: boolean;
}

const ScrollCol = ({children, rounded=5, align, ...otherProps}:RowProps) => (
  <ScrollFlexBox
    col={true}
    rounded={rounded}
    align={align}
    {...otherProps}
  >
    {children}
  </ScrollFlexBox>
)

export default ScrollCol