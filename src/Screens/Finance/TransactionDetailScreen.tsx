import { NativeStackScreenProps } from "@react-navigation/native-stack"
import COLORS from "../../Colors"
import ContainedButton from "../../Components/Buttons/ContainedButton"
import Col from "../../Components/Col"
import Modal from "../../Components/Modal"
import Row from "../../Components/Row"
import Text from "../../Components/Text"
import { FinanceStackParamList } from "./FinanceRouter"
import tw from 'twrnc'
import { Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import OutlinedButton from "../../Components/Buttons/OutlinedButton"
import { deleteTransactionById } from "../../Service/TransactionService"
import { Transaction } from "../../Types/Transaction"

type TransactionDetailScreenProps = NativeStackScreenProps<FinanceStackParamList, "TransactionDetail">


const TransactionDetailScreen = ({route}:TransactionDetailScreenProps) => {
  const transaction = route.params?.transaction as Transaction
  const nav = useNavigation()
  return (
    <Modal>
      <Col
        expand
        p={[10, 0, 0, 0]}
        justify="start"
        align="center"
        gap={2.5}
        style={[
          tw`w-[${Dimensions.get('window').width}px]`,
        ]}
      >
        <Text
          bold
          size='6xl'
        >
          {transaction.amount.toLocaleString('en-US', {minimumFractionDigits: 2})}
        </Text>
        <Text
          size='xl'
          color={COLORS.text['100']}
        >
          {transaction.subCategory}
        </Text>
        <Text
          size='xl'
          color={COLORS.text['100']}
        >
          {transaction.category}
        </Text>
        <OutlinedButton
          m={['auto', 0, 0, 0]}
          fontSize='xl'
          text='DELETE'
          fontColor={COLORS.cta.red}
          border={[0, COLORS.cta.red]}
          onPress={() => {
            deleteTransactionById(transaction.id)
            nav.goBack()
          }}
        />
      </Col>
    </Modal>
  )
}

export default TransactionDetailScreen