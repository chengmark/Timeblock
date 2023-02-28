import { format } from "date-fns";
import { TouchableOpacity, Text } from "react-native";
import tw from 'twrnc'


interface DayViewProps {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  onPress: () => void;
}

const DayView: React.FC<DayViewProps> = ({ date, isToday, isSelected, onPress }) => {
  const containerStyle = [
    tw`h-12 w-12 rounded-full justify-center items-center`,
    isSelected && tw`bg-blue-500`,
    isToday && tw`bg-gray-500`,
  ];

  const textStyle = [tw`text-base font-medium text-white`, isSelected && tw`text-white`];

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={containerStyle}>
      <Text style={textStyle}>{format(date, 'd')}</Text>
    </TouchableOpacity>
  );
};

export default DayView;