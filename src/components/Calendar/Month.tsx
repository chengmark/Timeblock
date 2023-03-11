import { View } from "react-native";
import tw from 'twrnc'
import Week from "./Week";

interface MonthProps {
  weeks: Date[][];
  firstDayOfMonth: Date;
}

const Month = ({weeks, firstDayOfMonth}:MonthProps) => {
  return (
    <View style={tw`flex-col flex-1`}>
      {
        weeks.map((week, i) => (
          <Week
            key={`event-row-${ i }`}
            days={week}
            firstDayOfMonth={firstDayOfMonth}
          />
        ))
      }
    </View>
  )   
}

export default Month