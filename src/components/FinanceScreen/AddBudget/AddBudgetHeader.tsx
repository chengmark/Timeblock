import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import Box from '../../Base/Box'
import Icon from '../../Icon'
import Text from '../../Text'
import ModalHeader from '../../ModalHeader'

import Material from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../../Colors'

const CloseButton = () => {
  const nav = useNavigation()
  return (
    <Box onPress={() => nav.goBack()}>
      <Icon Component={Material} name='close' size={24} color={COLORS.text['000']} />
    </Box>
  )
}

const Title = () => (
  <Text size='l'>
    ADD BUDGET
  </Text>
)

const AddBudgetHeader = () => {
  return (
    <ModalHeader
      LeftComponent={CloseButton}
      MidComponent={Title}
    />
  )
}

export default AddBudgetHeader