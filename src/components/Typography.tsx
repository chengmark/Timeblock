import tw from 'twrnc'
import { ColorValue, StyleProp, Text as RNText, TextProps } from 'react-native'
import COLORS from '../Colors'
import { FONT_SIZE } from '../constants';

// interface of Typography component, where the type of size props depends on the FONT_SIZE object
interface TypographyProps
{
  children?: React.ReactNode;
  bold?: boolean;
  size?: keyof typeof FONT_SIZE;
  style?: StyleProp<TextProps>;
  color?: string
}

const Typography = ({ children, bold, size="m", style, color=COLORS.label[100] }: TypographyProps) => (
  <RNText
    style={[
      tw`text-[${color}]`,
      bold ? tw`font-bold` : tw`font-normal`,
      tw`text-[${FONT_SIZE[size]}px]`,
      style
    ]}
    numberOfLines={1}
    ellipsizeMode="tail"
  >{children}</RNText>
)

export default Typography