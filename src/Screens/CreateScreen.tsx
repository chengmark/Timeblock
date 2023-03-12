import { View, TextInput } from "react-native"
import Colors from "../Colors"

import tw from 'twrnc'
import { CreateScreenProvider } from "../Contexts/CreateScreenContext"
import Header from "../Components/CreateScreen/Header"
import TitleLocationSection from "../Components/CreateScreen/TitleLocationSection"
import DateTimeSection from "../Components/CreateScreen/DateTimeSection"
import TypeToggler from "../Components/CreateScreen/TypeToggler"
import DueDateSection from "../Components/CreateScreen/DueDateSection"

const CreateScreen = () =>
{
  return (
    <CreateScreenProvider>
      <View style={tw`bg-[${ Colors.bg.primary }] h-full pt-4 px-4`}>
        <Header />
        <TypeToggler />
        <TitleLocationSection />
        {/* <DueDateSection /> */}
        <DateTimeSection />
      </View>
    </CreateScreenProvider>
  )
}

export default CreateScreen