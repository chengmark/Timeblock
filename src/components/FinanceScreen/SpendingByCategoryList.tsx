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

const CategorySpending = ({category, amount, budget}: {category: string, amount: number, budget: number}) => {
  const progress = budget === 0 ? 0 : amount / budget * 100

  return (
    <Col bg={COLORS.bg['300']} rounded={1.25} p={1.25} mx={1.25} style={tw`min-w-[125px]`} gap={1.25}>
      <Row>
        <Text size="s" color={COLORS.text['100']}>{category}</Text>
      </Row>
      <Row gap={2.5}>
        <Text size="l" bold>{amount.toLocaleString('en-US', {minimumFractionDigits: 2})}</Text>
        <Text size="s" color={COLORS.text['100']}>HKD</Text>
      </Row>
      <Row>
        <ProgressBar
          bgColor={transparent(0.1, COLORS.cta.green)}
          progressColor={COLORS.cta.green}
          progress={progress}
        />
      </Row>
    </Col>
  )
}

const SpendingByCategoryList = () => {
  const { transactions, budgets, selectedDisplayInterval } = useFinanceContext()
  // group transaction by category, amount reduced to total amount
  const categorySpending = useMemo(() => getCategories().filter(c => c!=='income').map(category => transactions.filter(transaction => transaction.category === category).reduce((acc, cur) => ({category, amount: acc.amount + cur.amount}), {category, amount: 0})), [transactions])
  // const categoryBudget = useMemo(() => budgets.map(), [budgets])
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
          renderItem={({item}) => <CategorySpending category={item.category.toUpperCase()} amount={item.amount} budget={budgets.find(b => b.category === item.category)?.amount[selectedDisplayInterval] || 0}/> }
          showsHorizontalScrollIndicator={false}
        />
      </Row>
    </Col>
  )
}

export default SpendingByCategoryList