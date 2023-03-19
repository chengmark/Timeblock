import { TextInput } from "react-native"
import Section from "./Section"
import tw from 'twrnc'
import Colors from "../../Colors"
import Layout from "../../Layout"
import SectionDivider from "../Form/SectionDivider"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

const NUM_OF_LINES = 4

const DescriptionSection = () => {
  const { itemInput, setItemInput } = useCreateScreenContext()

  return (
    <Section>
      <TextInput
        style={tw`text-[${Colors.text.primary}] my-2 mx-4 text-base p-0 h-[${Layout.createScreen.field * 1}px]`}
        multiline
        numberOfLines={1}
        placeholder={"URL"}
        placeholderTextColor={Colors.text.secondary}
      />
      <SectionDivider />
      <TextInput
        style={tw`text-[${Colors.text.primary}] my-2 mx-4 text-base p-0 h-[${Layout.createScreen.field * NUM_OF_LINES}px]`}
        multiline
        numberOfLines={NUM_OF_LINES}
        placeholder={"附註"}
        placeholderTextColor={Colors.text.secondary}
        onChangeText={text => setItemInput({...itemInput, description: text})}
      />
    </Section>
  )
}

export default DescriptionSection 