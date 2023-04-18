import { ComponentType } from "react"
import { View } from "react-native"
import { IconProps } from "react-native-vector-icons/Icon"
import tw from 'twrnc'
import { FONT_SIZE } from "../../constants"
import IconButton, { IconButtonProps } from "./IconButton"
import Typography, {TypographyProps} from "..//Typography"

type PartialIconButtonProps = Partial<Omit<IconButtonProps, 'size' | 'style'>>
type PartialTypographyProps = Partial<Omit<TypographyProps, 'size' | 'style'>>

interface LabeledButtonProps extends PartialIconButtonProps, PartialTypographyProps{
  Icon:ComponentType<IconProps>
  name:string
  fontSize?: keyof typeof FONT_SIZE
  iconSize?: number
}

const LabeledButton = ({Icon, name, color, fontSize, iconSize}: LabeledButtonProps) => {
  return (
    <View
      style={tw`flex-col`}
    >
      <IconButton
        Icon={Icon}
        name={name}
        size={iconSize}
        color={color}
      />
      <Typography
        size={fontSize}
      />
    </View>
  )
}

export default LabeledButton