import { View } from "react-native";
import tw from 'twrnc'
import COLORS from "../Colors";

const Divider = () => ( <View style={tw`bg-[${COLORS.separator}] h-[1px]`}/> )

export default Divider