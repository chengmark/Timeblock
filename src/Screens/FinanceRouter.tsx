import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import AddTransactionScreen from './FinanceScreen/AddTransactionScreen'
import FinanceScreen from './FinanceScreen/FinanceScreen'

const Stack = createNativeStackNavigator()

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
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
    </Stack.Navigator>
  )
}

export default FinanceRouter