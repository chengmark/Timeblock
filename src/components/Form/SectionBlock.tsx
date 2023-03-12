import { View, ViewProps } from "react-native"

import tw from 'twrnc'
import Colors from "../../Colors"

export interface SectionBlockProps extends ViewProps { color: string }

const SectionBlock = ({children, style, color}:SectionBlockProps) => {
  return (
    <View style={[tw`bg-[${ Colors.bg.secondary }] rounded-[10px] mt-6 flex-row`, style]}>
      <View style={tw`bg-[${color}] w-[4px] h-[100%] rounded-l-[10px]`} />
      <View
        style={tw`flex-col flex-1`}
      >
        {children}
      </View>
    </View>
  )
}

export default SectionBlock