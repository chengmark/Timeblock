import React from 'react';
import { ReactElement } from 'react';
import { StyleProp, ViewProps, View } from 'react-native';
import tw from 'twrnc'
import Box, { BoxProps, boxStyle } from './Box';


export interface FlexBoxProps extends BoxProps
{
  col?: boolean
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center';
  style?: StyleProp<ViewProps>
  gap?: number
}

export const flexBoxStyle = ({ col = false, justify = 'start', align = 'start', style, ...otherProps }: FlexBoxProps) =>
{
  return (([
    boxStyle({ ...otherProps }),
    col ? tw`flex-col` : tw`flex-row`,
    tw`justify-${ justify }`,
    tw`items-${ align }`,
    style
  ]))
}

const FlexBox = ({ children, gap = 0, ...flexBoxProps }: FlexBoxProps & { children: ReactElement | ReactElement[], gap?: number }) => (
  <Box style={flexBoxStyle(flexBoxProps)}>
    {React.Children.map(children, (child, index) =>
    {
      // gap implementation
      //TODO: fix gap overriding margin
      const isCol = flexBoxProps.col
      const mt = isCol && index > 0 ? gap / 2 : 0;
      const mr = !isCol && index < React.Children.count(children) - 1 ? gap / 2 : 0;
      const mb = isCol && index < React.Children.count(children) - 1 ? gap / 2 : 0;
      const ml = !isCol && index > 0 ? gap / 2 : 0;
      const otherStyles = Array.isArray(child.props.style) ? child.props.style.reduce((acc:any, val:any) => ({ ...acc, ...val }), {}) : child.props.style;
      const cloned = React.cloneElement(child, {...child.props, style: {...tw`mt-${ mt } mr-${ mr } mb-${ mb } ml-${ ml }`, ...otherStyles} });
      // console.log(isCol && index > 0, isCol && index < React.Children.count(children) - 1, child.props.style, cloned);
      return cloned
    })}
  </Box>
)

export default FlexBox;