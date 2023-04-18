import { View } from 'react-native'
import tw from 'twrnc'
import COLORS from '../Colors';
import FlexBoxProps, { flexBoxStyle } from './FlexBox';

interface SectionProps extends FlexBoxProps{
  children?: React.ReactNode;
}

const Section = ({children, col, justify, align}:SectionProps) => {
  return (
    <View style={[
      tw`p-2 m-1 rounded flex-wrap`,
      flexBoxStyle({col, justify, align})
    ]}>
      {children}
    </View>
  )
}

export default Section