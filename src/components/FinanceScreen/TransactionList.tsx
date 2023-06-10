import { Dimensions, FlatList, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import Icon from '../Icon'
import Row from '../Row'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../Colors'
import Col from '../Col'
import Text from '../Text'

const data = Array.from({length: 30}, (_, i) => ({id: i.toString()}))

const TransactionItem = () => (
  <Row gap={1.25} p={1.25} bg={COLORS.bg['300']} align='center' my={1.25} rounded={1.25}>
    <Icon Component={MaterialCommunity} name="bus" color={COLORS.text['000']} size={24.5}/>
    <Col gap={1.25} expand px={2.5}>
      <Row justify='between'>
        <Text color={COLORS.text['000']} size='l' bold expand>BUS</Text>
        <Row gap={1.25}>
          <Text color={COLORS.text['100']}>-HKD</Text>
          <Text color={COLORS.text['000']} size='l' bold>24.7</Text>
        </Row>
      </Row>
      <Row>
        <Text color={COLORS.text['100']} size='s' expand>Work</Text>
        <Text color={COLORS.text['100']} size='s'>Today</Text>
      </Row>
    </Col>
  </Row>
)

const TransactionList = () => {
  return (
    <SafeAreaView>
      <Row style={tw`h-[${Dimensions.get('window').height - 80}px]`} align='start'>
        <FlatList
          style={tw`w-full`}
          nestedScrollEnabled
          data={data}
          renderItem={TransactionItem}
          keyExtractor={item => item.id}
          bounces={false}
        />
      </Row>
    </SafeAreaView>
  )
}

export default TransactionList