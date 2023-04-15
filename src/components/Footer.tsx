import { NavigationProp, useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import tw from "twrnc"
import { RootStackParamList } from "../Types/NavigationTypes"
import IconButton from "./IconButton"
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from "../Colors"
import Layout from "../Layout"
import { ComponentType } from "react"
import { IconProps } from "react-native-vector-icons/Icon"

interface NavButtonProps {
  Icon: ComponentType<IconProps>
  name: string
  onPress?: () => void
  flip?: boolean
}

const NavButton = ({Icon, name, onPress, flip=false}:NavButtonProps) => (
  <IconButton
    style={tw`mx-auto`}
    Icon={Icon}
    name={name}
    color={Colors.text.secondary}
    size={32}
    flip={flip}
    onPress={onPress}
  />
)

const Footer = ({navigation}:any) => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View
      style={tw`flex-row justify-between items-center min-h-[${Layout.calendarScreen.footer}px]`}
    >

      <NavButton
        Icon={MaterialCommunityIcon}
        name="finance"
        onPress={() => navigation.navigate("Finance")}
      />

      {/* <NavButton
        Icon={MaterialIcon}
        name="sticky-note-2"
        onPress={() => navigation.navigate("Finance")}
      /> */}

      <NavButton
        Icon={FontAwesomeIcon}
        name="calendar-o"
        onPress={() => navigation.navigate("Calendar")}
      />

      <NavButton
        Icon={FontAwesomeIcon}
        name="plus-square-o"
        onPress={() => navigation.navigate("Create")}
      />

      <NavButton
        Icon={MaterialIcon}
        name="chat-bubble-outline"
        onPress={() => navigation.navigate("Scheduler")}
        flip
      />

    </View>
  )

}

export default Footer