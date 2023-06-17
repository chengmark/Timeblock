import Col from '../Col'
import Row from '../Row'
import Text from '../Text'
import COLORS, { transparent } from "../../Colors"
import tw from 'twrnc'
import { FlatList } from 'react-native';
import ProgressBar from '../ProgressBar';
import Chevron from '../Chevron'
import { useMemo } from 'react'
import { useFinanceContext } from '../../Contexts/FinanceContext'
import { Transaction } from '../../Types/Transaction'
import CATEGORIES, { getCategories } from '../../categories'

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

const CategorySpending = ({category, amount}: {category: string, amount: string}) => (
  <Col bg={COLORS.bg['300']} rounded={1.25} p={1.25} mx={1.25} style={tw`min-w-[125px]`} gap={1.25}>
    <Row>
      <Text size="s" color={COLORS.text['100']}>{category}</Text>
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
  const { transactions } = useFinanceContext()
  const categorySpending = useMemo(() => getCategories().map(category => transactions.filter(transaction => transaction.category === category).reduce((acc, cur) => ({category, amount: acc.amount + cur.amount}), {category, amount: 0})), [transactions])
  return (
    <Col gap={2.5}>
      <Row align='center' justify='between'>
        <Text bold expand color={COLORS.text['100']} >SPENDINGS BY CATEGORY</Text>
        <Chevron />
      </Row>
      <Row rounded={1.25}>
        <FlatList
          horizontal
          data={categorySpending}
          renderItem={item => <CategorySpending category={item.item.category.toUpperCase()} amount={item.item.amount.toLocaleString('en-US', {minimumFractionDigits: 2})}/> }
          showsHorizontalScrollIndicator={false}
        />
      </Row>
    </Col>
  )
}

export default SpendingByCategoryList