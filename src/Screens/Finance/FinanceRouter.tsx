import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { FinanceProvider } from '../../Contexts/FinanceContext'
import withProvider from '../../Hoc/withProvider'
import { Transaction } from '../../Types/Transaction'
import AddBudgetScreen from './AddBudgetScreen'
import AddTransactionScreen from './AddTransactionScreen'
import FinanceScreen from './FinanceScreen'
import TransactionDetailScreen from './TransactionDetailScreen'

export type FinanceStackParamList = {
  FinanceHome: undefined
  AddTransaction: undefined
  TransactionDetail: {transaction: Transaction}
  AddBudget: undefined
  // Day:{calendarItems:CalendarItem[], day: string} | undefined
}

const Stack = createNativeStackNavigator<FinanceStackParamList>()

const FinanceRouter = () => {
  const navigation = useNavigation()
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'FinanceHome'}],
  //     })
  //   })

  //   return unsubscribe
  // }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal'
      }}
      initialRouteName="FinanceHome"
    >
      <Stack.Screen name="FinanceHome" component={FinanceScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      <Stack.Screen name="AddBudget" component={AddBudgetScreen} />
      {/* <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} /> */}
    </Stack.Navigator>
  )
}

export default withProvider(FinanceProvider, FinanceRouter)