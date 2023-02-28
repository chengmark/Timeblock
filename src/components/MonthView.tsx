import { addDays, endOfMonth, format, isSameDay, startOfMonth } from 'date-fns';
import { FlatList, Text, View } from 'react-native';
import tw from 'twrnc';
import DayView from './DayView';

interface MonthViewProps {
  month: Date;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const MonthView: React.FC<MonthViewProps> = ({ month, selectedDate, onDateChange }) => {
  const days = [];

  // Generate an array of dates for the month
  let currentDate = startOfMonth(month);
  const lastDate = endOfMonth(month);
  while (currentDate <= lastDate) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const renderItem = ({ item }: { item: Date }) => {
    const isToday = isSameDay(item, new Date());
    const isSelected = isSameDay(item, selectedDate);

    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <DayView
          date={item}
          isToday={isToday}
          isSelected={isSelected}
          onPress={() => onDateChange(item)}
        />
      </View>
    );
  };

  const keyExtractor = (item: Date) => item.getTime().toString();

  return (
    <View style={tw`h-full w-full`}>
      <Text style={tw`text-2xl font-bold text-center mb-4`}>
        {format(month, 'MMMM yyyy')}
      </Text>
      <FlatList
        data={days}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={7}
        contentContainerStyle={tw`pb-4`}
      />
    </View>
  );
};


export default MonthView;