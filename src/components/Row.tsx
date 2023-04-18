import { View, ViewProps } from 'react-native'
import tw from 'twrnc'
import FlexBoxProps, {flexBoxStyle} from './FlexBox';

interface RowProps extends Omit<FlexBoxProps, 'col'>  {
  children?: React.ReactNode;
}

const Row = ({children, justify, align, style}:RowProps) => (
  <View style={[
    tw`flex-row items-center`,
    flexBoxStyle({justify, align, style})
  ]}>
    {children}
  </View>
)

export default Row