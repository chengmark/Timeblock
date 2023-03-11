import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, View } from "react-native";
import Colors from "./Colors";
import Calendar from './Components/Calendar';
import TestScreen from './Screens/TestScreen';
import tw from 'twrnc'

const App = () =>
{
  return (
    <SafeAreaProvider>
      <SafeAreaView style={tw`flex-1 bg-[${ Colors.bg.primary }]`}>
        <StatusBar barStyle="light-content" backgroundColor="#000"/>
        {/* <Calendar /> */}
        <TestScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
