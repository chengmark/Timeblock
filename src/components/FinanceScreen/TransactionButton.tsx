import { useNavigation } from "@react-navigation/native"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import COLORS from "../../Colors"
import IconButton, { IconButtonProps } from "../Buttons/IconButton"

interface TransactionButtonProps extends Omit<IconButtonProps, 'Component' | 'name' | 'color' | 'bg' | 'p' | 'onPress'> {}

const TransactionButton = ({...iconButtonProps}: TransactionButtonProps) => {
  // console.log(iconButtonProps);
  const nav = useNavigation()

  return (
    <IconButton
      Component={MaterialCommunity}
      name="swap-vertical"
      size={32}
      color={COLORS.text['000']}
      bg={COLORS.brand.primary}
      p={2.5}
      onPress={() => nav.navigate('AddTransaction')}
      {...iconButtonProps}
    />
  ) 
}

export default TransactionButton