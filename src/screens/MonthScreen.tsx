import { NavigationProp, useNavigation } from "@react-navigation/native"
import { eachMonthOfInterval } from "date-fns"
import { useEffect, useMemo, useRef, useState } from "react"
import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import BigList from "react-native-big-list"
import tw from 'twrnc'
import Colors from "../Colors"
import MonthPage from "../components/Calendar/MonthPage"
import AntIcon from "react-native-vector-icons/AntDesign"
import { RootStackParamList } from "../types/NavigationTypes"

const CalendarHeader = ({yearToDisplay}:{yearToDisplay: number}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleCreatePress = () => {
    navigation.navigate("CreateScreen")
  }

  return (
    <View style={tw`flex-row bg-[${Colors.grey[6]}] pt-[20px] justify-between items-center`}>
      <Text style={tw`text-[${Colors.red}] text-base underline p-2`}>{`${yearToDisplay}年`}</Text>

      <AntIcon style={tw`p-2`} name="plus" size={20} color={Colors.red} onPress={handleCreatePress}/>

    </View>
  )
}

const CalendarFooter = () => {
  return (
    <View style={tw`flex-row bg-[${Colors.grey[6]}] py-1`}>
      <Text style={tw`text-[${Colors.red}] text-base underline p-2`}>上一年</Text>
      <View style={tw`flex-1`}/>
      <Text style={tw`text-[${Colors.red}] text-base underline p-2`}>今天</Text>
      <View style={tw`flex-1`}/>
      <Text style={tw`text-[${Colors.red}] text-base underline p-2`}>下一年</Text>
    </View>
  )
}

const WeekDayLabels = () => {
  const LABELS = ["日", "一", "二", "三", "四", "五", "六"]
  return (
    <View style={tw`flex flex-row pb-1 bg-[${Colors.grey[6]}]`}>
      {
        LABELS.map((label, i)=>(
          <Text
            style={tw`flex-1 text-xs text-center text-[${i == 0 || i == 6 ? Colors.text.secondary : Colors.font.primary}]`}
            key={label}
          >
            {label}
          </Text>
        ))
      }
    </View>
  )
}

const MonthScreen = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2032, 11, 31)
  const navigation = useNavigation()
  
  const bigListRef = useRef<BigList>(null)
  const [yearToDisplay, setYearToDisplay] = useState(2023)
  // get the first day of months given minDate and maxDate
  const firstDayOfMonths = useMemo(() => {
    const months = eachMonthOfInterval({start: minDate, end: maxDate})
    return months.map((month) => new Date(month.getFullYear(), month.getMonth(), 1))
  }, [minDate, maxDate])

  // find the initial scroll index where the index is the current month in the array firstDayOfMonths
  const initialScrollIndex = useMemo(() => {
    const now = new Date()
    const index = firstDayOfMonths.findIndex((date) => date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth())
    return index
  }, [firstDayOfMonths])

  useEffect(() => {
    setTimeout(() => {
      bigListRef.current?.scrollToIndex({index: initialScrollIndex, animated: false})
    }, 1)
  }, [initialScrollIndex])

  // write a function to get the year when scroll ends
  // e.g. when the last week of 2022 is shown, the yearToDisplay should be 2022
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = e.nativeEvent
    const index = Math.round(contentOffset.y / 500)
    const year = firstDayOfMonths[index].getFullYear()
    setYearToDisplay(year)
  }

  return (
    <View style={tw`flex-1`}>
      <CalendarHeader yearToDisplay={yearToDisplay} />
      <WeekDayLabels />
      <View style={tw`flex-1 flex-row`}>
        <BigList
          onScrollEnd={onScrollEnd}
          ref={bigListRef}
          style={tw`flex-1`}
          data={firstDayOfMonths}
          // Item
          itemHeight={500}
          renderItem={({item}) => <MonthPage firstDayOfMonth={item}/>}
          initialScrollIndex={initialScrollIndex}
        />
      </View>
      {/* <CalendarFooter /> */}
     </View>
  )
}

export default MonthScreen
