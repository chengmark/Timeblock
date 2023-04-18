import { View } from "react-native";
import tw from 'twrnc'
import COLORS from "./Colors";
import FlexBoxProps, { flexBoxStyle } from "./Components/FlexBox";

interface CardProps extends FlexBoxProps{
  children?: React.ReactNode;
}

const Card = ({children, col, justify, align, style}:CardProps) => (
  <View style={[
    tw`p-2 m-1 rounded`,
    tw`bg-[${COLORS.background[200]}]`,
    flexBoxStyle({col, justify, align, style})
  ]}>
    {children}
  </View>
)

export default Card