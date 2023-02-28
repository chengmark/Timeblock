import { Text as RNText, TextProps as RNTextProps, View } from "react-native"
interface TextProps extends RNTextProps {
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch"
}
import tw from 'twrnc'

const Text = ({justifyContent="center", style, children}:TextProps) => {
  return (
    <View style={tw`justify-${justifyContent}`}>
      <RNText style={style}>{children}</RNText>
    </View>

  )
}

export default Text