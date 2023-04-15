import { addDays, addMonths, eachDayOfInterval, eachWeekOfInterval, format, isSameMonth, isToday, lastDayOfMonth } from 'date-fns'
import { createContext, ReactElement, RefObject, useContext, useMemo, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import tw from 'twrnc'
import Colors from '../Colors'
import { useCreateScreenContext } from '../Contexts/CreateScreenContext'
import withProvider from '../Hoc/withProvider'
import InfiniteSwiper from './InfiniteSwiper'
import { InfiniteSwiperImperativeApi } from './InfiniteSwiper/types'

interface DatePickerProps {}

const LABELS = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"]

const Header = () => {
  const { swiperRef, curPageDate } = useDatePickerContext()
  const { color } = useCreateScreenContext()
  const nextPage = () => swiperRef?.current?.decrementPage()
  const prevPage = () => swiperRef?.current?.incrementPage()
  const formattedDate = format(curPageDate, 'yyyy年M月');
  return (
    <View style={tw`flex-row bg-[${ Colors.bg.primary }] justify-between items-center`}>
      <View style={tw`flex-row`}>
        <Text style={tw`text-[${ Colors.text.primary }] text-base leading-[32px] font-bold bg-[${ Colors.bg.primary }] pl-3`}>{formattedDate}</Text>
        <MaterialIcon style={tw``} name="chevron-right" size={32} color={Colors.label[color].text} />
      </View>
      {/* <Text style={tw`text-[${Colors.red}] text-base font-bold bg-[${Colors.grey[5]}]`}>{`< >`}</Text> */}
      <View style={tw`flex-row`}>
        {/* <IconButton Icon={MaterialIcon} name="chevron-left" />
        <IconButton Icon={MaterialIcon} name="chevron-right" backgroundColor={Colors.grey[5]}/> */}
        <MaterialIcon style={tw``} name="chevron-left" size={32} color={Colors.label[color].text} onPress={() => nextPage()}/>
        <MaterialIcon style={tw``} name="chevron-right" size={32} color={Colors.label[color].text} onPress={() => prevPage()}/>
      </View>
    </View>
  )
}

const DayLabel = () => {
  return (
    <View style={tw`flex-row bg-[${ Colors.bg.primary }]`}>
      {
        LABELS.map((label, i) => (
          <Text
            style={tw`flex-1 text-xs text-center text-[${ Colors.text.secondary }]`}
            key={label}
          >
            {label}
          </Text>
        ))
      }
    </View>
  )
}

const Month = ({ index }: { index: number }) =>
{
  const REF_DATE = new Date()
  const WEEK_STARTS_ON = 0
  
  const firstDayOfMonth = useMemo(
    () => addMonths(REF_DATE, index),
    [REF_DATE, index]
  );
  firstDayOfMonth.setDate(1);
  const lastDayOfMo = useMemo(
    () => lastDayOfMonth(firstDayOfMonth),
    [firstDayOfMonth]
  );
  const weekStarts = useMemo(
    () =>
      eachWeekOfInterval(
        {
          start: firstDayOfMonth,
          end: lastDayOfMo,
        },
        {
          weekStartsOn: WEEK_STARTS_ON,
        }
      ),
    [firstDayOfMonth, lastDayOfMo, WEEK_STARTS_ON]
  );

  const weeks = useMemo(
    () =>
      weekStarts.map((week) => {
        return eachDayOfInterval({ start: week, end: addDays(week, 6) });
      }),
    [weekStarts]
  );

  return (
    <View style={tw``}>
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

const Week = ({ days, firstDayOfMonth }: { days: Date[], firstDayOfMonth: Date }) =>
{
  return (
    <View style={tw`flex flex-row my-1`}>
      {
        days.map((day, i) =>
        {
          if (isSameMonth(firstDayOfMonth, day))
          {
            return (
              <Day
                key={`day-${ i }`}
                day={day}
                isToday={isToday(day)}
              />
            )
          } else
          {
            return <View style={tw`flex-1`} key={`day-${ i }`}></View>
          }
        })
      }
    </View>
  )
}

const Day = ({ day, isToday }: { day: Date, isToday: Boolean }) =>
{
  const { color } = useCreateScreenContext()
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw`rounded-full w-10 h-10 justify-center ${ isToday ? `bg-[${ Colors.label["red"].text }] font-bold` : '' }`}>
        <Text style={tw`text-center text-[${ Colors.text.primary }] text-base`}>{day.getDate()}</Text>
      </View>
    </View>
  )
}

const DatePickerContext = createContext({
  referenceDate: new Date(),
  curPageDate: new Date(),
  setCurPageDate: (date: Date) => {},
  swiperRef: null as RefObject<InfiniteSwiperImperativeApi> | null
})

const useDatePickerContext = () => useContext(DatePickerContext)

const DatePickerProvider = ({children}: {children: ReactElement}) => {
  const referenceDate = new Date()
  const [curPageDate, setCurPageDate] = useState(referenceDate)
  const swiperRef:RefObject<InfiniteSwiperImperativeApi> | null = useRef(null)

  return (
    <DatePickerContext.Provider value={{referenceDate, curPageDate, setCurPageDate, swiperRef}}>
      {children}
    </DatePickerContext.Provider>
  )
}

const DatePicker = ({}:DatePickerProps) => {
  const {referenceDate, setCurPageDate, swiperRef} = useDatePickerContext()

  return (
    <View style={tw``}>
      <Header />
      <DayLabel />
      <InfiniteSwiper
        PageComponent={Month}
        onPageChange={(index) => {
          setCurPageDate(addMonths(referenceDate, index))
        }}
        pageBuffer={3}
        minIndex={-Infinity}
        maxIndex={Infinity}
        height={400}
        ref={swiperRef}
      />
    </View>
  )
}

export default withProvider(DatePickerProvider, DatePicker)