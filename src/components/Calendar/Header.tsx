import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { format, isSameMonth, startOfMonth } from 'date-fns';
import Colors from '../../Colors';
import { useCalendarContext } from './context';
import IconButton from './IconButton';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = ({  }) => {
  const {curPageDate} = useCalendarContext()
  const formattedDate = format(curPageDate, 'yyyy年M月');
  // const isToday = isSameMonth(date, startOfMonth(today));

  return (
    <View style={tw`flex-row justify-between items-center py-4 px-3`}>
      <Text style={tw`text-xl font-semibold text-[${Colors.text.primary}]`}>{formattedDate}</Text>
      <View style={tw`ml-auto flex-row`}>
      <IconButton
          Icon={MaterialIcon}
          name="weather-cloudy"
          size={24}
          // color={Colors.text.primary}
          // backgroundColor={Colors.neutral[700]}
          // activeColor={Colors.neutral[600]}
          color={Colors.label.blue.text}
          backgroundColor={Colors.label.blue.bg}
          activeColor={Colors.label.blue.text + "55"}
        />
        <IconButton
          style={tw`ml-2`}
          Icon={AntIcon}
          name="plus"
          size={24}
          color={Colors.text.primary}
          backgroundColor={Colors.neutral[700]}
          activeColor={Colors.neutral[600]}
        />
      </View>
      {/* {isToday && (
        <TouchableOpacity onPress={onTodayPress}>
          <Text style={tw`text-blue-500 font-semibold`}>今日</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

export default Header;