import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, View } from "react-native";
import Colors from "./Colors";
import TestScreen from './Screens/TestScreen';
import CalendarScreen from './Screens/CalendarScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import tw from 'twrnc'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './Types/NavigationTypes';
import ChatScreen from './Screens/SchedulerScreen';
import SchedulerScreen from './Screens/SchedulerScreen';
import CreateScreen from './Screens/CreateScreen';


const Stack =  createStackNavigator<RootStackParamList>()

const theme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors, background: Colors.bg.primary}
}

const App = () =>
{
  return (
    <SafeAreaProvider>
      <SafeAreaView style={tw`flex-1 bg-[${ Colors.bg.primary }]`}>
        <StatusBar barStyle="light-content" backgroundColor="#000"/>
        <NavigationContainer
          theme={theme}
        >
          <Stack.Navigator
            screenOptions={{headerShown: false, presentation: 'modal'
            }}
          >
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Scheduler" component={SchedulerScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <TestScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
