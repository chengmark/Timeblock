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
  const value = useMemo(() => evaluate(inputStack) || 0, [inputStack])
  const total = 0
  const used = value
  const usedPercent = (used / total * 100) || 0
  const left = total - used
  const leftPercent = (left / total * 100) || 0
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
          subTitle={`${usedPercent.toLocaleString()}% USED`}
          color={COLORS.text['000']}
        />
        <TextBlock
          title={`${left.toLocaleString()} HKD`}
          subTitle={`${leftPercent.toLocaleString()}% LEFT`}
          color={isOverBudget ? COLORS.text['000'] : COLORS.text.green}
        />
      </Row>

    </View>
  )
}

export default BudgetBar