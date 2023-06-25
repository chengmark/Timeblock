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

const SelectCategoryDialog = () => {
  const {showSelectCategoryDialog, setShowSelectCategoryDialog, selectedCategory, setSelectedCategory} = useAddBudgetContext()
  const categories = Object.values(CATEGORIES).filter(category => category.title !== 'income').map(category => ({title: category.title as Categories, icon: category.icon}))
  const isSelected = (category: Categories) => selectedCategory.toUpperCase() === category.toUpperCase()

  return (
    <Modal
      onBackdropPress={() => setShowSelectCategoryDialog(false)}
      isVisible={showSelectCategoryDialog}
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
            categories.map(category => (
              <Row
                key={category.title}
                rounded={0}
                bg={isSelected(category.title) ? COLORS.bg['100'] : COLORS.bg['300']}
                py={2.5}
                px={2.5}
                justify='between'
                align='center'
                style={tw`w-full`}
                onPress={() => {
                  setSelectedCategory(category.title)
                  setShowSelectCategoryDialog(false)
                }}
              >
                <Row gap={1.25} align='center'>
                  <Icon Component={Material} name={category.icon} color={COLORS.text['000']} size={18}/>
                  <Text size='xl'>{category.title.toUpperCase()}</Text>
                </Row>
                <>
                  {
                    isSelected(category.title) &&  <SelectedIcon />
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

export default SelectCategoryDialog