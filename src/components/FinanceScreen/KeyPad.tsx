import tw from 'twrnc'
import COLORS from '../../Colors'
import Box from '../Base/Box'
import Col from '../Col'
import Icon from '../Icon'
import Row from '../Row'
import Text from '../Text'

import Material from 'react-native-vector-icons/MaterialIcons'
import { KeyPadInput } from '../../utils/CalculatorUtils'
import FlexBox from '../Base/FlexBox'
import CATEGORIES, { getCategoryIcon } from '../../categories'
import { useAddTransactionContext } from '../../Contexts/AddTransactionContext'
import { useCalculatorContextContext } from '../../Contexts/CalculatorContext'

const Key = ({value, onPress}: {value: string, onPress: () => void}) => (
  <FlexBox p={[0.625, 1.25]} bg={COLORS.bg['400']} rounded={1.25} expand onPress={onPress} style={tw`h-[48px]`} justify='center' align='center'>
    <Text color={COLORS.text['000']} size='2xl' center bold>
      {value}
    </Text>
  </FlexBox>
)

const CompleteKey = ({onPress}:{onPress: () => void}) => (
  <Row justify='center' align='center' p={[0.625, 1.25]} bg={COLORS.brand.primary} rounded={1.25} expand onPress={onPress} style={tw`h-[48px]`}>
    <Icon Component={Material} name='done' size={24} color={COLORS.text['000']} />
  </Row>
)

const EqualKey = ({onPress}:{onPress: () => void}) => (
  <Row justify='center' align='center' p={[0.625, 1.25]} bg={COLORS.brand.primary} rounded={1.25} expand onPress={onPress} style={tw`h-[48px]`}>
    <Text color={COLORS.text['000']} size='l' center bold>
      =
    </Text>
  </Row>
)

const KeyPad = ({onSubmit}:{onSubmit:() => void}) => {
  const { pop, put, equalTo } = useCalculatorContextContext()
  // from an amount to an array of digits
  // e.g., 0.00 => [0, 0, 0], 10.12 => [1, 0, 1, 2]

  return (
    <Col gap={1.25} bg={COLORS.bg[100]} style={tw``}>
      <Row gap={0.625}>
        <Key value="1" onPress={() => put(KeyPadInput.ONE)}/>
        <Key value="2" onPress={() => put(KeyPadInput.TWO)}/>
        <Key value="3" onPress={() => put(KeyPadInput.THREE)}/>
        <Key value="+" onPress={() => put(KeyPadInput.PLUS)}/>
      </Row>
      <Row gap={0.625}>
        <Key value="4" onPress={() => put(KeyPadInput.FOUR)}/>
        <Key value="5" onPress={() => put(KeyPadInput.FIVE)}/>
        <Key value="6" onPress={() => put(KeyPadInput.SIX)}/>
        <Key value="-" onPress={() => put(KeyPadInput.MINUS)}/>
      </Row>
      <Row gap={0.625}>
        <Key value="7" onPress={() => put(KeyPadInput.SEVEN)}/>
        <Key value="8" onPress={() => put(KeyPadInput.EIGHT)}/>
        <Key value="9" onPress={() => put(KeyPadInput.NINE)}/>
        <Key value="*" onPress={() => put(KeyPadInput.MULTIPLY)}/>
      </Row>

      <Row gap={0.625}>
        <Key value="." onPress={() => put(KeyPadInput.POINT)}/>
        <Key value="0" onPress={() => put(KeyPadInput.ZERO)}/>
        <Key value="DEL" onPress={() => pop()}/>
        <Key value="/" onPress={() => put(KeyPadInput.DIVIDE)}/>
      </Row>
      <Row gap={0.625}>
        <CompleteKey onPress={() => onSubmit()}/>
        <EqualKey onPress={() => equalTo()}/>
      </Row>
    </Col>
  )
}

export default KeyPad