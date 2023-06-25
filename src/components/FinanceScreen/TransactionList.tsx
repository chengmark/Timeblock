import { Dimensions, FlatList, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import Icon from '../Icon'
import Row from '../Row'
import Material from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../Colors'
import Col from '../Col'
import Text from '../Text'
import { useFinanceContext } from '../../Contexts/FinanceContext'
import { Transaction } from '../../Types/Transaction'
import { getCategoryIcon, getSubCategoryIcon } from '../../categories'
import { formatDate } from '../../utils'
import { useMemo } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { FinanceStackParamList } from '../../Screens/Finance/FinanceRouter'
import Loader from '../Loader'

const TransactionItem = ({ transaction }: { transaction: Transaction }) =>
{
  const nav = useNavigation<NavigationProp<FinanceStackParamList>>()
  return (
    <Row gap={1.25} p={1.25} bg={COLORS.bg['300']} align='center' my={1.25} rounded={1.25} onPress={() => nav.navigate('TransactionDetail', { transaction })}>
      <Icon Component={Material} name={getSubCategoryIcon(transaction.category, transaction.subCategory) || ''} color={COLORS.text['000']} size={24.5} />
      <Col gap={1.25} expand px={2.5}>
        <Row justify='between'>
          <Text color={COLORS.text['000']} size='l' bold expand>{transaction.subCategory.toUpperCase()}</Text>
          <Row gap={1.25}>
            <Text color={COLORS.text['100']}>{transaction.category === 'income' ? `HKD` : `-HKD`}</Text>
            <Text color={COLORS.text['000']} size='l' bold>{transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
          </Row>
        </Row>
        <Row>
          <Text color={COLORS.text['100']} size='s' expand>{transaction.category.toUpperCase()}</Text>
          <Text color={COLORS.text['100']} size='s'>{formatDate(transaction.date)}</Text>
        </Row>
      </Col>
    </Row>
  )
}

const NoTransactionResult = () => (
  <Row style={tw`w-full`} justify='center'>
    <Text size='xl' color={COLORS.text['100']} toUpper p={[15, 0, 0, 0]}>No Transactions Results</Text>
  </Row>
)

const TransactionList = () =>
{
  const { transactions, isLoading } = useFinanceContext()
  const sortedTransactions = useMemo(() => transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [transactions])

  return (
    <SafeAreaView>
      <Row style={tw`h-[${ Dimensions.get('window').height - 80 }px]`} align='start'>
        {
          isLoading ?
            <Loader /> :
            <FlatList
              style={tw`w-full`}
              nestedScrollEnabled
              data={sortedTransactions}
              renderItem={(info) => <TransactionItem transaction={info.item} />}
              keyExtractor={item => item.id}
              bounces={false}
              ListEmptyComponent={<NoTransactionResult />}
            />
        }
      </Row>
    </SafeAreaView>
  )
}

export default TransactionList