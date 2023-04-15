import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { format } from 'date-fns';
import Colors from '../../Colors';
import { useCalendarContext } from './context';
import IconButton from '../IconButton';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Layout from '../../Layout';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Types/NavigationTypes';

interface HeaderProps
{

}

const Header: React.FC<HeaderProps> = ({ }) =>
{
  const { curPageDate } = useCalendarContext()
  const formattedDate = format(curPageDate, 'yyyy年M月');
  // const isToday = isSameMonth(date, startOfMonth(today));
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleSchedulerPress = () => {
    navigation.navigate("Scheduler")
  }

  return (
    <View style={tw`flex-row justify-between items-center py-4 px-3 h-[${ Layout.calendarScreen.header }px]`}>
      <Text style={tw`text-xl font-semibold text-[${ Colors.text.primary }]`}>{formattedDate}</Text>
      <View style={tw`ml-auto flex-row`}>
        <IconButton
          Icon={MaterialCommunityIcon}
          name="weather-cloudy"
          size={24}
          color={Colors.label.blue.text}
          backgroundColor={Colors.label.blue.bg}
          activeColor={Colors.label.blue.text + "55"}
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