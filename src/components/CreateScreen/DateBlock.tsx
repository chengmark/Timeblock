import { Pressable, Text } from "react-native"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

import tw from 'twrnc'
import Colors from "../../Colors"
import Layout from "../../Layout"

const DateBlock = () => {
  const {dateTimePickerModalRef, active, color} = useCreateScreenContext()
  return (
    <Pressable style={tw`flex bg-[${ Colors.neutral[500] }] rounded px-2 mx-1 h-[${Layout.createScreen.field}px]`} onPress={() => dateTimePickerModalRef?.current?.present()}>
      <Text style={tw`text-base leading-[${Layout.createScreen.field}px] text-[${ active ? Colors.label[color].text : Colors.text.primary }]`}>2023年2月20日</Text>
    </Pressable>
  )
}

export default DateBlock