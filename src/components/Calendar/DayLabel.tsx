import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Colors from '../../Colors';

const DayLabels: React.FC = () => {
  const labels = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <View style={tw`flex-row justify-between items-center py-1 bg-[${Colors.bg.primary}]`}>
      {labels.map((label, index) => (
        <View key={index} style={tw`flex-1 items-center`}>
          <Text style={tw`text-[${Colors.text.secondary}]`}>{`週${label}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default DayLabels;