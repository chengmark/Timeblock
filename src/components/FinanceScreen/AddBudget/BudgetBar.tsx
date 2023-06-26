import { Dimensions, View } from "react-native"
import Col from "../../Col"
import Row from "../../Row"
import Text from "../../Text"

import tw from 'twrnc'
import COLORS, { transparent } from "../../../Colors"
import { evaluable, evaluate } from "../../../utils/CalculatorUtils"
import { useMemo } from "react"
import { useAddTransactionContext } from "../../../Contexts/AddTransactionContext"
import { useCalculatorContextContext } from "../../../Contexts/CalculatorContext"
import { getTransactions } from "../../../Service/TransactionService"
import { useAddBudgetContext } from "../../../Contexts/AddBudgetContext"

const TextBlock = ({title, subTitle, color, }: {title: string, subTitle: string, color:string}) => {
  return (
    <Col>
      <Row>
        <Text bold color={color}>{title}</Text>
      </Row>
      <Row>
        <Text bold size='s' color={color}>{subTitle}</Text>
      </Row>
    </Col>
  )
}

const BudgetBar = () => {
  const { inputStack } = useCalculatorContextContext()
  const { used } = useAddBudgetContext()
  const value = useMemo(() => evaluate(inputStack) || 0, [inputStack])
  const total = value
  const usedPercent = total === 0 ? '-' : used / total * 100
  const left = total === 0 ? '-' : total - used
  const leftPercent = total === 0 ? '-' : left || 0 / total * 100
  const windowWidth = Dimensions.get('window').width
  const progress = (used / total) * windowWidth || 0
  const isOverBudget = left <= 0 

  return (
    <View
      style={[
        tw`bg-[${transparent(0.2, COLORS.cta.green)}]`,
        tw`p-1.875`,
      tw`w-[${windowWidth}px]`,
      ]}
    >
      <View style={[
        tw`w-[${progress}px] h-[150%] absolute`,
        tw`bg-[${isOverBudget ? COLORS.cta.red : COLORS.cta.green}]`
      ]}/>
      <Row justify="between">
        <TextBlock
          title={`${used.toLocaleString()} HKD`}
          subTitle={`${usedPercent.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}% USED`}
          color={COLORS.text['000']}
        />
        <TextBlock
          title={`${left.toLocaleString()} HKD`}
          subTitle={`${leftPercent.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}% LEFT`}
          color={isOverBudget ? COLORS.text['000'] : COLORS.text.green}
        />
      </Row>

    </View>
  )
}

export default BudgetBar