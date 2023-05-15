import React from 'react';
import { ReactElement } from 'react';
import { StyleProp, ViewProps, View } from 'react-native';
import tw from 'twrnc'
import Box, { BoxProps, boxStyle } from './Box';


export interface FlexBoxProps extends BoxProps{
  col?:boolean
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center';
  style?: StyleProp<ViewProps>
  gap?: number
}

export const flexBoxStyle = ({col=false, justify='start', align='start', style, ...otherProps}: FlexBoxProps) => {
  return (([
    boxStyle({...otherProps}),
    col ? tw`flex-col` : tw`flex-row`,
    tw`justify-${justify}`,
    tw`items-${align}`,
    style
  ]))
}

const FlexBox = ({children, gap=0, ...flexBoxProps}: FlexBoxProps & {children: ReactElement | ReactElement[], gap?: number}) => (
  <Box style={flexBoxStyle(flexBoxProps)}>
    {React.Children.map(children, (child, index) => {
      // gap implementation
      const isCol = flexBoxProps.col
      const mt = isCol && index > 0 ? gap/2 : 0;
      const mr = !isCol && index < React.Children.count(children)-1 ? gap/2 : 0;
      const mb = isCol && index < React.Children.count(children)-1 ? gap/2 : 0;
      const ml = !isCol && index > 0 ? gap/2 : 0;
      return React.cloneElement(child, { style: tw`mt-${mt} mr-${mr} mb-${mb} ml-${ml}`, ...child.props});
    })}
  </Box>
)

export default FlexBox;