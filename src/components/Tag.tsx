import { Pressable, Text } from 'react-native'
import tw from 'twrnc'

interface TagProps {
  title: string
  color: {bg: string, text: string}
  active?: boolean
  onPress?:() => {}
}

const Tag = ({title, color, onPress}: TagProps) => {
  return (
    <Pressable
      style={[tw`bg-[${ color.bg }] rounded px-4 mx-1`]}
      onPress={() => onPress?.()}
    >
      <Text style={tw`text-base text-[${ color.text }] text-center`}>{title}</Text>
    </Pressable>
  )
}

export default Tag