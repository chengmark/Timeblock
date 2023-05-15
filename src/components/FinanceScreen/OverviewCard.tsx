import tw from 'twrnc'

import Col from '../Col'
import Row from '../Row'
import Text from '../Text'
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../Colors';
import Chevron from '../Chevron';
import { FlexBoxProps } from '../Base/FlexBox';

const BalanceRow = () => {
  return (
    <Col>
      <Row>
        <Text size="s">BALANCE</Text>
      </Row>
      <Row align='end' justify="between">
        <Row expand gap={2}>
          <Text size='l' bold>12,437.60</Text>
          <Text>HKD</Text>
        </Row>
        <Row>
          <Chevron />
        </Row>
      </Row>
    </Col>
  )
}

const SPENDINGS = [200, 400, 1000, 900, 900, 900, 900]

const SpendingChart = () => {
  return (
    <Col>
      
    </Col>
  )
}

interface OverviewCardProps extends FlexBoxProps{}

const OverviewCard = ({...flexBoxProps}:OverviewCardProps) =>  {
  return (
    <Col {...flexBoxProps}>
      <Row>
        <LinearGradient
          colors={COLORS.gradient.blueToPurple} 
          start={{x: 0., y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={tw`rounded-2.5 py-2.5 px-5 flex-1`}
        >
          <BalanceRow />
        </LinearGradient>
      </Row>
    </Col>
  )
}

export default OverviewCard