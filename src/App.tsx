import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "react-native";
import COLORS from "./Colors";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './Screens/CalendarScreen';
import FinanceScreen from './Screens/FinanceScreen/FinanceScreen';
import TabBar from './Components/TabBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import FinanceRouter from './Screens/FinanceRouter';

const RootStack =  createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

const theme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors, background: COLORS.background[100]}
}

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
      <GestureHandlerRootView style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 bg-[${ COLORS.background[100] }]`}>
          <StatusBar barStyle="light-content" backgroundColor="#000"/>
          <NavigationContainer
            theme={theme}
          >
            <Tab.Navigator
              screenOptions={{
              headerShown: false
              }}
              initialRouteName="Finance"
              tabBar={TabBar}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Finance" component={FinanceRouter} />
              <Tab.Screen name="Calendar" component={CalendarScreen} />
            </Tab.Navigator>
            {/* <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Calendar"
              tabBar={Footer}
            >
              <Tab.Screen name="Calendar" component={CalendarScreen} />
              <Tab.Screen name="Scheduler" component={SchedulerScreen} />
              <Tab.Screen name="Create" component={CreateScreen} />
              <Tab.Screen name="Day" component={DayScreen} initialParams={{calendarItems:[]}}/>
              <Tab.Screen name="Finance" component={FinanceScreen} />
            </Tab.Navigator> */}
          </NavigationContainer>
          {/* <TestScreen /> */}
        </SafeAreaView>
      </GestureHandlerRootView>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}

export default App;
