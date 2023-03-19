import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import Toggle from "../Toggle"

const TypeToggle = () => {
  const { color, setInputType} = useCreateScreenContext()

  return (
    <Toggle
      options={["活動", "工作"]}
      activeColor={{text: Colors.label[color].text, bg: Colors.label[color].bg}}
      inactiveColor={{text: Colors.text.secondary, bg: Colors.bg.withTransparentness}}
      onPress={[
        () => setInputType("event"),
        () => setInputType("task"),
      ]}
    />
  )
}

export default TypeToggle