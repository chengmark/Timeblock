import { View, Text, Pressable } from "react-native"
import LabeledField from "../Form/LabeledField"
import Section from "./Section"

import tw from 'twrnc'
import DateBlock from "./DateBlock"
import TimeBlock from "./TimeBlock"
import SectionDivider from "../Form/SectionDivider"
import Colors from "../../Colors"
import IconButton from "../IconButton"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import RepeatModeField from "./RepeatModeField"

const DueDateSection = () =>
{
  const { repeatModeSelectModalRef } = useCreateScreenContext() 

  const handlePress = () => {
    console.log(repeatModeSelectModalRef?.current);
    repeatModeSelectModalRef?.current?.present()
  }
  
  return (
    <Section>
      <LabeledField label="期限">
        <View style={tw`flex-row`}>
          <DateBlock />
          <TimeBlock />
        </View>
      </LabeledField>
      <SectionDivider />
      <RepeatModeField />
      {/* {
        active && (
          <>
            <DatePicker />
            <Divider />
          </>
        )
      } */}
    </Section>

  )
}

export default DueDateSection