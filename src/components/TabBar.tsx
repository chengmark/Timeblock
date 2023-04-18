import { View } from 'react-native'
import tw from 'twrnc'
// import AntDesignIcon
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Layout from '../Layout'
import { ComponentType } from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'
import IconButton from './IconButton'
import COLORS from '../Colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

interface NavButtonProps {
  Icon: ComponentType<IconProps>
  name: string
  onPress?: () => void
  flip?: boolean
  active?: boolean
}

const NavButton = ({Icon, name, onPress, flip=false, active=false}:NavButtonProps) => (
  <IconButton
    style={tw`mx-auto`}
    Icon={Icon}
    name={name}
    color={active ? COLORS.label[100] : COLORS.grey[300]}
    size={32}
    flip={flip}
    onPress={onPress}
  />
)

const TabBar = ({state, navigation}:BottomTabBarProps) => {
  const activeRoute = state.routes[state.index].name
  console.log(activeRoute);
  return (
    <View style={tw`flex-row border-t-[2px] border-[${COLORS.opaqueSeparator}] justify-between items-center min-h-[${Layout.footer}px]`}>
      <NavButton Icon={AntDesignIcon} name="home" onPress={() => navigation.navigate("Home")} active={activeRoute === "Home"}/>
      <NavButton Icon={SimpleLineIcon} name="wallet" onPress={() => navigation.navigate("Finance")} flip active={activeRoute === "Finance"}/>
      <NavButton Icon={FeatherIcon} name="calendar" onPress={() => navigation.navigate("Calendar")} active={activeRoute === "Calendar"}/>
      <NavButton Icon={FontAwesomeIcon} name="sticky-note-o" onPress={() => navigation.navigate("Memo")} active={activeRoute === "Memo"}/>
    </View>
  )
}


export default TabBar