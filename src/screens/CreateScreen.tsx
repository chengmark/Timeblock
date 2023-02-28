
import { useNavigation } from "@react-navigation/native"
import { ReactElement, useState } from "react"
import { View, TextInput, Pressable, ViewProps } from "react-native"
import tw from 'twrnc'
import Colors from "../Colors"
import DatePicker from "../components/DatePicker"
import Text from "../components/Text"
import TextButton from "../components/TextButton"


const Header = () =>
{
  const navigation = useNavigation()

  const handleCancelPress = () =>
  {
    navigation.goBack()
  }

  return (
    <View style={tw`flex-row bg-[${ Colors.grey[6] }] justify-between items-center`}>
      {/* <Text style={tw`text-[${Colors.red}] text-base underline bg-[${Colors.grey[6]}]`} onPress={handleCancelPress} >取消</Text> */}
      <TextButton
        onPress={handleCancelPress}
        style={tw`text-[${ Colors.red }] text-base underline bg-[${ Colors.grey[6] }]`}
        text="取消"
      />
      <Text style={tw`text-[${ Colors.white }] text-base`}>新增行程</Text>
      <TextButton
        style={tw`text-[${ Colors.text.secondary }] text-base underline bg-[${ Colors.grey[6] }]`}
        text="加入"
      />
    </View>
  )
}


const DateBlock = ({ active, onPress }: { active?: boolean, onPress?: ()=>void }) =>
{
  return (
    <Pressable style={tw`flex bg-[${ Colors.grey[4] }] rounded py-0.5 px-2 mx-1`} onPress={onPress}>
      <Text style={tw`text-base text-[${ active ? Colors.red : Colors.white }]`}>2023年2月20日</Text>
    </Pressable>
  )
}

const TimeBlock = ({ active }: { active?: boolean }) =>
{
  return (
    <View style={tw`flex bg-[${ Colors.grey[4] }] rounded py-0.5 px-2 mx-1`}>
      <Text style={tw`text-base text-[${ active ? Colors.red : Colors.white }]`}>下午1:00</Text>
    </View>
  )
}

const LabeledField = ({ label, children }: { label: string, children: React.ReactNode }) =>
{
  return (
    <View style={tw`my-2 mx-4 flex-row`}>
      <View style={tw`flex-row justify-between flex-1`}>
        <Text style={tw`text-[${ Colors.white }] text-base`}>
          {label}
        </Text>
        {children}
      </View>
    </View>
  )
}

const Divider = () => <View style={tw`h-[1px] bg-[${ Colors.grey[4] }] w-[95%] ml-auto`} />

const Section = ({children, style}:ViewProps) => <View style={[tw`bg-[${ Colors.grey[5] }] rounded-[10px] mt-6 flex-col`, style]}>{children}</View>

const CreateScreen = () =>
{
  const [activeDatePick, setActiveDatePick] = useState<boolean>(false)
  
  return (
    <View style={tw`bg-[${ Colors.grey[6] }] h-full pt-4 px-4 z-999`}>
      <Header />

      <Section>
        <TextInput
          style={tw`text-[${ Colors.white }] text-base mx-4 my-3 leading-5`}
          placeholder="標題"
          placeholderTextColor={Colors.text.secondary}
          selectionColor={Colors.red}
        />
        <Divider />
        <TextInput
          style={tw`text-[${ Colors.white }] text-base mx-4 my-3 leading-5`}
          placeholder="位置"
          placeholderTextColor={Colors.text.secondary} 
          selectionColor={Colors.red}
        />
      </Section>

      <Section>
        <LabeledField label="開始">
            <View style={tw`flex-row`}>
              <DateBlock active={activeDatePick} onPress={() => {
                setActiveDatePick(!activeDatePick)
              }}/>
              <TimeBlock />
            </View>
          </LabeledField>
          <Divider />
          {
            activeDatePick && (
              <>
                <DatePicker />
                <Divider />
              </>
            )
          }
          <LabeledField label="結束">
            <View style={tw`flex-row`}>
              <DateBlock />
              <TimeBlock />
            </View>
          </LabeledField>
      </Section>

      <Section>
        <LabeledField label="重複">
          <Text style={tw`text-base text-[${Colors.text.secondary}]`}>永不</Text>
        </LabeledField>
      </Section>
    </View>
  )
}

export default CreateScreen