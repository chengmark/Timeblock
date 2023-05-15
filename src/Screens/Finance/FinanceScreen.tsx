import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from 'twrnc'
import Col from '../../Components/Col'
import BudgetSummary from '../../Components/FinanceScreen/BudgetSummary'
import DisplayIntervalSwitch from '../../Components/FinanceScreen/DisplayIntervalSwitch'
import OverviewCard from '../../Components/FinanceScreen/OverviewCard'
import SpendingByCategoryList from '../../Components/FinanceScreen/SpendingByCategoryList'
import Row from '../../Components/Row'
import Screen from '../../Components/Screen'
import { FinanceProvider } from '../../Contexts/FinanceContext'
import withProvider from '../../Hoc/withProvider'

const FinanceScreen = () => {
  return (
    <Screen>
      <OverviewCard />
      <BudgetSummary />
      <SpendingByCategoryList />
      <DisplayIntervalSwitch />
    </Screen>
  )
}

export default withProvider(FinanceProvider, FinanceScreen)