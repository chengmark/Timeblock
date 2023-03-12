import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import Toggler from "../Toggler"

const TypeToggler = () => {
  const { color } = useCreateScreenContext()

  return (
    <Toggler
      options={["活動", "工作"]}
      activeColor={{text: Colors.label[color].text, bg: Colors.label[color].bg}}
      inactiveColor={{text: Colors.text.secondary, bg: Colors.bg.withTransparentness}}
    />
  )
}

export default TypeToggler