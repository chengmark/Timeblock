import { Text, View } from 'react-native'
import tw from 'twrnc'
import { BoxProps, boxStyle } from './Base/Box'

interface BadgeProps extends BoxProps {
  text: string
  textColor: string
  bgColor: string
  radius?: number
  size?: number
  bold?: boolean
}

const Badge = ({text, textColor, bgColor, radius = 10, size=14, bold=false, ...otherProps}:BadgeProps) => {
  return (
    <View
      style={[
        boxStyle({...otherProps}),
        tw`px-1.25`,
        tw`bg-[${bgColor}]`,
        tw`rounded-[${radius}]`
      ]}
    >
      <Text
        style={[
          tw`text-[${textColor}]`,
          tw`text-[${size}px]`,
          bold ? tw`font-bold` : tw`font-normal`
        ]}
      >
        { text }
      </Text>
    </View>
  )
}

export default Badge