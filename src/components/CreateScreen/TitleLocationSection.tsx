import SectionDivider from "../Form/SectionDivider";
import Section from "./Section";
import TextField from "./TextField";


const TitleLocationSection = () => (
  <Section>
    <TextField placeholder="標題" />
    <SectionDivider />
    <TextField placeholder="位置" />
  </Section>
)

export default TitleLocationSection