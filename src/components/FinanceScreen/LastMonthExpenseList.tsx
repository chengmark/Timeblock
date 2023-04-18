import { View } from "react-native"
import HorizontalList from "../HorizontalList"
import Typography from "../Typography"
import CategoryExpensesCard from "./CategoryExpensesCard"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import tw from 'twrnc'
import { useFinanceContext } from "../../Contexts/FinanceContext"
import { CATEGORY_ICON_MAP } from "../../constants"
import { ComponentType, useCallback } from "react"
import { IconProps } from "react-native-vector-icons/Icon"


interface CategoryExpense {
  category: string;
  amount: number;
  Icon:ComponentType<IconProps>
  name:string
}

const CategoryExpensesList = () => {
  const { transactions, isExpense } = useFinanceContext()
  const expenses = transactions.filter(transaction => isExpense(transaction))
  const data = useCallback(():CategoryExpense[] => {
    const categoryExpenses:CategoryExpense[] = []
    expenses.forEach(expense => {
      const categoryExpense = categoryExpenses.find(categoryExpense => categoryExpense.category === expense.category)
      if (categoryExpense) {
        categoryExpense.amount += expense.amount
      } else {
        categoryExpenses.push({
          category: expense.category,
          amount: expense.amount,
          Icon: CATEGORY_ICON_MAP[expense.category].Icon,
          name: CATEGORY_ICON_MAP[expense.category].name
        })
      }
    })
    return categoryExpenses.sort((a, b) => a.amount - b.amount)
  }, [transactions])

  return (
    <View style={tw`m-1 ml-0`}>
      <Typography style={tw`ml-1`} size='s'>本月支出</Typography>
      <HorizontalList
        data={data()}
        renderItem={({ item }) => (
          <CategoryExpensesCard
            category={item.category}
            amount={item.amount}
            Icon={item.Icon}
            name={item.name}
          />
        )}
      />
    </View>
  )
}

export default CategoryExpensesList