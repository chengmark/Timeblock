import { TextInput } from "react-native"

import tw from 'twrnc'
import COLORS from "../Colors"
import { FONT_SIZE } from "../constants"

interface TextFieldProps {
  placeholder: string
  size?: keyof typeof FONT_SIZE;
  onChangeText?: (text: string) => void
}

const TextField = ({placeholder, size='m', onChangeText}:TextFieldProps) => (
  <TextInput
    onChangeText={onChangeText ?? (() => {})}
    style={[
      tw`text-[${ COLORS.label[100] }] text-base mx-4 my-3 leading-8`,
      tw`text-[${FONT_SIZE[size]}px]`,
    ]}
    placeholder={placeholder}
    placeholderTextColor={COLORS.label[300]}
    selectionColor={COLORS.green}
  />
)

export default TextField