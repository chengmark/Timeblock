import { View, Text } from 'react-native'

import tw from 'twrnc'
import COLORS from '../../Colors'
import { CATEGORY_ICON_MAP } from '../../constants'
import { Expense, ExpenseCategory, Transaction } from '../../Types/Transaction'
import { formatAmount } from '../../utils'
import { NonPressableIcon } from '../IconButton'
import Row from '../Row'
import Typography from '../Typography'

const TransactionValue = ({value}:{value: number}) => {
  const sign = value >= 0 ? '+' : '-'
  const currency = 'HKD'
  return (
    <Row align='end' justify='end'>
      <Typography color={COLORS.label[100]} size='xs' style={tw`mr-1`}>
        {sign}{currency}
      </Typography>
      <Typography bold color={COLORS.label[100]}>
        {formatAmount(value).replace('-', '')}
      </Typography>
    </Row>
  )
}

const TransactionDescription = () => {
  return (
    <View>

    </View>
  )
}

const ItemRow = ({children}:{children: React.ReactNode}) => (
  <Row justify='between' align='center' style={tw`bg-[${COLORS.background[200]}] rounded p-2 m-1`}>{children}</Row>
)

interface TransactionItemProps {
  transaction: Transaction
}

const TransactionItem = ({transaction}:TransactionItemProps) => {
  
  const {Icon, name} = CATEGORY_ICON_MAP[transaction.category]
  return (
    <ItemRow>
      <View style={tw`flex-row flex-2`}>
        <NonPressableIcon Icon={Icon} name={name} size={36} color={COLORS.label[100]} style={tw`mr-2`}/>
        <View style={tw`flex-col`}>
          <Typography>{transaction.title}</Typography>
          <Typography size='xs' color={COLORS.label[200]}>{transaction.date}</Typography>
        </View>
      </View>
      <View style={tw`flex-col flex-1`}>
        <TransactionValue value={transaction.amount}/>
      </View>
    </ItemRow>
  )
}

export default TransactionItem