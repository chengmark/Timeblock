import { View, Text } from "react-native"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

import tw from 'twrnc'
import Colors from "../../Colors"
import Layout from "../../Layout"

const TimeBlock = () =>
{
  const {active, color} = useCreateScreenContext()
  return (
    <View style={tw`flex bg-[${ Colors.neutral[500] }] rounded px-2 mx-1 h-[${Layout.createScreen.field}px]`}>
      <Text style={tw`text-base leading-[${Layout.createScreen.field}px] text-[${ active ? Colors.label[color].text : Colors.text.primary }]`}>下午1:00</Text>
    </View>
  )
}

export default TimeBlock