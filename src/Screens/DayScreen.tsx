
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import Colors from '../Colors'
import { RootStackParamList } from '../Types/NavigationTypes'

type DayScreenProps = NativeStackScreenProps<RootStackParamList, "Day">

const DayScreen = ({route}:DayScreenProps) => {
  useEffect(() => {
    console.log(route.params?.calendarItems)
  }, [route.params?.calendarItems])
  return (
    <View style={tw`flex-col bg-[${ Colors.bg.primary }] h-full pt-4 px-4`}>
      
    </View>
  )
}

export default DayScreen