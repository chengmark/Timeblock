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
import RepeatModeField from "./RepeatModeField"

const DateTimeSection = () =>
{
  return (
    <Section>
      <LabeledField label="開始">
        <View style={tw`flex-row`}>
          <DateBlock />
          <TimeBlock />
        </View>
      </LabeledField>
      <SectionDivider />
      {/* {
        active && (
          <>
            <DatePicker />
            <Divider />
          </>
        )
      } */}
      <LabeledField label="結束">
        <View style={tw`flex-row`}>
          <DateBlock />
          <TimeBlock />
        </View>
      </LabeledField>
      <SectionDivider />
      <RepeatModeField />
    </Section>
  )
}

export default DateTimeSection