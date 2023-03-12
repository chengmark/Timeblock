import { ReactElement } from "react"
import { View, Text, ScrollView } from "react-native"
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import tw from 'twrnc'
import Colors from "../../Colors"
import IconButton from "../IconButton"

interface ExampleProps {
  text: string
}

interface ExampleTitleProps {
  Icon: () => ReactElement
  title: string
}

const ExampleTitle = ({Icon, title}:ExampleTitleProps) => (
  <View
    style={tw`flex-row justify-center mt-4`}
  >
    <Icon />
    <Text style={tw`text-lg leading-[34px] text-center text-[${ Colors.text.primary }] ml-1`}>
      {title}
    </Text>
  </View>
)

const Example = ({text}:ExampleProps) => (
  <Text
    style={tw`text-center text-base text-[${ Colors.text.primary }] mt-2 bg-[${Colors.bg.secondary}] rounded p-2`}
  >
    {text}
  </Text>
)

const WelcomingPropmt = () =>
{
  return (
    <ScrollView
      style={tw`flex-col flex-1 my-2 mx-4`}
      bounces={false}
    >
      <ExampleTitle Icon={
        () => (
          <IconButton
            Icon={OcticonsIcon}
            name="calendar"
            // color={Colors.text.primary}
            color={Colors.purple}
            size={24}
          />
        )
      } title="Availability" />
      <Example text="Tell me my available time slots in the next 3 days"/>
      <Example text="What are my available time slots on 2021-10-10?"/>
      <Example text="What are my available time slots on 2021-10-10 from 10:00 to 11:00?"/>

      <ExampleTitle Icon={
        () => (
          <IconButton
            Icon={SimpleLineIcon}
            name="pencil"
            // color={Colors.text.primary}
            color={Colors.purple}
            size={24}
          />
        )
      } title="Management" />
      <Example text="Remove all XXXX courses after 2021-10-10"/>
      <Example text="Add XXXX, Tue 1130-1215, XXX, repeat every week"/>
      <Example text="Delay all events on 2021-10-10 except the first one 1 hour"/>

    </ScrollView>
  )

}

export default WelcomingPropmt