import { useCreateScreenContext } from "../../Contexts/CreateScreenContext";
import SectionDivider from "../Form/SectionDivider";
import Section from "./Section";
import TextField from "./TextField";


const TitleLocationSection = () => {
  const {itemInput, setItemInput} = useCreateScreenContext()

  return (
    <Section>
      <TextField
        placeholder="標題"
        onChangeText={(text) => setItemInput({...itemInput, title: text})}
      />
      <SectionDivider />
      <TextField
        placeholder="位置"
        onChangeText={(text) => setItemInput({...itemInput, location: text})}  
      />
    </Section>
  )
}

export default TitleLocationSection