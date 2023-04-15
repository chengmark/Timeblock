import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "react-native";
import Colors from "./Colors";
import CalendarScreen from './Screens/CalendarScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './Types/NavigationTypes';
import SchedulerScreen from './Screens/SchedulerScreen';
import CreateScreen from './Screens/CreateScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import DayScreen from './Screens/DayScreen';
import FinanceScreen from './Screens/FinanceScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from './Components/Footer';

const RootStack =  createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

const theme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors, background: Colors.bg.primary}
}

const App = () =>
{
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <SafeAreaView style={tw`flex-1 bg-[${ Colors.bg.primary }]`}>
          <StatusBar barStyle="light-content" backgroundColor="#000"/>
          <NavigationContainer
            theme={theme}
          >
            <Tab.Navigator
              screenOptions={{
              headerShown: false
              }}
              initialRouteName="Calendar"
              tabBar={Footer}
            >
              <Tab.Screen name="Calendar" component={CalendarScreen} />
              <Tab.Screen name="Finance" component={FinanceScreen} />
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
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}

export default App;
