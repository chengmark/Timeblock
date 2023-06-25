import AddBudgetHeader from '../../Components/FinanceScreen/AddBudget/AddBudgetHeader'
import ConfigRow from '../../Components/FinanceScreen/AddBudget/ConfigRow'
import BudgetBar from '../../Components/FinanceScreen/AddBudget/BudgetBar'
import KeyPad from '../../Components/FinanceScreen/KeyPad'
import Monitor from '../../Components/FinanceScreen/Monitor'
import SelectCategoryDialog from '../../Components/FinanceScreen/AddBudget/SelectCategoryDialog'
import Modal from '../../Components/Modal'
import AddBudgetContextProvider, { useAddBudgetContext } from '../../Contexts/AddBudgetContext'
import AddTransactionContextProvider from '../../Contexts/AddTransactionContext'
import CalculatorContextContextProvider from '../../Contexts/CalculatorContext'
import withProvider from '../../Hoc/withProvider'
import SelectIntervalDialog from '../../Components/FinanceScreen/AddBudget/SelectIntervalDialog'

const AddBudgetScreen = () => {
  const { addBudget } = useAddBudgetContext()
  return (
    <Modal>
      <AddBudgetHeader />
      <Monitor />
      <BudgetBar />
      <ConfigRow />
      <KeyPad onSubmit={addBudget} />
      <SelectCategoryDialog />
      <SelectIntervalDialog />
    </Modal>
  )
}

export default withProvider(CalculatorContextContextProvider, withProvider(AddBudgetContextProvider, AddBudgetScreen))