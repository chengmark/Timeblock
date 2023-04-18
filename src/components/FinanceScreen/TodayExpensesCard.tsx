import Card from "../../Card"
import Typography from "../Typography"

import tw from 'twrnc'
import Amount from "../Amount"
import { useFinanceContext } from "../../Contexts/FinanceContext"

const TodayExpensesCard = () => {
  const { getTodayTotalExpense } = useFinanceContext()
  return (
    <Card col align="start" style={tw`flex-1`}>
      <Typography size="m" style={tw``}> 今日支出 </Typography>
      <Amount amount={getTodayTotalExpense()} currency="HKD" style={tw`ml-1 mt-2`}/>
    </Card>
  )
}

export default TodayExpensesCard