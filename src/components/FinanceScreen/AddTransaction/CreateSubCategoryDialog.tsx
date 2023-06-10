import Modal from "react-native-modal"
import COLORS from "../../../Colors"
import { useAddTransactionContext } from "../../../Contexts/AddTransactionContext"
import Button from "../../Buttons/Button"
import Col from "../../Col"
import Row from "../../Row"
import Text from "../../Text"
import tw from 'twrnc'
import { exceptSide, Sides } from "../../../styleUtils"
import TextField, { TextFieldRef } from "../../TextField"
import { useRef } from "react"
import CATEGORIES from "../../../categories"

const CreateSubCategoryDialog = () => {
  const { showCreateSubCategoryDialog, setShowCreateSubCategoryDialog, selectedCategory  } = useAddTransactionContext()
  const SPACING = 2.5
  const BUTTON_WIDTH = 100
  const textFieldRef = useRef<TextFieldRef>(null);
  // textFieldRef.current?.vaue

  return (
    <Modal
      onBackdropPress={() => setShowCreateSubCategoryDialog(false)}
      isVisible={showCreateSubCategoryDialog}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <Col bg={COLORS.bg['300']} rounded={1}>
        <Row py={1.25} m={exceptSide(SPACING, Sides.BOTTOM)}>
          <Text size='2xl' bold>
            Create Sub Category
          </Text>
        </Row>

        <Col m={exceptSide(SPACING, Sides.TOP)}>
          <Row py={1.25}>
            <Text size='l' bold color={COLORS.text['200']}>
              SUB CATEGORY NAME
            </Text>
          </Row>
          <Row py={1.25}>
            <TextField
              placeholder="DINNER"
              placeholderColor={COLORS.text['200']}
              textColor={COLORS.text['000']}
              bgColor={COLORS.bg['100']}
              ref={textFieldRef}
              // Button={() => <Button text='Add' bg={COLORS.brand.primary} fontSize='l' width={BUTTON_WIDTH}/>}
            />
          </Row>
        </Col>

        <Row
          style={tw`w-full`}
          bg={COLORS.bg['100']}
          p={SPACING}
          rounded={[0, 1, 1, 0]}
          justify='end'
          gap={1.25}
        >
          <Button text='Cancel' bg={COLORS.bg['100']} fontSize='l' width={BUTTON_WIDTH} onPress={() => setShowCreateSubCategoryDialog(false)}/>
          <Button text='Add' bg={COLORS.brand.primary} fontSize='l' width={BUTTON_WIDTH}
            onPress={() => {
              if(!textFieldRef.current?.value) return
              setShowCreateSubCategoryDialog(false)
              CATEGORIES[selectedCategory].subCategories.push({
                title: textFieldRef.current?.value,
                icon: ''
              })
            }}
          />
        </Row>
      </Col>
    </Modal>
  )
}

export default CreateSubCategoryDialog