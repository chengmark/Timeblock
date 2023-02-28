import { View, Text, Pressable, StyleProp, TextStyle } from "react-native"
import tw from 'twrnc'
import Colors from "../Colors"

const TextButton = ({onPress, style, text}:{onPress?:()=>void, style?:StyleProp<TextStyle>, text:string}) => {
  return (
    <Pressable style={tw``} onPress={onPress}>
      <Text style={style}>{text}</Text>
    </Pressable>
  )  
}

export default TextButton