import { FlatList, View } from "react-native"
import Typography from "../Typography"
import tw from 'twrnc'
import TransactionItem from "./TransactionItem"
import { useFinanceContext } from "../../Contexts/FinanceContext"

const TransactionList = () => {
  const {transactions} = useFinanceContext()

  return (
    <View style={tw`flex-1`}>
      <Typography style={tw`ml-1`} size='s'>交易紀錄</Typography>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionItem transaction={item}/>}
        windowSize={12}
      />
    </View>
  )
}

export default TransactionList