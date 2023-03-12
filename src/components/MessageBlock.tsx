import { Text, View } from "react-native"
import tw from 'twrnc'
import Colors from "../Colors"
import { Message } from "../Types/MessageTypes"

interface MessageBlockProps {
  message: Message
}

const MessageBlock = ({message}:MessageBlockProps) => {
  return (
    <View>
      <View
      style={[tw`p-2 rounded bg-[${message.isSender ? Colors.bg.primary : Colors.bg.secondary}]`]}
    >
      <Text
        style={[tw`text-[${Colors.text.primary}] text-base`]}
      >
        {message.content}
      </Text>
    </View>
    </View>
  )
}

export default MessageBlock