import { View } from "react-native";
import tw from 'twrnc'
import Colors from "../Colors";

const Divider = () => (
  <View style={tw`bg-[${Colors.divider}] h-[1px]`}/>
)

export default Divider