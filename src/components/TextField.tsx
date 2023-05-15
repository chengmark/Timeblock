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
      tw`text-[${ COLORS.text['000'] }] text-base mx-4 my-3 leading-[${FONT_SIZE[size] + 4}px]`,
      tw`text-[${FONT_SIZE[size]}px]`,
      tw``
    ]}
    placeholder={placeholder}
    placeholderTextColor={COLORS.text['100']}
    selectionColor={COLORS.text['000']}
  />
)

export default TextField