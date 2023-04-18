import { lang } from "../../utils"
import IconTextButton from "../IconTextButton"
import Section from "../Section"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import tw from 'twrnc'
import COLORS from "../../Colors"
import { useNavigation } from "@react-navigation/native"

const ButtonSection = () => {
  const navigation = useNavigation()


  return (
    <Section justify='around'>
      <IconTextButton
        style={tw`mr-auto`}
        Icon={MaterialCommunityIcon}
        name='plus'
        size={20}
        label={lang('AddBudget')}
        backgroundColor={COLORS.mint}
        onPress={() => navigation.navigate('Finance', {screen: 'AddTransaction'})}
      />
      <IconTextButton
        style={tw`ml-auto`}
        Icon={MaterialCommunityIcon}
        name='plus'
        size={20}
        label={lang('AddTransaction')}
        onPress={() => navigation.navigate('Finance', {screen: 'AddTransaction'})}
      />
    </Section>
  )
}

export default ButtonSection