import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {
  Platform,
  UIManager,
} from "react-native";
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
import Colors from './Colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import  {createStackNavigator } from '@react-navigation/stack'
import { useState } from 'react';
import { RootStackParamList, ScreenNames } from './types/NavigationTypes';
import MonthScreen from './screens/MonthScreen';
import CreateScreen from './screens/CreateScreen';


if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Stack =  createStackNavigator<RootStackParamList>()
const theme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors, background: Colors.bg.primary}
}

export default function App() {
  const [curScreen, setCurScreen] = useState<ScreenNames>("MonthScreen")
  
  return (
    // <SafeAreaProvider>
    //     <SafeAreaView style={tw`flex-1 bg-[${curScreen == "MonthScreen" ? Colors.bg.primary : Colors.bg.base}]`} >
    //     <StatusBar style='light' backgroundColor='#000000'/>
    //     <NavigationContainer
    //       theme={theme}
    //       onStateChange={
    //         (e)=>setCurScreen(e?.routeNames[e.index] as ScreenNames ||"")
    //       }>
    //       <Stack.Navigator
    //         screenOptions={{headerShown: false, presentation: 'modal'}}
    //         initialRouteName='MonthScreen'
    //       >
    //         <Stack.Screen name="MonthScreen" component={MonthScreen}/>
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //     {/* <CalendarScreen /> */}
    //     </SafeAreaView>
    // </SafeAreaProvider>
    <NavigationContainer
      theme={theme}
      onStateChange={
        (e)=>setCurScreen(e?.routeNames[e.index] as ScreenNames ||"")
      }>
      <Stack.Navigator
        screenOptions={{headerShown: false, presentation: 'modal'}}
        initialRouteName='MonthScreen'
      >
        <Stack.Screen name="MonthScreen" component={MonthScreen}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}