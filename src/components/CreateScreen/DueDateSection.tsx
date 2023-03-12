import { View, Text } from "react-native"
import LabeledField from "../Form/LabeledField"
import Section from "./Section"

import tw from 'twrnc'
import DateBlock from "./DateBlock"
import TimeBlock from "./TimeBlock"
import SectionDivider from "../Form/SectionDivider"
import Colors from "../../Colors"

const DueDateSection = () => (
  <Section>
    <LabeledField label="期限">
        <View style={tw`flex-row`}>
          <DateBlock />
          <TimeBlock />
        </View>
      </LabeledField>
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

export default DueDateSection