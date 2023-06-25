import AddTransactionHeader from '../../Components/FinanceScreen/AddTransaction/AddTransactionHeader'
import BudgetBar from '../../Components/FinanceScreen/AddTransaction/BudgetBar'
import ConfigRow from '../../Components/FinanceScreen/AddTransaction/ConfigRow'
import CreateSubCategoryDialog from '../../Components/FinanceScreen/AddTransaction/CreateSubCategoryDialog'
import KeyPad from '../../Components/FinanceScreen/KeyPad'
import Monitor from '../../Components/FinanceScreen/Monitor'
import SelectCategoryDialog from '../../Components/FinanceScreen/AddTransaction/SelectCategoryDialog'
import SubCategoryRow from '../../Components/FinanceScreen/AddTransaction/SubCategoryRow'
import Modal from '../../Components/Modal'
import AddTransactionContextProvider, { useAddTransactionContext } from '../../Contexts/AddTransactionContext'
import CalculatorContextContextProvider from '../../Contexts/CalculatorContext'
import withProvider from '../../Hoc/withProvider'

const AddTransactionScreen = () => {
  const { addTransaction } = useAddTransactionContext()
  return (
    <Modal>
      <AddTransactionHeader />
      <Monitor />
      <BudgetBar />
      <SubCategoryRow />
      <ConfigRow />
      <KeyPad onSubmit={addTransaction} />
      <SelectCategoryDialog />
      <CreateSubCategoryDialog />
    </Modal>
  )
}

export default withProvider(CalculatorContextContextProvider, withProvider(AddTransactionContextProvider, AddTransactionScreen))