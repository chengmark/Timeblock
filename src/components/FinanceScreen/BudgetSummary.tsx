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


const BudgetSummary = () => {
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
            <Badge text='18.25%' textColor={COLORS.cta.green} bgColor={transparent(0.15, COLORS.cta.green)} size={12} bold m={[0, 0, 0, 2]}/>
          </Row>
          <Row>
            <Text color={COLORS.text['100']} bold>LEFT: </Text>
            <Text bold>2,437.60 HKD</Text>
          </Row>
        </Row>

        <Row px={8}>
          <ProgressBar
            bgColor={transparent(0.15, COLORS.cta.green)}
            progressColor={COLORS.cta.green}
            progress={18.25}
          />
        </Row>

        <Row align="center" justify="between">
          <Row align="center" expand>
            <Text color={COLORS.text['100']} bold>USED: </Text>
            <Text bold>562.40 HKD</Text>
          </Row>
          <Row>
            <Text color={COLORS.text['100']} bold>TOTAL: </Text>
            <Text bold>3,000.00 HKD</Text>
          </Row>
        </Row>
      </Col>
    </Col>
  )
}

export default BudgetSummary;