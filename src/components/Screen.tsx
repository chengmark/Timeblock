import { Dimensions, View } from 'react-native';
import tw from 'twrnc';

interface ScreenProps {
  children?: React.ReactNode | React.ReactNode[];
}

const screenHeight = Dimensions.get('window').height

const Screen = ({ children }: ScreenProps) => (
  <View style={[tw`flex-col p-2`, tw`h-[${screenHeight - 128}px]`]}>
    {children}
  </View>
)

export default Screen;
