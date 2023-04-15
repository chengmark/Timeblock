import { useState } from 'react'
import { View, Text } from 'react-native'

import tw from 'twrnc'
import Colors from '../Colors'
import Divider from '../Components/Divider'
import MessageInput from '../Components/MessageInput'
import WelcomingPrompt from '../Components/Scheduler/WelcomingPrompt'
import StarIcon from '../Components/StarIcon'
import { Message } from '../Types/MessageTypes'

const mockMessages:Message[] = [
  {
    id:'1',
    content: 'Hello',
    isSender: true,
  },
  {
    id:'2',
    content: 'Hello',
    isSender: false,
  }
]

const SchedulerScreen = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  
  return (
    <View style={tw`flex-1 flex-col justify-between`}>
      <View style={tw`flex-row justify-center items-center`}>
        <StarIcon style={tw`right-2`} color={Colors.purple}/>
        <Text style={tw`text-[${Colors.text.primary}] text-center text-xl my-2 font-bold`}>
          AI Scheduler
        </Text>
      </View>
      <Divider />
      {/* <FlatList
        data={messages}
        renderItem={message => <MessageBlock message={message.item} />}
        keyExtractor={message => message.id}
      /> */}
      <WelcomingPrompt />
      <Divider />
      <MessageInput
        onSend={message => {
          console.log(message);
          setMessages([...messages, message])
        }}
      />
    </View>
  )
}

export default SchedulerScreen