import { StyleProp, ViewProps } from 'react-native';
import tw from 'twrnc'

interface FlexBoxProps {
  col?:boolean
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center';
  style?: StyleProp<ViewProps>
}

export const flexBoxStyle = ({col=false, justify='start', align='center', style}: FlexBoxProps) => ([
  col ? tw`flex-col` : tw`flex-row`,
  tw`justify-${justify}`,
  tw`items-${align}`,
  style
])

export default FlexBoxProps;