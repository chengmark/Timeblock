import Colors from "../../Colors";
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext";
import SectionBlock, { SectionBlockProps } from "../Form/SectionBlock";

const Section = ({children}:Omit<SectionBlockProps, "color">) => {
  const { color } = useCreateScreenContext()
  return (
    <SectionBlock color={Colors.label[color].text}>{children}</SectionBlock>
  )
}

export default Section