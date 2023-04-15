import { StyleProp, View } from "react-native"
import { IconProps } from "react-native-vector-icons/Icon"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

import tw from 'twrnc'
import Colors from "../Colors"
// this is a custom icon component
const StarIcon = ({style, color}:IconProps) => {
  return (
    <View
      style={[
        tw`relative w-[24px] h-[24px]`,
        style,
        // tw`border-[${Colors.text.primary+"55"}] border-[1px] w-[24px] h-[24px]`
      ]}
    >
      <MaterialCommunityIcon
        style={tw`absolute right-[3px] top-[-2px]`}
        color={color || Colors.text.primary}
        name="star-four-points"
        size={8}
      />

      <MaterialCommunityIcon
        style={tw`absolute right-[8px] top-[2px]`}
        color={color || Colors.text.primary}
        name="star-four-points"
        size={12}
      />

      <MaterialCommunityIcon
        style={tw`absolute right-[-3px] top-[6px]`}
        color={color || Colors.text.primary}
        name="star-four-points"
        size={18}
      />
    </View>
  )
}

export default StarIcon