import { NavigationProp, useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import tw from "twrnc"
import { RootStackParamList } from "../../Types/NavigationTypes"
import IconButton from "../IconButton"
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../../Colors"
import Layout from "../../Layout"



const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View
      style={tw`flex-row justify-between items-center min-h-[${Layout.calendarScreen.footer}px]`}
    >

      <IconButton 
        style={tw`mx-auto`}
        Icon={FontAwesomeIcon}
        name="plus-square-o"
        color={Colors.text.secondary}
        size={32}
        onPress={() => navigation.navigate("Create")}
      />

      <IconButton
        style={tw`mx-auto`}
        Icon={MaterialIcon}
        name="chat-bubble-outline"
        color={Colors.text.secondary}
        size={32}
        onPress={() => navigation.navigate("Scheduler")}
        flip
      />
      
    </View>
  )

}

export default Footer