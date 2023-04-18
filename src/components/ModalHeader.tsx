import { View } from "react-native"
import IconButton from "./IconButton"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import tw from 'twrnc'
import Typography from "./Typography"
import COLORS from "../Colors"



interface ModalHeaderProps {
  title: string
  onBackPress: () => void
}

const ModalHeader = ({ title, onBackPress }:ModalHeaderProps) => {
  return (
    <View style={tw`flex-row justify-between items-center p-2`}>
      <IconButton Icon={AntDesignIcon} name='arrowleft' color={COLORS.label[100]} onPress={onBackPress}/>
      <Typography>{title}</Typography>
      <View style={tw`w-[32px] h-[32px]`}/>
    </View>
  )
}

export default ModalHeader