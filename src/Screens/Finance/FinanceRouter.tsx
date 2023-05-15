import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { Transaction } from '../../Types/Transaction'
import FinanceScreen from './FinanceScreen'

export interface FinanceStackParamList{
  FinanceHome: undefined
  // AddTransaction: undefined
  // TransactionDetails: {transaction: Transaction}
  // Day:{calendarItems:CalendarItem[], day: string} | undefined
}

const Stack = createNativeStackNavigator<FinanceStackParamList>()

const FinanceRouter = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'FinanceHome'}],
      })
    })

    return unsubscribe
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal'
      }}
      initialRouteName="FinanceHome"
    >
      <Stack.Screen name="FinanceHome" component={FinanceScreen} />
      {/* <Stack.Screen name="AddTransaction" component={AddTransactionScreen} /> */}
      {/* <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} /> */}
    </Stack.Navigator>
  )
}

export default FinanceRouter