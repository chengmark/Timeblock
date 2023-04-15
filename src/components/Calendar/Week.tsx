
import { isToday } from 'date-fns';
import { View } from 'react-native';
import tw from 'twrnc'
import Day from './Day';

interface WeekProps {
  days: Date[];
  firstDayOfMonth: Date;
}

const Week = ({days, firstDayOfMonth}:WeekProps) => {
  return (
    <View style={tw`flex-row my-1 flex-1`}>
      {
        days.map((day, i) =>
        {
          return (
            <Day
              key={`day-${ i }`}
              day={day}
              isToday={isToday(day)}
              firstDayOfMonth={firstDayOfMonth}
            />
          )
        })
      }
    </View>
  )
}

export default Week