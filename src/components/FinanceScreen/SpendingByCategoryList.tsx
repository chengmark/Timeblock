import Col from '../Col'
import Row from '../Row'
import Text from '../Text'
import COLORS, { transparent } from "../../Colors"
import tw from 'twrnc'
import { FlatList } from 'react-native';
import ProgressBar from '../ProgressBar';
import Chevron from '../Chevron'

const CATEGORY_SPENDINGS = [
  {
    title: 'FOOD',
    amount: '1,000.00',
  },
  {
    title: 'TRANSPORT',
    amount: '500.00',
  },
  {
    title: 'ENTERTAINMENT',
    amount: '300.00',
  }
]

const CategorySpending = ({title, amount}: {title: string, amount: string}) => (
  <Col bg={COLORS.bg['300']} rounded={1.25} p={1.25} mx={1.25} style={tw`min-w-[125px]`} gap={1.25}>
    <Row>
      <Text size="s" color={COLORS.text['100']}>{title}</Text>
    </Row>
    <Row gap={2.5}>
      <Text size="l" bold>{amount}</Text>
      <Text size="s" color={COLORS.text['100']}>HKD</Text>
    </Row>
    <Row>
      <ProgressBar
        bgColor={transparent(0.1, COLORS.cta.green)}
        progressColor={COLORS.cta.green}
        progress={20}
      />
    </Row>
  </Col>
)

const SpendingByCategoryList = () => {
  return (
    <Col gap={2.5}>
      <Row align='center' justify='between'>
        <Text bold expand color={COLORS.text['100']} >SPENDINGS BY CATEGORY</Text>
        <Chevron />
      </Row>
      <Row rounded={1.25}>
        <FlatList
          horizontal
          data={CATEGORY_SPENDINGS}
          renderItem={item => <CategorySpending title={item.item.title} amount={item.item.amount}/> }
          showsHorizontalScrollIndicator={false}
        />
      </Row>
    </Col>
  )
}

export default SpendingByCategoryList