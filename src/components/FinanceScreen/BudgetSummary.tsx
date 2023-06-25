import Col from "../Col";
import Row from "../Row";
import Text from "../Text";

import tw from "twrnc";
import COLORS, { transparent } from "../../Colors";
import Icon from "../Icon";
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Badge from "../Badge";
import ProgressBar from "../ProgressBar";
import Chevron from "../Chevron";
import { useFinanceContext } from "../../Contexts/FinanceContext";
import { useMemo } from "react";


const BudgetSummary = () => {
  const { transactions, budgets, selectedDisplayInterval } = useFinanceContext()
  const totalBudget = useMemo(() => budgets.reduce((acc, cur) => acc + cur.amount[selectedDisplayInterval], 0), [budgets])
  const totalUsed = useMemo(() => transactions.filter(t => t.category !== 'income').reduce((acc, cur) => acc + cur.amount, 0), [transactions])
  const percentage = (totalUsed / totalBudget * 100)
  return (
    <Col gap={2.5}>
      <Row align='center' justify='between'>
        <Text bold expand color={COLORS.text['100']} >BUDGET</Text>
        <Chevron />
      </Row>
      <Col
        style={[
          tw`bg-[${COLORS.bg[300]}]`
        ]}
        p={2.5}
        gap={1.25}
        rounded={3.125}
      >
        <Row align="center" justify="between">
          <Row align="center" expand gap={1.25}>
            <Icon Component={MaterialComunity} name='calendar-today' color={COLORS.brand.secondary} size={20}/>
            <Text size='l' bold m={[0, 0, 0, 1]}>TODAY</Text>
            <Badge
              m={[0, 0, 0, 2]}
              rounded={10}
              bg={transparent(0.1, COLORS.cta.green)}
              Text={() => <Text size='s' bold color={COLORS.cta.green}>{`${percentage.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`}</Text>}
            />
          </Row>
          <Row>
            <Text color={COLORS.text['100']} bold>LEFT: </Text>
            <Text bold>{`${(totalBudget - totalUsed).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} HKD`}</Text>
          </Row>
        </Row>

        <Row px={8}>
          <ProgressBar
            bgColor={transparent(0.1, COLORS.cta.green)}
            progressColor={COLORS.cta.green}
            progress={percentage}
          />
        </Row>

        <Row align="center" justify="between">
          <Row align="center" expand>
            <Text color={COLORS.text['100']} bold>USED: </Text>
            <Text bold>{`${totalUsed.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} HKD`}</Text>
          </Row>
          <Row>
            <Text color={COLORS.text['100']} bold>TOTAL: </Text>
            <Text bold>{`${totalBudget.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} HKD`}</Text>
          </Row>
        </Row>
      </Col>
    </Col>
  )
}

export default BudgetSummary;