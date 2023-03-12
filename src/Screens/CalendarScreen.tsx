import { View } from "react-native";
import Calendar from "../Components/Calendar";

import tw from 'twrnc'

const CalendarScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <Calendar />
    </View>
  )
}

export default CalendarScreen;