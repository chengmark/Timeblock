import React from 'react';
import { View, Text } from 'react-native';
import { useCalendarContext } from 'react-native-swipe-calendar';
import tw from 'twrnc';
import Colors from '../../Colors';

const DayLabels: React.FC = () => {
  const {referenceDate} = useCalendarContext()
  const labels = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <View style={tw`flex-row justify-between items-center py-1 bg-[${Colors.bg.primary}]`}>
      {labels.map((label, index) => (
        <View key={index} style={tw`flex-1 items-center`}>
          <Text
            style={tw`text-[${referenceDate.getDay() === index ? Colors.feedback.danger : Colors.text.secondary}]`}
          >
            {`${label}`}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default DayLabels;