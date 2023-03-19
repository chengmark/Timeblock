import { View, Text, Modal, Pressable } from "react-native"
import Section from "./Section"

import tw from 'twrnc'
import Colors from "../../Colors"
import IconButton from "../IconButton"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Tag from "../Tag"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"

const TagSection = () =>
{
  const { color, tagSelectModalRef } = useCreateScreenContext() 


  const handlePress = () => {
    console.log(tagSelectModalRef?.current);
    tagSelectModalRef?.current?.present()
  }

  return (
    <Section>
      <Pressable onPress={handlePress}>
        <View style={tw`my-2 mx-4 flex-row`} >
          <View style={tw`flex-row justify-between flex-1 items-center`}>
            <Text style={tw`text-[${ Colors.text.primary }] text-base`}>
              標籤
            </Text>
            <View style={tw`flex-row items-center`}>
              <Tag title={color.toUpperCase()} color={Colors.label[color]} />
              <IconButton
                style={tw`p-0 m-0`}
                Icon={MaterialIcon}
                name="keyboard-arrow-right"
                color={Colors.text.secondary}
                size={28}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </Section>

  )
}

export default TagSection