import { useEffect } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import tw from 'twrnc'
import COLORS from '../../../Colors'
import { useAddTransactionContext } from '../../../Contexts/AddTransactionContext'
import { toDisplayString } from '../../../utils/CalculatorUtils'
import Col from '../../Col'
import Row from '../../Row'
import Text from '../../Text'

const Digit = ({digit}:{digit:string}) => (<Text size='6xl'>{digit}</Text>)
const Cursor = () => {
  const height = useSharedValue(0); // Default height

  useEffect(() => {
    height.value = withRepeat(
      withTiming(1, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // -1 indicates infinite repetition
      true // Reverse the animation on each repetition
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    height: `${height.value * 100}%`, // Scale the height value to a percentage
  }));
  return <Animated.View style={[tw`w-[2px] bg-white`, animatedStyle]}/>
}

const Monitor = () => {
  const {inputStack} = useAddTransactionContext()

  return (
    <Col
      justify='center'
      align='center'
      style={[
        tw`w-[${Dimensions.get('window').width}px]`,
      ]}
      bg={COLORS.bg['100']}
      rounded={0}
      expand
    >
      <Row align='center'>
        <Text size='6xl'>{toDisplayString(inputStack)}</Text>
      </Row>
    </Col>
  )
}

export default Monitor