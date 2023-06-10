import tw from 'twrnc'

import Col from '../Col'
import Row from '../Row'
import Text from '../Text'
import { LinearGradient } from 'expo-linear-gradient';
import COLORS, { transparent } from '../../Colors';
import Chevron from '../Chevron';
import Material from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlexBoxStyle } from '../Base/FlexBox';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';
import { View } from 'react-native';

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
const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
const isToday = (weekday: string) => WEEKDAYS[new Date().getDay()] === weekday

const ChartBar = ({isToday}:{isToday: boolean}) => (
  <View style={[
    tw`w-2 h-10 rounded-full`,
    isToday ? tw`bg-[${COLORS.brand.primary}]` : tw`bg-[${transparent(0.3, COLORS.brand.primary)}]`
  ]}/>
)

const SpendingChart = () => {
  return (
    <Col
      bg={COLORS.bg['300']}
      rounded={3.125}
      p={2.5}
      gap={0.625}
    >
      <Row align='center'>
        <Row gap={0.625} expand>
          <Icon Component={Material} name='attach-money' size={16} color={COLORS.brand.secondary}/>
          <Text bold color={COLORS.text[100]}>SPENDING</Text>
        </Row>
        <Icon Component={MaterialCommunity} name='swap-horizontal' size={16} color={COLORS.text['000']}/>
      </Row>

      <Row justify='center'>
        {
          WEEKDAYS.map((weekday, i) => {
            const bold = isToday(weekday)
            const color = isToday(weekday) ? COLORS.text['000'] : COLORS.text['100']
            return (
              <Col key={i} expand align='center' gap={0.625}>
                <Text bold={bold} color={color} center> {SPENDINGS[i]} </Text>
                <ChartBar isToday={bold}/>
                <Text bold={bold} color={color} center> {weekday} </Text>
              </Col>
            )
          })
        }
      </Row>
    </Col>
  )
}
//TODO: make LinearGradient with gap, support flexbox
const OverviewCard = () =>  {
  return (
    <Col>
      <Row>
        <LinearGradient
          colors={COLORS.gradient.blueToPurple} 
          start={{x: 0., y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={tw`rounded-2.5 py-2.5 px-5 flex-1`}
        >
          <BalanceRow />
          <SpendingChart />
        </LinearGradient>
      </Row>
    </Col>
  )
}

export default OverviewCard