import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, View } from "react-native";
import Colors from "./Colors";
import CalendarScreen from './Screens/CalendarScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import tw from 'twrnc'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './Types/NavigationTypes';
import SchedulerScreen from './Screens/SchedulerScreen';
import CreateScreen from './Screens/CreateScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import DayScreen from './Screens/DayScreen';


const RootStack =  createStackNavigator<RootStackParamList>()

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
            <RootStack.Navigator
              screenOptions={{
                headerShown: false, presentation: 'modal'
              }}
            >
              <RootStack.Screen name="Calendar" component={CalendarScreen} />
              <RootStack.Screen name="Scheduler" component={SchedulerScreen} />
              <RootStack.Screen name="Create" component={CreateScreen} />
              <RootStack.Screen name="Day" component={DayScreen} initialParams={{calendarItems:[]}}/>
            </RootStack.Navigator>
          </NavigationContainer>
          {/* <TestScreen /> */}
        </SafeAreaView>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}

export default App;
