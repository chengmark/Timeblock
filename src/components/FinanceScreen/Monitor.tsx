import { useEffect } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import tw from 'twrnc'
import COLORS from '../../Colors'
import { useAddTransactionContext } from '../../Contexts/AddTransactionContext'
import { useCalculatorContextContext } from '../../Contexts/CalculatorContext'
import { toDisplayString } from '../../utils/CalculatorUtils'
import Col from '../Col'
import Row from '../Row'
import Text from '../Text'

const Monitor = () => {
  const { inputStack } = useCalculatorContextContext()

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