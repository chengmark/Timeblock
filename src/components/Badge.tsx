import { ReactElement } from 'react'
import tw from 'twrnc'
import { BoxStyle, boxStyle } from './Base/Box'
import { IconProps } from './Icon'
import Row from './Row'
import { TextProps } from './Text'

interface BadgeProps extends BoxStyle {
  Icon?: () => ReactElement<IconProps>
  Text?: () => ReactElement<TextProps>
  onPress?: () => void
}

const Badge = ({Icon, Text, onPress, ...otherProps}:BadgeProps) => {
  return (
    <Row
      px={1.25}      
      style={[
        boxStyle({...otherProps}),
      ]}
      justify='center'
      align='center'
      onPress={onPress}
    >
      {Icon ? <Icon /> : <></>}
      {Text ? <Text /> : <></>}
    </Row>
  )
}

export default Badge