import { useState } from "react"
import { TextInput, View } from "react-native"

import tw from 'twrnc'
import Colors from "../Colors"
import Layout from "../Layout"
import IconButton from "./IconButton"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Message } from "../Types/MessageTypes"

interface MessageInputProps {
  onSend: (message:Message) => void
}

const MessageInput = ({onSend}:MessageInputProps) =>
{
  const [value, setValue] = useState<string>('')

  
  return (
    <View
      style={[tw`flex-row px-2 py-2 bg-[${ Colors.bg.secondary }] rounded justify-center mx-4 my-2`]}
    >
      <TextInput
        style={tw`flex-1 text-[${ Colors.text.primary }] leading-6 p-0 min-h-[${Layout.messageInput}px] text-base`}
        multiline
        placeholder="Enter here ..."
        placeholderTextColor={Colors.text.secondary}
        value={value}
        onChangeText={text => {
          setValue(text)
        }}
      />
      <IconButton
        style={tw`ml-auto mt-auto p-0`}
        color={Colors.text.secondary}
        Icon={MaterialIcon}
        name={"send"}
        onPress={() => {
          if(value.length > 0)
            onSend({content: value, id: '3', isSender: true})
        }}
      />
    </View>
  )
}

export default MessageInput