import Screen from '../../Components/Screen'

import tw from 'twrnc'
import Card from '../../Card'
import Typography from '../../Components/Typography'
import TextField from '../../Components/TextField'
import ModalHeader from '../../Components/ModalHeader'
import { useNavigation } from '@react-navigation/native'
import Section from '../../Components/Section'
import IconButton from '../../Components/IconButton'
import { CATEGORY_ICON_MAP } from '../../constants'
import COLORS from '../../Colors'
import { View } from 'react-native'
import { lang } from '../../utils'

// extract expenses from CATEGORY_ICON_MAP
const EXPENSES = Object.keys(CATEGORY_ICON_MAP).filter(key => CATEGORY_ICON_MAP[key].type === 'expense')

const AddTransactionScreen = () => {
  const navigation = useNavigation()

  return (
    <Screen>
      <ModalHeader title='新增交易' onBackPress={() => navigation.goBack()}/>
      <Card>
        <TextField placeholder='交易名稱' size='xl'/>
      </Card>

      <Section justify='center'>
        {
          EXPENSES.map(key => (
            <View style={tw`flex-col`} key={key}>
              <IconButton
                Icon={CATEGORY_ICON_MAP[key].Icon}
                name={CATEGORY_ICON_MAP[key].name}
                color={COLORS.label[100]}
                size={28}
                style={tw`border-[${COLORS.label[100]}] border-[2px] m-2`}
              />
              <Typography style={tw`text-center`}>{lang(key)}</Typography>
            </View>
          ))
        }
      </Section>


      <Card style={tw`px-6`}>
        <Typography>HKD</Typography>
        <TextField placeholder='金額' size='xl'/>
      </Card>
    </Screen>
  )
}

export default AddTransactionScreen