import { ColorValue } from 'react-native'
import tw from 'twrnc'
import COLORS from '../../Colors'
import { FONT_SIZE } from '../../constants'
import { Align, FlexBoxProps, Justify } from '../Base/FlexBox'
import Col from '../Col'
import Row from '../Row'
import Text, { TextProps } from '../Text'

interface ButtonProps extends Omit<FlexBoxProps, 'children' | 'style'>, Omit<TextProps, 'children' | 'style' | 'size'>{
  text: string
  fontSize?: keyof typeof FONT_SIZE
  fontColor?: ColorValue | undefined
  width?: number // in px
  underlined?: boolean
}

const OutlinedButton = ({col=false, text, fontSize, bold, fontColor=COLORS.text['000'], border=[0.25, COLORS.bg['300']], underlined=false, width=0,  ...rest}: ButtonProps) => {
  const commonDefaultProps = {
    px: 3.75,
    py: 2,
    rounded:0.5,
    border,
    justify: 'center' as Justify,
    align: 'center' as Align,
  }
  
  if(col){
    return (
      <Col
        style={tw`min-w-[${width}px]`}
        {...commonDefaultProps}
        {...rest}
      >
        <Text size={fontSize} color={fontColor} bold={bold} underlined={underlined}>{ text }</Text>
      </Col>
    )
  }

  return (
    <Row
      style={tw`min-w-[${width}px]`}
      {...commonDefaultProps}
      {...rest}
    >
      <Text size={fontSize} color={fontColor} bold={bold} underlined={underlined}>{ text }</Text>
    </Row>
  )
}

export default OutlinedButton