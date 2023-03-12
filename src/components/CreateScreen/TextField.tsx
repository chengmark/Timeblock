import { TextInput } from "react-native"
import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

import tw from 'twrnc'

const TextField = ({placeholder}:{placeholder: string}) => (
  <TextInput
    style={tw`text-[${ Colors.text.primary }] text-base mx-4 my-3 leading-5`}
    placeholder={placeholder}
    placeholderTextColor={Colors.text.secondary}
    selectionColor={useCreateScreenContext().color}
  />
)

export default TextField