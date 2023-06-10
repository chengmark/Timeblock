import tw from 'twrnc'
import { ColorValue, StyleProp, Text as RNText, TextStyle as RNTextStyle } from 'react-native'
import COLORS from '../Colors'
import { FONT_SIZE } from '../constants';
import { BoxStyle, boxStyle } from './Base/Box';

// interface of Typography component, where the type of size props depends on the FONT_SIZE object
export interface TextProps extends BoxStyle{
  children?: React.ReactNode
  bold?: boolean
  size?: keyof typeof FONT_SIZE
  style?: StyleProp<RNTextStyle>
  color?: ColorValue | undefined
  expand?: boolean
  center?: boolean
}

const Text = ({ children, bold, size="m", style, color=COLORS.text['000'], expand=false, center=false, ...otherProps }: TextProps) => (
  <RNText
    style={[
      boxStyle({...otherProps}),
      tw`text-[${color as string}]`,
      bold ? tw`font-bold` : tw`font-normal`,
      tw`text-[${FONT_SIZE[size]}px]`,
      expand ? tw`flex-1` : tw``,
      center ? tw`text-center` : tw``,
      style
    ]}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {children}
  </RNText>
)

export default Text