import { Dimensions, View } from 'react-native';
import tw from 'twrnc';
import COLORS from '../Colors';
import Col from './Col';

interface ScreenProps {
  children?: React.ReactNode | React.ReactNode[];
}

const screenHeight = Dimensions.get('window').height

const Screen = ({ children }: ScreenProps) => (
  <Col
    p={2}
    bg={COLORS.bg[100]}
    rounded={0}
    style={[
      tw`h-[${screenHeight - 128}px]`,
    ]}
  >
    {children}
  </Col>
)

export default Screen;
