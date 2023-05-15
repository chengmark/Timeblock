import { ReactElement } from 'react';
import { View } from 'react-native'

import tw from 'twrnc';
import FlexBox, { FlexBoxProps, flexBoxStyle } from './Base/FlexBox';

interface RowProps extends Omit<FlexBoxProps, 'col'> {
  children: ReactElement | ReactElement[];
  expand?: boolean;
}

const Col = ({children, rounded=5, align, ...otherProps}:RowProps) => (
  <FlexBox
    col={true}
    rounded={rounded}
    align={align}
    {...otherProps}
  >
    {children}
  </FlexBox>
)

export default Col