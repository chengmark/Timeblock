
import { useNavigation } from "@react-navigation/native"
import { View, Text } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import IconButton from "../IconButton"

import tw from 'twrnc'

const Header = () => {
  const navigation = useNavigation()
  const { color, submitInput } = useCreateScreenContext()

  const handleCancelPress = () =>
  {
    navigation.goBack()
  }

  const handleSubmitPress = () => {
    submitInput()
  }

  return (
    <View style={tw`flex-row bg-[${ Colors.bg.primary }] justify-between items-center`}>
      <IconButton
        Icon={AntDesign}
        name="close"
        color={Colors.label[color].text}
        onPress={handleCancelPress}
      />
      <Text style={tw`text-[${ Colors.text.primary }] text-base`}>新增事項</Text>
      <IconButton
        Icon={AntDesign}
        name="check"
        color={Colors.label[color].text}
        onPress={handleSubmitPress}
      />
    </View>
  )
}
export default Header