import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "react-native";
import COLORS from "./Colors";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './Screens/CalendarScreen';
import TabBar from './Components/TabBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import FinanceRouter from './Screens/Finance/FinanceRouter';
import { RootTabParamList } from './Types/Navigation';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';


const Tab = createBottomTabNavigator<RootTabParamList>()

const theme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors, background: COLORS.bg['000']}
}

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <GestureHandlerRootView style={tw`flex-1`}>
          <SafeAreaView style={tw`flex-1 bg-[${ COLORS.bg['100'] }]`}>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <NavigationContainer
              theme={theme}
            >
              <Tab.Navigator
                screenOptions={{
                  headerShown: false
                }}
                initialRouteName="Home"
                tabBar={TabBar}
              >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Finance" component={FinanceRouter} />
                <Tab.Screen name="Calendar" component={CalendarScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </GestureHandlerRootView>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}

export default App;
