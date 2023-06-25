import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from 'twrnc'
import Box from '../../Components/Base/Box'
import Col from '../../Components/Col'
import BudgetBar from '../../Components/FinanceScreen/AddTransaction/BudgetBar'
import KeyPad from '../../Components/FinanceScreen/KeyPad'
import BudgetSummary from '../../Components/FinanceScreen/BudgetSummary'
import DisplayIntervalSwitch from '../../Components/FinanceScreen/DisplayIntervalSwitch'
import OverviewCard from '../../Components/FinanceScreen/OverviewCard'
import SpendingByCategoryList from '../../Components/FinanceScreen/SpendingByCategoryList'
import TransactionButton from '../../Components/FinanceScreen/TransactionButton'
import TransactionList from '../../Components/FinanceScreen/TransactionList'
import Row from '../../Components/Row'
import Screen from '../../Components/Screen'
import { FinanceProvider } from '../../Contexts/FinanceContext'
import withProvider from '../../Hoc/withProvider'
import Text from '../../Components/Text'

const FinanceScreen = () => {
  return (
    <Screen>
      <OverviewCard />
      <BudgetSummary />
      <SpendingByCategoryList />
      <DisplayIntervalSwitch />
      <Row style={tw`w-full`}>
        <TransactionButton m={[0, 0, 0, 'auto']}/>
      </Row>
      <TransactionList />
      {/* <BudgetBar /> */}
      {/* <KeyPad /> */}
    </Screen>
  )
}

export default FinanceScreen