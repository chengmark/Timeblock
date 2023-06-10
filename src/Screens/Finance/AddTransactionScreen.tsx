import AddTransactionHeader from '../../Components/FinanceScreen/AddTransaction/AddTransactionHeader'
import BudgetBar from '../../Components/FinanceScreen/AddTransaction/BudgetBar'
import CreateSubCategoryDialog from '../../Components/FinanceScreen/AddTransaction/CreateSubCategoryDialog'
import KeyPad from '../../Components/FinanceScreen/AddTransaction/KeyPad'
import Monitor from '../../Components/FinanceScreen/AddTransaction/Monitor'
import SelectCategoryDialog from '../../Components/FinanceScreen/AddTransaction/SelectCategoryDialog'
import SubCategoryRow from '../../Components/FinanceScreen/AddTransaction/SubCategoryRow'
import Modal from '../../Components/Modal'
import AddTransactionContextProvider from '../../Contexts/AddTransactionContext'
import withProvider from '../../Hoc/withProvider'

const AddTransactionScreen = () => {
  return (
    <Modal>
      <AddTransactionHeader />
      <Monitor />
      <BudgetBar />
      <SubCategoryRow />
      <KeyPad />
      <SelectCategoryDialog />
      <CreateSubCategoryDialog />
    </Modal>
  )
}

export default withProvider(AddTransactionContextProvider, AddTransactionScreen)