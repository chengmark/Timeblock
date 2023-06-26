import { View } from 'react-native'
import Modal from 'react-native-modal'
import CATEGORIES, { Categories } from '../../../categories'
import { useAddTransactionContext } from '../../../Contexts/AddTransactionContext'
import Col from '../../Col'
import Row from '../../Row'
import Text from '../../Text'
import Material from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import tw from 'twrnc'
import COLORS from '../../../Colors'
import Icon from '../../Icon'
import FlexBox from '../../Base/FlexBox'
import { useAddBudgetContext } from '../../../Contexts/AddBudgetContext'
import { Interval } from '../../../Types/Transaction'

const SelectedIcon = () => (
  <Row
    bg={COLORS.brand.primary}
    p={0.625}
  >
    <Icon
      Component={FontAwesome5}
      name="check"
      color={COLORS.bg['100']}
      size={18}
    />
  </Row>
)

const SelectIntervalDialog = () => {
  const { setSelectedInterval, selectedInterval, showSelectIntervalDialog, setShowSelectIntervalDialog} = useAddBudgetContext()
  const intervals:Interval[] = ['DAILY', 'WEEKLY', 'MONTHLY']
  const isSelected = (interval: Interval) => selectedInterval.toUpperCase() === interval.toUpperCase()

  return (
    <Modal
      onBackdropPress={() => setShowSelectIntervalDialog(false)}
      isVisible={showSelectIntervalDialog}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <Col bg={COLORS.bg['300']} rounded={1} p={2.5}>
        <Row py={1.25} m={[0, 0, 2.5, 0]}>
          <Text size='2xl' bold>
            Select Category
          </Text>
        </Row>
        <>
          {
            intervals.map(interval => (
              <Row
                key={interval}
                rounded={0}
                bg={isSelected(interval) ? COLORS.bg['100'] : COLORS.bg['300']}
                py={2.5}
                px={2.5}
                justify='between'
                align='center'
                style={tw`w-full`}
                onPress={() => {
                  setSelectedInterval(interval)
                  setShowSelectIntervalDialog(false)
                }}
              >
                <Row gap={1.25} align='center'>
                  {/* <Icon Component={Material} name={category.icon} color={COLORS.text['000']} size={18}/> */}
                  <Text size='xl'>{interval.toUpperCase()}</Text>
                </Row>
                <>
                  {
                    isSelected(interval) &&  <SelectedIcon />
                  }
                </>
              </Row>
            ))
          }
        </>
      </Col>
    </Modal>
  )
}

export default SelectIntervalDialog