import { View, Text, Pressable } from "react-native"
import LabeledField from "../Form/LabeledField"
import Section from "./Section"

import tw from 'twrnc'
import DateBlock from "./DateBlock"
import TimeBlock from "./TimeBlock"
import SectionDivider from "../Form/SectionDivider"
import Colors from "../../Colors"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import IconButton from "../IconButton"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import { REPEAT_MODE } from "../../constants"


const RepeatModeField = () => {
  const { repeatModeSelectModalRef, itemInput } = useCreateScreenContext()

  const handlePress = () =>
  {
    console.log(repeatModeSelectModalRef?.current);
    repeatModeSelectModalRef?.current?.present()
  }

  return(
    <Pressable onPress={handlePress}>
        <LabeledField label="重複">
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-base text-[${ Colors.text.secondary }]`}>{REPEAT_MODE[itemInput.repeatMode]}</Text>
            <IconButton
              style={tw`p-0 m-0`}
              Icon={MaterialIcon}
              name="keyboard-arrow-right"
              color={Colors.text.secondary}
              size={28}
            />
          </View>
        </LabeledField>
      </Pressable>
  )
}

export default RepeatModeField