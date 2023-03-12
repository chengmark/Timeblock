import { View, Text } from "react-native"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

import tw from 'twrnc'
import Colors from "../../Colors"

const TimeBlock = () =>
{
  const {active, color} = useCreateScreenContext()
  return (
    <View style={tw`flex bg-[${ Colors.neutral[500] }] rounded py-0.5 px-2 mx-1`}>
      <Text style={tw`text-base text-[${ active ? Colors.label[color].text : Colors.text.primary }]`}>下午1:00</Text>
    </View>
  )
}

export default TimeBlock