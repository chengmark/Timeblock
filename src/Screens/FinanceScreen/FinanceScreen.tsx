import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from 'twrnc'
import BalanceCard from '../../Components/FinanceScreen/BalanceCard'
import ButtonSection from '../../Components/FinanceScreen/ButtonSection'
import CategoryExpensesCard from '../../Components/FinanceScreen/CategoryExpensesCard'
import LastMonthExpenseList from '../../Components/FinanceScreen/LastMonthExpenseList'
import TodayExpensesCard from '../../Components/FinanceScreen/TodayExpensesCard'
import TransactionList from '../../Components/FinanceScreen/TransasctionList'
import Row from '../../Components/Row'
import Screen from '../../Components/Screen'
import { FinanceProvider } from '../../Contexts/FinanceContext'
import withProvider from '../../Hoc/withProvider'

const FinanceScreen = () => {
  return (
    <Screen>
    <Row>
      <BalanceCard />
      <TodayExpensesCard />
    </Row>
    <LastMonthExpenseList />
    <ButtonSection />
    <TransactionList />
  </Screen>
  )
}

export default withProvider(FinanceProvider, FinanceScreen)