import { View, Text } from "react-native"


import tw from 'twrnc'
import Colors from "../../Colors"

const LabeledField = ({ label, children }: { label: string, children: React.ReactNode }) =>
{
  return (
    <View style={tw`my-2 mx-4 flex-row`}>
      <View style={tw`flex-row justify-between flex-1 items-center`}>
        <Text style={tw`text-[${ Colors.text.primary }] text-base`}>
          {label}
        </Text>
        {children}
      </View>
    </View>
  )
}

export default LabeledField