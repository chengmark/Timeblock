import { View, Text } from "react-native"
import LabeledField from "../Form/LabeledField"
import Section from "./Section"

import tw from 'twrnc'
import DateBlock from "./DateBlock"
import TimeBlock from "./TimeBlock"
import SectionDivider from "../Form/SectionDivider"
import Colors from "../../Colors"

const DateTimeSection = () => (
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
      <LabeledField label="重複">
        <Text style={tw`text-base text-[${Colors.text.secondary}]`}>永不</Text>
      </LabeledField>
  </Section>

)

export default DateTimeSection