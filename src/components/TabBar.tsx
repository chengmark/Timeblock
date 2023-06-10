import { View } from 'react-native'
import tw from 'twrnc'
// import AntDesignIcon
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Layout from '../Layout'
import COLORS from '../Colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Row from './Row'
import IconButton, { IconButtonProps } from './Buttons/IconButton'

interface NavButtonProps extends IconButtonProps{
  active?: boolean
}

const NavButton = ({Component, name, onPress, LRFlip=false, active=false}:NavButtonProps) => (
  <IconButton
    mx='auto'
    Component={Component}
    name={name}
    color={active ? COLORS.text['000'] : COLORS.text['200']}
    size={32}
    LRFlip={LRFlip}
    onPress={onPress}
  />
)

const TabBar = ({state, navigation}:BottomTabBarProps) => {
  const activeRoute = state.routes[state.index].name
  // console.log(activeRoute);
  return (
    <Row rounded={0} justify='between' align='center' style={[tw`border-t-[2px] border-[${COLORS.text['100']}] min-h-[${Layout.footer}px]`]}>
      <NavButton Component={AntDesignIcon} name="home" onPress={() => navigation.navigate("Home")} active={activeRoute === "Home"}/>
      <NavButton Component={SimpleLineIcon} name="wallet" onPress={() => navigation.navigate("Finance")} LRFlip active={activeRoute === "Finance"}/>
      <NavButton Component={FeatherIcon} name="calendar" onPress={() => navigation.navigate("Calendar")} active={activeRoute === "Calendar"}/>
      <NavButton Component={FontAwesomeIcon} name="sticky-note-o" onPress={() => navigation.navigate("Memo")} active={activeRoute === "Memo"}/>
    </Row>
  )
}


export default TabBar