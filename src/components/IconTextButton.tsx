import { Pressable, Text, View } from 'react-native'
import tw from 'twrnc'
import COLORS, { transparent } from '../Colors'
import IconButton, { IconButtonProps } from './IconButton'

interface IconTextButtonProps extends Partial<IconButtonProps> {
  label: string;
}

// This is a button that looks like a pill
const IconTextButton = ({Icon, name, size, label, color, backgroundColor, onPress}:IconTextButtonProps) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={[
        tw`flex-row items-center px-2 py-1 rounded-[15px]`, 
        tw`bg-[${backgroundColor || COLORS.green}]`
      ]}
    >
      {
        Icon && name && 
        <IconButton
          Icon={Icon}
          name={name}
          size={size}
          backgroundColor={backgroundColor}
          color={color}
          style={tw`p-0 mr-1`}
        />
      }
      <Text style={tw`text-[${color as string || COLORS.background[100]}]`}>
        {label}
      </Text>
    </Pressable>
  )
}

export default IconTextButton