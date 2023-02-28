import { View } from "react-native"
import tw from 'twrnc'
import Colors from "../Colors"

interface DividerProps{
  className?:string
}

const Divider = ({className}:DividerProps) => {
  return (
    <View style={tw`w-full bg-[${Colors.bg.secondary}] h-0.5 ${className || ""}`}></View>
  )
}

export default Divider