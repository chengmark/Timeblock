import { Pressable, Text } from "react-native"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

import tw from 'twrnc'
import Colors from "../../Colors"

const DateBlock = () => {
  const {active, setActive, color} = useCreateScreenContext()
  return (
    <Pressable style={tw`flex bg-[${ Colors.neutral[500] }] rounded py-0.5 px-2 mx-1`} onPress={() => setActive(!active)}>
      <Text style={tw`text-base text-[${ active ? Colors.label[color].text : Colors.text.primary }]`}>2023年2月20日</Text>
    </Pressable>
  )
}

export default DateBlock